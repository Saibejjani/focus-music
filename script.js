let time = document.getElementById('time');
let audioControls = document.getElementById('audioControls');
let playPause = document.getElementById('playPause');
let playPauseButton = document.getElementById('playPauseButton');
let next = document.getElementsByClassName('next')[0];
const blob = document.getElementsByClassName('blobImg')[0];
const prev = document.getElementsByClassName('prev')[0];
const repeat = document.getElementsByClassName('repeat')[0];

let second = 00;
let min = 00;
let audioPlaying = 1;

window.onload = () => {
  audioControls.src = './music/' + audioPlaying + '.mp3';
  animationControl(true);
  setInterval(() => {
    if (second % 60 == 0 && second != 0) {
      min += 1;
    }
    second = Math.floor(audioControls.currentTime);

    time.innerHTML =
      ('0' + min).slice(-2) + ' : ' + ('0' + (second % 60)).slice(-2);
  }, 900);
};
const plyPause = () => {
  if (audioControls.paused && !audioControls.ended) {
    animationControl(false);
    playPauseButton.src = './images/pause.svg';
    audioControls.play();
  } else {
    animationControl(true);
    audioControls.pause();
    playPauseButton.src = './images/play.svg';
  }
};

next.addEventListener('click', () => {
  audioPlaying++;
  audioControls.src = './music/' + audioPlaying + '.mp3';
  plyPause();
});
repeat.addEventListener('click', () => {
  audioControls.loop = true;
});

prev.addEventListener('click', () => {
  if (audioPlaying > 1) {
    audioPlaying--;
    audioControls.src = './music/' + audioPlaying + '.mp3';
    plyPause();
  }
});

playPause.addEventListener('click', plyPause);

const svg = document.getElementsByTagName('svg');
const c1 = svg[0].childNodes[1];
const c2 = svg[0].childNodes[3];
const c3 = svg[0].childNodes[5];

const animationControl = (e) => {
  if (e) {
    c1.style.animationPlayState = 'paused';
    c2.style.animationPlayState = 'paused';
    c3.style.animationPlayState = 'paused';
    blob.style.animationPlayState = 'paused';
  } else {
    c1.style.animationPlayState = 'running';
    c2.style.animationPlayState = 'running';
    c3.style.animationPlayState = 'running';
    blob.style.animationPlayState = 'running';
  }
};
