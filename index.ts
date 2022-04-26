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
let 출생지역: string = "Seoul";

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
