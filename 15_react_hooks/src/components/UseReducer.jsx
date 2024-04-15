import { useState, useReducer } from "react";

//useReduceer hook
//-reducer: state를 업데이트하는 역할
//- dispatch : state를 업데이트 시켜추기 위한 요구
//-action : 요구의 내용

const reducer = (prevState, action) => {
  console.log("dispatch 호출 시 reducer 동작함");
  console.log(prevState, action);
  //dispatch의 인자로 전달되는 값이 reducer

  //reducer 함수 내부에는 조건문 많이 사용함
  //switch나 if else 등등
  //복잡한 스테이트르르 관리한다는 것을 state가 한 가지만 있는 것이 아니고,
  //업데이트 로직이 한 가지 있다는 것이 아니기 때문에
  switch (action.type) {
    case "deposit":
      return Number(prevState) + number(action.payload);
    case "widthdraw":
      return Number(prevState0) - number(action.payload);
    case "withdrawAll":
      return 0;
    default:
      return prevState;
  }
};
export default function UseReducer() {
  const [number, setNumber] = useState(0);

  // const [스테이트, 디스패치] = useReducer(리두서, 스테이트의 초기값);
  const [money, dispatch] = useReducer(reducer, 0);
  //reducer는 따로 만들어줘야 합
  //잔고 (money state)를 수정하고 싶은 경우 리듀서가 디스패치를 불러줌
  //디스패치는 인자로 action을 가지고 있음
  //디스패치는 state를 바뀌주는 것이 아니라 state를 업데이트를 하기 위한 "요구 action"을 다
  return (
    <>
      <h2>useReducer 사용</h2>
      <div>잔고 {money}원</div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        step="1000"
      />
      <button
        onClick={() => {
          dispatch({ type: "deposit", payload: number });
        }}
      >
        입금
      </button>
      <button
        onClick={() => {
          dispatch({ type: "woidthdraw", payload: number });
        }}
      >
        출금
      </button>

      <button
        onClick={() => {
          dispatch({ type: "woidthdrawAll", payload: null });
          alert("당신은 거지가 되고싶습니까?");
          setNumber(0);
        }}
      >
        전액 출금
      </button>
    </>
  );
}
