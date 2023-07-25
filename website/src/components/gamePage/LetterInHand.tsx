import "../../style/gamePage/letterInHand.scss";
import pointsForData from "../../data/pointsForData";


const LetterInHand = ({id,letter,selectedLetter,setSelectedLetter}:LetterInHand) => {
  let point = ""
  pointsForData.map(ele=>{
    if(ele.letters.includes(letter)){
      point=ele.points.toString()
    }
  })

  return <div style={id!==selectedLetter?{}:{backgroundColor:"#c36b84"}} onClick={()=>setSelectedLetter(id)} className="letterInHand"><h4>{letter}<sub>{point}</sub></h4></div>;
};

interface LetterInHand{
  id:number
  letter:string
  selectedLetter:number
  setSelectedLetter:React.Dispatch<React.SetStateAction<number>>
}

export default LetterInHand;
