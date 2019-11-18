function makanTerusRekursif(waktu){
    var penghitung = 0
    // console.log(waktu)
    // console.log(penghitung)
    if(waktu == 0){
        return 0
     }else if(waktu > 0 && waktu < 16){
         return 1
     }
     else{
        penghitung++
        return penghitung + makanTerusRekursif((waktu)-15)
    }
}

console.log(makanTerusRekursif(66)); // 5
console.log(makanTerusRekursif(100)); // 7
console.log(makanTerusRekursif(90)); // 6
console.log(makanTerusRekursif(10)); // 1
console.log(makanTerusRekursif(0)); // 0
