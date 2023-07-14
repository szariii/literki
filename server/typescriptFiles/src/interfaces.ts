export interface CreateUserData {
  nick: string;
  password: string;
  points: number;
  email: string;
}

export interface LoginUserData{
  nick:string
  password:string
}

export interface UserData{
  _id:number
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

export interface RoomPlayerInfo{
  id:string
  nick:string
}

export interface BonusPlace{
  i:number
  j:number
  type:string
}

export interface LookingForGameUser{
  id:string
  nick:string
}
