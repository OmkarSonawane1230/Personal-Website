const SLIDERBUTTONS = document.querySelectorAll('[data-slider-buttons]')
const SLIDESHOW = document.getElementsByClassName('slide-show')[0]
let outsideButton
let isInsideSlide = false

SLIDESHOW.addEventListener('mouseenter', () => {
    isInsideSlide = true
})

SLIDESHOW.addEventListener('mouseleave', () => {
    isInsideSlide = false
})

SLIDERBUTTONS.forEach(button => {
    outsideButton = button
    button.addEventListener('click', () => {
        const OFFSET = button.dataset.sliderButtons === "next" ? 1 : -1;
        const SLIDES = button.closest('[data-slider]').querySelector('[data-slides]')

        const ACTIVESLIDE = SLIDES.querySelector("[data-active-slide]")
        let newIndex = [...SLIDES.children].indexOf(ACTIVESLIDE) + OFFSET
        if (newIndex < 0) newIndex = SLIDES.children.length - 1
        if (newIndex >= SLIDES.children.length) newIndex = 0

        SLIDES.children[newIndex].dataset.activeSlide = true
        delete ACTIVESLIDE.dataset.activeSlide
    })
})


setInterval(() => {
    if (isInsideSlide) return

    const OFFSET = 1
    const SLIDES = outsideButton.closest('[data-slider]').querySelector('[data-slides]')

    const ACTIVESLIDE = SLIDES.querySelector("[data-active-slide]")
    let newIndex = [...SLIDES.children].indexOf(ACTIVESLIDE) + OFFSET
    if (newIndex < 0) newIndex = SLIDES.children.length - 1
    if (newIndex >= SLIDES.children.length) newIndex = 0

    SLIDES.children[newIndex].dataset.activeSlide = true
    delete ACTIVESLIDE.dataset.activeSlide
}, 4500);