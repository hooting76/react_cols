import React from 'react';

function OpenButton(){

    const handleClick = (e) =>{
        // console.log("열기 버튼 클릭 : ", e.target.id);
        // to do
        document.querySelector('.modal').style.display = "block";
    };

    return (
        <button id='open_btn' 
            onClick={handleClick}
            style={{width:'200px', height:'50px'}}>
            모달 열기
        </button>
    )
};

export default OpenButton;