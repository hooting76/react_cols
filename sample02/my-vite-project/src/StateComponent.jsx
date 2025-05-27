import React, { Component } from 'react';

// 상태(state) 변수
class StateComponent extends Component {

    constructor(props) {
        // constructor(생성자) : state(컴포넌트의 상태) 값을 초기화 하거나 메서드를 바인딩(묶어두기) 할 때 사용한다.
        // + 해당 컴포넌트가 마운트 되기 전 호출된다.
        // 마운트 : DOM 객체가 생성되고 브라우저에 나타나는 것을 의미

        super(props);
        // 부모클래스 인스턴스를 의미함.
        // React.Component를 상속한 컴포넌트의 생성자(constructor)를 구현할 때에는 다른 구문에 앞서 super(props)를 호출해야 합니다. 
        // 그렇지 않으면 this.props가 생성자 내에서 정의되지 않아 버그로 이어질 수 있습니다.
        // super(props) 를 먼저 선언해 줘야 그 이후에 this 를 사용할 수 있다.
        // 위의 방식으로 진행 할 경우, this.prop 은 undefined 로 반환 된다.

        // state는 하나의 컴포넌트 안에서 전역(광역) 변수처럼 사용될 수 있습니다.        
        this.state = {
            // App.js에서 전송한, props로 전달된 reactString 속성값("react")    
            // 을 저장하고 StateNumber에 "19.1" 이라는 값을 대입
            StateString : this.props.reactString,
            StateNumber : "19.1"
        }
    }

    render() {
    //

        return(
            // this.state 키워드를 활용하여 state 변수에 접근 => 화면에 표시
            <div style={{backgroundColor:'lightgray'}}>
                {this.state.StateString} {this.state.StateNumber}
            </div>
        );
    } //

} //

export default StateComponent;