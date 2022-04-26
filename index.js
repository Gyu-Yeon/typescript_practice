//type 의 종류 string number boolean null undifined
// let 이름: string = "kim";
// let 나이: number = 50;
// let 결혼했니: boolean = true;
// let 회원들1: string[] = ["kim", "park"];
// let 회원들2: { member1: string; member2: string } = {
//   member1: "kim",
//   member2: "park",
// };
var 이름 = "Choi";
var 나이 = 25;
var 출생지역 = "Seoul";
var favorite = { 가수: "빅뱅", 제목: "거짓말" };
var project = {
    member: ["kim", "park"],
    days: 30,
    started: true,
};
// any, unknown
var 회원들 = [1, "2", 3];
var 오브젝트 = { a: "123" };
var 성명;
성명 = 123;
성명 = [];
var 성명2; //중요: any = 쉴드 해제 typescript를 쓰지 않겠다는 뜻,
//중요: unknown = any의 단점을 보완해주는 것.
var user = "kim";
var age = undefined;
var married = false;
var 철수 = [user, age, married];
var 학교 = {
    score: [100, 97, 84],
    teacher: "Phil",
    friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];
