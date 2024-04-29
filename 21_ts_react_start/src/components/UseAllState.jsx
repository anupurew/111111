import { useDispatch, useSelector } from "react-redux";

export default function UseAllState() {
  // useSelector를 통해 rootReducer에서 관리되는 isLoggedIn state에 접근
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  return (
    <div style={{ border: "5px solid pink", padding: "10px" }}>
      <h2>부모 컴포넌트</h2>
      <div>자식으로 Child 컴포넌트를 가짐</div>
      <div>이 컴포넌트는 어떤 props도 전달하지 않는 중</div>
      <div>
        현재 전역으로 관리되는 isLoggedIn state 값 :{" "}
        {isLoggedIn ? "로그인 함" : "로그인 하지 않음"}
      </div>
      <Child />
    </div>
  );
}

function Child() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div style={{ border: "5px solid skyblue", padding: 5 }}>
      {/* count state 보여주고, +1, -1, reset하는 버튼 만들기 */}
      <div>count state: {count}</div>
      <button onClick={() => dispatch({ type: "count/increment" })}>+ 1</button>
      <button onClick={() => dispatch({ type: "count/decrement" })}>- 1</button>
      <button onClick={() => dispatch({ type: "count/reset" })}>reset</button>
    </div>
  );
}
