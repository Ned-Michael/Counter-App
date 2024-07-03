
let count_el = document.getElementById('count-EL');
let count = 0;

function Increment(){
    count = count + 1
    count_el.textContent = count
}
//console.log(counts);
let saved = document.getElementById('save-el');
let subtitle = document.getElementById('subtitle');
//console.log(subtitle);

function Save(){
    count = count + '-';
    subtitle.textContent += count;
    count_el.textContent = 0;
    count = 0;
    
}
