function kaliTerusRekursif(angka){
    if(angka.toString().length===1){
        return angka
    }else{
        // var result menampung angka pertama dengan substring, atau dalam indeks menampung value indeks 0
        var result = Number(angka.toString().substring(0, 1))
        for(let i=1;i<angka.toString().length;i++){
            result = result * Number(angka.toString()[i])
        }
    }
    return kaliTerusRekursif(result)
}

console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6