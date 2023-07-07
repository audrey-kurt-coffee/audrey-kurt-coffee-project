"use strict"
//function used for displaying coffee selection
function renderCoffee(coffee) {
    let html = '<div class="coffee">';
    if (coffee.roast === 'cu-tea') {
        html += '<img src="img/kitty-latte.jpg" class="coffee-pic">';
    } else if (coffee.roast === 'f-light roast') {
        html += '<img src="img/penguin-foam-latte.jpg" class="coffee-pic">';
    } else if (coffee.roast === 'medi-chum roast') {
        html += '<img src ="img/koi-latte.jpg" class="coffee-pic">';
    } else if (coffee.roast === 'bear-y dark') {
        html += '<img src= "img/panda-coffee.jpg" class="coffee-pic">';
    }
    html += '<h3>' + coffee.name + '</h3>' + '<img class="sparkle" src="img/giphy.gif"/>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';
    return html;
}

//Loop used for displaying coffees array
function renderCoffees(coffees) {
    let html = '';
    for (let i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}
//select roast dropdown filtering
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value;
    let filteredCoffees = [];
    coffees.forEach(function (coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
//array of coffees
let coffees = [
    {id: 1, name: 'Perfect Match-a', roast: 'cu-tea'},
    {id: 2, name: 'New Pen-guinea', roast: 'f-light roast'},
    {id: 3, name: 'Cinnabun Cold Brew', roast: 'f-light roast'},
    {id: 4, name: 'Boba-nana', roast: 'medi-chum roast'},
    {id: 5, name: 'How you BEAN', roast: 'medi-chum roast'},
    {id: 6, name: 'Koi-ffee', roast: 'medi-chum roast'},
    {id: 7, name: 'Bear-y Good Latte', roast: 'bear-y dark'},
    {id: 8, name: 'Red Ears', roast: 'bear-y dark'},
    {id: 9, name: 'Pawfee Coffee', roast: 'bear-y dark'},
    {id: 10, name: 'Panda Espresso', roast: 'bear-y dark'},
    {id: 11, name: 'John SugarCane', roast: 'bear-y dark'},
    {id: 12, name: 'Bamboo-zled Bear', roast: 'bear-y dark'},
    {id: 13, name: 'Black Ears, White Tummy', roast: 'bear-y dark'},
    {id: 14, name: 'Beautiful Butterfly Pea Tea', roast: 'cu-tea'},
];

//declaring variables
let tbody = document.querySelector('#coffees');
let submitButton = document.querySelector('#submit');
let roastSelection = document.querySelector('#roast-selection');
let coffeeName = document.querySelector('#coffee-name')
let addCoffeeName = document.querySelector('#add-coffee-name');
let addCoffeeRoast = document.querySelector('#add-coffee-roast');
let addCoffeeBtn = document.querySelector('#add-coffee-btn');
tbody.innerHTML = renderCoffees(coffees);
submitButton.addEventListener('click', updateCoffees);
addCoffeeBtn.addEventListener('click', addCoffeeInput);

// user search for a coffee
coffeeName.addEventListener('input', (e) => {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let filteredCoffees = [];
    coffees.forEach(function (coffee) {
        let selectedCoffee = coffee.name.toLowerCase();
        let searchValue = coffeeName.value.toLowerCase();
        if (selectedCoffee.includes(searchValue)) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
})


// For user to add coffee
function addCoffeeInput(e) {
    e.preventDefault();
    let newCoffee = {id: (coffees.length + 1), name: addCoffeeName.value, roast: addCoffeeRoast.value};
    coffees.push(newCoffee);
    tbody.innerHTML = renderCoffees(coffees);
    localStorage.setItem('coffeeStorage', JSON.stringify(coffees));
    alert(`Adding ${newCoffee.name} to coffee list!`)
}

addCoffeeInput();


