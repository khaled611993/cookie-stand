//let SalmonCookies =['Seattle','Tokyo','Dubai','Paris','Lima'];
'use strict';
let workHouer = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


let SeattleStore={
    
    
    name:'Seattle',
    miniNumbercust: 23,
    maxNumbercust: 65,
    avgNumbercoki: 6.3,
    custEachHouer: [],
    cokiEachHouer:[],
    total:0,
    
 custEachHouerFu : function(){
     for (let i=0 ;i< workHouer.length ; i++ ){

        this.custEachHouer.push(random(this.miniNumbercust , this.maxNumbercust));
     }
    
    },
    cokiEachHouerFu: function(){
        for (let i=0 ; i < workHouer.length ; i++){

            this.cokiEachHouer.push(Math.floor(this.custEachHouer[i] * this.avgNumbercoki));
            this.total += this.cokiEachHouer[i];
       
        }
    },

 render: function(){
     let theObject = document.getElementById('parent');
     let tittle =document.createElement('h2');
     theObject.appendChild(tittle);
     tittle.textContent = this.name +' ' + 'store';

     let unorderList = document.createElement('ul');
     theObject.appendChild(unorderList);

     
     for (let i = 0; i <workHouer.length; i++) {
         let list = document.createElement('li');
         unorderList.appendChild(list);
         list.textContent= `${workHouer[i]} : ${this.cokiEachHouer[i]} cokies`
         
        }
          let totalItem = document.createElement('li');
          unorderList.appendChild(totalItem);
          totalItem.textContent= `total : ${this.total} cokies`

 }
}
console.log(SeattleStore);
SeattleStore.custEachHouerFu();
SeattleStore.cokiEachHouerFu();
SeattleStore.render();