export interface Claim{
    id:string
    polisy_id:string
    approved:boolean
    amount:number
    createdDate:Date
}

export interface Policy{
    id:string
    name:string
    price:number
    createdDate:Date
    age:number
}

export interface GenericPayload {
    id?: string;
    amount?: number;
    policy_id?:string
  }