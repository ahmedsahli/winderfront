export enum Gender{
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  OTHER = 'OTHER'
}

export enum Role1{
  Admin = 'Admin',
  Devloppeur = 'Devloppeur',
  Entreprise = 'Entreprise',
  Client = 'Client'
}


export interface User {

  userName:string;
  nom:string;
  prenom:string;
  password:string;
  email:string;
  fileName:string;
  gender:Gender;
  phoneNumber:number;
  token: string;
  role1: Role1;
}
