//다른 js 파일의 함수나 변수를 불러와 사용하기
//import,export
//export문: 함수 내보내기
//import문 : 함수 불러오기
//불필요한 코드 반복을 둘이고, 효율적인 개발 가능, 유지보수 쉬웢짐

//함수 불러오기
import consoleNameMain, { consoleName, consoleName2 } from './02_util.js';
imporrt consoleNameMain from './02_util.js';

consoleName('Anu');
consoleName2('layla');
consoleNameMain('layla');
