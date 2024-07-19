
const evenButton = document.getElementById('even');

const unevenButton = document.getElementById('uneven');

const calculateButton = document.getElementById('form-result');

let evenButtonValue = 0;

evenButton.addEventListener('click',
    function() {
        evenButton.style.opacity = "75%";
        unevenButton.style.opacity = "100%";
        document.getElementById('userChoice').innerHTML = 'pari';
        evenButtonValue = true;
    }
)

unevenButton.addEventListener('click',
    function() {
        unevenButton.style.opacity = "75%";
        evenButton.style.opacity = "100%";
        document.getElementById('userChoice').innerHTML = 'dispari';
    }
)

const result = document.getElementById('result')

calculateButton.addEventListener('submit',
    function(e) {
        e.preventDefault();

        let sumNumber = userNumber + generateRndNumber();

        console.log(sumNumber)

        if (sumNumber % 2 == 0 && evenButtonValue == true) {
            result.innerHTML = 'Hai vinto!'
        } else {
            result.innerHTML = 'Hai perso!'
        }
    }
)

const userNumber = document.getElementById('userNumber').value;

function generateRndNumber () {
    let rndNumber = Math.floor((Math.random() * 5) + 1);

    return rndNumber;
}





