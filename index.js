const KEYBOARD_ARR = [
  "`",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "-",
  "=",
  "Backspace",
  "Tab",
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "[",
  "]",
  "Solidus",
  "CapsLock",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  ";",
  "'",
  "Enter",
  "Left-Shift",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
  "<",
  ">",
  "?",
  "Up",
  "Right-Shift",
  "Left-Ctrl",
  "Win",
  "Alt",
  "Space",
  "Alt",
  "Left",
  "Down",
  "Right",
  "Right-Ctrl",
];

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

function formKeyboard() {
  const keys = document.querySelectorAll(".button");
  console.log(keys);
}

const wrapper = document.createElement("main");
wrapper.classList.add("wrapper");
document.body.insertAdjacentElement("afterbegin", wrapper);

const display = document.createElement("textarea");
display.rows = 10;
display.cols = 50;
display.classList.add("display");
wrapper.appendChild(display);

const keyboardWrapper = document.createElement("div");
keyboardWrapper.classList.add("keyboard-wrapper");
wrapper.appendChild(keyboardWrapper);

for (let i = 0; i < KEYBOARD_ARR.length; i++) {
  const button = document.createElement("div");
  button.classList.add("button");
  button.id = KEYBOARD_ARR[i];
  button.classList.add(KEYBOARD_ARR[i].toLocaleLowerCase());
  if (KEYBOARD_ARR[i].includes("Ctrl")) {
    button.innerHTML = `<span>Ctrl</span>`;
  } else if (KEYBOARD_ARR[i].includes("Shift")) {
    button.innerHTML = `<span>Shift</span>`;
  } else if (KEYBOARD_ARR[i].includes("Solidus")) {
    button.innerHTML = `<span>&#47;</span>`;
  } else if (KEYBOARD_ARR[i].includes("Space")) {
    button.innerText = null;
  } else if (KEYBOARD_ARR[i].includes("Up")) {
    button.innerHTML = `<span>&uarr;</span>`;
  } else if (KEYBOARD_ARR[i].includes("Left")) {
    button.innerHTML = `<span>&larr;</span>`;
  } else if (KEYBOARD_ARR[i].includes("Down")) {
    button.innerHTML = `<span>&darr;</span>`;
  } else if (KEYBOARD_ARR[i].includes("Right")) {
    button.innerHTML = `<span>&rarr;</span>`;
  } else {
    button.innerText = KEYBOARD_ARR[i];
  }

  keyboardWrapper.appendChild(button);
}

const descriptionSection = document.createElement("div");
descriptionSection.classList.add("discription-section");
const windowsParagraph = document.createElement("p");
windowsParagraph.classList.add("discription-paragraph");
windowsParagraph.innerText = `Клавиатура создана в операционной системе Linux`;
descriptionSection.appendChild(windowsParagraph);
wrapper.appendChild(descriptionSection);

formKeyboard();
