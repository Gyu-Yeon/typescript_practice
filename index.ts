//type 의 종류 string number boolean null undifined

// let 이름: string = "kim";
// let 나이: number = 50;
// let 결혼했니: boolean = true;

// let 회원들1: string[] = ["kim", "park"];
// let 회원들2: { member1: string; member2: string } = {
//   member1: "kim",
//   member2: "park",
// };

let 이름: string = "Choi";
let 나이: number = 25;
// let 출생지역: string = "Seoul";

let favorite: { 가수: string; 제목: string } = { 가수: "빅뱅", 제목: "거짓말" };

let project: {
  member: string[];
  days: number;
  started: boolean;
} = {
  member: ["kim", "park"],
  days: 30,
  started: true,
};

// any, unknown
let 회원들: (number | string)[] = [1, "2", 3];
let 오브젝트: { a: string | number } = { a: "123" };

let 성명: any;
성명 = 123;
성명 = [];

let 성명2: unknown; //중요: any = 쉴드 해제 typescript를 쓰지 않겠다는 뜻,
//중요: unknown = any의 단점을 보완해주는 것.

let user: string = "kim";
let age: undefined | number = undefined;
let married: boolean = false;
let 철수: (string | undefined | number | boolean)[] = [user, age, married];

let 학교: {
  score: (number | boolean)[];
  teacher: string;
  friend: string | string[];
} = {
  score: [100, 97, 84],
  teacher: "Phil",
  friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];

function 함수(x: number): number {
  return x * 2;
}

function 함수2(x: number): void {
  1 + 1;
}
//return 하는걸 사전에 막는 void 타입
//자바스크립트와 타입스크립트의 다른점: 파라미터에 타입을 지정하면 파라미터를 무조건 넣어줘야함.

function 함수3(x?: number): void {}
//하지만 함수3처럼 파라미터가 옵션일 경우에는 파라미터변수에 ? 타입을 설정.
//? :number 타입은 :number | undefined 와 같은 개념.

function 함수4(이름?: string) {
  if (!이름) {
    console.log("이름이 없습니다.");
  } else {
    console.log("안녕하세요" + 이름);
  }
}

function 함수5(x: string | number) {
  console.log(x.toString().length);
}
//narrowing 으로 판정해주는 문법들
//typeOf 변수
// 속성명 in 오브젝트자료
// 인스턴스 instanceOf 부모
// else 문이 없으면 에러 출력할 수도 있기 때문에 주의!

function 함수7(x: number | string) {
  if (typeof x === "string") {
    return x + "1";
  } else {
    return x + 1;
  }
}

function 함수8(x: number | string) {
  let array: number[] = [];
  if (typeof x === "number") {
    array[0] = x;
  }
}
//assertion 문법 (타입 덮어쓰기)
// 타입을 a 에서 b 로 변경하는 문법이 아님
//ex) let 이름 : string = 'kim';
//    이름 as number;
// 무슨 타입이 들어올지 100% 확실할 때 사용
function 함수9(x: number | string) {
  let array: number[] = [];
  array[0] = x as number;
}

function 클리닝함수(x: (number | string)[]) {
  let cleaned: number[] = [];
  x.forEach(function (n) {
    if (typeof n === "string") {
      let changed: number = parseInt(n);
      cleaned.push(changed);
    } else {
      cleaned.push(n);
    }
  });
  console.log(cleaned);
}

function 자릿수함수(x: number | string) {
  if (typeof x === "string") {
    return x.length;
  } else {
    return x.toString().length;
  }
}

function 결혼가능확률(월소득: number, 집보유여부: boolean, 매력점수: string) {
  let total: number = 0;
  total = total + 월소득;
  if (집보유여부 === true) {
    total = total + 500;
  }
  if (매력점수 === "상") {
    total = total + 100;
  }
  if (total >= 600) {
    return "결혼가능";
  }
}

//type alias
//타입이 길면 변수에 저장하여 사용할 수 있음.
//타입 변수는 대문자로 작명 혹은 ,뒤에 type을 붙이기.

type Animal = string | number | undefined;
let 동물: Animal = 123;

type Animal2 = { name: string; age: number };
let 동물2: Animal2 = { name: "kim", age: 20 };

//const 변수에 담긴 자료는 수정이 불가능 하지만, const 변수에 담긴 오브젝트의 안에 있는 자료는 변경가능.
const 출생지역 = { region: "seoul" };
출생지역.region = "busan";

type Girlfriend = {
  readonly name: string;
};

const 여친: Girlfriend = {
  name: "엠버",
};
// 여친.name = "유라";

//readonly 속성으로 ts파일에서는 에러를 띄움.
// 하지만 실제 변환된 js파일은 에러없이 잘 변환되어있음.

type Name = string;
type Age = number;
type Person = Name | Age;

type PositionX = { x: number };
type PositionY = { y: number };

type NewType = PositionX & PositionY;

let position: NewType = { x: 10, y: 20 };

// &기호는 extend 하기.
// 같은 이름의 type 변수는 다시 정의할 수 없다.

type Customed1 = { color?: string; size: number; position: number[] };

type Personal = { name: string; phone: number; email: string };
type Personal2 = { adult: boolean };

type User = Personal & Personal2;

let user1: User = { name: "kim", phone: 123, email: "asdsad", adult: true };

// Literal types
// 타입스크립트는, let 이름:string: << 보다 더 엄격한 타입 지정가능

let 이름1: "kim";

function 가위바위보(a: "가위" | "바위" | "보"): ("가위" | "바위" | "보")[] {
  return ["가위", "보"];
}

//파라미터 자리에 들어올 수 있는것은 'kim' 이라는 타입이기 때문에 자료.name을 했을때 string 타입의 kim이 들어오면 에러 출력.
let 자료 = {
  name: "kim",
};

function 내함수(a: "kim") {}
// 내함수(자료.name);

//type alias에 함수 type 저장해서 쓰는 법

//functin 함수(){} == 함수 선언식
// let 함수 = function(){} == 함수 표현식

type 함수타입 = (a: string) => number;

let 함수20: 함수타입 = function (a) {
  return 10;
};

type 회원정보타입 = (a: number) => number;
type changeNameType = () => void;

// let 회원정보: {
//   name: string;
//   plusOne: 회원정보타입;
//   changeName: changeNameType;
// } = {
//   name: "kim",
//   plusOne(a) {
//     return a + 1;
//   },
//   changeName: () => {
//     console.log("안녕");
//   },
// };

type Member = {
  name: string;
  age: number;
  plusOne: (x: number) => number;
  changeName: () => void;
};

let 회원정보: Member = {
  name: "kim",
  age: 30,
  plusOne(x) {
    return x + 1;
  },
  changeName: () => {
    console.log("안녕");
  },
};

회원정보.plusOne(2);

type cutZeroType = (a: string) => string;

let cutZero: cutZeroType = function (a) {
  if (typeof a === "string" && a[0] === "0") {
    let word = a.slice(1);
    return word;
  } else {
    return a;
  }
};

cutZero("0aasfasf");

type removeDashType = (a: string) => number;

let removeDash: removeDashType = function (a) {
  return parseInt(a.replace(/-/g, ""));
};

type 세번째함수type = (a: string, b: "cutZero", c: "removeDash") => number;

let 만들함수: 세번째함수type = function (a, b, c) {
  let cut = cutZero(a);
  console.log(cut);
  return removeDash(cut);
};

let 제목 = document.querySelector("#title");
// if (제목 != null) {
//   제목.innerHTML = "반가워요";
// }

if (제목 instanceof Element) {
  제목.innerHTML = "반가워요";
}
