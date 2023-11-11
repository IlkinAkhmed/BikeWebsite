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




// ----------------------------------------------
// Ahmad Edited Start
// Open and Close Search start
const Search = document.getElementById("search")
const opensearch = document.getElementById("opensearch")
const exitsearch = document.querySelector(".fa-circle-xmark")

opensearch.addEventListener("click", function (e) {
    e.preventDefault()
    Search.classList.add("active")
})

exitsearch.addEventListener("click", function () {
    Search.classList.remove("active")
})

// Open and Close Search end



// Shop accordions start
const priceopener = document.getElementById("priceopener");
const priceopen = document.getElementById("priceopen");
const avopener = document.getElementById("avopener");
const avopen = document.getElementById("avopen");

priceopener.onclick=()=> {
    if (avopen.classList.contains("featuresopener")) {
        avopen.classList.remove("featuresopener");
    }

    priceopen.classList.toggle("featuresopener");

}

avopener.addEventListener("click", function () {
    if (priceopen.classList.contains("featuresopener")) {
        priceopen.classList.remove("featuresopener");
    }

    avopen.classList.toggle("featuresopener");


});


const fopenerone = document.getElementById("fopenerone")
const filterone = document.getElementById("filterone")
const fopenertwo = document.getElementById("fopenertwo")
const filtertwo = document.getElementById("filtertwo")
const fopenerthree = document.getElementById("fopenerthree")
const filterthree = document.getElementById("filterthree")

fopenerone.addEventListener("click", function (e) {
    e.preventDefault()
    if (filterthree.classList.contains("featuresopener") || filtertwo.classList.contains("featuresopener")) {
        filtertwo.classList.remove("featuresopener")
        filterthree.classList.remove("featuresopener")
    }
    filterone.classList.toggle("featuresopener")

})
fopenertwo.addEventListener("click", function (e) {
    e.preventDefault()
    if (filterone.classList.contains("featuresopener") || filterthree.classList.contains("featuresopener")) {
        filterthree.classList.remove("featuresopener")
        filterone.classList.remove("featuresopener")
    }
    filtertwo.classList.toggle("featuresopener")
})
fopenerthree.addEventListener("click", function (e) {
    e.preventDefault()
    if (filterone.classList.contains("featuresopener") || filtertwo.classList.contains("featuresopener")) {
        filtertwo.classList.remove("featuresopener")
        filterone.classList.remove("featuresopener")
    }
    filterthree.classList.toggle("featuresopener")
})
// Ahmad Edited End


