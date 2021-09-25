const harpNotes = ['C2', 'Db2', 'D2']; //Назначаем все ноты для конкретной гармошки

function buttonClick() {
  if (!event.repeat) { //Если событие уже запущено, то оно не повторяется.
    //Это нужно для того, чтобы избежать многократного проигрывания звука при зажатой клавише.
    if ((event.code == 'KeyQ' && event.type == 'keydown') || event.type == 'mousedown') { //Звук должен заиграть только при нажатии определенной клавиши или
      //щелчка левой кнопкой мыши по кнопке

      const playNote = new Audio();

      playNote.src = '../sounds/C2.mp3';
      playNote.preload = 'auto';
      //playNote.loop = 'auto'; Отключаю повтор, пока не удастся найти способ сделать зацикленный звук более естественным.
      playNote.volume = 0.2; //Громкость звука. В последствии нужно сделать общий параметр, управляемый ползунком.

      playNote.play();
}
    else if (event.code == 'KeyQ' && event.type == 'keyup') {
      console.log(event.type);
    }
}
}

const buttonSelection = document.querySelector('button');
buttonSelection.addEventListener('mousedown', buttonClick);
document.addEventListener('keydown', buttonClick);
document.addEventListener('keyup', buttonClick);