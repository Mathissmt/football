
function changeColor(color) {
    document.body.style.background = color
}
  
function change_yellow() {
    changeColor('yellow')
} 

function change_red() {
    changeColor('red')
} 

function change_skyblue() {
    changeColor('skyblue')
} 

const bouton_1 = document.getElementById('btn_b');
bouton_1.addEventListener('click',change_skyblue );

const bouton_2 = document.getElementById('btn_y');
bouton_2.addEventListener('click',change_yellow );

const bouton_3 = document.getElementById('btn_r');
bouton_3.addEventListener('click',change_red );

//<><input type="button" id="fond couleur" value="fond couleur" onClick="action();" /><input type="button" id="fond couleur" value="fond couleur" /></>
const bouton_group = document.getElementById('btn_c');
bouton_group.addEventListener('click',action );

let hidden = true;
function action() {
    hidden = !hidden;
    if(hidden) {
        document.getElementById('btn_group').classList.add('hidden');
    } else {
        document.getElementById('btn_group').classList.remove('hidden')
    }
} 

//bouton video
let vid = document.getElementById("myVideo"); 

function playVid() { 
  vid.play(); 
} 

function pauseVid() { 
  vid.pause(); 
}

