const DROP_DOWN_MENU = document.getElementsByClassName('drop-down-menu')[0]
const DROP_DOWN_MENU_ITEMS_INSIDE = document.getElementsByClassName('inside')[0]
const DROP_DOWN_MENU_ITEMS_OUTSIDE = document.getElementsByClassName('outside')[0]
const DROP_DOWN_MENU_ITEMS = document.getElementsByClassName('drop-down-menu-list-item')
const DROP_DOWN_MENU_ELEMENT_OUTSIDE = document.getElementsByClassName('drop-down-menu-list-item-outside')

DROP_DOWN_MENU.addEventListener('click', () => {
    DROP_DOWN_MENU_ITEMS_OUTSIDE.classList.toggle('d-flex');
    DROP_DOWN_MENU_ITEMS_OUTSIDE.classList.toggle('d-none');
})

DROP_DOWN_MENU_ITEMS_INSIDE.addEventListener('click', () => {
    Array.from(DROP_DOWN_MENU_ITEMS).forEach((element) => {
        element.classList.toggle("on-hover")
    })    
})

Array.from(DROP_DOWN_MENU_ELEMENT_OUTSIDE).forEach((element) => {
    element.addEventListener('click', () => {
        let indexOfActiveElement = 0;
        Array.from(DROP_DOWN_MENU_ELEMENT_OUTSIDE).forEach((value) => {
            if (value.classList.contains("on-click")) {
                indexOfActiveElement = value
                value.classList.toggle("on-click")
            }
        })
        if (indexOfActiveElement === element) {
            element.classList.toggle("on-click")
        }
        element.classList.toggle("on-click")
    })
})    

window.addEventListener('resize', () => {
    DROP_DOWN_MENU_ITEMS_OUTSIDE.classList.add('d-none');
    DROP_DOWN_MENU_ITEMS_OUTSIDE.classList.remove('d-flex');
})