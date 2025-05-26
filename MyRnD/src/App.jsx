import { useState } from 'react'

import HeaderModule from '../component/header';
import MainModule from '../component/main_comp';
import FooterModule from '../component/footer';

// import '../css/reset.css';
import '../css/frame.css';

function App() {

  return (
    <>
      <div id="wrap">
        <HeaderModule />
        <MainModule />
        <FooterModule />
      </div>
    </>
  )
}

export default App
