const lettersPrepare = ()=>{
    const lettersInString="A Ą B C Ć D E Ę F G H I J K L Ł M N Ń O Ó P R S Ś T U W Y Z Ź Ż"
    const lettersInArray = lettersInString.split(" ")
    console.log(lettersInArray)
    return lettersInArray
}

const letters = lettersPrepare()
export default letters