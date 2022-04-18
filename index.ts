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

let 변수1: string = 이름;
