import App from "../src/App.js";


describe("구입금액 Error처리 테스트", () => {
  test("구입금액이 숫자가 아닐 경우 Error처리 테스트", () => {
    const buyMoney = "aiden";
    const app = new App();
    expect(() => {
      app.validateBuyMoney(buyMoney);
    }).toThrow();
  });

  test("구입금액이 1000원 단위가 아닐 경우 Error처리 테스트", () => {
    const buyMoney = 200;
    const app = new App();
    expect(() => {
      app.validateBuyMoney(buyMoney);
    }).toThrow();
  });

  test("구매금액이 양의 정수가 아닐 경우 Error처리 테스트", () => {
    const buyMoney = -2000;
    const app = new App();
    expect(() => {
      app.validateBuyMoney(buyMoney);
    }).toThrow();
  });
});

describe("당첨로또 Error처리 테스트", () => {
  test("당첨번호와 보너스번호가 숫자가 아닐 경우 Error처리 테스트", () => {
    const eachNumber = "a";
    const app = new App();
    expect(() => {
      app.checkEachNumber(eachNumber);
    }).toThrow();
  });

  test("당첨번호와 보너스번호가 해당 범위를 벗어날 경우 Error처리 테스트", () => {
    const eachNumber = 47;
    const app = new App();
    expect(() => {
      app.checkEachNumber(eachNumber);
    }).toThrow();
  });

  test("당첨번호와 보너스번호가 양의 정수가 아닐 경우 Error처리 테스트", () => {
    const eachNumber = 44.5;
    const app = new App();
    expect(() => {
      app.checkEachNumber(eachNumber);
    }).toThrow();
  });
});

describe("재시작 여부 입력 Error처리 테스트", () => {
  test("재시작 여부 입력이 정해진 형식이 아닐 경우 Error처리 테스트", () => {
    const retryInput = "a";
    const app = new App();
    expect(() => {
      app.validateRetryInput(retryInput);
    }).toThrow();
  });
});
