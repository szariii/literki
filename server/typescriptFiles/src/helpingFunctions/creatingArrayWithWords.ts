import fs from "fs"


const creatingArrayWithWords=()=>{
    const file = fs.readFileSync("./typescriptFiles/src/data/slowa.txt",{encoding:"utf-8"})
    const table = file.split("\r\n")
    console.log(table)
    console.log(table.includes("aa"))
}

export default creatingArrayWithWords

