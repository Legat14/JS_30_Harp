const harpNotes = ['C2', 'Db2', 'D2']; // Назначаем все ноты для конкретной гармошки

function buttonClick() {
  if (!event.repeat) { // Если событие уже запущено, то оно не повторяется
                       // Это нужно для того, чтобы избежать многократного проигрывания звука при зажатой клавише
    if ((event.code == 'KeyQ' && event.type == 'keydown') || event.type == 'mousedown') { // Звук должен заиграть только при нажатии
                                                                                         // определенной клавиши или щелчка левой кнопкой
                                                                                         // мыши по кнопке ноты

      const playNote = document.createElement('audio'); // Создаем автоматически проигрываемый звук в html
      playNote.setAttribute('src', 'sounds/C2.mp3');
      playNote.setAttribute('preload', '');
      playNote.setAttribute('autoplay', '');
      playNote.volume = 0.05; // Громкость звука. В последствии нужно сделать общий параметр, управляемый ползунком
      document.body.append(playNote);

      const buttonSelection = document.querySelector('button');
      console.log(buttonSelection);
      buttonSelection.style.backgroundImage = 'url("../img/button_pressed.png")'; // Меняем отображение кнопки на нажатую кнопку
      buttonSelection.style.paddingLeft = '11px'; // Сдвигаем букву вслед за кнопкой
      buttonSelection.style.paddingTop = '6px';
    }
  }
}

function buttonUnclick() { // Удаляем все звуки из html при отпускании клавиши клавиатуры
                           // Это нужно чтобы прервать проигрывание звука и не засорять html
  if (event.code == 'KeyQ' && event.type == 'keyup') {
    const audioSelection = document.querySelectorAll('audio');
    audioSelection.forEach((element, i) => {
      audioSelection[i].remove();
    })
    buttonSelection.style.backgroundImage = ''; // При отпускании кнопки изображение меняется обратно на ненажатую кнопку
    buttonSelection.style.paddingLeft = ''; // Сдвигаем букву на место
    buttonSelection.style.paddingTop = '';
  }
}

const buttonSelection = document.querySelector('button'); // Выбираем пока что единственную кнопку
buttonSelection.addEventListener('mousedown', buttonClick); // Слушаем клики мыши, нажатие или отпускание клавиш
document.addEventListener('keydown', buttonClick);
document.addEventListener('keyup', buttonUnclick);