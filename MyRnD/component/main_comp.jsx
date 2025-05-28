import React, { Component } from 'react';
import svcKey from '../src/data/svc.json'

import '../css/main_module.css'

class Main_module extends Component {

  callSvc = () =>{
    let today = new Date();
    let year = today.getFullYear();
    let month = ('0' + (today.getMonth() + 1)).slice(-2);
    let day = ('0' + today.getDate()).slice(-2);
    let today_num = year + month + day;

    var xhr = new XMLHttpRequest();
    var url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst'; /*URL*/
    
    var queryParams = '?' + encodeURIComponent('serviceKey') + '='+ svcKey[0].key; /*Service Key*/
    queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('12'); /*한 페이지 결과 11 수*/
    queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /*페이지번호*/
    queryParams += '&' + encodeURIComponent('dataType') + '=' + encodeURIComponent('JSON'); /*요청자료형식(XML/JSON) Default: XML*/
    queryParams += '&' + encodeURIComponent('base_date') + '=' + encodeURIComponent(today_num); /*	‘년 월 일 발표*/
    queryParams += '&' + encodeURIComponent('base_time') + '=' + encodeURIComponent('0500'); /*06시 발표(정시단위)*/
    queryParams += '&' + encodeURIComponent('nx') + '=' + encodeURIComponent('37'); /*	예보지점의 X 좌표값*/
    queryParams += '&' + encodeURIComponent('ny') + '=' + encodeURIComponent('126'); /*	예보지점의 Y 좌표값*/
    xhr.open('GET', url + queryParams);   

    xhr.onreadystatechange = function () {
      if (this.readyState == 4) {
        // 날씨데이터 객체
        const obj_txt = JSON.parse(this.responseText);
        // console.log(obj_txt);
        let obj_info_list = obj_txt.response.body.items.item;
        
        let Weather_info_list_arr = new Array;
        obj_info_list.forEach(data => {
            // console.log(data.category);
            switch(data.category){
                case "TMP" : 
                    // 1시간 기온 ℃
                    // console.log("현재 기온: "+ data.fcstValue + " ℃");
                    Weather_info_list_arr.push({"temp":data.fcstValue});
                    break;

                case "UUU" : 
                    // 풍속(동서성분) m/s
                    // console.log("풍속(동서성분): " + data.fcstValue + "m/s");
                    break;

                case "VVV" : 
                    // 풍속(남북성분) m/s
                    // console.log("풍속(남북성분): " + data.fcstValue + "m/s");
                    break;          
                    
                case "VEC" : 
                    // 풍향 / deg
                    // 0 – 45	N-NE	180 – 225	S-SW
                    // 45 – 90	NE-E	225 – 270	SW-W
                    // 90 – 135	E-SE	270 – 315	W-NW
                    // 135 – 180	SE-S	315 – 360	NW-N
                    let vec_prs = parseInt(data.fcstValue);

                    function getDirection(vec_prs) {
                        if (vec_prs < 0 || vec_prs > 360) return "Invalid";

                        const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
                        const index = Math.floor(((vec_prs + 22.5) % 360) / 45);
                        return directions[index];
                    };

                    let direct_vec = getDirection(vec_prs);
                    // console.log("풍향 : " + direct_vec + "방향 (방위: " + vec_prs + "도)");

                    Weather_info_list_arr.push({"wind_direction":direct_vec}); //풍향
                    Weather_info_list_arr.push({"wind_deg":data.fcstValue}); //방위
                break;                                    
                    
                case "WSD" : 
                    // 풍속  m/s
                    // console.log("풍속: " + data.fcstValue + "m/s");
                    Weather_info_list_arr.push({"wind_spd":data.fcstValue}); //풍속
                    break;

                case "SKY" : 
                    // 날씨 맑음(1), 구름많음(3), 흐림(4)
                    let switch_val_sky = parseInt(data.fcstValue);
                    switch(switch_val_sky){
                        case 1 : 
                            // console.log("날씨 : 맑음");
                            Weather_info_list_arr.push({"sky":"sunny"});
                            break;
                        case 3 : 
                            // console.log("날씨 : 구름많음");      
                            Weather_info_list_arr.push({"sky":"sunny_and_cloudy"});
                            break;             
                        case 4 : 
                            // console.log("날씨 : 흐림");
                            Weather_info_list_arr.push({"sky":"cloudy"});
                            break;                   
                        default :
                            // console.log("날씨 호출 오류");
                            Weather_info_list_arr.push({"sky":null});
                            break;                             
                    };
                break;


                case "PTY" : 
                    // 강수형태 
                    // (초단기) 없음(0), 비(1), 비/눈(2), 눈(3), 빗방울(5), 빗방울눈날림(6), 눈날림(7) 
                    // (단기) 없음(0), 비(1), 비/눈(2), 눈(3), 소나기(4) 

                    let switch_val_rain_type = parseInt(data.fcstValue);
                    switch(switch_val_rain_type){
                        case 0 : 
                            // console.log("강수 형태 : 없음");
                            Weather_info_list_arr.push({"rain_type":"normal"});
                            break;
                        case 1 : 
                            // console.log("강수 형태 : 비");
                            Weather_info_list_arr.push({"rain_type":"rain"});
                            break;    
                        case 2 : 
                            // console.log("강수 형태 : 비 혹은 눈");
                            Weather_info_list_arr.push({"rain_type":"rain/snow"});
                            break;                            
                        case 3 : 
                            // console.log("강수 형태 : 눈");
                            Weather_info_list_arr.push({"rain_type":"snow"});
                            break;                         
                        case 4 : 
                            // console.log("강수 형태 : 소나기");
                            Weather_info_list_arr.push({"rain_type":"shower"});
                            break;                                                                                
                    };
                break;


                case "POP" : 
                    // 강수확률, %
                    if(data.fcstValue == 0){
                        // console.log("강수확률: 없음(0%)");   
                        Weather_info_list_arr.push({"rain_perct":0});
                    }else{
                        // console.log("강수확률: " + data.fcstValue + " %");
                        Weather_info_list_arr.push({"rain_perct":data.fcstValue});
                    };
                break;          
    

                case "WAV" : 
                    // 파고, m
                    if(0 < data.fcstValue && data.fcstValue > 20){
                        // console.log("파고: " + data.fcstValue + " m");
                        Weather_info_list_arr.push({"wave":data.fcstValue});
                    }else{
                        // console.log("파고: 해당없음");
                        Weather_info_list_arr.push({"wave":0});
                    };
                break;        


                case "PCP" : 
                    // 1시간 강수량, 범주 (1 mm)
                    if(data.fcstValue == "강수없음"){
                        // console.log("시간당 강수량: 0 mm");
                        Weather_info_list_arr.push({"rain_drop":0});
                    }else{
                        // console.log("시간당 강수량: " + data.fcstValue + "mm");
                        Weather_info_list_arr.push({"rain_drop":data.fcstValue});
                    };
                break;

                case "REH" : 
                    Weather_info_list_arr.push({"humidity":data.fcstValue});
                break;       
                
                default :
                    Weather_info_list_arr.push({"day":today_num});
                break;
            };
        });
        // console.log(Weather_info_list_arr); ok
        let list_wrap = document.querySelector('.list_wrap');

        Weather_info_list_arr.forEach(element => {
            let list_li = document.createElement("li");
            list_li.className = Object.keys(element);

            list_li.innerText = list_li.className;
            console.log(list_li);
            list_wrap.innerText += list_li;
            console.log(list_wrap);            
        });
    };
}; xhr.send(''); };

//-------------------------------------------------
    render() {

        return(
          <main className="main_module">

            <h3 className="main_tit">
              <label htmlFor="StartBtn">내일 날씨 : </label>
              <button type="button" id='StartBtn' name='StartBtn' onClick={() => this.callSvc()}>예측 시작</button>
            </h3>            

            <div className="list_wrap">
              {/* 작업 영역 */}
            </div>

          </main>
        )
    }
  
}

export default Main_module;