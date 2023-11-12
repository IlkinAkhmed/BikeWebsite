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


// Ahmads About start

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


const videoopener = document.getElementById("videoopener")
const video = document.getElementById("video")
const videocloser = document.getElementById("videocloser")

videoopener.addEventListener("click",function(){
    video.classList.add("videoopening")
})

videocloser.addEventListener("click",function(){
    video.classList.remove("videoopening")
})


document.addEventListener("DOMContentLoaded", function () {
    function increaseCountQuickly() {
        const countSpan = document.getElementById('countSpan1');
        let currentCount = parseInt(countSpan.getAttribute('data-value'));
        const targetCount = 5000;  
        const increment = 40;     
        const intervalDuration = 1;  

        if (currentCount < targetCount) {
            currentCount += increment;
            countSpan.setAttribute('data-value', currentCount);
            countSpan.textContent = currentCount;
        } else {
            clearInterval(interval);
        }
    }

    const interval = setInterval(increaseCountQuickly, 10);
});
document.addEventListener("DOMContentLoaded", function () {
    function increaseCountQuickly() {
        const countSpan = document.getElementById('countSpan2');
        let currentCount = parseInt(countSpan.getAttribute('data-value'));
        const targetCount = 330;  
        const increment = 3;     
        const intervalDuration = 1;  

        if (currentCount < targetCount) {
            currentCount += increment;
            countSpan.setAttribute('data-value', currentCount);
            countSpan.textContent = currentCount;
        } else {
            clearInterval(interval);
        }
    }

    const interval = setInterval(increaseCountQuickly, 10);
});
document.addEventListener("DOMContentLoaded", function () {
    function increaseCountQuickly() {
        const countSpan = document.getElementById('countSpan3');
        let currentCount = parseInt(countSpan.getAttribute('data-value'));
        const targetCount = 450;  
        const increment = 5;     
        const intervalDuration = 1;  

        if (currentCount < targetCount) {
            currentCount += increment;
            countSpan.setAttribute('data-value', currentCount);
            countSpan.textContent = currentCount;
        } else {
            clearInterval(interval);
        }
    }

    const interval = setInterval(increaseCountQuickly, 10);
});
document.addEventListener("DOMContentLoaded", function () {
    function increaseCountQuickly() {
        const countSpan = document.getElementById('countSpan4');
        let currentCount = parseInt(countSpan.getAttribute('data-value'));
        const targetCount = 50;  
        const increment = 1;     
        const intervalDuration = 1;  

        if (currentCount < targetCount) {
            currentCount += increment;
            countSpan.setAttribute('data-value', currentCount);
            countSpan.textContent = currentCount;
        } else {
            clearInterval(interval);
        }
    }

    const interval = setInterval(increaseCountQuickly, 20);
});
// Ahmads About end