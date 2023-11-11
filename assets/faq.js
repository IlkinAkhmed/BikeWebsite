const orderBtn=document.querySelector('.order')
const orderSubmenu=document.querySelector('.order_submenu')
const orderText=document.querySelector('.order_text')

orderBtn.addEventListener('click',()=>{
    orderText.classList.toggle('orderOpenTxt');
    orderSubmenu.classList.toggle('orderOpen')

})

// -----------------------------------------------

const shippingBtn=document.querySelector('.shipping')
const shippingSubmenu=document.querySelector('.shipping_submenu')
const shippingText=document.querySelector('.shipping_text')

shippingBtn.addEventListener('click',()=>{
    shippingText.classList.toggle('shippingOpenTxt');
    shippingSubmenu.classList.toggle('shippingOpen')  

})

// -----------------------------------------------

const refundBtn=document.querySelector('.refund')
const refundSubmenu=document.querySelector('.refund_submenu')
const refundText=document.querySelector('.refund_text')

refundBtn.addEventListener('click',()=>{
    refundText.classList.toggle('refundOpenTxt');
    refundSubmenu.classList.toggle('refundOpen')  
})

// -----------------------------------------------

const cancelBtn=document.querySelector('.cancel')
const cancelSubmenu=document.querySelector('.cancel_submenu')
const cancelText=document.querySelector('.cancel_text')

cancelBtn.addEventListener('click',()=>{
    cancelText.classList.toggle('cancelOpenTxt');
    cancelSubmenu.classList.toggle('cancelOpen')  
})

// -----------------------------------------------

const successBtn=document.querySelector('.success')
const successSubmenu=document.querySelector('.success_submenu')
const successText=document.querySelector('.success_text')

successBtn.addEventListener('click',()=>{
    successText.classList.toggle('successOpenTxt');
    successSubmenu.classList.toggle('successOpen')  
})
