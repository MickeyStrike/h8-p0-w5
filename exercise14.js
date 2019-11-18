function changeVocals(str){
    arrStr = str.split('')
    // console.log(arrStr)
    let temp=[];
    let alpabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let vocals = 'aiueoAIUEO';
    let index;

    for(let i=0;i<arrStr.length;i++){
        for(let j=0;j<vocals.length;j++){
            if(arrStr[i]===vocals[j]){
                index = alpabet.indexOf(arrStr[i]) + 1
                arrStr[i] = alpabet[index]
            }
        }temp.push(arrStr[i])
    }
    // console.log(temp)
    return temp
}

function reserveWord(str){
    reserve=[]
    for(i=str.length-1;i>=0;i--){
        reserve.push(str[i])
    }
    // console.log(reserve)
    return reserve
}

function setLowerUpperCase(str){
    lowerUpperCase=[]
    for(let i=0;i<str.length;i++){
        if(str[i]==str[i].toLowerCase()){
            lowerUpperCase.push(str[i].toUpperCase())
        }else if(str[i]==str[i].toUpperCase()){
            lowerUpperCase.push(str[i].toLowerCase())
        }
    }
    // console.log(lowerUpperCase)
    return lowerUpperCase
}

function removeSpaces(str){
    let arrRemoveSpasi=[]
    let removeSpasi=''
    for(let i=0;i<str.length;i++){
        if(str[i]===' '){
            // no action
        }else{
            arrRemoveSpasi.push(str[i])
        }
    }

    for(let i=0;i<arrRemoveSpasi.length;i++){
        removeSpasi+=arrRemoveSpasi[i]
    }
    // console.log(removeSpasi)
    return removeSpasi
}

function passwordGenerator(name){
    if(name.length<=5){
        return `Minimal karakter yang diinputkan adalah 5 karakter`
    }else{
        var change = changeVocals(name)
        var reserves = reserveWord(change)
        var lowerUpperCase = setLowerUpperCase(reserves)
        var remove = removeSpaces(lowerUpperCase)
    }
    return remove
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'