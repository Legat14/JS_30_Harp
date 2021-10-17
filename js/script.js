'use strict';

// Выбираем строй гармошки из C, Db, D, Eb, E, F, Gb, G, Ab, A, Bb, B
const harpTypeOf = ['G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb'];
let harpTypeIndex = 5;
let harpType = harpTypeOf[harpTypeIndex];
let harpNotes;
let buttonSelection;
let animationDirection;
const holes = document.querySelector('.holes');

// Назначаем все ноты, в зависимости от выбранной гармошки harpType
function choiceOfHarp() {
  switch (harpType) {
    case 'C':
      harpNotes = ['C2', 'Db2', 'D2', 'E2', 'F2', 'Gb2', 'G2', 'G2', 'Ab2', 'A2', 'Bb2', 'B2', 'C3', 'Db3', 'D3', 'E3', 'F3', 'G3',
        'Ab3', 'A3', 'B3', 'C4', 'D4', 'Eb4', 'E4', 'F4', 'Gb4', 'G4', 'A4', 'Bb4', 'B4', 'C5'
      ];
      break;
    case 'Db':
      harpNotes = ['Db2', 'D2', 'Eb2', 'F2', 'Gb2', 'G2', 'Ab2', 'Ab2', 'A2', 'Bb2', 'B2', 'C3', 'Db3', 'D3', 'Eb3', 'F3', 'Gb3', 'Ab3',
        'A3', 'Bb3', 'C4', 'Db4', 'Eb4', 'E4', 'F4', 'Gb4', 'G4', 'Ab4', 'Bb4', 'B4', 'C5', 'Db5'
      ];
      break;
    case 'D':
      harpNotes = ['D2', 'Eb2', 'E2', 'Gb2', 'G2', 'Ab2', 'A2', 'A2', 'Bb2', 'B2', 'C3', 'Db3', 'D3', 'Eb3', 'E3', 'Gb3', 'G3', 'A3',
        'Bb3', 'B3', 'Db4', 'D4', 'E4', 'F4', 'Gb4', 'G4', 'Ab4', 'A4', 'B4', 'C5', 'Db5', 'D5'
      ];
      break;
    case 'Eb':
      harpNotes = ['Eb2', 'E2', 'F2', 'G2', 'Ab2', 'A2', 'Bb2', 'Bb2', 'B2', 'C3', 'Db3', 'D3', 'Eb3', 'E3', 'F3', 'G3', 'Ab3', 'Bb3',
        'B3', 'C4', 'D4', 'Eb4', 'F4', 'Gb4', 'G4', 'Ab4', 'A4', 'Bb4', 'C5', 'Db5', 'D5', 'Eb5'
      ];
      break;
    case 'E':
      harpNotes = ['E2', 'F2', 'Gb2', 'Ab2', 'A2', 'Bb2', 'B2', 'B2', 'C3', 'Db3', 'D3', 'Eb3', 'E3', 'F3', 'Gb3', 'Ab3', 'A3', 'B3',
        'C4', 'Db4', 'Eb4', 'E4', 'Gb4', 'G4', 'Ab4', 'A4', 'Bb4', 'B4', 'Db5', 'D5', 'Eb5', 'E5'
      ];
      break;
    case 'F':
      harpNotes = ['F2', 'Gb2', 'G2', 'A2', 'Bb2', 'B2', 'C3', 'C3', 'Db3', 'D3', 'Eb3', 'E3', 'F3', 'Gb3', 'G3', 'A3', 'Bb3', 'C4',
        'Db4', 'D4', 'E4', 'F4', 'G4', 'Ab4', 'A4', 'Bb4', 'B4', 'C5', 'D5', 'Eb5', 'E5', 'F5'
      ];
      break;
    case 'Gb':
      harpNotes = ['Gb2', 'G2', 'Ab2', 'Bb2', 'B2', 'C3', 'Db3', 'Db3', 'D3', 'Eb3', 'E3', 'F3', 'Gb3', 'G3', 'Ab3', 'Bb3', 'B3', 'Db4',
        'D4', 'Eb4', 'F4', 'Gb4', 'Ab4', 'A4', 'Bb4', 'B4', 'C5', 'Db5', 'Eb5', 'E5', 'F5', 'Gb5'
      ];
      break;
    case 'G':
      harpNotes = ['G1', 'Ab1', 'A1', 'B1', 'C2', 'Db2', 'D2', 'D2', 'Eb2', 'E2', 'F2', 'Gb2', 'G2', 'Ab2', 'A2', 'B2', 'C3', 'D3',
        'Eb3', 'E3', 'Gb3', 'G3', 'A3', 'Bb3', 'B3', 'C4', 'Db4', 'D4', 'E4', 'F4', 'Gb4', 'G4'
      ];
      break;
    case 'Ab':
      harpNotes = ['Ab1', 'A1', 'Bb1', 'C2', 'Db2', 'D2', 'Eb2', 'Eb2', 'E2', 'F2', 'Gb2', 'G2', 'Ab2', 'A2', 'Bb2', 'C3', 'Db3', 'Eb3',
        'E3', 'F3', 'G3', 'Ab3', 'Bb3', 'B3', 'C4', 'Db4', 'D4', 'Eb4', 'F4', 'Gb4', 'G4', 'Ab4'
      ];
      break;
    case 'A':
      harpNotes = ['A1', 'Bb1', 'B1', 'Db2', 'D2', 'Eb2', 'E2', 'E2', 'F2', 'Gb2', 'G2', 'Ab2', 'A2', 'Bb2', 'B2', 'Db3', 'D3', 'E3',
        'F3', 'Gb3', 'Ab3', 'A3', 'B3', 'C4', 'Db4', 'D4', 'Eb4', 'E4', 'Gb4', 'G4', 'Ab4', 'A4'
      ];
      break;
    case 'Bb':
      harpNotes = ['Bb1', 'B1', 'C2', 'D2', 'Eb2', 'E2', 'F2', 'F2', 'Gb2', 'G2', 'Ab2', 'A2', 'Bb2', 'B2', 'C3', 'D3', 'Eb3', 'F3',
        'Gb3', 'G3', 'A3', 'Bb3', 'C4', 'Db4', 'D4', 'Eb4', 'E4', 'F4', 'G4', 'Ab4', 'A4', 'Bb4'
      ];
      break;
    case 'B':
      harpNotes = ['B1', 'C2', 'Db2', 'Eb2', 'E2', 'F2', 'Gb2', 'Gb2', 'G2', 'Ab2', 'A2', 'Bb2', 'B2', 'C3', 'Db3', 'Eb3', 'E3', 'Gb3',
        'G3', 'Ab3', 'Bb3', 'B3', 'Db4', 'D4', 'Eb4', 'E4', 'F4', 'Gb4', 'Ab4', 'A4', 'Bb4', 'B4'
      ];
      break;
  }
}

// Запускаем функцию в первый раз для выбора нот для гармошки по умолчанию
choiceOfHarp();

// Назначаем горячие клавиши. Каждая горячая клавиша в массиве проигрывает ноту, соответствующую ей
// по индексу в массиве harpKeys. То есть hotKey[0] проигрывает ноту harpNotes[0]
const hotKeys = ['KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'KeyA', 'KeyS', 'KeyD', 'KeyF',
  'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO',
  'KeyP', 'BracketLeft'
];

// Назначаем способы получения каждой ноты. Значения массива должны соответствовать нотам
// То есть wayToGetNote[0] соответствует ноте harpNotes[0] и реальному способу получения данной ноты на губной гармошке
// Сейчас это нужно для того чтобы правильно нажимались кнопки с номерами отверстий. В последствии может пригодиться при расшифровке файлов
const wayToGetNote = ['+1', '--1', '-1', '+2', '---2', '--2', '-2', '+3', '----3', '---3', '--3', '-3', '+4', '--4', '-4', '+5', '-5',
  '+6', '--6', '-6', '-7', '+7', '-8', '++8', '+8', '-9', '++9', '+9', '-10', '+++10', '++10', '+10'
];

// Назначаем соответствие между горячими цифровыми клавишами и уровнем звука
const hotVolumeKeysDigits = ['Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', ];
const hotVolumeKeysNums = ['Numpad1', 'Numpad2', 'Numpad3', 'Numpad4', 'Numpad5', 'Numpad6', 'Numpad7', 'Numpad8', 'Numpad9', 'Numpad0', ];

// Вводим значения ширины и высоты поля, на котором будут располагаться кнопки, размеры кнопок и отступы между ними
// Для быстрого изменения размещения кнопок
const highlightWidth = 1100;
const highlightHeight = 700;
const buttonGap = 9;
const buttonWidth = 60;
const buttonHeight = 60;

// Задаем каждой кнопке отступ сверху
const keyTopOffset = [80 + 2 * (buttonHeight + buttonGap), 80 + 5 * (buttonHeight + buttonGap), 80 + 4 * (buttonHeight + buttonGap),
  80 + 2 * (buttonHeight + buttonGap), 80 + 6 * (buttonHeight + buttonGap), 80 + 5 * (buttonHeight + buttonGap),
  80 + 4 * (buttonHeight + buttonGap), 80 + 2 * (buttonHeight + buttonGap), 80 + 7 * (buttonHeight + buttonGap),
  80 + 6 * (buttonHeight + buttonGap), 80 + 5 * (buttonHeight + buttonGap), 80 + 4 * (buttonHeight + buttonGap),
  80 + 2 * (buttonHeight + buttonGap), 80 + 5 * (buttonHeight + buttonGap), 80 + 4 * (buttonHeight + buttonGap),
  80 + 2 * (buttonHeight + buttonGap), 80 + 4 * (buttonHeight + buttonGap), 80 + 2 * (buttonHeight + buttonGap),
  80 + 5 * (buttonHeight + buttonGap), 80 + 4 * (buttonHeight + buttonGap), 80 + 4 * (buttonHeight + buttonGap),
  80 + 2 * (buttonHeight + buttonGap), 80 + 4 * (buttonHeight + buttonGap), 80 + 1 * (buttonHeight + buttonGap),
  80 + 2 * (buttonHeight + buttonGap), 80 + 4 * (buttonHeight + buttonGap), 80 + 1 * (buttonHeight + buttonGap),
  80 + 2 * (buttonHeight + buttonGap), 80 + 4 * (buttonHeight + buttonGap), 80 + 0 * (buttonHeight + buttonGap),
  80 + 1 * (buttonHeight + buttonGap), 80 + 2 * (buttonHeight + buttonGap)
];

// Задаем каждой кнопке отступ слева
const keyLeftOffset = [(highlightWidth - buttonGap) / 2 - 5 * buttonWidth - 4 * buttonGap,
  (highlightWidth - buttonGap) / 2 - 5 * buttonWidth - 4 * buttonGap, (highlightWidth - buttonGap) / 2 - 5 * buttonWidth - 4 * buttonGap,
  (highlightWidth - buttonGap) / 2 - 4 * buttonWidth - 3 * buttonGap, (highlightWidth - buttonGap) / 2 - 4 * buttonWidth - 3 * buttonGap,
  (highlightWidth - buttonGap) / 2 - 4 * buttonWidth - 3 * buttonGap, (highlightWidth - buttonGap) / 2 - 4 * buttonWidth - 3 * buttonGap,
  (highlightWidth - buttonGap) / 2 - 3 * buttonWidth - 2 * buttonGap, (highlightWidth - buttonGap) / 2 - 3 * buttonWidth - 2 * buttonGap,
  (highlightWidth - buttonGap) / 2 - 3 * buttonWidth - 2 * buttonGap, (highlightWidth - buttonGap) / 2 - 3 * buttonWidth - 2 * buttonGap,
  (highlightWidth - buttonGap) / 2 - 3 * buttonWidth - 2 * buttonGap, (highlightWidth - buttonGap) / 2 - 2 * buttonWidth - 1 * buttonGap,
  (highlightWidth - buttonGap) / 2 - 2 * buttonWidth - 1 * buttonGap, (highlightWidth - buttonGap) / 2 - 2 * buttonWidth - 1 * buttonGap,
  (highlightWidth - buttonGap) / 2 - 1 * buttonWidth - 0 * buttonGap, (highlightWidth - buttonGap) / 2 - 1 * buttonWidth - 0 * buttonGap,
  (highlightWidth + buttonGap) / 2 + 0 * buttonWidth + 0 * buttonGap, (highlightWidth + buttonGap) / 2 + 0 * buttonWidth + 0 * buttonGap,
  (highlightWidth + buttonGap) / 2 + 0 * buttonWidth + 0 * buttonGap, (highlightWidth + buttonGap) / 2 + 1 * buttonWidth + 1 * buttonGap,
  (highlightWidth + buttonGap) / 2 + 1 * buttonWidth + 1 * buttonGap, (highlightWidth + buttonGap) / 2 + 2 * buttonWidth + 2 * buttonGap,
  (highlightWidth + buttonGap) / 2 + 2 * buttonWidth + 2 * buttonGap, (highlightWidth + buttonGap) / 2 + 2 * buttonWidth + 2 * buttonGap,
  (highlightWidth + buttonGap) / 2 + 3 * buttonWidth + 3 * buttonGap, (highlightWidth + buttonGap) / 2 + 3 * buttonWidth + 3 * buttonGap,
  (highlightWidth + buttonGap) / 2 + 3 * buttonWidth + 3 * buttonGap, (highlightWidth + buttonGap) / 2 + 4 * buttonWidth + 4 * buttonGap,
  (highlightWidth + buttonGap) / 2 + 4 * buttonWidth + 4 * buttonGap, (highlightWidth + buttonGap) / 2 + 4 * buttonWidth + 4 * buttonGap,
  (highlightWidth + buttonGap) / 2 + 4 * buttonWidth + 4 * buttonGap
];

function buttonClick() {

  if (!event.repeat) { // Если событие уже запущено, то оно не повторяется
    // Это нужно для того, чтобы избежать многократного проигрывания звука при зажатой клавише

    if ((hotKeys.includes(event.code) == true && event.type == 'keydown' && !event.shiftKey && !event.ctrlKey && !event.altKey) || (event.type == 'mousedown' && event.which == 1)) {
      // Звук должен заиграть только при нажатии определенной клавиши без зажатых Alt, Shift или Ctrl
      // или щелчка левой кнопкой мыши по кнопке ноты

      let i = 0;
      if (event.type == 'mousedown' && event.which == 1) {
        // Находим индекс кнопки, по которой кликнули
        const targetClick = event.target;
        for (i = 0; i < document.body.children[1].children[0].length; i++) {
          if (document.body.children[1].children[0].children[i] == targetClick) {
            break;
          }
        }
      } else if (hotKeys.includes(event.code) == true && event.type == 'keydown') {
        // Находим индекс кнопки, которую нажали с помощью горячей клавиши
        i = hotKeys.indexOf(event.code);
      }

      // Создаем автоматически проигрываемый звук в html
      const playNote = document.createElement('audio');
      playNote.setAttribute('src', `sounds/${harpNotes[i]}.mp3`);
      playNote.setAttribute('preload', '');
      playNote.setAttribute('autoplay', '');
      playNote.volume = playVolume;
      document.body.append(playNote);

      buttonSelection[i].style.backgroundImage = 'url("img/button_pressed.png")'; // Меняем отображение кнопки на нажатую кнопку
      buttonSelection[i].style.paddingTop = '5px'; // Сдвигаем букву вслед за кнопкой
      buttonSelection[i].style.paddingLeft = '7px';

      let hole = wayToGetNote[i].slice(-1); // Находим номер отверстия, из которого получается звук
      if (hole == 0) {
        hole = 10;
      }

      let direction;
      if (wayToGetNote[i].slice(0, 1) == '+') {
        direction = 'blow';
      } else {
        direction = 'breath';
      }

      holes.children[hole - 1].style.backgroundImage = `url("img/hole_${direction}.png")`; // Меняем отображение отверстия на нажатое
                                                                                          // В зависимости от направления воздуха
    }
  }
}

function buttonUnclick() { // Удаляем все звуки из html при отпускании клавиши клавиатуры
  // Это нужно чтобы прервать проигрывание звука и не засорять html

  if ((hotKeys.includes(event.code) == true && event.type == 'keyup') || event.type == 'mouseout' || event.type == 'mouseup') {

    // При таком удалении аудио все работает хорошо, но игра становится медленнее из-за того, что
    // Unclick удаляет все аудио. При быстрой игре получается, что следующая кнопка бывает нажата
    // Раньше предыдущей и тогда при отжатии кнопки удаляются оба звука
    /*const audioSelection = document.querySelectorAll('audio');
    audioSelection.forEach((element, i) => {
      audioSelection[i].remove();
    });*/

    // При таком удалении аудио удаляется только последнее аудио. Это позволяет играть быстро, но
    // есть баг - если нажать две или более кнопок и одну отпустить, то удалится первый нажаты звук
    // не зависимо от того, какая клавиша была отпущена
    let audioSelection = document.querySelector('audio');
    if (audioSelection != null) {
      audioSelection.remove();
    }

    let i = 0;
    if (event.type == 'mouseout' || event.type == 'mouseup') {
      // Находим индекс кнопки, по которой кликнули
      const targetClick = event.target;
      for (i = 0; i < document.body.children[1].children[0].length; i++) {
        if (document.body.children[1].children[0].children[i] == targetClick) {
          break;
        }
      }
    } else if (hotKeys.includes(event.code) == true && event.type == 'keyup') {
      // Находим индекс кнопки, которую нажали с помощью горячей клавиши
      i = hotKeys.indexOf(event.code);
    }

    buttonSelection[i].style.backgroundImage = ''; // При отпускании кнопки изображение меняется обратно на ненажатую кнопку
    buttonSelection[i].style.paddingLeft = ''; // Сдвигаем букву на место
    buttonSelection[i].style.paddingTop = '';

    let hole = wayToGetNote[i].slice(-1); // Находим номер отверстия, из которого получается звук
    if (hole == 0) {
      hole = 10;
    }

    holes.children[hole - 1].style.backgroundImage = ''; // Меняем отображение отверстия обратно на нейтральное
    holes.children[hole - 1].childNodes[0].style.marginTop = ''; // Сдвигаем цифру на место
    holes.children[hole - 1].childNodes[0].style.marginLeft = '';
  }
}

function volumeSelection() {
  radioButtonSelection.forEach((element, i) => {
    if (radioButtonSelection[i].checked) {
      playVolume = radioButtonSelection[i].value;
      //console.clear();
      console.log('Volume level - ', i + 1);
      for (let j = i; j < 10; j++) {
        document.body.children[1].children[1].children[j].children[1].style.backgroundColor = "";
        document.body.children[1].children[1].children[j].children[1].style.boxShadow = "";
      }
      for (let k = i - 1; k >= 0; k--) {
        if (k <= 3) { // Проверка на зеленый цвет
          document.body.children[1].children[1].children[k].children[1].style.backgroundColor = "#17c200";
          document.body.children[1].children[1].children[k].children[1].style.boxShadow = "0px 0px 5px 2px #5db85a";
        } else if (k <= 6) { // Проверка на желтый цвет
          document.body.children[1].children[1].children[k].children[1].style.backgroundColor = "#dbb300";
          document.body.children[1].children[1].children[k].children[1].style.boxShadow = "0px 0px 5px 2px #c2af5e";
        } else if (k <= 7) { // Проверка на оранжевый цвет
          document.body.children[1].children[1].children[k].children[1].style.backgroundColor = "#df7e00";
          document.body.children[1].children[1].children[k].children[1].style.boxShadow = "0px 0px 5px 2px #c09256";
        } else if (k <= 8) { // Проверка на красный цвет
          document.body.children[1].children[1].children[k].children[1].style.backgroundColor = "#c00000";
          document.body.children[1].children[1].children[k].children[1].style.boxShadow = "0px 0px 5px 2px #9b4646";
        }
      }
      soundOfClick();
    }
  });
}

// Изменение громкости горячими клавишами + / - и стрелками
function volumeSelectionHotKeys() {
  if (event.code == 'NumpadAdd' || event.code == 'Equal' || event.code == 'NumpadSubtract' || event.code == 'Minus') {
    if (event.code == 'NumpadAdd' || event.code == 'Equal') {
      for (let i = 0; i < 10; i++) {
        if (radioButtonSelection[i].checked) {
          if (i != 9) {
            radioButtonSelection[i + 1].checked = true;
            break;
          }
        }
      }
    } else if (event.code == 'NumpadSubtract' || event.code == 'Minus') {
      for (let i = 0; i < 10; i++) {
        if (radioButtonSelection[i].checked) {
          if (i != 0) {
            radioButtonSelection[i - 1].checked = true;
            break;
          }
        }
      }
    }
    volumeSelection();
  }
}

// Изменение громкости горячими клавишами 0-9 Digit и Numpad
function volumeSelectionNumberHotKeys() {
  if (hotVolumeKeysDigits.includes(event.code)) {
    radioButtonSelection[hotVolumeKeysDigits.indexOf(event.code)].checked = true;
    volumeSelection();
  } else if (hotVolumeKeysNums.includes(event.code)) {
    radioButtonSelection[hotVolumeKeysNums.indexOf(event.code)].checked = true;
    volumeSelection();
  }
}

// Звук щелчка при переключении громкости или смене гармошки
function soundOfClick() {
  // Создаем звук щелчка при переключении громкости
  const playClick = document.createElement('audio');
  playClick.setAttribute('src', 'sounds/Click.mp3');
  playClick.setAttribute('preload', '');
  playClick.setAttribute('autoplay', '');
  playClick.volume = 0.4;
  document.body.append(playClick);

  // Удаляем звук щелчка после проигрывания, чтобы не мешал потом удалять звуки нот
  setTimeout(() => {
    let audioSelection = document.querySelector('audio');
    if (audioSelection != null) {
      audioSelection.remove();
    }
  }, 100); // Длительность звука в миллисекунда
}

// Функция смены фона
function changeBackground(animationDirection) {
  const newBackground = document.createElement('div');
  const backgroundDiv = document.body.children[0];
  newBackground.classList.add('background');
  newBackground.style.backgroundImage = `url("img/bg/harmonica_bg_${harpTypeIndex}.jpg`;
  let childrenIndex;
  if (animationDirection == 'Up') {
    backgroundDiv.append(newBackground);
    childrenIndex = 0;
  } else {
    backgroundDiv.prepend(newBackground);
    childrenIndex = 1;
  }
  backgroundDiv.children[0].classList.add(`bg${animationDirection}`);

  setTimeout(() => {
    backgroundDiv.children[childrenIndex].remove();
    backgroundDiv.children[0].classList.remove(`bg${animationDirection}`);
  }, 490); // Удаление класса сделано раньше конца анимации, чтобы избежать мелькания предыдущего фона на мгновенье
  // При переключении вверх, если анимация заканчивалась чуть раньше, предыдущая картинка возвращалась на свое место, а потом удалялась
}

// Меняем гармошку нажатием на стрелки вверх или вниз
function volumeSelectionArrowKeys() {
  if (event.code == 'ArrowUp') {
    changeButtonUpClick();
  } else if (event.code == 'ArrowDown') {
    changeButtonDownClick();
  }
}

// Выбираем следующую гармошку
function changeButtonUpClick() {
  if (harpTypeIndex < 11) {
    animationDirection = 'Up';
    harpTypeIndex++;
    harpType = harpTypeOf[harpTypeIndex];
    buttonsRemove();
    choiceOfHarp();
    buttonsCreation(animationDirection);
    soundOfClick();
    changeBackground(animationDirection);
    hotKeysTable();
    console.clear();
    console.log('Selected harmonica - ', harpType);
  }
}

// Выбираем предыдущую гармошку
function changeButtonDownClick() {
  if (harpTypeIndex > 0) {
    animationDirection = 'Down';
    harpTypeIndex--;
    harpType = harpTypeOf[harpTypeIndex];
    buttonsRemove();
    choiceOfHarp();
    buttonsCreation(animationDirection);
    soundOfClick();
    changeBackground(animationDirection);
    hotKeysTable();
    console.clear();
    console.log('Selected harmonica - ', harpType);
  }
}

// Функция по созданию разных кнопок - по одной на каждый элемент массива harpNotes
function buttonsCreation() {
  harpNotes.forEach((element, i) => {
    const newButton = document.createElement('button');
    newButton.classList.add('noteButton');
    newButton.setAttribute('type', 'button');
    newButton.innerHTML = harpNotes[i].slice(0, harpNotes[i].length - 1);
    newButton.style.top = `${keyTopOffset[i]}px`;
    newButton.style.left = `${keyLeftOffset[i]}px`;
    const formSelection = document.body.children[1].children[0];
    formSelection.append(newButton);
  });

  // Выбираем все нотные кнопки
  buttonSelection = document.querySelectorAll('.noteButton');

  // Слушаем клики мыши по кнопкам и уход мыши с кнопки
  buttonSelection.forEach((element, i) => {
    buttonSelection[i].addEventListener('mousedown', buttonClick);
    buttonSelection[i].addEventListener('mouseout', buttonUnclick);
    buttonSelection[i].addEventListener('mouseup', buttonUnclick);
  });

  // Запускаем функцию показа ключа гармошки
  showHarpChoice(animationDirection);
}

// Удаляем все нотные кнопки перед созданием новых кнопок для гармошки с другой тональностью
function buttonsRemove() {
  buttonSelection.forEach((element, i) => {
    buttonSelection[i].remove();
  });
}

// Прописываем ключ выбранной гармошки
function showHarpChoice(animationDirection) {
  const harpWindow = document.querySelector('.change-harp-show');
  if (harpWindow.children[0]) {
    harpWindow.children[0].classList.add(`remove${animationDirection}`);
    setTimeout(() => {
      harpWindow.children[0].remove();
      harpWindow.insertAdjacentHTML('afterbegin', `<p>${harpType}</p>`);
      harpWindow.children[0].classList.add(`create${animationDirection}`);
    }, 150);
    setTimeout(() => {
      harpWindow.children[0].classList.remove(`create${animationDirection}`);
    }, 300);
  } else {
    harpWindow.insertAdjacentHTML('afterbegin', `<p>${harpType}</p>`);
  }
}

// Запускаем функцию создания кнопок при загрузке страницы для создания кнопок гармошки по умолчанию
buttonsCreation();

// Заполняем таблицу хоткеями в зависимости от выбранной гармошки
function hotKeysTable() {
  let currentRow;
  for (let i = 0; i < 32; i++) {
    if (i < 10) {
      currentRow = document.getElementById('hot-key-row-1');
      currentRow.children[i + 1].innerHTML = harpNotes[i].slice(0, harpNotes[i].length - 1);
  } else if (i < 21) {
    currentRow = document.getElementById('hot-key-row-2');
    currentRow.children[i + 1 - 10].innerHTML = harpNotes[i].slice(0, harpNotes[i].length - 1);
} else {
  currentRow = document.getElementById('hot-key-row-3');
  currentRow.children[i + 1 - 21].innerHTML = harpNotes[i].slice(0, harpNotes[i].length - 1);
}
}
}

// Прописываем горячие клавиши в таблице при запуске программы
hotKeysTable();

// Выбираем боковую панель
const hotkeyPanel = document.getElementById('hotkey-panel');

// Выбираем начальное положение боковой панели
let hotkeyPanelCollapsed = false;

// Сворачиваем боковую панель
function hotkeyPanelCollapse() {
  soundOfClick();
  if (hotkeyPanelCollapsed == false) {
    hotkeyPanelCollapsed = true;
    hotkeyPanel.style.left = '1870px';
    hotkeyPanel.style.height = '70px';
    hotkeyPanel.style.borderRadius = '20px';
    hotkeyPanel.children[1].style.display = 'none';
    hotkeyPanel.children[2].style.display = 'none';
    hotkeyPanel.children[3].style.display = 'none';
    hotkeyPanel.children[4].style.display = 'none';
    hotkeyPanel.children[5].style.display = 'none';
    hotkeyPanel.children[6].style.display = 'none';
    hotkeyPanelCollapseButton.style.transform = 'rotate(270deg)';
  } else {
    hotkeyPanelCollapsed = false;
    hotkeyPanel.style.left = '';
    hotkeyPanel.style.height = '';
    hotkeyPanel.style.borderRadius = '';
    hotkeyPanel.children[1].style.display = '';
    hotkeyPanel.children[2].style.display = '';
    hotkeyPanel.children[3].style.display = '';
    hotkeyPanel.children[4].style.display = '';
    hotkeyPanel.children[5].style.display = '';
    hotkeyPanel.children[6].style.display = '';
    hotkeyPanelCollapseButton.style.transform = '';
  }
}

// Сворачиваем боковую панель по нажатию на стрелочку вправо
function hotkeyPanelCollapseHotkey() {
  if (event.code == 'ArrowRight') {
    hotkeyPanelCollapse();
  }
}

// Выбираем футер
const footer = document.querySelector('footer');

// Выбираем начальное положение футера
let footerCollapsed = false;

// Сворачиваем футер
function footerCollapse() {
  soundOfClick();
  if (footerCollapsed == false) {
    footerCollapsed = true;
    footer.style.top = '880px';
    footer.children[0].style.width = '70px';
    footer.children[0].style.marginLeft = '420px';
    footer.children[0].style.borderRadius = '20px';
    footer.children[0].children[0].children[1].style.display = 'none';
    footer.children[0].children[0].children[2].style.display = 'none';
    footer.children[0].children[0].children[3].style.display = 'none';
    footer.children[0].children[1].style.display = 'none';
    footerCollapseButton.style.transform = 'rotate(0deg)';
    footerCollapseButton.style.height = '50px';
  } else {
    footerCollapsed = false;
    footer.style.top = '';
    footer.children[0].style.width = '';
    footer.children[0].style.marginLeft = '';
    footer.children[0].style.borderRadius = '';
    footer.children[0].children[0].children[1].style.display = '';
    footer.children[0].children[0].children[2].style.display = '';
    footer.children[0].children[0].children[3].style.display = '';
    footer.children[0].children[1].style.display = '';
    footerCollapseButton.style.transform = '';
    footerCollapseButton.style.height = '';
  }
}

// Сворачиваем футер по нажатию на стрелочку вниз
function footerCollapseHotkey() {
  if (event.code == 'ArrowLeft') {
    footerCollapse();
  }
}

// Сворачиваем все панели
function allPanelCollapseHotkey() {
  if (event.code == 'Space') {
    hotkeyPanelCollapse();
    footerCollapse();
  }
}

// Слушаем события

// Слушаем нажатие или отпускание клавиш
document.addEventListener('keydown', buttonClick);
document.addEventListener('keyup', buttonUnclick);
document.addEventListener('keydown', volumeSelectionHotKeys);
document.addEventListener('keydown', volumeSelectionNumberHotKeys);
document.addEventListener('keydown', volumeSelectionArrowKeys);
document.addEventListener('keydown', hotkeyPanelCollapseHotkey);
document.addEventListener('keydown', footerCollapseHotkey);
document.addEventListener('keydown', allPanelCollapseHotkey);

// Задаем радиокнопку по умолчанию
let selectedRadioButtonIndex = 4;

// Выбираем все радиокнопки управления звуком
const radioButtonSelection = document.querySelectorAll('.volumeButton');

// Назначаем выбранную радиокнопку по умолчанию
radioButtonSelection[selectedRadioButtonIndex].setAttribute("checked", "");

// Задаем громкость клавиш по умолчанию в соответствии с выбранной радиокнопкой
let playVolume = radioButtonSelection[selectedRadioButtonIndex].value;
volumeSelection();

// Слушаем выбор радиокнопки.
radioButtonSelection.forEach((element, i) => {
  radioButtonSelection[i].addEventListener('change', volumeSelection);
});

// Выбираем кнопки смены гармошки
const changeHarpButtonSelection = document.querySelectorAll('.change-harp-button');

// Слушаем клики мыши по кнопкам смены гармошки
changeHarpButtonSelection[0].addEventListener('mousedown', changeButtonUpClick);
changeHarpButtonSelection[1].addEventListener('mousedown', changeButtonDownClick);

// Выбираем кнопку коллапса боковой панели
const hotkeyPanelCollapseButton = document.querySelector('.hotkey-panel-collapse-button');

// Слушаем щелчок по кнопке коллапса боковой панели
hotkeyPanelCollapseButton.addEventListener('mousedown', hotkeyPanelCollapse);

// Выбираем кнопку коллапса футера
const footerCollapseButton = document.querySelector('.footer-collapse-button');

// Слушаем щелчок по кнопке коллапса футера
footerCollapseButton.addEventListener('mousedown', footerCollapse);