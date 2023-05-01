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
  console.log(
    "filling",
    lang,
    "capsLockPressed",
    capsLockPressed,
    "shiftPressed",
    shiftPressed
  );
  const keyboardWrapper = document.querySelector(".keyboard-wrapper");
  keyboardWrapper.innerHTML = null;
  //   const enterPress = new KeyboardEvent("keyup", { key: "Enter", char: 13 });
  for (let i = 0; i < KEYBOARD_MAP.length; i++) {
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
    if (KEYBOARD_MAP[i].isSpecial) {
      button.classList.add("special");
    }
    button.id = KEYBOARD_MAP[i].desc;
    // button.dataset.keyCode = KEYBOARD_MAP_2[i].charcode;
    button.addEventListener("mousedown", handleButtonMouseDown);
    button.addEventListener("mouseup", handleButtonMouseUp);
    // if (button.id.includes("Enter")) {
    //   //   console.log("added on enter", enterPress);
    //   button.addEventListener("click", () => {
    //     document.dispatchEvent(enterPress);
    //   });
    // }

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
    whichShift = document.querySelector(`#${shiftPressed}`);
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
  const langMarker = document.querySelector(".lang-marker");
  langMarker.classList.toggle("en");
  if (lang === "en") {
    lang = "by";
    localStorage.setItem("lang", lang);
    capsLockPressed = false;
    fillKeyboard();
    fillDescription();
    langMarker.innerText = lang.toUpperCase();
    const capsLockKey = document.querySelector("#CapsLock");
    capsLockKey.classList.remove("clicked");
  } else {
    lang = "en";
    localStorage.setItem("lang", lang);
    capsLockPressed = false;
    fillKeyboard();
    fillDescription();
    langMarker.innerText = lang.toUpperCase();
    const capsLockKey = document.querySelector("#CapsLock");
    capsLockKey.classList.remove("clicked");
  }
}

// function handleButtonClick(event) {
//   //   const display = document.querySelector(".display");
//   //   display.value += event.currentTarget.innerText;
//   //   //   console.log("event.target.id", event.currentTarget.id);
//   //   const target = event.currentTarget;
//   //   if (target.id.contains("capslock")) {
//   //     handleCapsLock();
//   //   } else if (target.classList.contains("button")) {
//   //     target.classList.add("clicked");
//   //     setTimeout(() => {
//   //       target.classList.remove("clicked");
//   //     }, 200);
//   //   }
// }

function handleButtonMouseDown(event) {
  if (event.currentTarget.classList.contains("button")) {
    event.currentTarget.classList.toggle("clicked");
    // const whichShift = event.currentTarget.id;
    // console.log(whichShift);
    if (event.currentTarget.id.includes("Shift")) {
      shiftPressed = event.currentTarget.id;
      fillKeyboard();
      console.log("which shift", shiftPressed);

      const shiftKey = document.querySelector(`#${shiftPressed}`);
      console.log("shiftKey", shiftKey);
      shiftKey.classList.add("clicked");
    }
    if (event.currentTarget.id.includes("CapsLock")) {
      capsLockPressed = !capsLockPressed;
      fillKeyboard();
    }
    if (event.currentTarget.id.includes("Tab")) {
    }
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
  const target = event.currentTarget;
  const display = document.querySelector(".display");
  if (!target.classList.contains("special")) {
    display.value += target.innerText;
  } else {
    if (target.id.includes("Arrow")) {
      display.value += target.innerText;
      display.focus();
    }
    if (target.id.includes("Space")) {
      display.value += " ";
      display.focus();
    }
    if (target.id.includes("Enter")) {
      display.value += "\n";
      display.focus();
    }
    if (target.id.includes("Tab")) {
      display.value += "    ";
      display.focus();
    }
    if (target.id.includes("Backspace")) {
      console.log("display.selectionEnd", display.selectionEnd);
      const rangeEnd = display.selectionEnd;
      console.log(
        "first",
        display.value.slice(0, display.selectionEnd - 1),
        "second",
        display.value.slice(display.selectionEnd + 1)
      );

      display.value =
        display.value.slice(0, display.selectionEnd - 1) +
        display.value.slice(display.selectionEnd);
      display.focus();
      display.setSelectionRange(rangeEnd - 1, rangeEnd - 1);
    }
    if (target.id.includes("Delete")) {
      const rangeEnd = display.selectionEnd;
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
  } else {
    console.log("capslock", capsLockPressed);
  }
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

// function handleCapsLock() {
//   //   const buttons = document.querySelectorAll(".button");
//   //   // console.log(buttons);
//   //   for (let i = 0; i < buttons.length; i++) {
//   //     const text = buttons[i].querySelector("span");
//   //     //   console.log("text", text);
//   //     if (isUpperRegister) {
//   //       if (text) {
//   //         lang === "en" ? fillKeyboard(0) : fillKeyboard(2);
//   //       }
//   //     } else {
//   //       if (text) {
//   //         if (
//   //           text.innerText.includes("Alt") ||
//   //           text.innerText.includes("Ctrl") ||
//   //           text.innerText.includes("Shift") ||
//   //           text.innerText.includes("Tab") ||
//   //           text.innerText.includes("Del") ||
//   //           text.innerText.includes("CapsLock") ||
//   //           text.innerText.includes("Win") ||
//   //           text.innerText.includes("Enter") ||
//   //           text.innerText.includes("Backspace")
//   //         ) {
//   //           continue;
//   //         } else {
//   //           text.innerText = text.innerText.toUpperCase();
//   //         }
//   //       }
//   //     }
//   //   }
//   //   const capsLockKey = document.querySelector(".capslock");
//   //   capsLockKey.classList.toggle("clicked");
//   //   toggleRegister();
// }

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

// function toggleRegister() {
//   isUpperRegister = !isUpperRegister;
// }

// console.log(keyCodes.length, KEYBOARD_MAP.length);

function handleKeyDown(event) {
  console.log(event);
  //   codes.push(event.code);
  //   console.log(codes);
  //   console.log(event.keyCode);
  //   const target = event.currentTarget;
  //   event.preventDefault();
  //   event.stopPropagation();
  //   console.log(event);
  const buttons = document.querySelectorAll(".button");
  const display = document.querySelector(".display");
  display.focus();
  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].id === event.code) {
      buttons[i].classList.add("clicked");
      if (buttons[i].id === "CapsLock") {
        capsLockPressed = !capsLockPressed;
        fillKeyboard();
      }
    }
  }
  if (event.code.includes("Shift")) {
    shiftPressed = event.code;
    fillKeyboard();
  }
  if (event.ctrlKey && event.key === "Alt") {
    setLang();
  }
  if (event.code.includes("Tab")) {
    event.preventDefault();
    display.value += "    ";
  }
  //   if ()
  //   if (event.key === "Shift") {
  //     if (lang === "en") {
  //       fillKeyboard(1);
  //       console.log("shift", event);
  //       //   const shiftKey = document.querySelector(`.${event.key}`);
  //       //   shiftKey.classList.add("clicked");
  //     } else {
  //       fillKeyboard(3);
  //       console.log("shift", event);
  //       //   const shiftKey = document.querySelector(`.${event.key}`);
  //       //   shiftKey.classList.add("clicked");
  //     }
  //   }
  //   console.log(event.defaultPrevented);
}

function handleKeyUp(event) {
  const buttons = document.querySelectorAll(".button");
  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].id !== "CapsLock") {
      buttons[i].classList.remove("clicked");
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

  //   event.preventDefault();
  //   event.stopPropagation();
  //   if (lang === "en") {
  //     fillKeyboard(0);
  //     // console.log("unshift", target);
  //     // const shiftKey = document.querySelector(`#${target.id}`);
  //     // shiftKey.classList.add("clicked");
  //   } else {
  //     fillKeyboard(2);
  //     // console.log("unshift", target);
  //     // const shiftKey = document.querySelector(`#${target.id}`);
  //     // shiftKey.classList.add("clicked");
  //   }
}

// function handleKeyPress(event) {
//   //   event.preventDefault();
//   //   event.stopPropagation();
// }

document.addEventListener("DOMContentLoaded", formDocument);
document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);
// document.addEventListener("keypress", handleKeyPress);
