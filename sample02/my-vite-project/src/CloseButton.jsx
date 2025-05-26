import React from 'react';

function CloseButton(){

    const handleClick_close = (e) =>{
        // console.log("닫기 버튼 클릭 : ", e.target.id);
        // to do
        document.querySelector('.modal').style.display = "none";
    };

    return (
        <button id='close_btn' 
            onClick={handleClick_close}
            style={{width:'200px', height:'50px'}}>
            모달 닫기
        </button>
    )
};

export default CloseButton;