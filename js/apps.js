'use strict';

var products = [],
  onSite = [],
  offSite = [],
  clicks = 0,
  names = [],
  votes = [],
  demo = [];

alert('Welcome to BusMall! Please click on the image you like the most. Your survey will begin with your first selection. Upon completion, your results will be demo.')

//DOM
var survey = document.getElementById('survey');
var left = document.getElementById('left');
var center = document.getElementById('center');
var right = document.getElementById('right');

// constructor function for image
function Image(name, path) {
  this.name = name;
  this.path = path;
  this.clickLog = 0;
  this.demo = 0;
  products.push(this);
}

// starts survey by generating three random non-repeating images
function start() {
  offSite = onSite;
  onSite = [];
  while (onSite.length < 3) {
    var productNumber = Math.floor(Math.random() * products.length);
    if (productNumber !== offSite[0] && productNumber !== offSite[1] && productNumber !== offSite[2] && productNumber !== onSite[0] && productNumber !== onSite[1]) {
      onSite.push(productNumber);
    }
  }
  left.src = products[onSite[0]].path;
  products[onSite[0]].demo++
    center.src = products[onSite[1]].path;
  products[onSite[1]].demo++
    right.src = products[onSite[2]].path;
  products[onSite[2]].demo++
}

// updates chart info
function amendChart() {
  for (var i = 0; i < products.length; i++) {
    names[i] = products[i].name;
    votes[i] = products[i].clickLog;
    demo[i] = products[i].demo;
  }
}

var data = {
  labels: names,
  datasets: [{
      label: 'Your Votes Per Image',
      data: votes,
      backgroundColor: '#54ff9f'

    },
    {
      label: 'Times You Saw Each Image',
      data: demo,
      backgroundColor: '#FF6347'
    }
  ]
};

// creates chart
function illustrate() {
  survey.innerHTML = '';
  var ctx = document.getElementById('click-chart').getContext('2d');
  var clickChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
      scales: {
        yAxes: [{
          ticks: {
            max: 13,
            min: 0,
            stepSize: 1.0
          }
        }]
      }
    }
  });
  alert('Your survey is complete. Thank you for your participation. View your results now.');
}

// for left image
function imgLeft(e) {
  products[onSite[0]].clickLog++
    clicks++
    if (clicks < 25) {
      start();
    } else {
      localStorage.setItem('demoProducts', JSON.stringify(products));
      amendChart();
      illustrate();
    }
}

// for center image
function imgCenter(e) {
  products[onSite[1]].clickLog++
    clicks++
    if (clicks < 25) {
      start();
    } else {
      localStorage.setItem('demoProducts', JSON.stringify(products));
      amendChart();
      illustrate();
    }
}

// for right image
function imgRight(e) {
  products[onSite[2]].clickLog++
    clicks++
    if (clicks < 25) {
      start();
    } else {
      localStorage.setItem('demoProducts', JSON.stringify(products));
      amendChart();
      illustrate();
    }
}

if (localStorage.length > 0) { // source: MDN Docs
  products = JSON.parse(localStorage.getItem('clicks'));
} else {  
// the "new" operator
new Image('bag', 'img/bag.jpg');
new Image('banana', 'img/banana.jpg');
new Image('bathroom', 'img/bathroom.jpg');
new Image('boots', 'img/boots.jpg');
new Image('breakfast', 'img/breakfast.jpg');
new Image('bubblegum', 'img/bubblegum.jpg');
new Image('chair', 'img/chair.jpg');
new Image('cthulhu', 'img/cthulhu.jpg');
new Image('dog-duck', 'img/dog-duck.jpg');
new Image('dragon', 'img/dragon.jpg');
new Image('pen', 'img/pen.jpg');
new Image('pet-sweep', 'img/pet-sweep.jpg');
new Image('scissors', 'img/scissors.jpg');
new Image('shark', 'img/shark.jpg');
new Image('sweep', 'img/sweep.png');
new Image('tauntaun', 'img/tauntaun.jpg');
new Image('unicorn', 'img/unicorn.jpg');
new Image('usb', 'img/usb.gif');
new Image('water-can', 'img/water-can.jpg');
new Image('wine-glass', 'img/wine-glass.jpg');
}

left.addEventListener('click', imgLeft); // click listener for left image
center.addEventListener('click', imgCenter); // click listener for center image
right.addEventListener('click', imgRight); // click listener for right image

// helper function
start();