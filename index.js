const KEYBOARD_MAP = [
  { charcode: 192, desc: "Backquote", eng: "`", engShift: "~", by: "ё" },
  {
    charcode: 49,
    desc: "Digit1",
    eng: "1",
    engShift: "!",
    by: "1",
    byShift: "!",
  },
  {
    charcode: 50,
    desc: "Digit2",
    eng: "2",
    engShift: "@",
    by: "2",
    byShift: '"',
  },
  {
    charcode: 51,
    desc: "Digit3",
    eng: "3",
    engShift: "#",
    by: "3",
    byShift: "№",
  },
  {
    charcode: 52,
    desc: "Digit4",
    eng: "4",
    engShift: "$",
    by: "4",
    byShift: ";",
  },
  {
    charcode: 53,
    desc: "Digit5",
    eng: "5",
    engShift: "%",
    by: "5",
    byShift: "%",
  },
  {
    charcode: 54,
    desc: "Digit6",
    eng: "6",
    engShift: "^",
    by: "6",
    byShift: ":",
  },
  {
    charcode: 55,
    desc: "Digit7",
    eng: "7",
    engShift: "&",
    by: "7",
    byShift: "?",
  },
  {
    charcode: 56,
    desc: "Digit8",
    eng: "8",
    engShift: "*",
    by: "8",
    byShift: "*",
  },
  {
    charcode: 57,
    desc: "Digit9",
    eng: "9",
    engShift: "(",
    by: "9",
    byShift: "(",
  },
  {
    charcode: 48,
    desc: "Digit0",
    eng: "0",
    engShift: ")",
    by: "0",
    byShift: ")",
  },
  {
    charcode: 189,
    desc: "Minus",
    eng: "-",
    engShift: "_",
    by: "-",
    byShift: "_",
  },
  {
    charcode: 187,
    desc: "Equal",
    eng: "=",
    engShift: "+",
    by: "=",
    byShift: "+",
  },
  {
    charcode: 8,
    desc: "Backspace",
    eng: "Backspace",
    by: "Backspace",
    isSpecial: true,
  },
  { charcode: 9, desc: "Tab", eng: "Tab", by: "Tab", isSpecial: true },
  { charcode: 81, desc: "KeyQ", eng: "q", by: "й" },
  { charcode: 87, desc: "KeyW", eng: "w", by: "ц" },
  { charcode: 69, desc: "KeyE", eng: "e", by: "у" },
  { charcode: 82, desc: "KeyR", eng: "r", by: "к" },
  { charcode: 84, desc: "KeyT", eng: "t", by: "е" },
  { charcode: 89, desc: "KeyY", eng: "y", by: "н" },
  { charcode: 85, desc: "KeyU", eng: "u", by: "г" },
  { charcode: 73, desc: "KeyI", eng: "i", by: "ш" },
  { charcode: 79, desc: "KeyO", eng: "o", by: "ў" },
  { charcode: 80, desc: "KeyP", eng: "p", by: "з" },
  {
    charcode: 219,
    desc: "BracketLeft",
    eng: "[",
    engShift: "{",
    by: "х",
  },
  {
    charcode: 221,
    desc: "BracketRight",
    eng: "]",
    engShift: "}",
    by: "'",
    byShift: '"',
  },
  {
    charcode: 220,
    desc: "Backslash",
    eng: "&#92;",
    engShift: "|",
    by: "&#92;",
    byShift: "/",
  },
  { charcode: 46, desc: "Delete", eng: "Del", by: "Del", isSpecial: true },
  {
    charcode: 20,
    desc: "CapsLock",
    eng: "CapsLock",
    by: "CapsLock",
    isSpecial: true,
  },
  { charcode: 65, desc: "KeyA", eng: "a", by: "ф" },
  { charcode: 83, desc: "KeyS", eng: "s", by: "ы" },
  { charcode: 68, desc: "KeyD", eng: "d", by: "в" },
  { charcode: 70, desc: "KeyF", eng: "f", by: "а" },
  { charcode: 71, desc: "KeyG", eng: "g", by: "п" },
  { charcode: 72, desc: "KeyH", eng: "h", by: "р" },
  { charcode: 74, desc: "KeyJ", eng: "j", by: "о" },
  { charcode: 75, desc: "KeyK", eng: "k", by: "л" },
  { charcode: 76, desc: "KeyL", eng: "l", by: "д" },
  { charcode: 186, desc: "Semicolon", eng: ";", engShift: ":", by: "ж" },
  { charcode: 222, desc: "Quote", eng: "'", engShift: '"', by: "э" },
  { charcode: 13, desc: "Enter", eng: "Enter", by: "Enter", isSpecial: true },
  {
    charcode: 16,
    desc: "ShiftLeft",
    eng: "Shift",
    by: "Shift",
    isSpecial: true,
  },
  { charcode: 90, desc: "KeyZ", eng: "z", by: "я" },
  { charcode: 88, desc: "KeyX", eng: "x", by: "ч" },
  { charcode: 67, desc: "KeyC", eng: "c", by: "с" },
  { charcode: 86, desc: "KeyV", eng: "v", by: "м" },
  { charcode: 66, desc: "KeyB", eng: "b", by: "і" },
  { charcode: 78, desc: "KeyN", eng: "n", by: "т" },
  { charcode: 77, desc: "KeyM", eng: "m", by: "ь" },
  { charcode: 188, desc: "Comma", eng: ",", engShift: "<", by: "б" },
  {
    charcode: 190,
    desc: "Period",
    eng: ".",
    engShift: ">",
    by: "ю",
  },
  {
    charcode: 191,
    desc: "Slash",
    eng: "/",
    engShift: "?",
    by: ".",
    byShift: ",",
  },
  {
    charcode: 38,
    desc: "ArrowUp",
    eng: "&uarr;",
    by: "&uarr;",
    isSpecial: true,
  },
  {
    charcode: 16,
    desc: "ShiftRight",
    eng: "Shift",
    by: "Shift",
    isSpecial: true,
  },
  {
    charcode: 17,
    desc: "ControlLeft",
    eng: "Ctrl",
    by: "Ctrl",
    isSpecial: true,
  },
  { charcode: 91, desc: "Win", eng: "Win", by: "Win", isSpecial: true },
  { charcode: 18, desc: "AltLeft", eng: "Alt", by: "Alt", isSpecial: true },
  { charcode: 32, desc: "Space", eng: " ", by: " ", isSpecial: true },
  { charcode: 18, desc: "AltRight", eng: "Alt", by: "Alt", isSpecial: true },
  {
    charcode: 37,
    desc: "ArrowLeft",
    eng: "&larr;",
    by: "&larr;",
    isSpecial: true,
  },
  {
    charcode: 40,
    desc: "ArrowDown",
    eng: "&darr;",
    by: "&darr;",
    isSpecial: true,
  },
  {
    charcode: 39,
    desc: "ArrowRight",
    eng: "&rarr;",
    by: "&rarr;",
    isSpecial: true,
  },
  {
    charcode: 17,
    desc: "ControlRight",
    eng: "Ctrl",
    by: "Ctrl",
    isSpecial: true,
  },
];

let lang = localStorage.lang ? localStorage.lang : "en";
let shiftPressed = false;
let capsLockPressed = false;

function formDocument() {
  const body = document.createElement("body");
  document.documentElement.appendChild(body);

  const wrapper = document.createElement("main");
  wrapper.classList.add("wrapper");
  body.insertAdjacentElement("afterbegin", wrapper);

  const heading = document.createElement("h1");
  heading.classList.add("heading");
  heading.innerText = `Virtual Keyboard`;
  wrapper.appendChild(heading);

  const display = document.createElement("textarea");
  display.rows = 10;
  display.cols = 50;
  display.classList.add("display");
  wrapper.appendChild(display);
  if (lang === "en") {
    display.classList.add("en");
  }
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
  const keyboardWrapper = document.querySelector(".keyboard-wrapper");
  keyboardWrapper.innerHTML = null;
  for (let i = 0; i < KEYBOARD_MAP.length; i++) {
    const button = document.createElement("div");
    button.classList.add("button");
    if (KEYBOARD_MAP[i].isSpecial) {
      button.classList.add("special");
    }
    button.id = KEYBOARD_MAP[i].desc;
    button.addEventListener("mousedown", handleButtonMouseDown);
    button.addEventListener("mouseup", handleButtonMouseUp);

    if (lang === "en") {
      if (capsLockPressed) {
        button.classList.contains("special")
          ? (button.innerHTML = `<span>${KEYBOARD_MAP[i].eng}</span>`)
          : (button.innerHTML = `<span>${KEYBOARD_MAP[
              i
            ].eng.toUpperCase()}</span>`);
      } else {
        button.innerHTML = `<span>${KEYBOARD_MAP[i].eng}</span>`;
      }
      if (shiftPressed) {
        if (KEYBOARD_MAP[i].engShift) {
          button.innerHTML = `<span>${KEYBOARD_MAP[i].engShift}</span>`;
        } else {
          button.classList.contains("special")
            ? (button.innerHTML = `<span>${KEYBOARD_MAP[i].eng}</span>`)
            : (button.innerHTML = `<span>${KEYBOARD_MAP[
                i
              ].eng.toUpperCase()}</span>`);
        }
      }
    } else {
      if (capsLockPressed) {
        button.classList.contains("special")
          ? (button.innerHTML = `<span>${KEYBOARD_MAP[i].by}</span>`)
          : (button.innerHTML = `<span>${KEYBOARD_MAP[
              i
            ].by.toUpperCase()}</span>`);
      } else {
        button.innerHTML = `<span>${KEYBOARD_MAP[i].by}</span>`;
      }
      if (shiftPressed) {
        if (KEYBOARD_MAP[i].byShift) {
          button.innerHTML = `<span>${KEYBOARD_MAP[i].byShift}</span>`;
        } else {
          button.classList.contains("special")
            ? (button.innerHTML = `<span>${KEYBOARD_MAP[i].by}</span>`)
            : (button.innerHTML = `<span>${KEYBOARD_MAP[
                i
              ].by.toUpperCase()}</span>`);
        }
      }
    }
    keyboardWrapper.appendChild(button);
  }
  const capsLockKey = document.querySelector("#CapsLock");
  if (capsLockPressed) {
    capsLockKey.classList.add("clicked");
  }
  if (shiftPressed) {
    const whichShift = document.querySelector(`#${shiftPressed}`);
    whichShift.classList.add("clicked");
  }
}

function fillDescription() {
  const discriptionParagraph = document.querySelector(".discription-paragraph");
  if (lang === "en") {
    discriptionParagraph.innerText = `The keyboard was created in the Linux OS
    To switch language, press: Alt + Ctrl`;
  } else {
    discriptionParagraph.innerText = `Клавіятура створана ў АC Linux
    Каб пераключыць мову, націсніце: Alt + Ctrl`;
  }
}

function setLang() {
  const display = document.querySelector(".display");
  display.classList.toggle("en");
  if (lang === "en") {
    lang = "by";
    localStorage.setItem("lang", lang);
    capsLockPressed = false;
    fillKeyboard();
    fillDescription();
    const capsLockKey = document.querySelector("#CapsLock");
    capsLockKey.classList.remove("clicked");
  } else {
    lang = "en";
    localStorage.setItem("lang", lang);
    capsLockPressed = false;
    fillKeyboard();
    fillDescription();
    const capsLockKey = document.querySelector("#CapsLock");
    capsLockKey.classList.remove("clicked");
  }
}

function handleButtonMouseDown(event) {
  if (event.currentTarget.classList.contains("button")) {
    event.currentTarget.classList.toggle("clicked");
    if (event.currentTarget.id.includes("Shift")) {
      shiftPressed = event.currentTarget.id;
      fillKeyboard();
      const shiftKey = document.querySelector(`#${shiftPressed}`);
      shiftKey.classList.add("clicked");
    }
    if (event.currentTarget.id.includes("CapsLock")) {
      capsLockPressed = !capsLockPressed;
      fillKeyboard();
    }
  }
}

function handleButtonMouseUp(event) {
  const target = event.currentTarget;
  const display = document.querySelector(".display");
  const rangeEnd = display.selectionEnd;
  if (!target.classList.contains("special")) {
    display.value =
      display.value.slice(0, display.selectionEnd) +
      target.innerText +
      display.value.slice(display.selectionEnd);
    display.focus();
    display.setSelectionRange(rangeEnd + 1, rangeEnd + 1);
  } else {
    if (target.id.includes("Arrow")) {
      display.value =
        display.value.slice(0, display.selectionEnd) +
        target.innerText +
        display.value.slice(display.selectionEnd);
      display.focus();
      display.setSelectionRange(rangeEnd + 1, rangeEnd + 1);
    }
    if (target.id.includes("Space")) {
      display.value =
        display.value.slice(0, display.selectionEnd) +
        " " +
        display.value.slice(display.selectionEnd);
      display.focus();
      display.setSelectionRange(rangeEnd + 1, rangeEnd + 1);
    }
    if (target.id.includes("Enter")) {
      display.value =
        display.value.slice(0, display.selectionEnd) +
        "\n" +
        display.value.slice(display.selectionEnd);
      display.focus();
      display.setSelectionRange(rangeEnd + 1, rangeEnd + 1);
    }
    if (target.id.includes("Tab")) {
      display.value =
        display.value.slice(0, display.selectionEnd) +
        "    " +
        display.value.slice(display.selectionEnd);
      display.focus();
      display.setSelectionRange(rangeEnd + 4, rangeEnd + 4);
    }
    if (target.id.includes("Backspace")) {
      if (display.selectionEnd) {
        display.value =
          display.value.slice(0, display.selectionEnd - 1) +
          display.value.slice(display.selectionEnd);
        display.focus();
        display.setSelectionRange(rangeEnd - 1, rangeEnd - 1);
      }
    }
    if (target.id.includes("Delete")) {
      display.value =
        display.value.slice(0, display.selectionEnd) +
        display.value.slice(display.selectionEnd + 1);
      display.focus();
      display.setSelectionRange(rangeEnd, rangeEnd);
    }
  }
  if (target.id !== "CapsLock") {
    target.classList.remove("clicked");
    if (target.id.includes("Shift")) {
      shiftPressed = false;
      fillKeyboard();
    }
  }
}

function handleKeyDown(event) {
  const buttons = document.querySelectorAll(".button");
  const display = document.querySelector(".display");
  const eventCode = event.code;
  const keyboardMapItem = KEYBOARD_MAP.find((item) => item.desc === eventCode);
  display.focus();
  if (keyboardMapItem) {
    if (!keyboardMapItem.isSpecial || keyboardMapItem.desc === "Tab") {
      event.preventDefault();
    }
    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i].id === eventCode) {
        buttons[i].classList.add("clicked");
        if (buttons[i].id === "CapsLock") {
          capsLockPressed = !capsLockPressed;
          fillKeyboard();
        }
      }
    }
    if (eventCode.includes("Shift")) {
      shiftPressed = eventCode;
      fillKeyboard();
    }
    if (
      (event.ctrlKey && event.key === "Alt") ||
      (event.altKey && event.key === "Control")
    ) {
      setLang();
    }
  }
}

function handleKeyUp(event) {
  const buttons = document.querySelectorAll(".button");
  const display = document.querySelector(".display");
  const rangeEnd = display.selectionEnd;
  const eventCode = event.code;
  const keyboardMapItem = KEYBOARD_MAP.find((item) => item.desc === eventCode);
  let buttonText = null;
  if (keyboardMapItem) {
    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i].id === eventCode) {
        buttonText = buttons[i].innerText;
      }
    }
    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i].id !== "CapsLock") {
        if (buttons[i].id === event.code) {
          buttons[i].classList.remove("clicked");
        }
      }
    }
    if (event.code.includes("Shift")) {
      if (shiftPressed) {
        shiftPressed = false;
      } else {
        shiftPressed = event.code;
      }
      fillKeyboard();
    }

    if (eventCode.includes("Tab")) {
      event.preventDefault();
      display.value =
        display.value.slice(0, display.selectionEnd) +
        "    " +
        display.value.slice(display.selectionEnd);
      display.focus();
      display.setSelectionRange(rangeEnd + 4, rangeEnd + 4);
    }
    if (!keyboardMapItem.isSpecial) {
      event.preventDefault();
      display.value =
        display.value.slice(0, display.selectionEnd) +
        buttonText +
        display.value.slice(display.selectionEnd);
      display.focus();
      display.setSelectionRange(rangeEnd + 1, rangeEnd + 1);
    }
  }
}

document.addEventListener("DOMContentLoaded", formDocument);
document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);
