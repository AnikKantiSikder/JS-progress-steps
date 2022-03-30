
const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

function blurring () {
    load ++;
    // console.log(load);
    if (load > 99){
        clearInterval(int);
    }

    // Changing the loading text %
    loadText.innerHTML = `${load}%`;

    // Changing the opacity of loading text
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    
    // Changing the opacity(blur effect) of background
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;

}

// Changing the loading text % with setInterval function
let int = setInterval(blurring, 30);

// The function or algorithm to map the range of numbers
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}