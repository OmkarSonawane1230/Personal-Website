window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) document.getElementsByClassName('floating-navigation')[0].classList.remove('show-floating-navigation');
})

document.getElementsByClassName('floating-navigation')[0].addEventListener('click', () => {
    if (window.innerWidth < 768) document.getElementsByClassName('floating-navigation')[0].classList.toggle('show-floating-navigation');
})