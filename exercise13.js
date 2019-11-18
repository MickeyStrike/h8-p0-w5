function sorting(arrNumber){
    var temp=0;
    //bubble sort
    for(let loop=0;loop<arrNumber.length;loop++){
        for(let i=0;i<arrNumber.length;i++){
            if(arrNumber[i]>arrNumber[i+1]){
                temp = arrNumber[i]
                arrNumber[i] = arrNumber[i+1]
                arrNumber[i+1] = temp
            }
        }
    }
    // console.log(arrNumber)
    return arrNumber
}

function getTotal(arrNumber){
    let sortNumber = sorting(arrNumber)
    let temp=[]
    let hitungIndex=0

    if(sortNumber==0){
        return `''`
    }else{
        //looping untuk mendapatkan nilai terbesar dan banyak kemunculan
        for(let i=sortNumber.length;i>=0;i--){
            if(sortNumber[sortNumber.length-1]===sortNumber[i-1]){
                temp.push(sortNumber[sortNumber.length-1])
                hitungIndex+=1
            }
        }
    }
    // console.log(sortNumber,temp,hitungIndex)
    return `angka paling besar adalah ${temp[0]} dan jumlah kemunculan sebanyak ${hitungIndex} kali`
}

function mostFrequentLargestNumbers(arrNumber){
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(arrNumber);
    return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''