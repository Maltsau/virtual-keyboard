// const KEYBOARD_MAP = [
//   ["`", "~", "ё", "Ё"],
//   ["1", "!", "1", "!"],
//   ["2", "@", "2", '"'],
//   ["3", "#", "3", "№"],
//   ["4", "$", "4", ";"],
//   ["5", "%", "5", "%"],
//   ["6", "^", "6", ":"],
//   ["7", "&", "7", "?"],
//   ["8", "*", "8", "*"],
//   ["9", "(", "9", "("],
//   ["0", ")", "0", ")"],
//   ["-", "_", "-", "_"],
//   ["=", "+", "=", "+"],
//   ["Backspace", "Backspace", "Backspace", "Backspace"],
//   ["Tab", "Tab", "Tab", "Tab"],
//   ["q", "Q", "й", "Й"],
//   ["w", "W", "ц", "Ц"],
//   ["e", "E", "у", "У"],
//   ["r", "R", "к", "К"],
//   ["t", "T", "е", "Е"],
//   ["y", "Y", "н", "Н"],
//   ["u", "U", "г", "Г"],
//   ["i", "I", "ш", "Ш"],
//   ["o", "O", "ў", "Ў"],
//   ["p", "P", "з", "З"],
//   ["[", "{", "х", "Х"],
//   ["]", "}", "'", "'"],
//   ["Solidus", "|", "Solidus", "/"],
//   ["Del", "Del", "Del", "Del"],
//   ["CapsLock", "CapsLock", "CapsLock", "CapsLock"],
//   ["a", "A", "ф", "Ф"],
//   ["s", "S", "ы", "Ы"],
//   ["d", "D", "в", "В"],
//   ["f", "F", "а", "А"],
//   ["g", "G", "п", "П"],
//   ["h", "H", "р", "Р"],
//   ["j", "J", "о", "О"],
//   ["k", "K", "л", "Л"],
//   ["l", "L", "д", "Д"],
//   [";", ":", "ж", "Ж"],
//   ["'", '"', "э", "Э"],
//   ["Enter", "Enter", "Enter", "Enter"],
//   ["Left-Shift", "Left-Shift", "Left-Shift", "Left-Shift"],
//   ["z", "Z", "я", "Я"],
//   ["x", "X", "ч", "Ч"],
//   ["c", "C", "с", "С"],
//   ["v", "V", "м", "М"],
//   ["b", "B", "і", "І"],
//   ["n", "N", "т", "Т"],
//   ["m", "M", "ь", "Ь"],
//   [",", "<", "б", "Б"],
//   [".", ">", "ю", "Ю"],
//   ["/", "?", ".", ","],
//   ["Up", "Up", "Up", "Up"],
//   ["Right-Shift", "Right-Shift", "Right-Shift", "Right-Shift"],
//   ["Left-Ctrl", "Left-Ctrl", "Left-Ctrl", "Left-Ctrl"],
//   ["Win", "Win", "Win", "Win"],
//   ["Alt", "Alt", "Alt", "Alt"],
//   ["Space", "Space", "Space", "Space"],
//   ["Alt", "Alt", "Alt", "Alt"],
//   ["Left", "Left", "Left", "Left"],
//   ["Down", "Down", "Down", "Down"],
//   ["Right", "Right", "Right", "Right"],
//   ["Right-Ctrl", "Right-Ctrl", "Right-Ctrl", "Right-Ctrl"],
// ];

const KEYBOARD_MAP_2 = [
  { charcode: 192, desc: "backticks", eng: "`", engShift: "~", by: "ё" },
  { charcode: 49, desc: "1", eng: "1", engShift: "!", by: "1", byShift: "!" },
  { charcode: 50, desc: "2", eng: "2", engShift: "@", by: "2", byShift: '"' },
  { charcode: 51, desc: "3", eng: "3", engShift: "#", by: "3", byShift: "№" },
  { charcode: 52, desc: "4", eng: "4", engShift: "$", by: "4", byShift: ";" },
  { charcode: 53, desc: "5", eng: "5", engShift: "%", by: "5", byShift: "%" },
  { charcode: 54, desc: "6", eng: "6", engShift: "^", by: "6", byShift: ":" },
  { charcode: 55, desc: "7", eng: "7", engShift: "&", by: "7", byShift: "?" },
  { charcode: 56, desc: "8", eng: "8", engShift: "*", by: "8", byShift: "*" },
  { charcode: 57, desc: "9", eng: "9", engShift: "(", by: "9", byShift: "(" },
  { charcode: 48, desc: "0", eng: "0", engShift: ")", by: "0", byShift: ")" },
  {
    charcode: 189,
    desc: "minus",
    eng: "-",
    engShift: "_",
    by: "-",
    byShift: "_",
  },
  {
    charcode: 187,
    desc: "plus",
    eng: "=",
    engShift: "+",
    by: "=",
    byShift: "+",
  },
  { charcode: 8, desc: "backspace", eng: "Backspace", by: "Backspace" },
  { charcode: 9, desc: "tab", eng: "Tab", by: "Tab" },
  { charcode: 81, desc: "q", eng: "q", by: "й" },
  { charcode: 87, desc: "w", eng: "w", by: "ц" },
  { charcode: 69, desc: "e", eng: "e", by: "у" },
  { charcode: 82, desc: "r", eng: "r", by: "к" },
  { charcode: 84, desc: "t", eng: "t", by: "е" },
  { charcode: 89, desc: "y", eng: "y", by: "н" },
  { charcode: 85, desc: "u", eng: "u", by: "г" },
  { charcode: 73, desc: "i", eng: "i", by: "ш" },
  { charcode: 79, desc: "o", eng: "o", by: "ў" },
  { charcode: 80, desc: "p", eng: "p", by: "з" },
  {
    charcode: 219,
    desc: "square-bracket-open",
    eng: "[",
    engShift: "{",
    by: "х",
  },
  {
    charcode: 221,
    desc: "square-bracket-close",
    eng: "]",
    engShift: "}",
    by: "'",
  },
  {
    charcode: 220,
    desc: "solidus",
    eng: "&#47;",
    engShift: "|",
    by: "&#47;",
    byShift: "/",
  },
  { charcode: 46, desc: "del", eng: "Del", by: "Del" },
  { charcode: 20, desc: "capslock", eng: "CapsLock", by: "CapsLock" },
  { charcode: 65, desc: "a", eng: "a", by: "ф" },
  { charcode: 83, desc: "s", eng: "s", by: "ы" },
  { charcode: 68, desc: "d", eng: "d", by: "в" },
  { charcode: 70, desc: "f", eng: "f", by: "а" },
  { charcode: 71, desc: "g", eng: "g", by: "п" },
  { charcode: 72, desc: "h", eng: "h", by: "р" },
  { charcode: 74, desc: "j", eng: "j", by: "о" },
  { charcode: 75, desc: "k", eng: "k", by: "л" },
  { charcode: 76, desc: "l", eng: "l", by: "д" },
  { charcode: 186, desc: "semicolon", eng: ";", engShift: ":", by: "ж" },
  { charcode: 222, desc: "quotes", eng: "'", engShift: '"', by: "э" },
  { charcode: 13, desc: "enter", eng: "Enter", by: "Enter" },
  { charcode: 16, desc: "shift-left", eng: "Shift", by: "Shift" },
  { charcode: 90, desc: "z", eng: "z", by: "я" },
  { charcode: 88, desc: "x", eng: "x", by: "ч" },
  { charcode: 67, desc: "c", eng: "c", by: "с" },
  { charcode: 86, desc: "v", eng: "v", by: "м" },
  { charcode: 66, desc: "b", eng: "b", by: "і" },
  { charcode: 78, desc: "n", eng: "n", by: "т" },
  { charcode: 77, desc: "m", eng: "m", by: "ь" },
  { charcode: 188, desc: "comma", eng: ",", engShift: "<", by: "б" },
  {
    charcode: 190,
    desc: "dot",
    eng: ".",
    engShift: ">",
    by: "ю",
    byShift: ",",
  },
  { charcode: 191, desc: "slash", eng: "/", engShift: "?", by: "." },
  { charcode: 38, desc: "arrow-up", eng: "&uarr;", by: "&uarr;" },
  { charcode: 16, desc: "shift-right", eng: "Shift", by: "Shift" },
  { charcode: 17, desc: "ctrl-left", eng: "Ctrl", by: "Ctrl" },
  { charcode: 91, desc: "win", eng: "Win", by: "Win" },
  { charcode: 18, desc: "alt-left", eng: "Alt", by: "Alt" },
  { charcode: 32, desc: "space", eng: " ", by: " " },
  { charcode: 18, desc: "alt-right", eng: "Alt", by: "Alt" },
  { charcode: 37, desc: "arrow-left", eng: "&larr;", by: "&larr;" },
  { charcode: 40, desc: "arrow-down", eng: "&darr;", by: "&darr;" },
  { charcode: 39, desc: "arrow-right", eng: "&rarr;", by: "&rarr;" },
  { charcode: 17, desc: "ctrl-right", eng: "Ctrl", by: "Ctrl" },
];

let lang = localStorage.lang ? localStorage.lang : "en";
let shiftPressed = false;
let capsLockPressed = false;

function formDocument() {
  //   let isEng = 0;
  //   if (lang === "by") {
  //     isEng = 2;
  //   }

  //   const head = document.createElement("head");
  //   head.innerHTML = `
  //     <meta charset="UTF-8">
  //     <meta http-equiv="X-UA-Compatible" content="IE=edge">
  //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
  //     <link rel="stylesheet" href="style.css" media="screen" charset="utf-8">
  //     <title>Virtual Keyboard</title>
  //     `;
  //   document.documentElement.appendChild(head);

  const body = document.createElement("body");
  document.documentElement.appendChild(body);

  const wrapper = document.createElement("main");
  wrapper.classList.add("wrapper");
  body.insertAdjacentElement("afterbegin", wrapper);

  const heading = document.createElement("h1");
  heading.classList.add("heading");
  heading.innerText = `Virtual Keyboard`;
  wrapper.appendChild(heading);

  const langMarker = document.createElement("div");
  langMarker.classList.add("lang-marker");
  wrapper.appendChild(langMarker);
  langMarker.innerText = lang.toUpperCase();
  if (lang === "en") {
    langMarker.classList.add("en");
  }
  langMarker.addEventListener("click", setLang);

  const display = document.createElement("textarea");
  display.rows = 10;
  display.cols = 50;
  display.classList.add("display");
  wrapper.appendChild(display);
  display.focus();

  const keyboardWrapper = document.createElement("div");
  keyboardWrapper.classList.add("keyboard-wrapper");
  wrapper.appendChild(keyboardWrapper);

  fillKeyboard();

  const descriptionSection = document.createElement("div");
  descriptionSection.classList.add("discription-section");
  const descriptionParagraph = document.createElement("p");
  descriptionParagraph.classList.add("discription-paragraph");
  descriptionSection.appendChild(descriptionParagraph);
  wrapper.appendChild(descriptionSection);
  fillDescription();
}

function fillKeyboard() {
  //   console.log("filling", register);
  const keyboardWrapper = document.querySelector(".keyboard-wrapper");
  keyboardWrapper.innerHTML = null;
  for (let i = 0; i < KEYBOARD_MAP_2.length; i++) {
    // const button = document.createElement("div");
    // button.classList.add("button");
    // button.id = KEYBOARD_MAP[i][register];
    // button.addEventListener("click", handleButtonClick);
    // // console.log(KEYBOARD_MAP[i][register]);
    // if (KEYBOARD_MAP[i][register] !== "CapsLock") {
    //   //   console.log(KEYBOARD_MAP[i][register]);
    //   button.addEventListener("mousedown", handleButtonMouseDown);
    // }
    // if (KEYBOARD_MAP[i][register].includes("Shift")) {
    //   button.addEventListener("mouseup", handleButtonMouseUp);
    // }
    // button.classList.add(KEYBOARD_MAP[i][register].toLocaleLowerCase());
    // if (KEYBOARD_MAP[i][register].includes("CapsLock") && isUpperRegister) {
    //   button.classList.add("clicked");
    // }
    // if (KEYBOARD_MAP[i][register].includes("Ctrl")) {
    //   button.innerHTML = `<span>Ctrl</span>`;
    // } else if (KEYBOARD_MAP[i][register].includes("Shift")) {
    //   button.innerHTML = `<span>Shift</span>`;
    // } else if (KEYBOARD_MAP[i][register].includes("Solidus")) {
    //   button.innerHTML = `<span>&#47;</span>`;
    // } else if (KEYBOARD_MAP[i][register].includes("Space")) {
    //   button.innerText = null;
    // } else if (KEYBOARD_MAP[i][register].includes("Up")) {
    //   button.innerHTML = `<span>&uarr;</span>`;
    // } else if (KEYBOARD_MAP[i][register].includes("Left")) {
    //   button.innerHTML = `<span>&larr;</span>`;
    // } else if (KEYBOARD_MAP[i][register].includes("Down")) {
    //   button.innerHTML = `<span>&darr;</span>`;
    // } else if (KEYBOARD_MAP[i][register].includes("Right")) {
    //   button.innerHTML = `<span>&rarr;</span>`;
    // } else {
    //   button.innerHTML = `<span>${KEYBOARD_MAP[i][register]}</span>`;
    // }
    const button = document.createElement("div");
    button.classList.add("button");
    button.id = KEYBOARD_MAP_2[i].desc;
    button.addEventListener("mousedown", handleButtonMouseDown);
    button.addEventListener("mouseup", handleButtonMouseUp);

    if (lang === "en")
      button.innerHTML = `<span>${KEYBOARD_MAP_2[i].eng}</span>`;
    else button.innerHTML = `<span>${KEYBOARD_MAP_2[i].by}</span>`;

    keyboardWrapper.appendChild(button);
  }
}

function fillDescription() {
  const discriptionParagraph = document.querySelector(".discription-paragraph");
  if (lang === "en") {
    discriptionParagraph.innerText = `The keyboard was created in the Linux OS
    To switch language, press: Win + Space`;
  } else {
    discriptionParagraph.innerText = `Клавіятура створана ў АC Linux
    Каб пераключыць мову, націсніце: Win + Space`;
  }
}

function setLang() {
  const langMarker = document.querySelector(".lang-marker");
  langMarker.classList.toggle("en");
  fillKeyboard();
  fillDescription();
  const capsLockKey = document.querySelector("#capslock");
  isUpperRegister = false;
  capsLockKey.classList.remove("clicked");
  if (lang === "en") {
    lang = "by";
    localStorage.setItem("lang", lang);
    langMarker.innerText = lang.toUpperCase();
  } else {
    lang = "en";
    localStorage.setItem("lang", lang);
    langMarker.innerText = lang.toUpperCase();
  }
}

function handleButtonClick(event) {
  //   const display = document.querySelector(".display");
  //   display.value += event.currentTarget.innerText;
  //   //   console.log("event.target.id", event.currentTarget.id);
  //   const target = event.currentTarget;
  //   if (target.id.contains("capslock")) {
  //     handleCapsLock();
  //   } else if (target.classList.contains("button")) {
  //     target.classList.add("clicked");
  //     setTimeout(() => {
  //       target.classList.remove("clicked");
  //     }, 200);
  //   }
}

function handleButtonMouseDown(event) {
  if (event.currentTarget.classList.contains("button")) {
    event.currentTarget.classList.add("clicked");
  }
  //   const target = event.currentTarget;
  //   target.classList.add("clicked");
  //   //   toggleRegister();
  //   if (target.innerText === "Shift") {
  //     // console.log("isUpperRegister", isUpperRegister);
  //     const shiftText = target.id;
  //     if (lang === "en") {
  //       fillKeyboard(1);
  //       console.log("shift", target.id);
  //       const shiftKey = document.querySelector(`#${target.id}`);
  //       shiftKey.classList.add("clicked");
  //     } else {
  //       fillKeyboard(3);
  //       console.log("shift", target);
  //       const shiftKey = document.querySelector(`#${target.id}`);
  //       shiftKey.classList.add("clicked");
  //     }
  //     // handleShift(event);
  //   }
}

function handleButtonMouseUp(event) {
  event.currentTarget.classList.remove("clicked");
  //   const target = event.currentTarget;
  //   //   toggleRegister();
  //   if (lang === "en") {
  //     console.log("mouseUp", target);
  //     if (isUpperRegister) {
  //       fillKeyboard(0);
  //       handleCapsLock();
  //     } else {
  //       fillKeyboard(0);
  //     }
  //   } else {
  //     if (isUpperRegister) {
  //       fillKeyboard(2);
  //       handleCapsLock();
  //     } else {
  //       fillKeyboard(2);
  //     }
  //   }
}

function handleCapsLock() {
  const buttons = document.querySelectorAll(".button");
  // console.log(buttons);
  for (let i = 0; i < buttons.length; i++) {
    const text = buttons[i].querySelector("span");
    //   console.log("text", text);
    if (isUpperRegister) {
      if (text) {
        lang === "en" ? fillKeyboard(0) : fillKeyboard(2);
      }
    } else {
      if (text) {
        if (
          text.innerText.includes("Alt") ||
          text.innerText.includes("Ctrl") ||
          text.innerText.includes("Shift") ||
          text.innerText.includes("Tab") ||
          text.innerText.includes("Del") ||
          text.innerText.includes("CapsLock") ||
          text.innerText.includes("Win") ||
          text.innerText.includes("Enter") ||
          text.innerText.includes("Backspace")
        ) {
          continue;
        } else {
          text.innerText = text.innerText.toUpperCase();
        }
      }
    }
  }
  const capsLockKey = document.querySelector(".capslock");
  capsLockKey.classList.toggle("clicked");
  toggleRegister();
}

// function handleShift(event) {
//   const target = event.currentTarget;
//   if (lang === "en") {
//     fillKeyboard(1);
//     // console.log("shift", target.id);
//     const shiftKey = document.querySelector(`#${target.id}`);
//     shiftKey.classList.add("clicked");
//   } else {
//     fillKeyboard(3);
//     // console.log("shift", target);
//     const shiftKey = document.querySelector(`#${target.id}`);
//     shiftKey.classList.add("clicked");
//   }
// }

function toggleRegister() {
  isUpperRegister = !isUpperRegister;
}

// const keyCodes = [
//   192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8, 9, 81, 87, 69, 82,
//   84, 89, 85, 73, 79, 80, 219, 221, 220, 46, 20, 65, 83, 68, 70, 71, 72, 74, 75,
//   76, 186, 222, 13, 16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 38, 16, 17,
//   18, 32, 18, 37, 40, 39, 17,
// ];
// console.log(keyCodes.length, KEYBOARD_MAP.length);
function handleKeyDown(event) {
  console.log(event.keyCode);
  //   const target = event.currentTarget;
  event.preventDefault();
  event.stopPropagation();
  //   keyCodes.push(event.keyCode);
  //   console.log(keyCodes);
  //   console.log(event);
  if (event.ctrlKey && event.key === "Alt") {
    setLang();
  }
  if (event.key === "Shift") {
    if (lang === "en") {
      fillKeyboard(1);
      console.log("shift", event);
      //   const shiftKey = document.querySelector(`.${event.key}`);
      //   shiftKey.classList.add("clicked");
    } else {
      fillKeyboard(3);
      console.log("shift", event);
      //   const shiftKey = document.querySelector(`.${event.key}`);
      //   shiftKey.classList.add("clicked");
    }
  }
  console.log(event.defaultPrevented);
}

function handleKeyUp(event) {
  event.preventDefault();
  event.stopPropagation();
  if (lang === "en") {
    fillKeyboard(0);
    // console.log("unshift", target);
    // const shiftKey = document.querySelector(`#${target.id}`);
    // shiftKey.classList.add("clicked");
  } else {
    fillKeyboard(2);
    // console.log("unshift", target);
    // const shiftKey = document.querySelector(`#${target.id}`);
    // shiftKey.classList.add("clicked");
  }
}

function handleKeyPress(event) {
  event.preventDefault();
  event.stopPropagation();
}

document.addEventListener("DOMContentLoaded", formDocument);
document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);
document.addEventListener("keypress", handleKeyPress);
