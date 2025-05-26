import React, { Component } from 'react';
import '../css/footer.css'

class Footer_module extends Component {

//-------------------------------------------------
    render() {
        return(
          <footer className="footer">
            <h4 className="footer_tit">
              내일 날씨(yy-mm-dd)
            </h4>
            <div className="result_wrap">
              {/* 결과 출력 */}
            </div>
          </footer>
        )
    }
}

export default Footer_module;