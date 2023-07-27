
export interface UserData {
  _id: string;
  nick: string;
  password: string;
  points: number;
  email: string;
}

export interface RoomInformation{
  status:string
  id:string
  //lettersLeft:Array<string>
  player1:RoomPlayerInfo
  player2:RoomPlayerInfo
  bonusPlaces:Array<BonusPlace>
}
export interface RoomPlayerInfo {
  id: string;
  nick:string
}

export interface FieldInfo {
  letter: string;
  empty: boolean;
  i:number
  j:number
}

export interface BonusPlace{
  i:number
  j:number
  type:string
}

export interface PointsForLetter{
  points:number,
  letters:Array<string>
}

export interface LetterInHandInterface{
  letter:string
  id:number
}

export interface GameSendInformation{
  board: FieldInfo[][];
  player1: number;
  player2: number;
  letters: number;
  movingSide:string
  players:string[]
}
