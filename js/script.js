const harpNotes = ['C2', 'Db2', 'D2']; //Назначаем все ноты для конкретной гармошки

function buttonClick() {
  for (let i = 0; i < 3; i++) {
  console.log(harpNotes[i]);
  }
  let playNote = new Audio();
  playNote.src = '../sounds/C2.mp3';
  playNote.preload = 'auto';
  playNote.loop = 'auto';
  playNote.play();
}

const buttonSelection = document.querySelector('button');
console.log(buttonSelection);
buttonSelection.addEventListener('mousedown', buttonClick);