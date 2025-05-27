import React, { Component } from 'react';
import '../css/main_module.css'

class Main_module extends Component {

//-------------------------------------------------
    render() {

        return(
          <main className="main_module">

            <h3 className="main_tit">
              <label htmlFor="StartBtn">내일 날씨 : </label>
              <button type="button" id='StartBtn' name='StartBtn'>예측 시작</button>
            </h3>            

            <div className="list_wrap">
              {/* 작업 영역 */}
            </div>

          </main>
        )
    }
}

export default Main_module;