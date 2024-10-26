const slider_left_image = document.getElementById('slider_left_image_real_image');
const slider_right_image = document.getElementById('slider_right_image_real_image');
const slider_left_transparent = document.getElementById('slider_left_image_transparent');
const slider_right_transparent = document.getElementById('slider_right_image_transparent');
const slider_div = document.getElementById('image_slider');

const left_slider_image_text = document.getElementById('left_slider_image_text');
const right_slider_image_text = document.getElementById('right_slider_image_text');

slider_left_transparent.addEventListener('mouseover', function () {
    slider_left_image.style.zIndex = '1';
    slider_div.style.setProperty('--slider-position', `${100}%`);
    slider_right_image.style.filter = 'blur(5Px)';

    slider_left_image.style.clipPath = 'inset(0 0% 0 0)';
    

    right_slider_image_text.style.opacity = 0;

    left_slider_image_text.style.marginLeft = '43%';
    left_slider_image_text.style.marginRight = '57%';
});

slider_left_transparent.addEventListener('mouseout', function () {
    slider_div.style.setProperty('--slider-position', `${50}%`);
    slider_right_image.style.filter = '';

    slider_left_image.style.clipPath = 'inset(0 50% 0 0)';
    
    right_slider_image_text.style.opacity = 1;

    left_slider_image_text.style.marginLeft = '20%';
    left_slider_image_text.style.marginRight = '80%';
    setTimeout(() => {
        slider_left_image.style.zIndex = '';
    }, 200);
});



slider_right_transparent.addEventListener('mouseover', function () {
    slider_div.style.setProperty('--slider-position', `${0}%`);
    slider_right_image.style.clipPath = 'inset(0 0 0 0%)';
    slider_left_image.style.filter = 'blur(5Px)';    

    left_slider_image_text.style.opacity = 0;
    right_slider_image_text.style.marginLeft = '45%';
    right_slider_image_text.style.marginRight = '55%';
});

slider_right_transparent.addEventListener('mouseout', function () {
    slider_div.style.setProperty('--slider-position', `${50}%`);
    slider_right_image.style.clipPath = 'inset(0 0 0 50%)';
    slider_left_image.style.filter = '';

    left_slider_image_text.style.opacity = 1;
    right_slider_image_text.style.marginLeft = '65%';
    right_slider_image_text.style.marginRight = '35%';
});






// NEWS SLIDER 



let currentSlide = 0;
const slides = document.querySelectorAll('.news-slide');

function showSlide(index) {
slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
});
}

function nextSlide() {
currentSlide = (currentSlide + 1) % slides.length;
showSlide(currentSlide);
}

setInterval(nextSlide, 6000);