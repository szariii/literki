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
  players:Array<RoomPlayerInfo>
}

export interface RoomPlayerInfo{
  id:string
  points:number
  lettersInHand:Array<string>
}

