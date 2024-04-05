import React from "react";

export default function PropsPrac(props) {
  return (
    <h1>
      {" "}
      제가 좋아하는 음식은
      <div style={{ color: "red" }}> {props.food}</div>
      입니다.
    </h1>
  );
}
PropsPrac.defaultProps = {
  food: "파스타",
};
