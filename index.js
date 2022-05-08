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
// let 출생지역: string = "Seoul";
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
var 동물2 = { name: "kim", age: 20 };
//const 변수에 담긴 자료는 수정이 불가능 하지만, const 변수에 담긴 오브젝트의 안에 있는 자료는 변경가능.
var 출생지역 = { region: "seoul" };
출생지역.region = "busan";
var 여친 = {
    name: "엠버",
};
var position = { x: 10, y: 20 };
var user1 = { name: "kim", phone: 123, email: "asdsad", adult: true };
// Literal types
// 타입스크립트는, let 이름:string: << 보다 더 엄격한 타입 지정가능
var 이름1;
function 가위바위보(a) {
    return ["가위", "보"];
}
//파라미터 자리에 들어올 수 있는것은 'kim' 이라는 타입이기 때문에 자료.name을 했을때 string 타입의 kim이 들어오면 에러 출력.
var 자료 = {
    name: "kim",
};
function 내함수(a) { }
var 함수20 = function (a) {
    return 10;
};
var 회원정보 = {
    name: "kim",
    age: 30,
    plusOne: function (x) {
        return x + 1;
    },
    changeName: function () {
        console.log("안녕");
    },
};
회원정보.plusOne(2);
var cutZero = function (a) {
    if (typeof a === "string" && a[0] === "0") {
        var word = a.slice(1);
        return word;
    }
    else {
        return a;
    }
};
cutZero("0aasfasf");
var removeDash = function (a) {
    return parseInt(a.replace(/-/g, ""));
};
var 만들함수 = function (a, b, c) {
    var cut = cutZero(a);
    console.log(cut);
    return removeDash(cut);
};
var 제목 = document.querySelector("#title");
// if (제목 != null) {
//   제목.innerHTML = "반가워요";
// }
if (제목 instanceof Element) {
    제목.innerHTML = "반가워요";
}
var 이미지 = document.querySelector("#image");
if (이미지 instanceof HTMLImageElement) {
    이미지.src = "new.jpg";
}
var 링크 = document.querySelectorAll("naver");
링크.forEach(function (a) {
    if (a instanceof HTMLAnchorElement) {
        a.href = "https://kakao.com";
    }
});
var Person1 = /** @class */ (function () {
    function Person1(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person1;
}());
var Car = /** @class */ (function () {
    function Car(model, price) {
        this.model = model;
        this.price = price;
    }
    Car.prototype.tax = function () {
        return this.price / 10;
    };
    return Car;
}());
var car1 = new Car("소나타", 3000);
var Word = /** @class */ (function () {
    function Word(word) {
        var num = [];
        var str = [];
        obj: [str, num];
        if (typeof word === "number") {
            num.push(word);
        }
        else if (typeof word === "string") {
            str.push(word);
        }
    }
    return Word;
}());
