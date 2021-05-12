'use strict';
// function test() {
//     console.log('hello abo al waleed');

// }
// test();
// let khloo = {
//     name: 'khaled',
//     age: 28,
//     study: 'programing',
//     likes: ['fucking', 'dirty jops', 'eat', 'drink'],



// }
// console.log('before', khloo);

// khloo.dislikes = ['sdsf', 'sdsfvz']
// console.log('after', khloo);

// let tittle = document.getElementById('tittle');
// let mainTittle = document.createElement('h1');
// tittle.appendChild(mainTittle);
// mainTittle.textContent = 'frome js'
// let myDom = document.getElementById('header');

// let table = document.createElement('table');
// myDom.appendChild(table);
// let tableRo0 = document.createElement('tr');
// table.appendChild(tableRo0);
// let tablehad = document.createElement('th');
// tableRo0.appendChild(tablehad);

// tablehad.textContent = 'mainTittle';
// let tableRo1=document.createElement('tr');
// table.appendChild( tableRo1);
// let tabledata=document.createElement('td');
// tableRo1.appendChild(tabledata);
// tabledata.textContent='the secand row';
// 
let workHouers = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let SalmonCookiesLocation = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima'];
function SalmonCokies(name, minNumberCust, maxNumberCust, avgCokiEachCust) {
    this.name = name;
    this.minNumberCust = minNumberCust;
    this.maxNumberCust = maxNumberCust;
    this.avgCokiEachCust = avgCokiEachCust;

    this.cokiEachCust = [];
    this.totalCoki = 0;
}
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


SalmonCokies.prototype.cokiEachCustFu = function () {
    for (let i = 0; i < workHouers.length; i++) {
        this.cokiEachCust.push(Math.floor(random(this.minNumberCust, this.maxNumberCust) * this.avgCokiEachCust));
        this.totalCoki += this.cokiEachCust[i];
    }
};

let theTable = document.getElementById('theTable');
let tableRow = document.createElement('tr');
theTable.appendChild(tableRow);
let tableHad = document.createElement('th');
tableRow.appendChild(tableHad);
tableHad.textContent = 'location Name';

for (let i = 0; i < workHouers.length; i++) {
    let tableData = document.createElement('td');
    tableRow.appendChild(tableData);

    tableData.textContent = workHouers[i];

};
SalmonCokies.prototype.render = function () {
    let tableRow0 = document.createElement('tr');
    theTable.appendChild(tableRow0);
    let tableHed1 = document.createElement('th');
    tableRow0.appendChild(tableHed1);

    tableHed1.textContent = this.name;

    for (let i = 0; i < workHouers.length; i++) {

        let tableData1 = document.createElement('td');
        tableRow0.appendChild(tableData1);
        tableData1.textContent = this.cokiEachCust[i];
    }


}




let seattle = new SalmonCokies('seattle', 23, 65, 6.3);
console.log(seattle);
seattle.cokiEachCustFu();
seattle.render();
let tokyo = new SalmonCokies('Tokyo', 3, 24, 1.2);
tokyo.cokiEachCustFu();
tokyo.render();
let dubai = new SalmonCokies('Dubai', 11, 38,3.7);
console.log(seattle);
dubai.cokiEachCustFu();
dubai.render();
let paris = new SalmonCokies('Paris',20,38, 2.3);
console.log(seattle);
paris.cokiEachCustFu();
paris.render();
let lima = new SalmonCokies('Lima', 2, 16, 4.6);
console.log(seattle);
lima.cokiEachCustFu();
lima.render();