//함수 내보내는 방법
//1. 함수 앞에 export키워드 작성

export function consoleName(name) {
  console.log(`당신에 이름은 ${name}`);
}
export function consoleName2(name) {
  console.log(`당신에 이름은 ${name} 22`);
}
//default 키워드 작성 시 해당 함수가 이 파일의 대표 함수
export default function consoleNameMain(name) {
  console.log(`당신에 이름은 ${name} main 함수`);
}
