import App from "../App";

export default function Prac() {
  const helloStr = "hello, this is first practice";
  return (
    <div
      style={{ marginTop: 32, backgroundColor: "pink" }}
      onClick={() => {
        alert("클릭!");
      }}
    >
      {helloStr}
    </div>
  );
}
