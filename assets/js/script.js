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


window.onclick = (e) => {
  if (e.target === closeIcon || e.target === blurPage) {

    clickBar.style.display = 'none'
    barIcon.style.display = 'block'
    closeIcon.style.display = 'none'
    blurPage.style.display = 'none'
  }
}

// hamburger clicked open navbar end
// search line start 
const SearchInput = document.querySelector('.navbar_search')
const SearchLine = document.querySelector('.search_box')

SearchInput.addEventListener('click', () => {
  SearchLine.style.borderBottom = '2px solid #ff004e'
})

// search line end 

// edited By Ali end 


// accessories section by ilkin start
const card_gap = 16;

const slide = document.getElementById("slide"),
  slide_inside = document.getElementById("slide-inside"),
  nextbtn = document.getElementById("nextbtn"),
  prevbtn = document.getElementById("prevbtn");

nextbtn.addEventListener("click", e => {
  slide.scrollBy(width + gap, 0);
  if (slide.scrollWidth !== 0) {
    prevbtn.style.display = "flex";
  }
  if (slide_inside.scrollWidth - width - gap <= slide.scrollLeft + width) {
    nextbtn.style.display = "none";
  }
});
prevbtn.addEventListener("click", e => {
  slide.scrollBy(-(width + gap), 0);
  if (slide.scrollLeft - width - gap <= 0) {
    prevbtn.style.display = "none";
  }
  if (!slide_inside.scrollWidth - width - gap <= slide.scrollLeft + width) {
    nextbtn.style.display = "flex";
  }
});

let cardWidth = slide.offsetWidth;
window.addEventListener("resize", e => (width = slide.offsetWidth));


// accessories section by ilkin end



// back to up script start by Ahmad

const scrollUpButton = document.getElementById('scroll');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    scrollUpButton.classList.add("active")
  } else {
    scrollUpButton.classList.remove("active")
  }
});
// back to up script end by Ahmad

















// ----------------------------------------------




const gap = 16;

let carousel = document.querySelectorAll("#carousel")[0]
let content = document.querySelectorAll("#content")[0]
let next = document.querySelectorAll("#next")[0]
let prev = document.querySelectorAll("#prev")[0]



next.addEventListener("click", e => {
  carousel.scrollBy(width + gap, 0);
  if (carousel.scrollWidth !== 0) {
    prev.style.display = "flex";
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {

  }
});
prev.addEventListener("click", e => {
  carousel.scrollBy(-(width + gap), 0);
  if (carousel.scrollLeft - width - gap <= 0) {
  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "flex";
  }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));




let carousel1 = document.querySelectorAll("#carousel")[1]
let content1 = document.querySelectorAll("#content")[1]
let next1 = document.querySelectorAll("#next")[1]
let prev1 = document.querySelectorAll("#prev")[1]






next1.addEventListener("click", e => {
  carousel1.scrollBy(width + gap, 0);
  if (carousel1.scrollWidth !== 0) {
    prev1.style.display = "flex";
  }
  if (content1.scrollWidth - width - gap <= carousel1.scrollLeft + width) {

  }
});
prev1.addEventListener("click", e => {
  carousel1.scrollBy(-(width + gap), 0);
  if (carousel1.scrollLeft - width - gap <= 0) {
  }
  if (!content1.scrollWidth - width - gap <= carousel1.scrollLeft + width) {
    next1.style.display = "flex";
  }
});

let width1 = carousel1.offsetWidth;
window.addEventListener("resize", e => (width = carousel1.offsetWidth));






















// ----------------------------------------------
// Ahmad Edited Start

// Ahmad Edited End