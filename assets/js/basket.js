


// // creating basket function from API by ilkin start




const basketWrapper = document.querySelector('.basketCard')
const subtotal = document.querySelector(".valueOfAllProducts")



let ShopProductArr = []

if (getLocalStorageData('Products')) {
    ShopProductArr = getLocalStorageData('Products')
}


let BasketProductArr = []

if (getLocalStorageData("Products")) {
    BasketProductArr = getLocalStorageData("Products")
}




// function for setting data for local storage
function setLocalStorageData(key, data) {
    localStorage.setItem(key, JSON.stringify(data))
}


// function for getting data for local storage
function getLocalStorageData(key) {
    return JSON.parse(localStorage.getItem(key))
}

// function for creating cards for shop section
function createCardForShop(id, image, name, price, color, power, weight, type,total) {
    const wrapper = document.querySelector('.for-sale')
    const card = document.createElement('div')

    card.innerHTML = `
    <div class="image">
    <img src=${image} alt="">
</div>
<div class="card-body">
    <h3>${name}</h3>
    <div class="rating">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-regular fa-star"></i>
    </div>
    <p>$${price}</p>
</div>
<div class="product-icons">
    <i class="fa-regular fa-copy"></i>
    <i class="fa-solid fa-eye"></i>
    <i class="fa-solid fa-bag-shopping" id="viewbasket"></i>
    <i class="fa-regular fa-heart"></i>
</div>
    `

    card.querySelector('#viewbasket').addEventListener('click', (e) => {


        if (check = ShopProductArr.find(x => x.id === id)) {
            check.count++
            setLocalStorageData('Products', ShopProductArr)
            return
        }


        ShopProductArr.push({
            id,
            image,
            name,
            price,
            color,
            power,
            weight,
            type,
            count: 1,
            total
        })

        setLocalStorageData('Products', ShopProductArr)

        BasketProductArr = getLocalStorageData('Products')
        addCardToBasketPage()

    })
    card.classList.add('shopCard')
    wrapper.append(card)
}

// getting data from products API
async function getData() {
    const res = await fetch('http://localhost:3000/hybridBikes');
    const data = await res.json();
    data.forEach(items => {
        createCardForShop(items.id, items.image, items.title, items.price, items.color, items.power, items.weight, items.type, items.total)
        console.log(items.total);
    });
}
getData()



function createCardForBasketPage(id, image, type, name, price, color, power, weight, count, total) {
    const basketWrapper = document.querySelector('.basketWrapper')
    const basketCard = document.createElement("div")
    
    total = price*count

    basketCard.innerHTML = `
    <div class="basketCard">
        <div class="product">
            <div class="image-and-properties">
                <div class="image">
                    <img src=${image}
                        alt="">
                </div>
                <div class="prod-properties">
                    <p class="type">${type}</p>
                    <b>${name}</b>
                    <p><b>Price: </b>$${price}</p>
                    <p><b>Color: </b>${color}</p>
                    <p><b>Power: </b>${power}W</p>
                    <p><b>Weight Limit: </b>${weight}kg</p>
                </div>
            </div>
            <div class="countAndRemove">
                <div class="count">
                    <p class = "increase"> + </p>
                    <p class="number-of-product"> ${count} </p>
                    <p class = "decrease"> - </p>
                </div>
                <i class="fa-regular fa-trash-can"></i>
            </div>
        </div>
        <div class="total-price">
            <b class="totalPrice">$${total}</b>
        </div>
    </div>
    
    `


    basketCard.querySelector('.increase').onclick = () => {

        if (check = ShopProductArr.find(x => x.id === id)) {
            check.count++


            setLocalStorageData('Products', ShopProductArr)
            basketWrapper.innerHTML = ''
            BasketProductArr = getLocalStorageData('Products')
            addCardToBasketPage()
        }
    }

    basketCard.querySelector('.decrease').onclick = () => {

        if (check = ShopProductArr.find(x => x.id === id)) {
            check.count--


            setLocalStorageData('Products', ShopProductArr)
            basketWrapper.innerHTML = ''
            BasketProductArr = getLocalStorageData('Products')
            addCardToBasketPage()
            if (count === 1) {
                BasketProductArr = BasketProductArr.filter(x => x.id !== id)
                setLocalStorageData('Products', BasketProductArr)
                basketWrapper.innerHTML = ''
                BasketProductArr = getLocalStorageData('Products')
                addCardToBasketPage()
            }
        }
    }


    function removeElement() {
        basketCard.querySelector('.fa-trash-can').onclick = () => {
            BasketProductArr = BasketProductArr.filter(x => x.id !== id)
            setLocalStorageData('Products', BasketProductArr)

            basketWrapper.innerHTML = ''
            addCardToBasketPage()
        }
    }
    removeElement()
    // let sub = 0
    // sub+=total

    // subtotal.innerHTML = `<b>Subtotal: </b>${sub}`

    // BasketProductArr.forEach(element => {
    //     console.log(element.total);
        
    // });

    basketWrapper.classList.add("basketWrapper")
    basketCard.classList.add('basketCard')
    basketWrapper.appendChild(basketCard)
}

// 
const arr = []
sub = 0
BasketProductArr.forEach(element => {
    arr.push(element.total)
});

arr.forEach(totals => {
    sub+=totals
});
subtotal.innerHTML=`Subotal: $${sub}`


function addCardToBasketPage() {
    BasketProductArr.forEach(element => {
        // console.log(element.id);
        createCardForBasketPage(element.id, element.image, element.type, element.name, element.price, element.color, element.power, element.weight, element.count, element.total)
    });
}
addCardToBasketPage()


// creating basket function from API by ilkin end












