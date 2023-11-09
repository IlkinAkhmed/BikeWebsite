
// edited By Ali start

// hamburger clicked open navbar start

const barIcon = document.getElementById('navbar_bar_icon')
const closeIcon = document.getElementById('navbar_bar_close_icon')
const clickBar = document.querySelector('.click_bar')
const blurPage = document.querySelector('.page_blur')

barIcon.addEventListener('click', () => {
    clickBar.style.display = 'block'
    barIcon.style.display = 'none'
    closeIcon.style.display = 'block'
    blurPage.style.display = 'block'

})
closeIcon.addEventListener('click', () => {
    clickBar.style.display = 'none'
    barIcon.style.display = 'block'
    closeIcon.style.display = 'none'
    blurPage.style.display = 'none'

})
// hamburger clicked open navbar end
// search line start 
const SearchInput = document.querySelector('.navbar_search')
const SearchLine = document.querySelector('.search_box')

SearchInput.addEventListener('click', () => {
    SearchLine.style.borderBottom = '2px solid #ff004e'
})

// search line end 

// edited By Ali end 



