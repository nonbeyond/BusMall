'use strict';

// object prototypes
Img.options = [];
Img.name = ['bag','banana','bathroom','boots','breakfast','bubblegum','chair','cthulhu','dog-duck','dragon','pen','pet-sweep','scissors','shark','sweep','tauntaun','unicorn','usb','water-can','wine-glass'];
Img.path = ['bag.jpg','banana.jpg','bathroom.jpg','boots.jpg','breakfast.jpg','bubblegum.jpg','chair.jpg','cthulhu.jpg','dog-duck.jpg','dragon.jpg','pen.jpg','pet-sweep.jpg','scissors.jpg','shark.jpg','sweep.png','tauntaun.jpg','unicorn.jpg','usb.gif','water-can.jpg','wine-glass.jpg'];

function ImgSelector() { // image randomizer
    var rand = Math.floor(Math.random() * Img.options.length);
    ImgEl.src = Img.options[rand].path;
}

class Img {
    constructor(name, path) {
        this.name = name;
        this.path = path;
        this.clicks = 0;
        this.views = 0;
        Img.options.push(this);
    }
}

// the "new operator"
new Img('bag','img/bag.jpg');
new Img('banana','img/banana.jpg');
new Img('bathroom','img/bathroom.jpg');
new Img('boots','img/boots.jpg');
new Img('breakfast','img/breakfast.jpg');
new Img('bubblegum','img/bubblegum.jpg');
new Img('chair','img/chair.jpg');
new Img('cthulhu','img/cthulhu.jpg');
new Img('dog-duck','img/dog-duck.jpg');
new Img('dragon','img/dragon.jpg');
new Img('pen','img/pen.jpg');
new Img('pet-sweep','img/pet-sweep.jpg');
new Img('scissors','img/scissors.jpg');
new Img('shark','img/shark.jpg');
new Img('sweep','img/sweep.png');
new Img('tauntaun','img/tauntaun.jpg');
new Img('unicorn','img/unicorn.jpg');
new Img('usb','img/usb.gif');
new Img('water-can','img/water-can.jpg');
new Img('wine-glass','img/wine-glass.jpg');

// event listener for displayed images
// to be triggered by mouse clicks
var imgEl = document.getElementById('first');
imgEl.addEventListener('click',rand);
console.log('First Clicks: ',imgEl);

imgEl = document.getElementById('second');
imgEl.addEventListener('click',rand);
console.log('Second Clicks: ',imgEl);

imgEl = document.getElementById('third');
imgEl.addEventListener('click',rand);
console.log('Thrid Clicks: ',imgEl);