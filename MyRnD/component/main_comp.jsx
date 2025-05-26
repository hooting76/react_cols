import React, { Component } from 'react';
import '../css/main_module.css'

class Main_module extends Component {

    // 키 호출
    svc_yk = (svc,e) => {
      console.log(svc);
        try {
            const res_svc_yk    = fetch(svc);
            const data          = res_svc_yk.text();
            const svc_yk_data   = JSON.parse(data);

            return weather_func_wrap(svc_yk_data[0].key);
        } catch (error) {
          console.log('call error : '+error.code);
        }
    }
  

//-------------------------------------------------
    render() {

        return(
          <main className="main_module">

            <h3 className="main_tit">
              <label htmlFor="StartBtn">내일 날씨 : </label>
              <button type="button" id='StartBtn' name='StartBtn' onClick={(e) => this.svc_yk('/MyRnD/src/data/svc.json',e)}>예측 시작</button>
            </h3>            

            <div className="list_wrap">
              {/* 작업 영역 */}
            </div>

          </main>
        )
    }
}

export default Main_module;