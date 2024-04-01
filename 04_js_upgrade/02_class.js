class House {
  //consructor : 생성자 함수
  //House라는 클래스의 속성을 초기화
  constructor(name, age, window) {
    this.name = name; //이 클래스에는 name이라는 key를 가질 것이고, value는 생성자
    this.age = age;
    this.window = window;
  }

  //메서드
  consoleInfo() {
    console.log(
      `이 아파트에 이름은 ${this.name}이고, ${this.age}년 건축하였습니다.`
    );
  }
  consoleWindow() {
    console.log(`${this.name} 아파트에 창문은 ${this.window}개 입니다.`);
  }
}

//House 클래스를 사용해 오브젝트 만들기
const house1 = new House("고덕 그라시움", 2020, 10);
console.log(house1);
console.log(typeof house1);
house1.consoleInfo();

//--------------------------------------------------------------------------

//상속

class Apartment extends House {
  constructor(name, age, window, floor, password) {
    //super(상속받을 속성): 인자로 작성된 부모의 속성 상속
    super(name, age, window);
    this.floor = floor; //Apartment 클래스에서 사용한 속성
    this.password = password;
  }

  consolePassword() {
    console.log(`이 아파트의 비밀번호는 ${this.password}입니다`);
  }
  //오버라이딩 : 기존 메서드를 재정의
  consoleWindow() {
    console.log(
      `이 아파트의 창문은 모두 ${this.window} 개 이고, 총 ${
        this.floor
      }층으므로 모든 창문의 갯수는 ${this.window * this.floor}개 입니다`
    );
  }
}
const apt1 = new Apartment("Ipark", 2017, 6, 20, 645114);
console.log(apt1);
apt1.consoleWindow(); //새롭게 정의된 메서드 사용
apt1.consolePassword(); //새로운 메서드 추가 가능
apt1.consoleInfo(); //부모 메서드 그대로 사용 가능

//실습
class Shape {
  constructor(row, col) {
    this.row = row;
    this.col = col;
  }
  getArea() {
    return this.row * this.col;
  }
}
let rec1 = new Shape(3, 4);
console.log(rec1.getArea());

//실습2 (원)
class Circle extends Shape {
  constructor(row, col, radius) {
    super(row, col);
    this.radius = radius;
  }

  getArea() {
    return (this.row / 2) ** 2 * this.radius;
  }
}
const cir = new Circle(5, 5, 3.14);
console.log(cir.getArea());

//
