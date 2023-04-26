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

function formDocument() {
  let isEng = 0;
  if (lang === "by") {
    isEng = 2;
  }
  const wrapper = document.createElement("main");
  wrapper.classList.add("wrapper");
  document.body.insertAdjacentElement("afterbegin", wrapper);

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

  const keyboardWrapper = document.createElement("div");
  keyboardWrapper.classList.add("keyboard-wrapper");
  wrapper.appendChild(keyboardWrapper);

  fillKeyboard(isEng);

  const descriptionSection = document.createElement("div");
  descriptionSection.classList.add("discription-section");
  const discriptionParagraph = document.createElement("p");
  discriptionParagraph.classList.add("discription-paragraph");
  discriptionParagraph.innerText = `The keyboard was created in the Linux OS
    To switch language, press: Win + Space`;
  descriptionSection.appendChild(discriptionParagraph);
  wrapper.appendChild(descriptionSection);
}

function fillKeyboard(register) {
  for (let i = 0; i < KEYBOARD_MAP.length; i++) {
    const button = document.createElement("div");
    button.classList.add("button");
    button.id = KEYBOARD_MAP[i][register];
    button.classList.add(KEYBOARD_MAP[i][register].toLocaleLowerCase());
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
    const keyboardWrapper = document.querySelector(".keyboard-wrapper");
    keyboardWrapper.appendChild(button);
  }
}

function setLang() {
  const langMarker = document.querySelector(".lang-marker");
  if (lang === "en") {
    lang = "by";
    localStorage.setItem("lang", lang);
    langMarker.innerText = lang.toUpperCase();
    langMarker.classList.toggle("en");
  } else {
    lang = "en";
    localStorage.setItem("lang", lang);
    langMarker.innerText = lang.toUpperCase();
    langMarker.classList.toggle("en");
  }
}

function changeKeyboard() {
  const keys = document.querySelectorAll(".button");
}

function handleKeyPress(event) {
  console.log(event);
}

document.addEventListener("DOMContentLoaded", formDocument);
// document.addEventListener("DOMContentLoaded", setLang);
document.addEventListener("keypress", handleKeyPress);
