//funksiyalar
//statik
// function addd(){
//     return 3+4;
// }
// let add = function (){
//     return 5+5
// }

// console.log(add());

// //dinamik
// function example(a,b){
//     return a+b
// }
// console.log(example(10,10));

// function main (pi,ti){
//     pi=parseInt(pi,10)
//     ti=parseInt(ti,10)
//     return (pi+ti)/2
// }

// let pi=prompt('Birinchi raqamni kiriting');
// let ti=prompt('Ikkinchi raqamni kiriting');

// alert ('Natija:'+main(pi,ti));

// function pa(){
//     pa=parseInt(pa,10)
//     return 10+10
// }
// let fa=prompt('Birinchi raqam');
// let ma=prompt('Birinchi raqam');

// alert('Natija'+pa());

// function fuctarial(b) {
//     if (b == 1) {
//         return 1;
//     }
//     return b * fuctarial(b - 1);
// }
// let a = prompt('Sonni kiriting');
// alert(fuctarial(a));

// function apple(a, b) {
//     apple = parseInt(apple, 10);
//     a = parseInt(a)
//     b = parseInt(b)
//     return a + b;
// }
// // console.log(apple(5,6));
// let a=prompt('Birinchi yashikdagi olmalar soni');
// let b=prompt('Ikkinchi yashikdagi olmalar soni');

// alert('Jami bo\'lib: ' +apple(a, b));

// function olmalar(birinchi, ikkinchi) {
//     birinchi = parseInt(birinchi)
//     ikkinchi = parseInt(ikkinchi)
//     return birinchi - ikkinchi;
// }
// console.log(olmalar(50, 25) + ' olmalar qoldi');

// function nok(birinchi, ikkinchi) {
//     birinchi = parseInt(birinchi);
//     ikkinchi = parseInt(ikkinchi);
//     return birinchi + ikkinchi;
// }


// let noklar_bir = prompt('Birinchi svatchada nechta nok bor?');
// let noklar_ikki = prompt('Ikkinchi svatchada nechta nok bor?');

// alert('Umimiy hisobda ' + nok(noklar_bir, noklar_ikki));



// let car = {
//     nomi: "jentra",
//     model:2,
//     maxTezlik:360,
//     rangi:"oq",
//     ishlabChiqarilganSana:2020,
//     holati:"Urilgan"
// }

// console.log("Mening mashinam: " + car.nomi);



// let odam = {
//     name: "",
//     surname:"",
//     id:"",
//     fullname : function () {
//         return this.name + this.surname + this.id;
//     }
// }
// odam.name = prompt("Ismingizni kiriting");
// odam.surname = prompt("Familiyangizni kiriting");
// odam.id = prompt("IDsini kiriting");

// console.log(odam.fullname());





// let auto = {
//     name: "",
//     color: "",
//     year: "",
//     atribut: "",
//     attributesOne : function() {
//         return this.name + "\n" + this.color;
//     },
//     attributesTwo : function() {
//         return this.year + "\n" + this.atribut
//     }
// }

// auto.name = prompt("Avtomobil nomini kiriting");
// auto.color = prompt("Avtomobil rangini kiriting");
// auto.year = prompt("Avtomobil yilini kiriting");
// auto.atribut = prompt("Avtomobil hususiyatlari kiriting");

// alert(auto.attributesOne());
// alert(auto.attributesTwo());







// var elIsmi =document.querySelector('.ismi');

// function wre() {
//     elIsmi.textContent +='Bekmurod';
// }









let information = {
    name: "",
    sur_name: "",
    parent_name: "",
    eage: "",
    step_information: "",

    informations: function() {
        return this.name + "\n" + this.sur_name + "\n" + this.parent_name + "\n" + this.eage + "\n" + this.step_information;
    }
}

information.name = prompt('Ismi');
information.sur_name = prompt('Familiyasi');
information.parent_name = prompt('Otasining ismi');
information.eage = prompt('Yoshi');
information.step_information = prompt('Ma\'lumoti');


// alert(information.informations());

var elInformation = document.querySelector('.information_one');
function data_one() {
    elInformation.innerHTML += information.name
}
data_one()
var elInformation = document.querySelector('.information_two');
function data_two() {
    elInformation.innerHTML += information.sur_name
}
data_two()
var elInformation = document.querySelector('.information_three');
function data_three() {
    elInformation.innerHTML += information.parent_name
}
data_three()

var elInformation = document.querySelector('.information_four');
function data_four() {
    elInformation.innerHTML += information.eage
}
data_four()
var elInformation = document.querySelector('.information_five');
function data_five() {
    elInformation.innerHTML += information.step_information
}
data_five()
