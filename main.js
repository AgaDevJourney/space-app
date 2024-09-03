var jumlahBis = 10;
var bisBeroperasi = 7;
var noBis = 1;

for(noBis; noBis <= jumlahBis; noBis++){
    if(noBis <= bisBeroperasi){
        console.log('Bis No ' + noBis + 'Beroperasi dengan baik');
    }else if(noBis == 8){
        console.log('Bis No ' + noBis + 'Sedang Libur');
    }else{
        console.log('Bis No ' + noBis + 'Rusak');
    }
}

// var angka = prompt('Masukan angka')

// if (angka % 2 == 0){
//     alert(angka + 'Adalah bilangan Genap');
// }else if( angka % 2 == 1){
//     alert( angka + 'Adalah bilangan ganjil')
// }else{
//     alert('Yang anda masukan bukan angka');
};

var person = {
    fullName :"alga",
    age : 20,
    grade : 12,
    addres : "pontianak"
};

document.getElementById("logo").innerHTML=
person.fullName + 'Adalah kelas '+ person.grade + ' umurnya ' + person.age + ' dan asalnya dari ' + person.addres;