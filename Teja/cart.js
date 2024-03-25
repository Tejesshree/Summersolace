let openShopping=document.querySelector('.shopping');
let closeShopping=document.querySelector('.closeShopping');
let list=document.querySelector('.list');
let listCard=document.querySelector('.listCard');
let body=document.querySelector('body');
let total=document.querySelector('.total');
let quantity=document.querySelector('.quantity');

openShopping.addEventListener('click',()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click',()=>{
    body.classList.remove('active');
})
let products=[
    {
        id:1,
        name:'Sunscreen',
        image:'https://www.jiomart.com/images/product/original/491369980/lakme-sun-expert-spf-50-pa-ultra-matte-gel-50-ml-product-images-o491369980-p491369980-0-202203171009.jpg?im=Resize=(420,420)',
        price:120
    },
    {
        id:2,
        name:'Moisturizer',
        image:'https://m.media-amazon.com/images/I/51DUwR0m7tL.jpg',
        price:349
    },
    {
        id:3,
        name:'TRESemme',
        image:'https://lippieismylife.files.wordpress.com/2013/07/716-ysa8mdl-_sl1500_2.jpg?w=640',
        price:750
    },
    {
        id:4,
        name:'Hair Oil',
        image:'https://m.media-amazon.com/images/I/71wiEtzMJCL.jpg',
        price:150
    },
    {
        id:5,
        name:'Triple Scrub Pack',
        image:'https://www.summersaltbody.com/cdn/shop/products/Three_Mini_Scrub_Pack_1024x.png?v=1617175651',
        price:699
    },
];
let listCards=[];
function initApp(){
    products.forEach((value,key)=>{
        let newDiv=document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML=`
        <img src="image/${value.image}"/>
        <div class="title">${value.name}</div>
        <div class="price">${value.price.toLocaleString()}</div>
        <button onclick="addToCard(${key})">Add To Cart</button>
        `;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key]==null){
        listCards[key]= products[key];
        listCards[key].quantity=1;

    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML='';
    let count=0;
    let totalPrice=0;
    listCards.forEach((value,key)=>{
        totalPrice=totalPrice + value.price;
        count= count+ value.quantity;

        if(value!=null){
            let newDiv= document.createElement('li');
            newDiv.innerHTML=`
            <div><img src="image/${value.image}"/></div>
            <div>${value.name}</div>
            <div>${value.price.toLocaleString()}</div>
            <div>${value.quantity}</div>
            <div>
                <button onclick="changeQuantity(${key},${value.quantity - 1})">-</button>
                <div class="count">${value.quantity}</div>
                <button onclick="changeQuantity(${key},${value.quantity + 1})">+</button>
            </div>
            `;
            listCard.appendChild(newDiv);
        }
    })
    total.innerText=totalPrice.toLocaleString();
    quantity.innerText=count;

}
function changeQuantity(key,quantity){
    if (quantity==0){
        delete listCards[key];
    }
    else{
        listCards[key].quantity=quantity;
        listCards[key].price=quantity*products[key].price;

    }
    reloadCard();
}