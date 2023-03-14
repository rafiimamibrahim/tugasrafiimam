// function tambah (a, b) {

//     return a + b;
// }

// var a = parseInt(prompt("masukan nilai 1 :"));
// var b = parseInt(prompt("masukan nilai 2 :"));

// var hasil = tambah(a, b);

// console.log(hasil);

// var hasil = kali (tambah(5, 5), tambah(3, 2));
// console.log(hasil);

// function tambah() {
//     var hasil = 0;
//     for (i = 0; i < arguments.lenght; i++) {
//         hasil += arguments[i];
//     }
//     return hasil;
// }

// var coba = tambah (3, 5, 10, 5, 80);
// console.log(coba);

// function kali (a, b) {
//     console.log(a);
//     //nilai  inputan pertama
//     console.log(b);
//      //nilai  inputan kedua
//      return a*b 
// }
// nilai1 = parseInt(prompt("masukan nilai 1"));
// nilai2 = parseInt(prompt("masukan nilai 2"));

// var coba = kali (nilai1, nilai2);
// console.log(coba);  


// var tampilPesan = function (nama){
//     alert( "halo " + (nama));
// };

// tampilPesan("ibra");

//PUSH & POP = MENAMBAH DAN MENGHAPUS ELEMEN ARRAY PADA AKHIR ARRAY
// let arr = ["Dani", "Juhaeni", 10, 1];
// arr.push("Danendra", 10);
// arr.pop();
// console.log(arr.join(" - "));

//UNSHIFT & SHIFT = MENAMBAH DAN MENHAPUS ELEMEN ARRAY PADA AWAL ARRAY

// arr.unshift("rafi");
// arr.shift();
// console.log(arr);

//SPLICE = MENYAMBUNG ARRAY
//SPLICE (indexAwal mauDihapusBerapa, elememBaru,
//elemenBaru2, ...)
// arr.splice(2,3 "oyoh");
// console.log(arr);

//slice = mengiris array
//slice(awal, akhir);

// var arr2 = arr.slice(0,5);
// console.log(arr);
// console.log(arr2);

//METHOD FILTER()
//METHOD FILTER() berfungsi untuk menyaring data di array.
//parameter yang harus diberikan pada method filter() sama seperti methofd forEach(), yaitu: drbush fungsi callback.

// const angka = [1,2,3,4,5,6,7,8,9,];

// const filterArr = angka.filter((item) => {
//     return item % 2 == 0 ;
// });

// console.log(filterArr);

const users = [{
    jenisMobil:'honda civic',
    tipeBensin: 'Pertamax Turbo',
    kapasitasTangki:'47 Liter',
}, 
{
    jenisMobil:'bmw e46 318i',
    tipeBensin: 'Pertamax',
    kapasitasTangki:'60 Liter',
},
{
    jenisMobil:'toyota alphard',
    tipeBensin: 'Pertamax',
    kapasitasTangki:'75 Liter',
},
{
    jenisMobil:'range rover',
    tipeBensin: 'Pertamax Turbo',
    kapasitasTangki:'105 Liter',
}
];

let mobil = prompt("Masukan tipeBensin")

const usersMobil= users.filter
((users) => users.tipeBensin === mobil);

console.log(usersMobil);