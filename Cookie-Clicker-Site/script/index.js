var num = 0;

window.onload = function () {
        var name = prompt("What is your name");
        
        var space = document.getElementById("space");
        
        space.innerHTML = name + "'s Bakery";
}

var cookie = document.getElementById("cookie");

function cookieClick() { 
    num += 1;

    var numbers = document.getElementById("numbers");
    
    var upgradeLevel = document.getElementById("upgradeLevel");
    
    numbers.innerHTML = num;      
    if(num >= 30 ){
        num += 2;
        upgradeLevel.innerHTML = "Granny Level";
    }

    if(num >= 500) {
        num += 10;
        upgradeLevel.innerHTML = "Factory Level";
    }

    if(num >= 1000) {
        num += 30;
        upgradeLevel.innerHTML = "Plant Level";
    }

    //automatic super factory upgrade to 1000x
    if(num >= 100000) {
        num += 1000;
        upgradeLevel.innerHTML = "Super-Plant Level";
    }
}
