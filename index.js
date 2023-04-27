const KEYBOARD_MAP = [
  ["`", "~", "ё", "Ё"],
  ["1", "!", "1", "!"],
  ["2", "@", "2", '"'],
  ["3", "#", "3", "№"],
  ["4", "$", "4", ";"],
  ["5", "%", "5", "%"],
  ["6", "^", "6", ":"],
  ["7", "&", "7", "?"],
  ["8", "*", "8", "*"],
  ["9", "(", "9", "("],
  ["0", ")", "0", ")"],
  ["-", "_", "-", "_"],
  ["=", "+", "=", "+"],
  ["Backspace", "Backspace", "Backspace", "Backspace"],
  ["Tab", "Tab", "Tab", "Tab"],
  ["q", "Q", "й", "Й"],
  ["w", "W", "ц", "Ц"],
  ["e", "E", "у", "У"],
  ["r", "R", "к", "К"],
  ["t", "T", "е", "Е"],
  ["y", "Y", "н", "Н"],
  ["u", "U", "г", "Г"],
  ["i", "I", "ш", "Ш"],
  ["o", "O", "ў", "Ў"],
  ["p", "P", "з", "З"],
  ["[", "{", "х", "Х"],
  ["]", "}", "'", "'"],
  ["Solidus", "|", "Solidus", "/"],
  ["Del", "Del", "Del", "Del"],
  ["CapsLock", "CapsLock", "CapsLock", "CapsLock"],
  ["a", "A", "ф", "Ф"],
  ["s", "S", "ы", "Ы"],
  ["d", "D", "в", "В"],
  ["f", "F", "а", "А"],
  ["g", "G", "п", "П"],
  ["h", "H", "р", "Р"],
  ["j", "J", "о", "О"],
  ["k", "K", "л", "Л"],
  ["l", "L", "д", "Д"],
  [";", ":", "ж", "Ж"],
  ["'", '"', "э", "Э"],
  ["Enter", "Enter", "Enter", "Enter"],
  ["Left-Shift", "Left-Shift", "Left-Shift", "Left-Shift"],
  ["z", "Z", "я", "Я"],
  ["x", "X", "ч", "Ч"],
  ["c", "C", "с", "С"],
  ["v", "V", "м", "М"],
  ["b", "B", "і", "І"],
  ["n", "N", "т", "Т"],
  ["m", "M", "ь", "Ь"],
  [",", "<", "б", "Б"],
  [".", ">", "ю", "Ю"],
  ["/", "?", ".", ","],
  ["Up", "Up", "Up", "Up"],
  ["Right-Shift", "Right-Shift", "Right-Shift", "Right-Shift"],
  ["Left-Ctrl", "Left-Ctrl", "Left-Ctrl", "Left-Ctrl"],
  ["Win", "Win", "Win", "Win"],
  ["Alt", "Alt", "Alt", "Alt"],
  ["Space", "Space", "Space", "Space"],
  ["Alt", "Alt", "Alt", "Alt"],
  ["Left", "Left", "Left", "Left"],
  ["Down", "Down", "Down", "Down"],
  ["Right", "Right", "Right", "Right"],
  ["Right-Ctrl", "Right-Ctrl", "Right-Ctrl", "Right-Ctrl"],
];

let lang = localStorage.lang ? localStorage.lang : "en";
let isUpperRegister = false;

function formDocument() {
  let isEng = 0;
  if (lang === "by") {
    isEng = 2;
  }
  const wrapper = document.createElement("main");
  wrapper.classList.add("wrapper");
  document.body.insertAdjacentElement("afterbegin", wrapper);

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

  fillKeyboard(isEng);

  const descriptionSection = document.createElement("div");
  descriptionSection.classList.add("discription-section");
  const descriptionParagraph = document.createElement("p");
  descriptionParagraph.classList.add("discription-paragraph");
  descriptionSection.appendChild(descriptionParagraph);
  wrapper.appendChild(descriptionSection);
  fillDescription();
}

function fillKeyboard(register) {
  console.log("filling", register);
  const keyboardWrapper = document.querySelector(".keyboard-wrapper");
  keyboardWrapper.innerHTML = null;
  for (let i = 0; i < KEYBOARD_MAP.length; i++) {
    const button = document.createElement("div");
    button.classList.add("button");
    button.id = KEYBOARD_MAP[i][register];
    button.addEventListener("click", handleButtonClick);
    // console.log(KEYBOARD_MAP[i][register]);
    if (KEYBOARD_MAP[i][register] !== "CapsLock") {
      //   console.log(KEYBOARD_MAP[i][register]);
      button.addEventListener("mousedown", handleButtonMouseDown);
    }
    if (KEYBOARD_MAP[i][register].includes("Shift")) {
      button.addEventListener("mouseup", handleButtonMouseUp);
    }
    button.classList.add(KEYBOARD_MAP[i][register].toLocaleLowerCase());
    if (KEYBOARD_MAP[i][register].includes("CapsLock") && isUpperRegister) {
      button.classList.add("clicked");
    }
    if (KEYBOARD_MAP[i][register].includes("Ctrl")) {
      button.innerHTML = `<span>Ctrl</span>`;
    } else if (KEYBOARD_MAP[i][register].includes("Shift")) {
      button.innerHTML = `<span>Shift</span>`;
    } else if (KEYBOARD_MAP[i][register].includes("Solidus")) {
      button.innerHTML = `<span>&#47;</span>`;
    } else if (KEYBOARD_MAP[i][register].includes("Space")) {
      button.innerText = null;
    } else if (KEYBOARD_MAP[i][register].includes("Up")) {
      button.innerHTML = `<span>&uarr;</span>`;
    } else if (KEYBOARD_MAP[i][register].includes("Left")) {
      button.innerHTML = `<span>&larr;</span>`;
    } else if (KEYBOARD_MAP[i][register].includes("Down")) {
      button.innerHTML = `<span>&darr;</span>`;
    } else if (KEYBOARD_MAP[i][register].includes("Right")) {
      button.innerHTML = `<span>&rarr;</span>`;
    } else {
      button.innerHTML = `<span>${KEYBOARD_MAP[i][register]}</span>`;
    }

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
  if (lang === "en") {
    lang = "by";
    localStorage.setItem("lang", lang);
    langMarker.innerText = lang.toUpperCase();
    langMarker.classList.toggle("en");
    fillKeyboard(2);
    fillDescription();
    const capsLockKey = document.querySelector(".capslock");
    isUpperRegister = false;
    capsLockKey.classList.remove("clicked");
  } else {
    lang = "en";
    localStorage.setItem("lang", lang);
    langMarker.innerText = lang.toUpperCase();
    langMarker.classList.toggle("en");
    fillKeyboard(0);
    fillDescription();
    const capsLockKey = document.querySelector(".capslock");
    isUpperRegister = false;
    capsLockKey.classList.remove("clicked");
  }
}

function handleButtonClick(event) {
  const display = document.querySelector(".display");
  display.value += event.currentTarget.innerText;
  console.log("event.target.id", event.currentTarget.id);
  const target = event.currentTarget;
  if (target.classList.contains("capslock")) {
    handleCapsLock();
  } else if (target.classList.contains("button")) {
    target.classList.add("clicked");
    setTimeout(() => {
      target.classList.remove("clicked");
    }, 200);
  }
}

function handleButtonMouseDown(event) {
  const target = event.currentTarget;
  target.classList.add("clicked");
  //   toggleRegister();
  if (target.innerText === "Shift") {
    // console.log("isUpperRegister", isUpperRegister);
    const shiftText = target.id;
    if (lang === "en") {
      fillKeyboard(1);
      console.log("shift", target.id);
      const shiftKey = document.querySelector(`#${target.id}`);
      shiftKey.classList.add("clicked");
    } else {
      fillKeyboard(3);
      console.log("shift", target);
      const shiftKey = document.querySelector(`#${target.id}`);
      shiftKey.classList.add("clicked");
    }
  }
}

function handleButtonMouseUp(event) {
  const target = event.currentTarget;
  //   toggleRegister();
  if (lang === "en") {
    console.log("mouseUp", target);
    if (isUpperRegister) {
      fillKeyboard(0);
      handleCapsLock();
    } else {
      fillKeyboard(0);
    }
  } else {
    if (isUpperRegister) {
      fillKeyboard(2);
      handleCapsLock();
    } else {
      fillKeyboard(2);
    }
  }
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

function toggleRegister() {
  isUpperRegister = !isUpperRegister;
}

function handleKeyDown(event) {
  event.preventDefault();
  console.log(event);
  if (event.ctrlKey && event.key === "Alt") {
    setLang();
  }
}

document.addEventListener("DOMContentLoaded", formDocument);
document.addEventListener("keydown", handleKeyDown);
