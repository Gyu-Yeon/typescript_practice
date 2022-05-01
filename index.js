"use strict";
//type 의 종류 string number boolean null undifined
Object.defineProperty(exports, "__esModule", { value: true });
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
function 함수(x) {
    return x * 2;
}
function 함수2(x) {
    1 + 1;
}
//return 하는걸 사전에 막는 void 타입
//자바스크립트와 타입스크립트의 다른점: 파라미터에 타입을 지정하면 파라미터를 무조건 넣어줘야함.
function 함수3(x) { }
//하지만 함수3처럼 파라미터가 옵션일 경우에는 파라미터변수에 ? 타입을 설정.
//? :number 타입은 :number | undefined 와 같은 개념.
function 함수4(이름) {
    if (!이름) {
        console.log("이름이 없습니다.");
    }
    else {
        console.log("안녕하세요" + 이름);
    }
}
function 함수5(x) {
    console.log(x.toString().length);
}
//narrowing 으로 판정해주는 문법들
//typeOf 변수
// 속성명 in 오브젝트자료
// 인스턴스 instanceOf 부모
// else 문이 없으면 에러 출력할 수도 있기 때문에 주의!
function 함수7(x) {
    if (typeof x === "string") {
        return x + "1";
    }
    else {
        return x + 1;
    }
}
function 함수8(x) {
    var array = [];
    if (typeof x === "number") {
        array[0] = x;
    }
}
//assertion 문법 (타입 덮어쓰기)
// 타입을 a 에서 b 로 변경하는 문법이 아님
//ex) let 이름 : string = 'kim';
//    이름 as number;
// 무슨 타입이 들어올지 100% 확실할 때 사용
function 함수9(x) {
    var array = [];
    array[0] = x;
}
function 클리닝함수(x) {
    var cleaned = [];
    x.forEach(function (n) {
        if (typeof n === "string") {
            var changed = parseInt(n);
            cleaned.push(changed);
        }
        else {
            cleaned.push(n);
        }
    });
    console.log(cleaned);
}
function 자릿수함수(x) {
    if (typeof x === "string") {
        return x.length;
    }
    else {
        return x.toString().length;
    }
}
function 결혼가능확률(월소득, 집보유여부, 매력점수) {
    var total = 0;
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
var 동물 = 123;
