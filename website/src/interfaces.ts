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
  players:Array<RoomPlayerInfo>
  bonusPlaces:Array<BonusPlace>
}
export interface RoomPlayerInfo {
  id: string;
  points: number;
  lettersInHand: Array<string>;
}

export interface FieldInfo {
  letter: string;
  status: string;
}

export interface BonusPlace{
  i:number
  j:number
  type:string
}
