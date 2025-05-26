import React, { Component } from 'react';
import '../css/header.css';

import { MdWbSunny } from "react-icons/md";

class Header_module extends Component {

//-------------------------------------------------
    render() {
        return(
          <header className="header">
            <div className="tit_txt">
              <h1>리액트 + vite를 활용하여 만든 예제</h1>
              <h2>
                <MdWbSunny />
                기상청 날씨 데이터와 이전 날씨 데이터를 활용하여 다음날 날씨 예측하기</h2>
            </div>
            <hr />
          </header>
        )
    }
}

export default Header_module;