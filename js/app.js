const prevButton = document.querySelector('.slider__prev-button');
const nextButton = document.querySelector('.slider__next-button');
const sliderItems = document.querySelectorAll('.slider__item');

for (let i = 0; i < sliderItems.length; i++) {
    sliderItems[i].setAttribute('data-item', i.toString())
}

prevButton.addEventListener('click', prevButtonHandler);
nextButton.addEventListener('click', nextButtonHandler);

function prevButtonHandler() {
    buttonsHandler('prev');
}

function nextButtonHandler() {
    buttonsHandler('next');
}

function buttonsHandler(type) {
    let activeSlideData = document.querySelector('.js-active');

    if (activeSlideData) {
        for (let i = 0; i < sliderItems.length; i++) {
            sliderItems[i].classList.remove('js-active');
        }

        if (type === 'prev') {
            if (activeSlideData.previousElementSibling !== null) {
                activeSlideData.previousElementSibling.classList.add('js-active');
                activeSlideData.previousElementSibling.style.marginLeft = '0';
                activeSlideData.style.marginLeft = '800px';
                nextButton.removeAttribute('disabled');
                disableButtons();
            } else {
                activeSlideData.classList.add('js-active');
            }
        } else {
            if (activeSlideData.nextElementSibling !== null) {
                activeSlideData.nextElementSibling.classList.add('js-active');
                activeSlideData.nextElementSibling.style.marginLeft = '0';
                activeSlideData.style.marginLeft = '-800px';
                prevButton.removeAttribute('disabled');
                disableButtons();
            } else {
                activeSlideData.classList.add('js-active');
            }
        }
    }

    displaySlidesInfo();
}

function disableButtons() {
    if (+document.querySelector('.js-active').getAttribute('data-item') === 0) prevButton.setAttribute('disabled', 'true');
    if (+document.querySelector('.js-active').getAttribute('data-item') === sliderItems.length - 1) nextButton.setAttribute('disabled', 'true');
}

function displaySlidesInfo() {
    let currentSlide = document.querySelector('.slides__current');
    let totalSlides = document.querySelector('.slides__total');
    let currentSlideData = document.querySelector('.js-active').getAttribute('data-item');

    currentSlide.textContent = (Number(currentSlideData) + 1).toString();
    totalSlides.textContent = sliderItems.length.toString();
}

disableButtons();
displaySlidesInfo();