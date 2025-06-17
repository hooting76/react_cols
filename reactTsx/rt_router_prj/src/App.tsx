import { Routes, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

import Menu from '../Menu';
import Home from '../routes/Home';
import SubPage1 from '../routes/SubPage1';
import SubPage2 from '../routes/SubPage2';

function App() {

   /* 
    - 중첩 라우팅 : 
    
      가령 예를 들어서 "/board" 경로(path) 아래 "/board/write" 라는
      하위 경로를 정의할 경우, 이러한 경우가 "중첩 라우팅" 에 해당되는데,
      
      부모 컴포넌트는 레이아웃(layout)이나 공동 메뉴(common menu) 등의 
      공통 요소들을 렌더링(rendering)하고,

      자녀 컴포넌트들은 Outlet 컴포넌트를 사용하여 OUtlet 컴포넌트가 
      위치한 곳에 렌더링하여 레이아웃 템플릿(layout template) 구조를 
      보다 편리하게 구성할 수 있습니다.             
   */

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Menu />}>
              <Route path="" element={<Home />}></Route>
              <Route path="/SubPage1" element={<SubPage1 />}></Route>
              <Route path="/SubPage2" element={<SubPage2 />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App