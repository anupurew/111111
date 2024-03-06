/*
요소 선택
 -querySelector('css 선택자')
 -querySelectorAll('css 선택자')
 -getElementById('id값)
 -getElementByClassName('class값)
 -getElementByTagName('태그명)
 */

// document 객체
console.log(document); // html 문서 전체
console.log(document.documentElement); // html 문서 내의 있는 모든 element들을 가지고 옴
console.log(document.head); // head 태그와 모든 element등
console.log(document.body); //body 태그와 모든 element등
console.log(document.URL);
console.log(document.domain);

//1. getElementById
console.log("getElementById");
console.log(document.getElementById("green"));
console.log(document.getElementById("gold"));

//2. getElementByClassName
console.log("getElementByClassName");
console.log(document.getElementsByClassName("pink"));
console.log(document.getElementsByClassName("others"));

//3. getElementByTagNAme
console.log("getElementByTagName");
console.log(document.getElementsByTagName("div"));

//4. querySelector
// css에서 사용했던 선택자 이용해 요소 선택
// 해당 css 선택자 중에서 일치하는 첫 번째 요소만 선택함 -> 하나만 선택
console.log("querySelector");
console.log(document.querySelector(".pink"));
console.log(document.querySelector("#green"));
console.log(document.querySelector("div.pink"));
console.log(document.querySelector("body div"));

//5. querySelectorAll
//해당 css 선택자 중에서 일치하는 모든 요소만 선택함
console.log("querySelectorAll");
console.log(document.querySelectorAll("div"));
console.log(document.querySelectorAll("div.pink"));
console.log(document.querySelectorAll(".others"));
console.log(document.querySelectorAll("div.pink")[2]); // 인덱스 사용해 접근

// NodeList 와 HTML Collection
// getElementBy~~ -> HTML Collection -> js에서 노드를 생성하거나 삭제하는 변경 감지
// querySelectorAll -> NodeList -> 변경 가지 못함
// HTMLCollection, NodeList -> 유사 배열

//유사 배열
// length 속성을 가짐
// [i]로 접근 가능 -> 인덱스로 접근 가능
// 표준 객체 메소드 사용 불가 (map)
// 하지만 forEach는 사용 가능

// for of문으로 pink class 모두 출럭하기
console.log("");
let pinks = document.querySelectorAll(".pink"); //pink class 가진 모든 요소를 배열로 저장

for (let el of pinks);
{
  console.log(el);
}
