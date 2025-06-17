import React, { Component } from 'react';
// import svcKey from '../src/data/svc.json'

import '../css/main_module.css';

function searchFunc (){
    let names = [];               // 전체 데이터 리스트 저장
    const indexMap = new Map();   // 초성 인덱스 Map 객체
    
    // 초성 추출 함수
    function getChosung(text) {
        const CHO = ['ㄱ','ㄲ','ㄴ','ㄷ','ㄸ','ㄹ','ㅁ','ㅂ','ㅃ','ㅅ','ㅆ','ㅇ','ㅈ','ㅉ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ'];
        let result = '';
        for (let char of text) {
            const code = char.charCodeAt(0) - 44032; // 한글 유니코드 시작값 기준
            if (code >= 0 && code <= 11171) {
                const cho = Math.floor(code / 588);
                result += CHO[cho]; // 초성만 추출
            } else {
                result += char; // 한글 외 문자는 그대로
            }
        }
        return result;
    }

    // 데이터 기반으로 초성 인덱스(Map)를 생성하는 함수
    function indexData() {
        indexMap.clear(); // 기존 Map 초기화
        names.forEach(item => {
            const cho = getChosung(item.name); // 이름에서 초성 추출
            indexMap.set(cho, (indexMap.get(cho) || []).concat(item)); // Map에 저장
        });
    }    

    // 검색어 입력과 카테고리 선택 시 실행되는 검색 함수
    function searchNames(query) {
        const list = document.getElementById("wrap");
        list.innerHTML = ''; // 결과 영역 초기화
    
        //if (!query) return; // 검색어가 없으면 출력 안함
    
        if (query.target == "input"){
            const isChosung = /^[ㄱ-ㅎ]+$/.test(query); // 초성만으로 구성되었는지 검사
        }else{

        }
    
        const results = []; // 필터링된 결과 리스트
        let itemCnt = 0; // 결과 리스트 갯수 카운트

        names.forEach(item => {
            const matchTarget = isChosung ? getChosung(item.name) : item.name; // 검색 대상 선택
            const matched = matchTarget.includes(query); // 검색어 포함 여부 확인
        });
    
        // 검색요소가 있고 없고에 따라 예외 처리하기.
        if(itemCnt == 0){ // 입력을 했지만 해당 요소가 없을때

        }else if(!query){//입력값 자체가 없을때
            
        }else{
            results.forEach(item => {// 입력도 했고, 일치하는 요소가 있을때

            });
        }
    }

    // 초기 실행: JSON 데이터 로드 및 이벤트 리스너 설정
    // 자바스크립트 객체 표기법(JavaScript Object Notation)
    fetch('/src/data/word.json')
        .then(res => {
            if(!res.ok){ throw new Error(`연결중에 ${res.status} 에러가 발생했습니다.`); }
            return res.json();
            }
        )// 1) JSON 데이터 파싱
        
        .then(data => {
            names = data;          // 전체 데이터 저장
            indexData();           // 초성 인덱스 생성
            updateCategoryOptions(); // 카테고리 옵션 업데이트
        
            // 검색어 입력 이벤트 연결
            document.getElementById("searchInput").addEventListener("onChange", e => searchNames(e.target.value.trim()));
        
            // 카테고리 변경 이벤트 연결
            document.getElementById("srchOpt")
                .addEventListener("change", () => {
                    const query = document.getElementById("srchOpt").value.trim();
                    searchNames(query); // 검색어 그대로 다시 검색
                });
            }
        );

    return(
        <main>
            <div id="searchWrap">
                <input type="search" name="searchInput" id="searchInput" placeholder="검색 : ㄱ ㄴ ㄷ, a b c" ></input>
                <select name="srchOpt" id="srchOpt" title="srchOpt" >
                    <option value="all" >전체</option>
                    <option value="spells">단어</option>
                    <option value="means">단어 뜻</option>
                </select>
            </div>

            <div id="wrap"> 

            </div>
        </main>
    )
};


export default searchFunc;