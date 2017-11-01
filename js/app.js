'use strict';

// global variables
var products = [],
  onSite = [],
  offSite = [],
  clicks = 0;

// HTML DOM image objects
var display = document.getElementById('display'),
  left = document.getElementById('left'),
  center = document.getElementById('center'),
  right = document.getElementById('right');

// the "new operator"
new Img('bag', 'img/bag.jpg');
new Img('banana', 'img/banana.jpg');
new Img('bathroom', 'img/bathroom.jpg');
new Img('boots', 'img/boots.jpg');
new Img('breakfast', 'img/breakfast.jpg');
new Img('bubblegum', 'img/bubblegum.jpg');
new Img('chair', 'img/chair.jpg');
new Img('cthulhu', 'img/cthulhu.jpg');
new Img('dog-duck', 'img/dog-duck.jpg');
new Img('dragon', 'img/dragon.jpg');
new Img('pen', 'img/pen.jpg');
new Img('pet-sweep', 'img/pet-sweep.jpg');
new Img('scissors', 'img/scissors.jpg');
new Img('shark', 'img/shark.jpg');
new Img('sweep', 'img/sweep.png');
new Img('tauntaun', 'img/tauntaun.jpg');
new Img('unicorn', 'img/unicorn.jpg');
new Img('usb', 'img/usb.gif');
new Img('water-can', 'img/water-can.jpg');
new Img('wine-glass', 'img/wine-glass.jpg');

// constructor for images
function Img(name, path) {
  this.name = name;
  this.path = path;
  this.clicked = 0;
  this.demo = 0;
  products.push(this);
}

// creates trial of 3 non-repeating images
function trialStart() {
  offSite = onSite;
  onSite = [];

  for (var i = 0; onSite.length < 3; i++) {
    var imgSelector = Math.floor(Math.random() * products.length);
    if (imgSelector !== offSite[0] && imgSelector !== offSite[1] && imgSelector !== offSite[2] && imgSelector !== onSite[0] && imgSelector !== onSite[1]) {
      onSite.push(imgSelector);
    }
  }
  left.src = products[onSite[0]].path;
  products[onSite[0]].demo++ // left
    center.src = products[onSite[1]].path;
  products[onSite[1]].demo++ // center
    right.src = products[onSite[2]].path;
  products[onSite[2]].demo++ // right
}

function trialEnd() {
  alert('The survey has trial has ended. Thank you for all your cooperation.')
}

// handler for left image
function imgLeft(e) {
  products[onSite[0]].clicked++
    clicks++
    if (clicks < 25) {
      trialStart();
    } else {
      trialEnd();
    }
}

// handler for center image
function imgCenter(e) {
  products[onSite[1]].clicked++
    clicks++
    if (clicks < 25) {
      trialStart();
    } else {
      trialEnd();
    }
}

// handler for right image
function imgRight(e) {
  products[onSite[2]].clicked++
    clicks++
    if (clicks < 25) {
      trialStart();
    } else {
      trialEnd();
    }
}

trialStart();

// listeners for mouse clicks
left.addEventListener('click', imgLeft);
center.addEventListener('click', imgCenter);
right.addEventListener('click', imgRight);