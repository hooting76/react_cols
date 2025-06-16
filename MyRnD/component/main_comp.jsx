import React, { Component } from 'react';
// import svcKey from '../src/data/svc.json'

import '../css/main_module.css'

class Main_module extends Component{

    render(){
        return(
            <main>
                <div id="searchWrap">
                    <input type="search" name="searchInput" id="searchInput" placeholder="검색 : ㄱ ㄴ ㄷ, a b c"></input>
                    <select name="srchOpt" id="srchOpt" title="srchOpt">
                        <option value="all">전체</option>
                        <option value="spells">단어</option>
                        <option value="means">단어 뜻</option>
                    </select>
                </div>

                <div id="wrap"> 
                    <article>
                        {/* <!-- 단어 리스트--> */}
                    </article>
                    <aside>
                        {/* <!-- 단어의 뜻--> */}
                    </aside>
                </div>
            </main>
        )
    }
}

export default Main_module;