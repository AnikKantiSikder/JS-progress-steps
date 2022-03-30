
const progressBar = document.getElementById('progress');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

nextBtn.addEventListener('click', () => {
    currentActive++;

    if(currentActive > circles.length) {
        currentActive = circles.length;
    }

    update();
});

prevBtn.addEventListener('click', () => {
    currentActive--;

    if(currentActive < 1){
        currentActive = 1;
    }

    update();
});

function update() {
    circles.forEach((circle, idx) => {

        if (idx < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    const actives = document.querySelectorAll('.active');

    // Normally the width of progress bar is (100%).
    // Ex: For active note 2: (actives.length) / (circles.length) * 100 +'%' = (2 / 3)*100 = 66%.
    // But we want the value of 33.3%. So the solution is-
    // Ex: For active note 2: (actives.length - 1) / (circles.length - 1) ) * 100 + '%' = (1 / 3)*100 = 33.3%.

    progressBar.style.width = ( (actives.length - 1) / (circles.length - 1) ) * 100 + '%';

    // For remove button
    if(currentActive === 1) {
        prevBtn.disabled = true;
    } else if(currentActive === circles.length) {
        nextBtn.disabled = true;
    } else {
        prevBtn.disabled = false;
        nextBtn.disabled = false;
    }
}