

//first colum
let oneBun = document.getElementById('oneBun');
let listOne = document.getElementById('listOne');
let nam = document.getElementById('name');

//second colum
let oneBun2 = document.getElementById('oneBun2');
let listOne2 = document.getElementById('listOne2');
let nam2 = document.getElementById('name2');
let overly = document.getElementById('overly');




// hamburger menu
oneBun.addEventListener('click', function () {
    
    if (listOne.style.display === 'block') {
        listOne.style.display = 'none'

    } else if (listOne.style.display = 'none') {
        listOne.style.display = 'block'
    }
})
nam.addEventListener('click', function () {
    if (listOne.style.display === 'block') {
        listOne.style.display = 'none'

    } else if (listOne.style.display = 'none') {
        listOne.style.display = 'block'
    }
})

overly.addEventListener('click', function () {
    overly.classList.add('active')
    if (listOne.style.display === 'block') {
        listOne.style.display = 'none'

    }
    
    if (listOne2.style.display === 'block') {
        listOne2.style.display = 'none'

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
nam2.addEventListener('click', function () {
     
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







// compere text ID
let image = document.getElementById('image');
let productName = document.getElementById('productName');
let size = document.getElementById('size');
let brand = document.getElementById('brand');
let ram = document.getElementById('ram');




// MObiles or Products ID
let nokiaID = document.getElementById('nokia');
let motorolaID = document.getElementById('motorola');
let iphoneID = document.getElementById('iphone');
let samsungID = document.getElementById('samsung');
let vivoID = document.getElementById('vivo');



// Click Events--------->
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

    // second ID's Add Events
    nokia2ID.addEventListener('click', function () {
        nokia2();
    })
    motorola2ID.addEventListener('click', function () {
        motorola2();
    })
    iphone2ID.addEventListener('click', function () {
        iphone2();
    })
    samsung2ID.addEventListener('click', function () {
        samsung2();
    })
    vivo2ID.addEventListener('click', function () {
        vivo2();
    })

}

function nokia() {
    fetch("config.json")
    .then(response => response.json())
    .then(data => {
        
        data.nokia.forEach(list => {
            image.src = list.nokiaImage
            productName.innerHTML = list.name
            size.innerHTML = list.size
            brand.innerHTML = list.brand
            ram.innerHTML = list.ram
            
        })
      
    })
}

// Motorola --------->

function motorola() {
    fetch("config.json")
    .then(response => response.json())
    .then(data => {
        
        data.motorola.forEach(list => {
            image.src = list.motorolaImage
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
            image.src = list.iphoneImage
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
            image.src = list.samsungImage
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
            image.src = list.vivoImage
            productName.innerHTML = list.name
            size.innerHTML =list.size
            brand.innerHTML =list.brand
            ram.innerHTML =list.ram
            
        })
    })
}

//============= SEcond Colum ===========>


let nokia2ID = document.getElementById('nokia2');
let motorola2ID =document.getElementById('motorola2');
let iphone2ID = document.getElementById('iphone2');
let samsung2ID = document.getElementById('samsung2');
let vivo2ID = document.getElementById('vivo2');


let image2 = document.getElementById('image2');
let productName2 = document.getElementById('productName2');
let size2 = document.getElementById('size2');
let brand2 = document.getElementById('brand2');
let ram2 =document.getElementById('ram2');

function nokia2() {
    fetch("config.json")
    .then(response => response.json())
    .then(data => {
        
        data.nokia.forEach(list => {
            image2.src = list.nokiaImage
            productName2.innerHTML = list.name
            size2.innerHTML = list.size
            brand2.innerHTML = list.brand
            ram2.innerHTML = list.ram
            
        })
      
    })
}
function motorola2() {
    fetch("config.json")
    .then(response => response.json())
    .then(data => {
        
        data.motorola.forEach(list => {
            image2.src = list.motorolaImage
            productName2.innerHTML = list.name
            size2.innerHTML = list.size
            brand2.innerHTML = list.brand
            ram2.innerHTML = list.ram
            
        })
      
    })
}
function iphone2() {
    fetch("config.json")
    .then(response => response.json())
    .then(data => {
        
        data.iphone.forEach(list => {
            image2.src = list.iphoneImage
            productName2.innerHTML = list.name
            size2.innerHTML = list.size
            brand2.innerHTML = list.brand
            ram2.innerHTML = list.ram
            
        })
      
    })
}
function samsung2() {
    fetch("config.json")
    .then(response => response.json())
    .then(data => {
        
        data.samsung.forEach(list => {
            image2.src = list.samsungImage
            productName2.innerHTML = list.name
            size2.innerHTML = list.size
            brand2.innerHTML = list.brand
            ram2.innerHTML = list.ram
            
        })
      
    })
}
function vivo2() {
    fetch("config.json")
    .then(response => response.json())
    .then(data => {
        
        data.vivo.forEach(list => {
            image2.src = list.vivoImage
            productName2.innerHTML = list.name
            size2.innerHTML = list.size
            brand2.innerHTML = list.brand
            ram2.innerHTML = list.ram
            
        })
      
    })
}







