const icons = document.querySelectorAll('.icon-links i');
let activeIcon = document.querySelector('.icon-links i.active');

const carsouselSlides = document.querySelectorAll('.carouselContent');
let activeSlide = document.querySelector('.carouselContent.active');

icons.forEach(icon => {
    icon.addEventListener('click', (e) => {
        setActive(e.target);
    });
});

var lapse = 35000;
setInterval(function () {
    for(let i = 0; i < icons.length; i++){
        if(icons[i].classList.contains('active')){
            if(i < icons.length-1){
                setActive(icons[i+1]);
                break;
            } else {
                setActive(icons[0]);
            }
        }
    }
}, lapse);

function setActive(icon) {
    activeIcon.classList.remove('active');
    activeIcon = icon;
    activeIcon.classList.add('active');

    activeSlide.classList.remove('active');
    switch(icon.getAttribute('id')){
        case 'flightIcon':
            activeSlide = document.getElementById('flightContent');
            activeSlide.classList.add('active');
            break;
        case 'hotelIcon':
            activeSlide = document.getElementById('hotelContent');
            activeSlide.classList.add('active');
            break;
        case 'eventIcon':
            activeSlide = document.getElementById('eventContent');
            activeSlide.classList.add('active');
            break;
    }
}