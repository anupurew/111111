//문자열에서 사용 가능한 속성과 메서드
//length, toUpperCase(), toLowerCase(), trim(),split()
//indexOf(),replace(), replaceAll(), slice(),repeat()
//지금까지는 우리가 직접 함수를 만들어 사용
//메서드는 자바스크립트에서 만들어 놓은 함수 -> 그래서 뒤에 괄호가 붙음
// 즉 , 이미 전의가 되어 있으므로 가져다 사용하면 됨
let str = "Strawberry Moon";
let str2 = " Strawberry Moon   ";

//문자열 인덱싱
console.log(str[1]); //t
console.log(str[0]); //s -> 컴퓨터 숫자를 0부터 시작
console.log(str[0] + str[3]);
//sonny 출력하기
console.log(str[0] + str[12] + str[14] + str[14] + str[9]);

//length -> 속성
// 문자열 길이를 반환 (공백 포함)
console.log("str 문자열 길이", str.length);
console.log("str2 문자열 길이", str2.length);

//인자가 없는 메소드: xx.method() 형태
//- toUpperCase()
// - toLowerCase()
// - trim()
let msg = "Happy Birthday~";
let userId = "                   user123";
console.log(msg.toUpperCase());
console.log(msg.toLowerCase());
console.log(userId.length); // 공백 짤리기 전에 문자열 길이 확인
console.log(userId.trim());
console.log(userId.trim().length); // 공백 제거되었는지 확인

//메서드 체이닝
//
//
console.log(userId.trim().toUpperCase().length);

//인자 있는 메서드: XX.method(arg) 형태
//- indexOf(): 문자열에서 인자로 받은 문자열에 인덱스를 반환, 없다면 -1 반환
// - replace(교체될 값, 대신 들어갈 값): 교체될 값과 대신 들어갈 값으로 반환-> 제일 처음에 만난 문자만 반환
// -replaceAll() : 해당하는 모든 문자를 교체
// - slice(startIdx[, endIdx]): startIdx ` endIdx -1 까지 자름 (음수 인덱스 가능)
// - repeat(n): 문자열 n번 반복
// - split(): 인자로 받은 문자열을 기준으로 해당 문자열을 나누고, 나눈 문자열을 배열로 만들어
// - charAt(n): 인자로 받은 숫자 n 인덱스 번호에 대한 문자열 하나 반환
let fruit = "applemango";

console.log(fruit.indexOf("apple")); // 0
console.log(fruit.indexOf("mango")); // 5
console.log(fruit.indexOf("e")); //4
console.log(fruit.indexOf("z")); // -1

console.log(fruit.charAt(8)); // g
console.log(fruit.charAt(5)); //m
console.log(fruit[5]); // m

console.log(fruit.slice(5)); // mango
console.log(fruit.slice(3, 6)); // lem
console.log(fruit.slice(-1)); // o
console.log(fruit.slice(-3)); // ngo
console.log("fruit의 값에 변화가 있는지 확인 ", fruit); //-> 변화 없음

let msg2 = "Wow!  It's so amazing!!! Wow !!!";
console.log(msg2.replace("Wow", "OMG")); // OMG!  It's so amazing!!! Wow !!!
console.log(msg2.replaceAll("Wow", "OMG")); // ->
console.log("msg2의 값에 변화가 있는지 확인 ", msg2); //-> 변화 없음

//2024.02.28 -> 2024-02-28로 바꾸기
let date = "2024.02.28";
console.log(date.replaceAll(".", "-"));

console.log("HelloWorld".repeat(5));

console.log(date.split(".")); // 인자로 받은 문자열을  기준으로 나누어 배열로 반환
console.log(date.split("")); //  모든 글자를 하나씩 나누어 배열로 반환
let splitedDate = date.split("."); // ['2024'.'02','28']
console.log(typeof splitedDate);

//---------------------------------------------------
//배열에서 사용 가능한 속성과 메서드
// push, pop, unShift, shift, indexOf, reverse, length
let arr1 = [1, 2, 3, 4, 5];
let arr2 = ["quakka", "panda", "dog", "capybara"];

arr1[5] = 6;
console.log(arr1);
arr1[7] = 8; // 중간에 빈 값 empty 생길 수 있음
console.log(arr1);

arr1 = [1, 2, 3, 4, 5];
//push(): 배열의 가장 마지막에 해당 요소 추가
console.log(arr1.push(10));
console.log(arr1.push(20));
console.log(arr1.push(30));
console.log(arr1); // [1, 2, 3, 4, 5, 10, 20, 30] -> arr1 변수의 배열 자체에 변화가 생긴다

// pop(): 배열 마지막 요소 제거해줌
arr1.pop();
arr1.pop();
arr1.pop();
console.log(arr1);

//unShift(): 앞에 요소를 추가
arr2.unshift("bear");
console.log(arr2);

//shift(): 맨 앞 요소가 제거
arr2.shift();
console.log(arr2);
// push, pop, unShift, shift -> 문자열에서 메서드를 사용한 것과 다르게 원래의 배열이 변경됨

//includes(): 해당 배열의 인자로 받은 값과 동일한 요소가 있는지 확인하고 t/f를 반환
console.log(arr2.includes("quakka")); //true

//indexOf(): 문자열과 마찬가지로 해당 요소의 인덱스를 반환

console.log(arr2.indexOf("capybara")); // 3
// length-> 속섬이므로 괄호 작성 x
console.log(arr2.length); // 4

//reverse(): 배열의 순서를 뒤집음 -> 배열의 변경시킴
arr2.reverse();
console.log(arr2);

//join(): 배열을 인자의 문자열 기준으로 합쳐 문자열로 변환
// 원래 배열을 변경시키지 않음
console.log(arr2);
console.log(arr2.join()); // 인자를 작성하지 않으면 배열 안의 컴마(,)까지 문자열로 변환
console.log(typeof arr2.join()); // 빈 문자열 작성시 모든 요소가 붙어서 문자열로 변환
console.log(arr2.join("그리고"));
console.log(arr2);

//----------------------------------------------
//배열에서 반복문
// for
let arr3 = [1, 2, 3, 4, 5];
let alphabets = ["a", "b", "c", "d", "e", "f"];

console.log("for 를 사용한 배열에서의 반복");

for (let i = 0; i < arr3.length; i++) {
  console.log(arr3[i]);
}

console.log("for of 에서 만 사용한 반복");
// for of
//여기서 number는 for of 문애서 내가 지어준 변수명
//뭣을 의미하는지 알 수 있도록 작성
// index 번호로 순환하는 것이 아니라 배열 요소 직접 접근
for (let number of arr3) {
  console.log(number);
}

for (let alphabet of alphabets) {
  console.log(alphabet);
}

//forEach
//매개변수 3개를 받는 배열의 반복을 위한 메서드(=함수)
//매개변수 이름은 마음대로 지어도 상관 없지만 순서에 따른 의미는 항상 동일 -> 순서 중요
/*
arr.forEach(function(요소를 지칭한 별명[, 인덱스를 지칭한 별명 [, arr를 지칭한 별명]]))
*/
console.log("forEach를 사용한 배열에서 반복");
arr1.forEach(function (num, idx) {
  console.log("num: ", num);
  console.log("idx: ", idx);
});

//
// filter
//조건으 ㄹ만족하는 요소들을 배열로 반환
// arr2의 요소 중 길이가 5자 이상인 요소만 모아 새로운 배열 만들기
console.log("filter() 메서드 사용");
let newarr2 = arr2.filter(function (animal) {
  return animal.length >= 5;
});

//화살표 함수에서 return 까지 생략한
let newArr3 = arr2.filter((animal) => animal.length >= 5);
console.log(newarr2);
console.log(arr2); // 원래 배열의 영향을 주지 않음

const words = ["미어캣", "라이거", "유니콘", "고질라", "드래건", "라쿤"];

const newwords = words.filter(function (ani) {
  return ani.charAt(0) === "라" || ani.charAt(0) === "유";
});
console.log(newwords);

//find(): 배열에서 특정 조건을 만족하는 첫 번째 요소 반환
// filter 비슷하게 조건 작성하지만 배열을 반환하는 것이 아닌 조건을 처음 만족하는 "값 "
let findResult = words.find(function (ani) {
  return ani.charAt(0) === "드";
});
console.log(findResult);

//map(): 배열 내의 모든 원소의 대해 함수의 결과를 모아 새로운 배열 반환
// arr.map(function(value[, index[, arr]]) {})
//배열의 모든 원소를 for문으로 돌려서 바꿀 수 있지만 더 간단히 ㅁㅔ소드를 사용해 변경 가능
let nums = [1, 2, 3, 4, 5];
let mapArr = nums.map(function (n) {
  return n * 100;
});
console.log(mapArr); // [100, 200, 300, 400, 500]

//배열에서의 반복 실습
let numArr = [];
for (let i = 1; i <= 100; i++) {
  numArr.push(i);
}
//합 구하기
// 1.for문
let sum1 = 0;
for (let i = 0; i < numArr.length; i++) {
  sum1 = sum1 + numArr[i];
  // sum1 += numArr[i]
}
console.log(sum1);

//2. for of 문
let sum2 = 0;
// numArr 배열에 있는 모든 요소를 num이라고 지칭하고 반복한다.
for (let num of numArr) {
  //sum2 += num;
  sum2 = sum2 + num;
}

//3. forEach문
let sum3 = 0;
numArr.forEach(function (num) {
  sum3 = sum3 + num;
});
console.log(sum3);
