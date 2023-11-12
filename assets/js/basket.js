


// // creating basket function from API by ilkin start




const basketWrapper = document.querySelector('.basketCard')
const subtotal = document.querySelector(".valueOfAllProducts")
const basket_message = document.querySelector(".basket_number")



let ShopProductArr = []

if (getLocalStorageData('Products')) {
    ShopProductArr = getLocalStorageData('Products')

    basket_message.innerHTML = ''
    basket_message.textContent = getLocalStorageData('Products').length
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


function calculateSubtotal(products) {
    let subtotal = 0;
    products.forEach(product => {
        subtotal += product.total;
    });
    return subtotal;
}


// function for creating cards for shop section
function createCardForShop(id, image, name, price, color, power, weight, type, total) {
    const wrapper = document.querySelector('.for-sale')
    const card = document.createElement('div')


    // details style start by ilkin
    const detailsParentDiv = document.querySelector(".details")

    const detailsName = document.querySelector(".details-name")
    const detailsPrice = document.querySelector(".details-price")
    const detailsImage = document.querySelector("#details-prod-img")
    const detailsColor = document.querySelector(".details-color")
    const detailsPower = document.querySelector(".details-power")
    const detailsWeight = document.querySelector(".details-weight")
    const detailsAddCart = document.querySelector(".addToCart")

    const backgroundDiv = document.querySelector(".background-div")

    const closeDetails = document.querySelector(".fa-rectangle-xmark")
    // details style end by ilkin





    // creating cards in shop page
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
    <i class="fa-solid fa-bag-shopping" id="addtobasket"></i>
    <i class="fa-regular fa-heart"></i>
</div>
    `



    // adding card to basket page
    card.querySelector('#addtobasket').addEventListener('click', (e) => {

        // same product is not added to basket, count increased
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

        // reset basket message
        basket_message.innerHTML = ''
        basket_message.textContent = getLocalStorageData('Products').length

        // reset basket page
        BasketProductArr = getLocalStorageData('Products')
        addCardToBasketPage()






    })
    // details js
    card.querySelector(".fa-eye").addEventListener('click', () => {
        detailsParentDiv.style.display = 'block'
        backgroundDiv.style.display = 'block'

        detailsImage.src = image
        detailsName.textContent = name
        detailsPrice.textContent = `$${price}`
        detailsColor.textContent = color
        detailsPower.textContent = power
        detailsWeight.textContent = weight

        // adding card to basket from details modal
        detailsAddCart.onclick = () => {

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


            basket_message.innerHTML = ''
            basket_message.textContent = getLocalStorageData('Products').length

            BasketProductArr = getLocalStorageData('Products')
            addCardToBasketPage()

        }
        // closing modal
        window.onclick = (e) => {
            if (e.target === backgroundDiv || e.target === closeDetails) {
                detailsParentDiv.style.display = 'none'
                backgroundDiv.style.display = 'none'
            }
        }



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
    const basketWrapper = document.querySelector('.basketWrapper');
    const basketCard = document.createElement('div');
    

    // total price of each product 
    total = price * count;


    // creating card for basket page
    basketCard.innerHTML = `
        <div class="basketCard">
            <div class="product">
                <div class="image-and-properties">
                    <div class="image">
                        <img src=${image} alt="">
                        <a href="/assets/html/buy.html">
                            <button class="pink-button">Buy it now</button>
                        </a>
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
                        <p class="increase"> + </p>
                        <p class="number-of-product"> ${count} </p>
                        <p class="decrease"> - </p>
                    </div>
                    <i class="fa-regular fa-trash-can"></i>
                </div>
            </div>
            <div class="total-price">
                <b class="totalPrice">$${total}</b>
            </div>
        </div>
    `;


    // increasing product  count 
    basketCard.querySelector('.increase').onclick = () => {
        if (check = BasketProductArr.find(x => x.id === id)) {

            check.count++;
            check.total = check.count * price;

            setLocalStorageData('Products', BasketProductArr);

            basketWrapper.innerHTML = '';
            BasketProductArr = getLocalStorageData('Products');
            addCardToBasketPage();

            generateSubTotal();
        }
    };


    // increasing product  count 

    basketCard.querySelector('.decrease').onclick = () => {
        if (check = BasketProductArr.find(x => x.id === id)) {
            if (check.count > 1) {

                check.count--;
                check.total = check.count * price;


                setLocalStorageData('Products', BasketProductArr);



                basketWrapper.innerHTML = '';
                BasketProductArr = getLocalStorageData('Products');
                addCardToBasketPage();

                generateSubTotal();
            } else {
                // remove element when count=1
                BasketProductArr = BasketProductArr.filter(x => x.id !== id);
                setLocalStorageData('Products', BasketProductArr);

                basket_message.innerHTML = ''
                basket_message.textContent = getLocalStorageData('Products').length

                basketWrapper.innerHTML = '';
                BasketProductArr = getLocalStorageData('Products');
                addCardToBasketPage();

                generateSubTotal();
            }
        }
    };


    // remove product from basket page
    basketCard.querySelector('.fa-trash-can').onclick = () => {

        // Remove  product 
        BasketProductArr = BasketProductArr.filter(x => x.id !== id);
        setLocalStorageData('Products', BasketProductArr);

        basket_message.innerHTML = '';
        basket_message.textContent = getLocalStorageData('Products').length;

        basketWrapper.innerHTML = '';
        BasketProductArr = getLocalStorageData('Products');
        addCardToBasketPage();

        generateSubTotal();
    };

    basketWrapper.classList.add('basketWrapper');
    basketCard.classList.add('basketCard');
    basketWrapper.appendChild(basketCard);
}



// function of adding  card to basket page 

function addCardToBasketPage() {
    BasketProductArr.forEach(element => {
        // console.log(element.id);
        createCardForBasketPage(element.id, element.image, element.type, element.name, element.price, element.color, element.power, element.weight, element.count, element.total)
    });
}
function generateSubTotal() {

    const currentSubtotal = calculateSubtotal(BasketProductArr);
    subtotal.textContent = `Subtotal: $${currentSubtotal} USD`;

}
generateSubTotal()

addCardToBasketPage()


// creating basket function from API by ilkin end












