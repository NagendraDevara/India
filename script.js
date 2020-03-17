$(function () {
    $('.map').maphilight();
});
let statesName = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal',
    'Ladakh',
    'Lakshadweep',
    'Andaman and Nicobar Islands',
    'Dadra and Nagar Haveli',
    'National Capital Territory of Delhi',
    'Puducherry (Pondicherry)',
    'Jammu & Kashmir',
    'Chandigarh',
    'Daman',
    'Diu'


];
let id = id => document.getElementById(id);
let classN = classN => document.getElementsByClassName(classN);
let eArr = statesName[Symbol.iterator]();
let pointsScored = 0;

function nextState() {
    let value = eArr.next();
    value.done == false ? id('presentStateName').innerHTML = value.value : id('total-questions').innerHTML = `<div> <h2>Game Over</h2><p>Your Score:${pointsScored}</p><button onclick="restartGame()">Restart</button></div>`;
}
$(document).ready(function () {
    id('presentStateName').innerHTML = eArr.next().value;
    let items = document.getElementById("Map").getElementsByTagName("area");

    for (let ele of items) {
        ele.onclick = (e) => {
            let actualVal = e.target.alt.trim().replace(/\W+/g, "").split(' ').join('').toLowerCase();
            let userTrimmedVal = id('presentStateName').innerText.trim().replace(/\W+/g, "").split(' ').join('').toLowerCase();
            if (actualVal == userTrimmedVal) {
                id('points').innerHTML = ++pointsScored;
                id('presentStateName').style.display = "none";
                id('correctAns').style.display = "block";
                setTimeout(() => {
                    nextState();
                    try {
                        id('correctAns').style.display = "none";
                        id('presentStateName').style.display = "block";
                    } catch (error) {

                    }
                }, 2000);

            } else {
                id('presentStateName').style.display = "none";
                id('wrongAns').style.display = "block";
                setTimeout(() => {
                    id('wrongAns').style.display = "none";
                    nextState();
                    try {
                        id('presentStateName').style.display = "block";

                    } catch (error) {

                    }
                }, 2000);
            }

        }

    }
});

function restartGame(){
window.location.reload();
}
