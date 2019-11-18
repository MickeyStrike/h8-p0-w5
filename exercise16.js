function totalDigitRekursif(angka){
    strAngka=String(angka)
    // console.log(strAngka)
    if(strAngka.length===1){
        return Number(angka)
    }else{
        var temp=Number(strAngka[0])
        strAngka = strAngka.slice(1)
        return temp + totalDigitRekursif(Number(strAngka))
    }
}

console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5