// Назначаем все ноты для конкретной гармошки
const harpNotes = ['C2', 'Db2', 'D2', 'E2', 'F2', 'Gb2', 'G2', 'G2', 'Ab2', 'A2', 'Bb2', 'B2', 'C3', 'Db3', 'D3'];
// Назначаем горячие клавиши. Каждая горячая клавиша в массиве проигрывает ноту, соответствующую ей
// по индексу в массиве harpKeys. То есть hotKey[0] проигрывает ноту harpNotes
const hotKeys = ['KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'KeyA', 'KeyS', 'KeyD', 'KeyF'];

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

      buttonSelection[i].style.backgroundImage = 'url("../img/button_pressed.png")'; // Меняем отображение кнопки на нажатую кнопку
      buttonSelection[i].style.paddingLeft = '7px'; // Сдвигаем букву вслед за кнопкой
      buttonSelection[i].style.paddingTop = '5px';
    }
  }
}

function buttonUnclick() { // Удаляем все звуки из html при отпускании клавиши клавиатуры
  // Это нужно чтобы прервать проигрывание звука и не засорять html

  if ((hotKeys.includes(event.code) == true && event.type == 'keyup') || event.type == 'mouseout') {
    const audioSelection = document.querySelectorAll('audio');
    audioSelection.forEach((element, i) => {
      audioSelection[i].remove();
    });

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
