const LISTNAVIGATION = document.getElementsByClassName('list-navigation')[0]
const UPDATE = document.getElementsByClassName('active-page')[0]
const PAGEINFO = document.getElementsByClassName('page-info')
const ACTIVEPAGE = document.getElementsByClassName('active-page-color')
const FIRSTCHILD_X = LISTNAVIGATION.firstElementChild.getBoundingClientRect().x

const checkActivePage = () => {
    let currentPage = ""
    Array.from(PAGEINFO).forEach(element => {
        const LISTNAVIGATION_X = LISTNAVIGATION.getBoundingClientRect().x
        const LISTNAVIGATION_WIDTH = LISTNAVIGATION.getBoundingClientRect().width
        const ELEMENT_X = element.getBoundingClientRect().x
        if (LISTNAVIGATION_X < ELEMENT_X && LISTNAVIGATION_WIDTH > ELEMENT_X) {
            currentPage = String(element.getAttribute('data-page-value'))
        }
        Array.from(ACTIVEPAGE).forEach((element) => {
            if (element.textContent == currentPage) {
                element.classList.add('active-page-visible')
            } else {
                element.classList.remove('active-page-visible')
            }
        })
    })
}

checkActivePage()

LISTNAVIGATION.addEventListener('scroll', () => {
    checkActivePage()
})

Array.from(ACTIVEPAGE).forEach((element) => {
    element.addEventListener('click', () => {
        setTimeout(() => {
            document.body.scrollIntoView(true)
        }, 1);
    })
})