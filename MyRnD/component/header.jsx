import React, { Component } from 'react';
import '../css/header.css';

class Header_module extends Component {

//-------------------------------------------------
    render() {
        return(
          <header className="header">
            <div className="tit_txt">
              <h1>리액트 + vite를 활용하여 만든 예제</h1>
              <h2>이것저것 단어사전</h2>
            </div>
            <hr />
          </header>
        )
    }
}

export default Header_module;