//let SalmonCookies =['Seattle','Tokyo','Dubai','Paris','Lima'];
//'use strict';
/*
let workHouer = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
'use strict';

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


let SeattleStore = {
    
    
    name: 'Seattle',
    miniNumbercust: 23,
    maxNumbercust: 65,
    avgNumbercoki: 6.3,
    custEachHouer: [],
    cokiEachHouer: [],
    total: 0,
    
    custEachHouerFu: function () {
        for (let i = 0; i < workHouer.length; i++) {
            
            this.custEachHouer.push(random(this.miniNumbercust, this.maxNumbercust));
        }
        
    },
    cokiEachHouerFu: function () {
        for (let i = 0; i < workHouer.length; i++) {
            
            this.cokiEachHouer.push(Math.floor(this.custEachHouer[i] * this.avgNumbercoki));
            this.total += this.cokiEachHouer[i];
            
        }
    },
    
    render: function () {
        let theObject = document.getElementById('parent');
        let tittle = document.createElement('h2');
        theObject.appendChild(tittle);
        tittle.textContent = this.name + ' ' + 'store';
        
        let unorderList = document.createElement('ul');
        theObject.appendChild(unorderList);
        
        
        for (let i = 0; i < workHouer.length; i++) {
            let list = document.createElement('li');
            unorderList.appendChild(list);
            list.textContent = `${workHouer[i]} : ${this.cokiEachHouer[i]} cokies`
            
        }
        let totalItem = document.createElement('li');
        unorderList.appendChild(totalItem);
        totalItem.textContent = `total : ${this.total} cokies`
        
    }
}

console.log(SeattleStore);
SeattleStore.custEachHouerFu();
SeattleStore.cokiEachHouerFu();
SeattleStore.render();
//==========================================
let tokyoStore = {
    
    
    name: 'tokyo',
    miniNumbercust: 3,
    maxNumbercust: 24,
    avgNumbercoki: 1.2,
    custEachHouer: [],
    cokiEachHouer: [],
    total: 0,
    
    custEachHouerFu: function () {
        for (let i = 0; i < workHouer.length; i++) {
            
            this.custEachHouer.push(random(this.miniNumbercust, this.maxNumbercust));
        }
        
    },
    cokiEachHouerFu: function () {
        for (let i = 0; i < workHouer.length; i++) {
            
            this.cokiEachHouer.push(Math.floor(this.custEachHouer[i] * this.avgNumbercoki));
            this.total += this.cokiEachHouer[i];
            
        }
    },
    
    render: function () {
        let theObject = document.getElementById('parent');
        let tittle = document.createElement('h2');
        theObject.appendChild(tittle);
        tittle.textContent = this.name + ' ' + 'store';
        
        let unorderList = document.createElement('ul');
        theObject.appendChild(unorderList);
        
        
        for (let i = 0; i < workHouer.length; i++) {
            let list = document.createElement('li');
            unorderList.appendChild(list);
            list.textContent = `${workHouer[i]} : ${this.cokiEachHouer[i]} cokies`
            
        }
        let totalItem = document.createElement('li');
        unorderList.appendChild(totalItem);
        totalItem.textContent = `total : ${this.total} cokies`
        
    }
}

console.log(SeattleStore);
tokyoStore.custEachHouerFu();
tokyoStore.cokiEachHouerFu();
tokyoStore.render();
//========================================
let dubaiStore = {
    
    
    name: 'Dubai',
    miniNumbercust: 11,
    maxNumbercust: 38,
    avgNumbercoki: 3.7,
    custEachHouer: [],
    cokiEachHouer: [],
    total: 0,
    
    custEachHouerFu: function () {
        for (let i = 0; i < workHouer.length; i++) {
            
            this.custEachHouer.push(random(this.miniNumbercust, this.maxNumbercust));
        }
        
    },
    cokiEachHouerFu: function () {
        for (let i = 0; i < workHouer.length; i++) {
            
            this.cokiEachHouer.push(Math.floor(this.custEachHouer[i] * this.avgNumbercoki));
            this.total += this.cokiEachHouer[i];
            
        }
    },
    
    render: function () {
        let theObject = document.getElementById('parent');
        let tittle = document.createElement('h2');
        theObject.appendChild(tittle);
        tittle.textContent = this.name + ' ' + 'store';
        
        let unorderList = document.createElement('ul');
        theObject.appendChild(unorderList);
        
        
        for (let i = 0; i < workHouer.length; i++) {
            let list = document.createElement('li');
            unorderList.appendChild(list);
            list.textContent = `${workHouer[i]} : ${this.cokiEachHouer[i]} cokies`
            
        }
        let totalItem = document.createElement('li');
        unorderList.appendChild(totalItem);
        totalItem.textContent = `total : ${this.total} cokies`
        
    }
}

console.log(SeattleStore);
dubaiStore.custEachHouerFu();
dubaiStore.cokiEachHouerFu();
dubaiStore.render();
//=======================================
let parisStore = {
    
    
    name: 'Paris',
    miniNumbercust: 3,
    maxNumbercust: 24,
    avgNumbercoki: 1.2,
    custEachHouer: [],
    cokiEachHouer: [],
    total: 0,
    
    custEachHouerFu: function () {
        for (let i = 0; i < workHouer.length; i++) {
            
            this.custEachHouer.push(random(this.miniNumbercust, this.maxNumbercust));
        }
        
    },
    cokiEachHouerFu: function () {
        for (let i = 0; i < workHouer.length; i++) {
            
            this.cokiEachHouer.push(Math.floor(this.custEachHouer[i] * this.avgNumbercoki));
            this.total += this.cokiEachHouer[i];
            
        }
    },
    
    render: function () {
        let theObject = document.getElementById('parent');
        let tittle = document.createElement('h2');
        theObject.appendChild(tittle);
        tittle.textContent = this.name + ' ' + 'store';
        
        let unorderList = document.createElement('ul');
        theObject.appendChild(unorderList);
        
        
        for (let i = 0; i < workHouer.length; i++) {
            let list = document.createElement('li');
            unorderList.appendChild(list);
            list.textContent = `${workHouer[i]} : ${this.cokiEachHouer[i]} cokies`
            
        }
        let totalItem = document.createElement('li');
        unorderList.appendChild(totalItem);
        totalItem.textContent = `total : ${this.total} cokies`
        
    }
}

console.log(SeattleStore);
parisStore.custEachHouerFu();
parisStore.cokiEachHouerFu();
parisStore.render();
//=================================
let limaStore = {
    
    
    name: 'Lima',
    miniNumbercust: 2,
    maxNumbercust: 16,
    avgNumbercoki: 4.6,
    custEachHouer: [],
    cokiEachHouer: [],
    total: 0,
    
    custEachHouerFu: function () {
        for (let i = 0; i < workHouer.length; i++) {
            
            this.custEachHouer.push(random(this.miniNumbercust, this.maxNumbercust));
        }
        
    },
    cokiEachHouerFu: function () {
        for (let i = 0; i < workHouer.length; i++) {
            
            this.cokiEachHouer.push(Math.floor(this.custEachHouer[i] * this.avgNumbercoki));
            this.total += this.cokiEachHouer[i];
            
        }
    },
    
    render: function () {
        let theObject = document.getElementById('parent');
        let tittle = document.createElement('h2');
        theObject.appendChild(tittle);
        tittle.textContent = this.name + ' ' + 'store';
        
        let unorderList = document.createElement('ul');
        theObject.appendChild(unorderList);
        
        
        for (let i = 0; i < workHouer.length; i++) {
            let list = document.createElement('li');
            unorderList.appendChild(list);
            list.textContent = `${workHouer[i]} : ${this.cokiEachHouer[i]} cokies`
            
        }
        let totalItem = document.createElement('li');
        unorderList.appendChild(totalItem);
        totalItem.textContent = `total : ${this.total} cokies`
        
    }
}

console.log(SeattleStore);
limaStore.custEachHouerFu();
limaStore.cokiEachHouerFu();
limaStore.render();


*/
// 'use strict';

// let workHouers = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// function SalmonCookies(name, miniNumberCust, maxNumberCust, avgCokiEachCust) {
//     this.namee = name;
//     this.miniNumberCust = miniNumberCust;
//     this.maxNumberCust = maxNumberCust;
//     this.avgCokiEachCust = avgCokiEachCust;
//     this.randomNumberCustEachHor = [];
//     this.numberCokiEachCust = [];

//     this.randomNumber = function (min, max) {
//         return Math.floor(Math.random() * (max - min + 1) + min);
//     }
// }
//     for (let i = 0; i < workHouers.length; i++) {
//     SalmonCookies.randomNumberCustEachHor.push(Math.floor.random(SalmonCookies.miniNumberCust, SalmonCookies.maxNumberCust));
// }
// SalmonCookies.randomNumber(this.miniNumberCust, this.maxNumberCust);
// console.log(SalmonCookies.randomNumber);
'use strict';
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