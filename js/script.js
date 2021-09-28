// Назначаем все ноты для конкретной гармошки
const harpNotes = ['C2', 'Db2', 'D2', 'E2', 'F2', 'Gb2', 'G2', 'G2', 'Ab2', 'A2', 'Bb2', 'B2', 'C3', 'Db3', 'D3', 'E3', 'F3', 'G3',
'Ab3', 'A3', 'B3', 'C4', 'D4', 'Eb4', 'E4', 'F4', 'Gb4', 'G4', 'A4', 'Bb4', 'B4', 'C5'];

// Назначаем горячие клавиши. Каждая горячая клавиша в массиве проигрывает ноту, соответствующую ей
// по индексу в массиве harpKeys. То есть hotKey[0] проигрывает ноту harpNotes
const hotKeys = ['KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'KeyA', 'KeyS', 'KeyD',
'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma',
'Period', 'Slash'];

// Вводим значения ширины и высоты поля, на котором будут располагаться кнопки, размеры кнопок и отступы между ними
// Для быстрого изменения размещения кнопок
const highlightWidth = 1280;
const highlightHeight = 720;
const buttonGap = 6;
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
80 + 1 * (buttonHeight + buttonGap), 80 + 2 * (buttonHeight + buttonGap)];

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
(highlightWidth + buttonGap) / 2 + 4 * buttonWidth + 4 * buttonGap];

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

      const playNote = document.createElement('audio'); // Создаем автоматически проигрываемый звук в html
      playNote.setAttribute('src', `sounds/${harpNotes[i]}.mp3`);
      playNote.setAttribute('preload', '');
      playNote.setAttribute('autoplay', '');
      playNote.volume = 0.05; // Громкость звука. В последствии нужно сделать общий параметр, управляемый ползунком
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
    for (i = 0; i < document.body.childNodes[1].childNodes[1].length; i++) {
      if (document.body.childNodes[1].childNodes[1].children[i] == targetClick) {
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
const buttonSelection = document.querySelectorAll('button'); // Выбираем все кнопки

buttonSelection.forEach((element, i) => {
  buttonSelection[i].addEventListener('mousedown', buttonClick); // Слушаем клики мыши и уход мыши с кнопки
  buttonSelection[i].addEventListener('mouseout', buttonUnclick);
});

document.addEventListener('keydown', buttonClick); // Слушаем нажатие или отпускание клавиш
document.addEventListener('keyup', buttonUnclick);

//document.addEventListener('keydown', () => console.log(event.code)); // Проверка кодов клавишь
