import "../../style/gamePage/_letterInHand.scss";
import pointsForData from "../../data/pointsForData";


const LetterInHand = ({id,letter,selectedLetter,setSelectedLetter,selectedLettersToChange,setSelectedLettersToChange,changingLetters}:LetterInHand) => {
  let point = ""
  pointsForData.map(ele=>{
    if(ele.letters.includes(letter)){
      point=ele.points.toString()
    }
  })

  const selectLetterHandler=()=>{
    
    if(selectedLettersToChange.includes(id)){
      setSelectedLettersToChange(selectedLettersToChange.filter(ele=>ele!==id))
    }else{
      setSelectedLettersToChange([...selectedLettersToChange,id])
    }
    console.log(selectedLettersToChange)
  }


  return <div style={(id===selectedLetter || selectedLettersToChange.includes(id))?{backgroundColor:"#c36b84"}:{}} onClick={changingLetters?selectLetterHandler:()=>setSelectedLetter(id)} className="letterInHand"><h4>{letter}<sub>{point}</sub></h4></div>;
};

interface LetterInHand{
  id:number
  letter:string
  selectedLetter:number
  setSelectedLetter:React.Dispatch<React.SetStateAction<number>>
  selectedLettersToChange:number[]
  setSelectedLettersToChange:React.Dispatch<React.SetStateAction<number[]>>
  changingLetters:boolean
}

export default LetterInHand;
