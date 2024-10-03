const services=[
    {serviceName: "Dry Cleaning", price: "200",source: "images/drycleaning.jpg"},
    {serviceName: "Wash and Dry", price: "150",source: "images/washndry.jpg"},
    {serviceName: "Ironing", price: "100",source: "images/ironing.jpg"},
    {serviceName: "Tailoring", price: "500",source: "images/tailoring.jpg"},
    {serviceName: "Leather & Suede Cleaning", price: "999",source: "images/leathercleaning.jpg"},
    {serviceName:"Wedding Dress Cleaning", price: "2400",source: "images/weddingdresscleaning.webp"},
    {serviceName:"Stain Removal", price:"500",source: "images/stainremoval.png"}
];

// variables:

let counter=0;
let cart=[];
let total=0;

const servicesContainer= document.getElementById('service-con');
const cartItems=document.getElementById('tbl-body');
const cartTotal=document.getElementById('total-amt');
const imageContainer=document.getElementById('img-con');
const sName=document.getElementById('service-name');
const sprice=document.getElementById('service-price');
const btnContainer=document.getElementById('btn-con');
const bookBtn=document.getElementById('book-btn');
const errorMsg=document.getElementById('alert');

// functions

// function to display the next service
function displayNextService(){
    if (counter<services.length){
        const service=services[counter];
        const imageContent=`<img src="${service.source}" class="service-img">`;
        imageContainer.innerHTML=imageContent;
        sName.textContent=service.serviceName;
        sprice.textContent=`Rs. ${service.price}`;
        btnContainer.innerHTML=`
        <button class="skip-btn" id="skip-btn" onclick="skipItem()"><span> Skip Item <img src="images/remove.svg" alt=""></span></button>
        <button class="addtocart-btn" id="addtocart-btn" onclick="addItem()"><span> Add to Cart <img src="images/add.svg" alt=""></span></button>
        `;
        
    }
    else{
        counter=0;
    }
}

// add item to cart and move to next item
function addItem(){
    document.getElementById('addtocart-con').innerHTML='';
    const service=services[counter];
    cart.push(service);
    total+=parseInt(service.price);
    updateCart();
    counter++;
    displayNextService();
}

// skip item and move to next item
function skipItem(){
    counter++;
    displayNextService();
}

// update cart display
function updateCart(){
    cartItems.innerHTML='';
    cart.forEach(service =>{
        const tblRow=document.createElement('tr');
        tblRow.innerHTML=`
        <td>${service.serviceName}</td>
        <td>Rs.${service.price}</td>
        `;
        cartItems.appendChild(tblRow);
    });
    cartTotal.innerHTML= `Rs. ${total}`;
    errorBtn()
    
}

// functioning of book button

function errorBtn(){
    if(cart.length==0){
        bookBtn.style="opacity: 0.4";
    }
    else{
        bookBtn.style.backgroundColor='rgb(114, 116, 212)'
        bookBtn.style="opacity: 1";
        errorMsg.innerHTML='';
    }
}

bookBtn.addEventListener('click',()=>{
    if(cart.length==0){
        errorMsg.innerHTML=`<img src="images/info-red.svg"><p>Add items to the cart to Book.</p>`;
        console.log("error");
    }
    else{
        if(document.getElementById('name').value!="" && document.getElementById('phone-no').value!=""){
            alert("Booking successful!");
        }
        else{
            errorMsg.innerHTML=`<img src="images/info-red.svg"><p>Please enter your details.</p`;
        }
    }

})



displayNextService();
errorBtn();