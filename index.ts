type KeyboardType = {
  desc: string;
  eng: string;
  engShift?: string;
  by: string;
  byShift?: string;
  isSpecial?: boolean;
};

const KEYBOARD_MAP: KeyboardType[] = [
  {
    desc: "Backquote",
    eng: "`",
    engShift: "~",
    by: "ё",
  },
  {
    desc: "Digit1",
    eng: "1",
    engShift: "!",
    by: "1",
    byShift: "!",
  },
  {
    desc: "Digit2",
    eng: "2",
    engShift: "@",
    by: "2",
    byShift: '"',
  },
  {
    desc: "Digit3",
    eng: "3",
    engShift: "#",
    by: "3",
    byShift: "№",
  },
  {
    desc: "Digit4",
    eng: "4",
    engShift: "$",
    by: "4",
    byShift: ";",
  },
  {
    desc: "Digit5",
    eng: "5",
    engShift: "%",
    by: "5",
    byShift: "%",
  },
  {
    desc: "Digit6",
    eng: "6",
    engShift: "^",
    by: "6",
    byShift: ":",
  },
  {
    desc: "Digit7",
    eng: "7",
    engShift: "&",
    by: "7",
    byShift: "?",
  },
  {
    desc: "Digit8",
    eng: "8",
    engShift: "*",
    by: "8",
    byShift: "*",
  },
  {
    desc: "Digit9",
    eng: "9",
    engShift: "(",
    by: "9",
    byShift: "(",
  },
  {
    desc: "Digit0",
    eng: "0",
    engShift: ")",
    by: "0",
    byShift: ")",
  },
  {
    desc: "Minus",
    eng: "-",
    engShift: "_",
    by: "-",
    byShift: "_",
  },
  {
    desc: "Equal",
    eng: "=",
    engShift: "+",
    by: "=",
    byShift: "+",
  },
  {
    desc: "Backspace",
    eng: "Backspace",
    by: "Backspace",
    isSpecial: true,
  },
  {
    desc: "Tab",
    eng: "Tab",
    by: "Tab",
    isSpecial: true,
  },
  { desc: "KeyQ", eng: "q", by: "й" },
  { desc: "KeyW", eng: "w", by: "ц" },
  { desc: "KeyE", eng: "e", by: "у" },
  { desc: "KeyR", eng: "r", by: "к" },
  { desc: "KeyT", eng: "t", by: "е" },
  { desc: "KeyY", eng: "y", by: "н" },
  { desc: "KeyU", eng: "u", by: "г" },
  { desc: "KeyI", eng: "i", by: "ш" },
  { desc: "KeyO", eng: "o", by: "ў" },
  { desc: "KeyP", eng: "p", by: "з" },
  {
    desc: "BracketLeft",
    eng: "[",
    engShift: "{",
    by: "х",
  },
  {
    desc: "BracketRight",
    eng: "]",
    engShift: "}",
    by: "'",
    byShift: '"',
  },
  {
    desc: "Backslash",
    eng: "&#92;",
    engShift: "|",
    by: "&#92;",
    byShift: "/",
  },
  {
    desc: "Delete",
    eng: "Del",
    by: "Del",
    isSpecial: true,
  },
  {
    desc: "CapsLock",
    eng: "CapsLock",
    by: "CapsLock",
    isSpecial: true,
  },
  { desc: "KeyA", eng: "a", by: "ф" },
  { desc: "KeyS", eng: "s", by: "ы" },
  { desc: "KeyD", eng: "d", by: "в" },
  { desc: "KeyF", eng: "f", by: "а" },
  { desc: "KeyG", eng: "g", by: "п" },
  { desc: "KeyH", eng: "h", by: "р" },
  { desc: "KeyJ", eng: "j", by: "о" },
  { desc: "KeyK", eng: "k", by: "л" },
  { desc: "KeyL", eng: "l", by: "д" },
  {
    desc: "Semicolon",
    eng: ";",
    engShift: ":",
    by: "ж",
  },
  {
    desc: "Quote",
    eng: "'",
    engShift: '"',
    by: "э",
  },
  {
    desc: "Enter",
    eng: "Enter",
    by: "Enter",
    isSpecial: true,
  },
  {
    desc: "ShiftLeft",
    eng: "Shift",
    by: "Shift",
    isSpecial: true,
  },
  { desc: "KeyZ", eng: "z", by: "я" },
  { desc: "KeyX", eng: "x", by: "ч" },
  { desc: "KeyC", eng: "c", by: "с" },
  { desc: "KeyV", eng: "v", by: "м" },
  { desc: "KeyB", eng: "b", by: "і" },
  { desc: "KeyN", eng: "n", by: "т" },
  { desc: "KeyM", eng: "m", by: "ь" },
  {
    desc: "Comma",
    eng: ",",
    engShift: "<",
    by: "б",
  },
  {
    desc: "Period",
    eng: ".",
    engShift: ">",
    by: "ю",
  },
  {
    desc: "Slash",
    eng: "/",
    engShift: "?",
    by: ".",
    byShift: ",",
  },
  {
    desc: "ArrowUp",
    eng: "&uarr;",
    by: "&uarr;",
    isSpecial: true,
  },
  {
    desc: "ShiftRight",
    eng: "Shift",
    by: "Shift",
    isSpecial: true,
  },
  {
    desc: "ControlLeft",
    eng: "Ctrl",
    by: "Ctrl",
    isSpecial: true,
  },
  {
    desc: "Win",
    eng: "Win",
    by: "Win",
    isSpecial: true,
  },
  {
    desc: "AltLeft",
    eng: "Alt",
    by: "Alt",
    isSpecial: true,
  },
  {
    desc: "Space",
    eng: " ",
    by: " ",
    isSpecial: true,
  },
  {
    desc: "AltRight",
    eng: "Alt",
    by: "Alt",
    isSpecial: true,
  },
  {
    desc: "ArrowLeft",
    eng: "&larr;",
    by: "&larr;",
    isSpecial: true,
  },
  {
    desc: "ArrowDown",
    eng: "&darr;",
    by: "&darr;",
    isSpecial: true,
  },
  {
    desc: "ArrowRight",
    eng: "&rarr;",
    by: "&rarr;",
    isSpecial: true,
  },
  {
    desc: "ControlRight",
    eng: "Ctrl",
    by: "Ctrl",
    isSpecial: true,
  },
];

let lang: string = localStorage.lang ? localStorage.lang : "en";
let shiftPressed: boolean | string = false;
let capsLockPressed: boolean = false;
console.log("code start", lang);

function formDocument(): void {
  const body = document.createElement("body");
  document.documentElement.appendChild(body);

  const wrapper = document.createElement("main");
  wrapper.classList.add("wrapper");
  body.insertAdjacentElement("afterbegin", wrapper);

  const heading = document.createElement("h1");
  heading.classList.add("heading");
  heading.innerText = "Virtual Keyboard";
  wrapper.appendChild(heading);

  const display = document.createElement("textarea");
  display.rows = 10;
  display.cols = 50;
  display.classList.add("display");
  wrapper.appendChild(display);
  if (lang === "en") {
    display.classList.add("en");
  }

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

function fillKeyboard(): void {
  const keyboardWrapper: HTMLElement | null =
    document.querySelector(".keyboard-wrapper");
  if (keyboardWrapper) keyboardWrapper.innerHTML = "";
  for (let i = 0; i < KEYBOARD_MAP.length; i += 1) {
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
    if (keyboardWrapper) keyboardWrapper.appendChild(button);
  }
  const capsLockKey = document.querySelector("#CapsLock");
  if (capsLockPressed && capsLockKey) {
    capsLockKey.classList.add("clicked");
  }
  if (shiftPressed) {
    const whichShift = document.querySelector(`#${shiftPressed}`);
    if (whichShift) whichShift.classList.add("clicked");
  }
}

function fillDescription(): void {
  const descriptionParagraph: HTMLParagraphElement | null =
    document.querySelector(".discription-paragraph");
  if (descriptionParagraph) {
    if (lang === "en") {
      descriptionParagraph.innerText = `The keyboard was created in the Linux OS
    To switch language, press: Alt + Ctrl`;
    } else {
      descriptionParagraph.innerText = `Клавіятура створана ў АC Linux
    Каб пераключыць мову, націсніце: Alt + Ctrl`;
    }
  }
}

function setLang(): void {
  console.log("setting lang start", lang);
  const display: HTMLTextAreaElement | null =
    document.querySelector(".display");
  if (display) display.classList.toggle("en");
  const capsLockKey: HTMLDivElement | null =
    document.querySelector("#CapsLock");
  capsLockPressed = false;
  if (capsLockKey) capsLockKey.classList.remove("clicked");
  if (lang === "en") {
    lang = "by";
  } else {
    lang = "en";
  }
  console.log("setting lang", lang);
  localStorage.setItem("lang", lang);
  fillKeyboard();
  fillDescription();
}

function handleButtonMouseDown(event: MouseEvent): void {
  const clickTarget: EventTarget | null = event.currentTarget;
  if (
    clickTarget &&
    clickTarget instanceof HTMLElement &&
    clickTarget.classList.contains("button")
  ) {
    clickTarget.classList.toggle("clicked");
    if (clickTarget.id.includes("Shift")) {
      shiftPressed = clickTarget.id;
      fillKeyboard();
      const shiftKey: HTMLDivElement | null = document.querySelector(
        `#${shiftPressed}`
      );
      if (shiftKey) shiftKey.classList.add("clicked");
    }
    if (clickTarget.id.includes("CapsLock")) {
      capsLockPressed = !capsLockPressed;
      fillKeyboard();
    }
  }
}

function handleButtonMouseUp(event: MouseEvent): void {
  const target: EventTarget | null = event.currentTarget;
  const display: HTMLTextAreaElement | null =
    document.querySelector(".display");
  let rangeEnd: number = 0;
  if (display && target instanceof HTMLElement) {
    rangeEnd = display.selectionEnd;
    if (target && !target.classList.contains("special")) {
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
}

function handleKeyDown(event: KeyboardEvent): void {
  const buttons = document.querySelectorAll(".button");
  const eventCode = event.code;
  const keyboardMapItem = KEYBOARD_MAP.find((item) => item.desc === eventCode);
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
      console.log("setLang from handler");
      setLang();
    }
  }
}

function handleKeyUp(event: KeyboardEvent): void {
  const buttons: NodeListOf<HTMLDivElement> =
    document.querySelectorAll(".button");
  const display: HTMLTextAreaElement | null =
    document.querySelector(".display");
  let rangeEnd: number = 0;
  if (display) {
    rangeEnd = display.selectionEnd;
    const eventCode = event.code;
    const keyboardMapItem = KEYBOARD_MAP.find(
      (item) => item.desc === eventCode
    );
    let buttonText: string = "";
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
        shiftPressed = false;
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
}

document.addEventListener("DOMContentLoaded", formDocument);
document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);
