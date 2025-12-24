function scrollLeftContainer1() {
    const container1 = document.getElementById('card-container1');
    if (container1) {
        container1.scrollBy({
            left: -400,
            behavior: 'smooth'
        });
    }

    else {
        console.log('Element with requsted id "card-container1" not found.');
    }

}


function scrollLeftContainer2() {
    const container2 = document.getElementById('card-container2');


    
    if (container2) {
        container2.scrollBy({
            left: -400,
            behavior: 'smooth'
        });
    }
    
 
    else {
        console.log('Element with requsted id "card-container2" not found.');
    }

}


function scrollLeftContainer3() {
 const container3 = document.getElementById('card-container3');
    if (container3) {
        container3.scrollBy({
            left: -400,
            behavior: 'smooth'
        });
    }

    else {
        console.log('Element with requsted id "card-container3" not found.');
    }

}

document.getElementById('scrollLeftButton1').addEventListener('click', scrollLeftContainer1);
document.getElementById('scrollLeftButton2').addEventListener('click', scrollLeftContainer2);
document.getElementById('scrollLeftButton3').addEventListener('click', scrollLeftContainer3);







function scrollRightContainer1() {
    const container1 = document.getElementById('card-container1');
    if (container1) {
        container1.scrollBy({
            left: 400,
            behavior: 'smooth'
        });
    }

    else {
        console.log('Element with requsted id "card-container1" not found.');
    }

}


function scrollRightContainer2() {
    const container2 = document.getElementById('card-container2');


    
    if (container2) {
        container2.scrollBy({
            left: 400,
            behavior: 'smooth'
        });
    }
    
 
    else {
        console.log('Element with requsted id "card-container2" not found.');
    }

}


function scrollRightContainer3() {
 const container3 = document.getElementById('card-container3');
    if (container3) {
        container3.scrollBy({
            left: 400,
            behavior: 'smooth'
        });
    }

    else {
        console.log('Element with requsted id "card-container3" not found.');
    }

}

document.getElementById('scrollRightButton1').addEventListener('click', scrollRightContainer1);
document.getElementById('scrollRightButton2').addEventListener('click', scrollRightContainer2);
document.getElementById('scrollRightButton3').addEventListener('click', scrollRightContainer3);




