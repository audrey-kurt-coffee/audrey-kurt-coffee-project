"use strict"

function renderCoffee(coffee) {
    let html = '<div class="coffee">';
    // html += '<td>' + coffee.id + '</td>';
    html += '<h3>' + coffee.name + '</h3>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';
    return html;
}

function renderCoffees(coffees) {
    let html = '';
    for (let i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

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

let coffees = [
    {id: 1, name: 'Pawfee Coffee', roast: 'light'},
    {id: 2, name: 'Panda Espresso', roast: 'light'},
    {id: 3, name: 'Cinnabun Cold Brew', roast: 'light'},
    {id: 4, name: 'Perfect Match-a', roast: 'medium'},
    {id: 5, name: 'How you BEAN', roast: 'medium'},
    {id: 6, name: '', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];
let tbody = document.querySelector('#coffees');

let submitButton = document.querySelector('#submit');
let roastSelection = document.querySelector('#roast-selection');
let coffeeName = document.querySelector('#coffee-name')
let addCoffeeRoast = document.querySelector('#add-coffee-roast');
let addCoffeeName = document.querySelector('#add-coffee-name');
let addCoffeeBtn =  document.querySelector('#add-coffee-btn');
tbody.innerHTML = renderCoffees(coffees);
submitButton.addEventListener('click', updateCoffees);


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



function addCoffeeInput (e) {
    e.preventDefault();
    let newCoffee = {id: (coffees.length + 1), name: addCoffeeName.value, roast: addCoffeeRoast.value};
    coffees.push(newCoffee);
    tbody.innerHTML = renderCoffees(coffees);
    localStorage.setItem('coffeeStorage', JSON.stringify(coffees));
    alert(`Adding ${newCoffee.name} to coffee list!`)
}
addCoffeeInput();
addCoffeeBtn.addEventListener('click', addCoffeeInput);










// Attempt to allow user to add coffee selection
// const setNewCoffee = localStorage.setItem("");



// const addCoffeeInput = () => {
//     let newCoffee = { id:(coffees.length + 1),name:add}
//     const inputCoffee = document.getElementById('userInputCoffee');
//     coffees.push(inputCoffee.value);
//     renderCoffee(inputCoffee.value);
//     tbody.innerHTML = renderCoffees(filteredCoffees);
// }
