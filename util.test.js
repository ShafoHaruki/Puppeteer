const { test } = require("@jest/globals");
const puppeteer = require("puppeteer");
const { generateText, checkAndGenerate } = require("./util");

test("should output name and age", () => {
  const text = generateText("Max", 29);
  expect(text).toBe("Max (29 years old)");
});

test("should output dataless text", () => {
  const text = generateText();
  expect(text).toBe("undefined (undefined years old)");
});

//Intergration test
test("should generate a valid text output", () => {
  const text = checkAndGenerate("Max", 29);
  expect(text).toBe("Max (29 years old)");
});

//End to end testing
test("should create element with inputted name and age", async () => {
  const browser = await puppeteer.launch({
    headless: true,
    // slowMo: 80,
    // args: ["--window-size=1920,1080"],
  });
  const page = await browser.newPage();
  await page.goto(
    "file:///Users/yoshio/Desktop/Developer/js-testing-introduction/index.html"
  );
  await page.type("input#name", "James");
  await page.type("input#age", "11");
  await page.click("#btnAddUser");
  const finalText = await page.$eval(".user-item", (el) => el.textContent);
  expect(finalText).toBe("James (11 years old)");
}, 10000);
