// JS by Dan Høegh
// UCN MMD 2020

// Setting options in a json object
let options = {
    "controls": true, 
    "autoplay": true, 
    "preload": "auto", 
    "muted": false
};
console.log('i am running');

// try the different json-objects here
videojs('video1', options);
// videojs('video2', options);
// videojs('video3', options);
// videojs('video4', options);

video.hotspots.init();

const video1 = videojs('video1');

//HJERNEN

//create the content of the pop up - it's a div
const popUpContent = document.createElement('div');
//put a class on that shiz so you can style it and make it hidden
popUpContent.className = "popUpBox hidden";
//put an id on
popUpContent.id = "popUpBox1";
//what should it say in the pop up box 
popUpContent.innerHTML = "HJERNEN: <br> Du forbedrer din hukommelse, koncentrationsevne, beslutningsevne og reaktionsevne!";
    
//it shows when the hotspot is clicked
popUpContent.addEventListener('click', () => {
    video1.play();
    document.querySelector('#popUpBox1').classList.add('hidden');
});
document.querySelector('#video1').appendChild(popUpContent);

//BALLERNE

const popUpContent2 = document.createElement('div');
popUpContent2.className = "popUpBox hidden";
popUpContent2.id = "popUpBox2";
popUpContent2.innerHTML = "BALLEMUSKLER: <br> Du styrker dine ballemuskler, og minimerer risikoen for skader i fx knæ og lænd!";
popUpContent2.addEventListener('click', () => {
    video1.play();
    document.querySelector('#popUpBox2').classList.add('hidden');
});
document.querySelector('#video1').appendChild(popUpContent2);

//SKELETTET

const popUpContent3 = document.createElement('div');
popUpContent3.className = "popUpBox hidden";
popUpContent3.id = "popUpBox3";
popUpContent3.innerHTML = "SKELETTET: <br> Løb er den absolut bedste træningsform for skelettet! Det styrker skelettet og forebygger knogleskørhed, samt øger knogletætheden!";
popUpContent3.addEventListener('click', () => {
    video1.play();
    document.querySelector('#popUpBox3').classList.add('hidden');
});
document.querySelector('#video1').appendChild(popUpContent3);

