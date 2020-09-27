// JS by Dan Høegh
// UCN MMD 2020

// Setting options in a json object
let options = {
    "controls": true, 
    "autoplay": true, 
    "preload": "auto", 
    "muted": false
};

// try the different json-objects here
videojs('video1', options);
// videojs('video2', options);
// videojs('video3', options);
// videojs('video4', options);

//setting the volume of the video
let vid = document.getElementById("video1");
  
function setHalfVolume() { 
  vid.volume = 0.5;
} 





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

//MAVE

const popUpContent4 = document.createElement('div');
popUpContent4.className = "popUpBox hidden";
popUpContent4.id = "popUpBox4";
popUpContent4.innerHTML = "MAVE: <br> Det skadelige bugfedt forbrændes, hvorved du undgår farlig betændelse i bl.a. blodkarrene, som kan føre til åreforkalkning og blodtryksforhøjelse!";
popUpContent4.addEventListener('click', () => {
    video1.play();
    document.querySelector('#popUpBox4').classList.add('hidden');
});
document.querySelector('#video1').appendChild(popUpContent4);

//IMMUNSYSTEM

const popUpContent5 = document.createElement('div');
popUpContent5.className = "popUpBox hidden";
popUpContent5.id = "popUpBox5";
popUpContent5.innerHTML = "IMMUNSYSTEM: <br> Immunsystemet styrkes, så det kan udrydde kræftceller på et tidligt tidspunkt.";
popUpContent5.addEventListener('click', () => {
    video1.play();
    document.querySelector('#popUpBox5').classList.add('hidden');
});
document.querySelector('#video1').appendChild(popUpContent5);

//HJERTET

const popUpContent6 = document.createElement('div');
popUpContent6.className = "popUpBox hidden";
popUpContent6.id = "popUpBox6";
popUpContent6.innerHTML = "HJERTET: <br> Løbere har det bedre som ældre og halverer risikoen for tidlig død! Løb ved lav eller moderat intensitet i sammenlagt 1 – 2,5 timer om ugen forlænger livet med gennemsnitligt 5,6 år for kvinder og 6,2 år for mænd.";
popUpContent6.addEventListener('click', () => {
    video1.play();
    document.querySelector('#popUpBox6').classList.add('hidden');
});
document.querySelector('#video1').appendChild(popUpContent6);

