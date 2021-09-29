// Назначаем все ноты для конкретной гармошки
const harpNotes = ['C2', 'Db2', 'D2', 'E2', 'F2', 'Gb2', 'G2', 'G2', 'Ab2', 'A2', 'Bb2', 'B2', 'C3', 'Db3', 'D3', 'E3', 'F3', 'G3',
  'Ab3', 'A3', 'B3', 'C4', 'D4', 'Eb4', 'E4', 'F4', 'Gb4', 'G4', 'A4', 'Bb4', 'B4', 'C5'
];

// Назначаем горячие клавиши. Каждая горячая клавиша в массиве проигрывает ноту, соответствующую ей
// по индексу в массиве harpKeys. То есть hotKey[0] проигрывает ноту harpNotes
const hotKeys = ['KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'KeyA', 'KeyS', 'KeyD',
  'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma',
  'Period', 'Slash'
];

// Вводим значения ширины и высоты поля, на котором будут располагаться кнопки, размеры кнопок и отступы между ними
// Для быстрого изменения размещения кнопок
const highlightWidth = 1100;
const highlightHeight = 700;
const buttonGap = 9;
const buttonWidth = 60;
const buttonHeight = 60;

// Задаем каждой кнопке отступ сверху !!!Работает неправильно. Нужно узнать, что не так с позиционированием!!!
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

    if ((hotKeys.includes(event.code) == true && event.type == 'keydown') || (event.type == 'mousedown' && event.which == 1)) {
      // Звук должен заиграть только при нажатии определенной клавиши или щелчка левой кнопкой
      // мыши по кнопке ноты

      if (event.type == 'mousedown' && event.which == 1) {
        // Находим индекс кнопки, по которой кликнули
        const targetClick = event.target;
        for (i = 0; i < document.body.childNodes[1].childNodes[1].length; i++) {
          if (document.body.childNodes[1].childNodes[1].children[i] == targetClick) {
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
      buttonSelection[i].style.paddingLeft = '7px'; // Сдвигаем букву вслед за кнопкой
      buttonSelection[i].style.paddingTop = '5px';
    }
  }
}

function buttonUnclick() { // Удаляем все звуки из html при отпускании клавиши клавиатуры
  // Это нужно чтобы прервать проигрывание звука и не засорять html

  if ((hotKeys.includes(event.code) == true && event.type == 'keyup') || event.type == 'mouseout') {

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
    audioSelection = document.querySelector('audio');
    if (audioSelection != null) {
      audioSelection.remove();
    }

    if (event.type == 'mouseout') {
      // Находим индекс кнопки, по которой кликнули
      const targetClick = event.target;
      for (i = 0; i < document.body.children[0].children[0].length; i++) {
        if (document.body.children[0].children[0].children[i] == targetClick) {
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
  }
}

function radioButtonSelected() {
  radioButtonSelection.forEach((element, i) => {
      if (radioButtonSelection[i].checked) {
        playVolume = radioButtonSelection[i].value;
        console.clear();
        console.log('Volume level - ', playVolume * 10);
        for (let j = i; j < 10; j++) {
          document.body.children[0].children[1].children[j].children[1].style.backgroundColor = "";
          document.body.children[0].children[1].children[j].children[1].style.boxShadow = "";
        }
        for (k = i - 1; k >= 0; k--) {
          if (k <= 3) { // Проверка на зеленый цвет
            document.body.children[0].children[1].children[k].children[1].style.backgroundColor = "#20ff02";
            document.body.children[0].children[1].children[k].children[1].style.boxShadow = "0px 0px 5px 2px #4eff48";
          } else if (k <= 6) { // Проверка на желтый цвет
            document.body.children[0].children[1].children[k].children[1].style.backgroundColor = "#ffd102";
            document.body.children[0].children[1].children[k].children[1].style.boxShadow = "0px 0px 5px 2px #ffe677";
          } else if (k <= 7) { // Проверка на оранжевый цвет
            document.body.children[0].children[1].children[k].children[1].style.backgroundColor = "#ff9102";
            document.body.children[0].children[1].children[k].children[1].style.boxShadow = "0px 0px 5px 2px #ffb048";
          } else if (k <= 8) { // Проверка на красный цвет
            document.body.children[0].children[1].children[k].children[1].style.backgroundColor = "#ff0202";
            document.body.children[0].children[1].children[k].children[1].style.boxShadow = "0px 0px 5px 2px #ff4848";
          }
        }
        // Создаем звук щелчка при переключении громкости
        const playClick = document.createElement('audio');
        playClick.setAttribute('src', 'sounds/Click.mp3');
        playClick.setAttribute('preload', '');
        playClick.setAttribute('autoplay', '');
        playClick.volume = 0.4;
        document.body.append(playClick);

        // Удаляем звук щелчка после проигрывания, чтобы не мешал потом удалять звуки нот
        setTimeout(() => {
            audioSelection = document.querySelector('audio');
            if (audioSelection != null) {
              audioSelection.remove();
            }
          }, 100); // Длительность звука в миллисекундах
        }
      });
  }

  // Создаем разные кнопки - по одной на каждый элемент массива harpNotes
  harpNotes.forEach((element, i) => {
    const newButton = document.createElement('button');
    newButton.classList.add('button');
    newButton.innerHTML = harpNotes[i].slice(0, harpNotes[i].length - 1);
    newButton.style.top = `${keyTopOffset[i]}px`;
    newButton.style.left = `${keyLeftOffset[i]}px`;
    const formSelection = document.body.childNodes[1].childNodes[1];
    formSelection.append(newButton);
  });

  // Слушаем события

  // Выбираем все кнопки
  const buttonSelection = document.querySelectorAll('button');

  // Слушаем клики мыши по кнопкам и уход мыши с кнопки
  buttonSelection.forEach((element, i) => {
    buttonSelection[i].addEventListener('mousedown', buttonClick);
    buttonSelection[i].addEventListener('mouseout', buttonUnclick);
  });

  // Слушаем нажатие или отпускание клавиш
  document.addEventListener('keydown', buttonClick);
  document.addEventListener('keyup', buttonUnclick);

  // Задаем радиокнопку по умолчанию
  let selectedRadioButtonIndex = 4;

  // Выбираем все радиокнопки управления звуком
  const radioButtonSelection = document.querySelectorAll('.volumeButton');

  // Назначаем выбранную радиокнопку по умолчанию
  radioButtonSelection[selectedRadioButtonIndex].setAttribute("checked", "");

  // Задаем громкость клавиш по умолчанию в соответствии с выбранной радиокнопкой
  let playVolume = radioButtonSelection[selectedRadioButtonIndex].value;
  radioButtonSelected();

  // Слушаем выбор радиокнопки.
  radioButtonSelection.forEach((element, i) => {
    radioButtonSelection[i].addEventListener('change', radioButtonSelected);
  });

  //document.addEventListener('keydown', () => console.log(event.code)); // Проверка кодов клавиш