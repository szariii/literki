import fs from "fs"

const creatingArrayWithWords=()=>{
    const file = fs.readFileSync("./typescriptFiles/src/data/slowa.txt",{encoding:"utf-8"})
    const table = file.split("\r\n").map(ele=>ele.toUpperCase())
    return table
}

const arrayWithWords = creatingArrayWithWords()
export default arrayWithWords
