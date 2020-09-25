// JS by Dan Høegh
// UCN MMD 2020

// Setting options in a json object
let options = {
    "controls": false, 
    "autoplay": true, 
    "preload": "auto", 
    "muted": true
};

// try the different json-objects here
videojs('video1', options);
// videojs('video2', options);
// videojs('video3', options);
// videojs('video4', options);

video.hotspots.init();

const video1 = videojs('video1');

//create the content of the pop up - it's a div
const popUpContent = document.createElement('div');
//put a class on that shiz so you can style it and make it hidden
popUpContent.className = "popUpBox hidden";
//put an id on
popUpContent.id = "popUpBox1";
//what should it say in the pop up box 
popUpContent.innerHTML = "Humøret et bare fucking fedt, når mennesket løber";
//it shows when the hotspot is clicked
popUpContent.addEventListener('click', () => {
    video1.play();
    document.querySelector('#popUpBox1').classList.add('hidden');
});
document.querySelector('#video1').appendChild(popUpContent);

//POP UP BOX NO. 2
const popUpContent2 = document.createElement('div');
popUpContent2.className = "popUpBox hidden";
popUpContent2.id = "popUpBox2";
popUpContent2.innerHTML = "Det funker sgu";
popUpContent2.addEventListener('click', () => {
    video1.play();
    document.querySelector('#popUpBox2').classList.add('hidden');
});
document.querySelector('#video1').appendChild(popUpContent2);


