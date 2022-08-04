


let oneBun = document.getElementById('oneBun');
let listOne = document.getElementById('listOne');
let nam = document.getElementById('name');

let listOne2 = document.getElementById('listOne2');
let nam2 = document.getElementById('name2');
let oneBun2 = document.getElementById('oneBun2');




// hamburger menu
oneBun.addEventListener('click', function () {
    
    if (listOne.style.display === 'block') {
        listOne.style.display = 'none'

    } else if (listOne.style.display = 'none') {
        listOne.style.display = 'block'
    }
})


// change header text 
let child = listOne.children;
[...child].forEach(children => {
    children.addEventListener('click', function () {
        nam.innerHTML = children.innerHTML
        
        listOne.style.display = 'none'
    })
})



// second
// hamburger menu
oneBun2.addEventListener('click', function () {
    
    if (listOne2.style.display === 'block') {
        listOne2.style.display = 'none'

    } else if (listOne2.style.display = 'none') {
        listOne2.style.display = 'block'
    }
})


// change header text 
let chi = listOne2.children;
[...chi].forEach(children => {
    children.addEventListener('click', function () {
        nam2.innerHTML = children.innerHTML
        
        listOne2.style.display = 'none'
    })
})









let productName = document.getElementById('productName');
let size = document.getElementById('size');
let brand = document.getElementById('brand');
let ram = document.getElementById('ram');




let nokiaID = document.getElementById('nokia');
let motorolaID = document.getElementById('motorola');
let iphoneID = document.getElementById('iphone');
let samsungID = document.getElementById('samsung');
let vivoID = document.getElementById('vivo');




// Nokia--------->
window.onload = () => {
    nokiaID.addEventListener('click', function () {
        nokia();
    })

    motorolaID.addEventListener('click', function () {
        motorola();
    })
    iphoneID.addEventListener('click', function () {
        iphone();
    })
    samsungID.addEventListener('click', function () {
        samsung();
    })
    vivoID.addEventListener('click', function () {
        vivo();
    })





}



function nokia() {
    fetch("config.json")
    .then(response => response.json())
    .then(data => {
        
        data.nokia.forEach(list => {
            productName.innerHTML = list.name
            size.innerHTML =list.size
            brand.innerHTML =list.brand
            ram.innerHTML =list.ram
            
        })
    })
}





// Motorola --------->

function motorola() {
    fetch("config.json")
    .then(response => response.json())
    .then(data => {
        
        data.motorola.forEach(list => {
            productName.innerHTML = list.name
            size.innerHTML =list.size
            brand.innerHTML =list.brand
            ram.innerHTML =list.ram
            
        })
    })
}






// I phone --------->

function iphone() {
    fetch("config.json")
    .then(response => response.json())
    .then(data => {
        
        data.iphone.forEach(list => {
            productName.innerHTML = list.name
            size.innerHTML =list.size
            brand.innerHTML =list.brand
            ram.innerHTML =list.ram
            
        })
    })
}





// Samsung --------->

function samsung() {
    fetch("config.json")
    .then(response => response.json())
    .then(data => {
        
        data.samsung.forEach(list => {
            productName.innerHTML = list.name
            size.innerHTML =list.size
            brand.innerHTML =list.brand
            ram.innerHTML =list.ram
            
        })
    })
}



// ViVo --------->

function vivo() {
    fetch("config.json")
    .then(response => response.json())
    .then(data => {
        
        data.vivo.forEach(list => {
            productName.innerHTML = list.name
            size.innerHTML =list.size
            brand.innerHTML =list.brand
            ram.innerHTML =list.ram
            
        })
    })
}


