

let debug = document.getElementById('debug');
let lea = document.getElementById('lea');


fetch("config.json")
    .then(response => response.json())
    .then(data => {
        
        data.productOne.forEach(list => {
            debug.addEventListener("click", function () {
                document.getElementById('debug').innerHTML = list.name
            })
            lea.addEventListener('click', function () {
            document.getElementById('lea').innerHTML = list.brand
                
            })
            
        })

        data.productTwo.forEach(list => {
            console.log(list);
        })
        
    })