import { useState } from 'react'
import './App.css'

import Modal from './Modal';
import OpenButton from './OpenButton';
import CloseButton from './CloseButton';

function App() {
  return (
    <div>
      <div className='btn_wrap'>
        <OpenButton />
        <CloseButton />
      </div>
      <Modal />
    </div>
  );
}

export default App
