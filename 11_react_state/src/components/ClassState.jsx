import { Component } from "react";

export default class ClassState extends Component {
  //처음 클라스형 컴포넌트가 나왔을때 state를 사용한 방벙
  //    constructor(props) {
  //      super(props) ;//Components class에서 props를 상속

  //    this.state = {
  //      banana: '바나나',
  //};
  //    }
  //}

  //현재 클래스형 컴포넌트에서 state를 사용한 방법
  //constructor 생성자 함술르 작성하는 대신 state만 바로 작성
  //consructor 생성자 함수를 작성하지 않으면 자돈으로 아래의 코드 실행됨
  //constructor(props) {
  //  super(props);

  //}

  state = {
    banana: "바나나",
  };

  render() {
    const { banana } = this.state;
    return (
      <>
        <h2>클래스형 컴포넌트애서 state 사용하기 </h2>
        <button onClick={() => this.setState({ banana: "banana" })}>
          영어로 변겅
        </button>
        <div>{this.state.banana}</div>
        <div>{banana}</div>
      </>
    );
  }
}
