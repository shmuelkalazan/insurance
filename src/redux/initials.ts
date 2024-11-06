// import { v4 } from "uuid";
// import { Claim, Policy } from "../types/redux";


// export const initialPolicy:Policy[] = [{
//     id:v4(),
//     price:1000 ,
//     createdDate:new Date() ,
//     age:45,
//     name:"jon due"
// }
// ];
// export const initialClaim:Claim = [{
//     amount:1000 ,
//     approved:true ,
//     createdDate:new Date() ,
//     id:v4(),
//     polosy_id:initialPolicy.id}
// ]
import { v4 } from "uuid";
import { Claim, Policy } from "../types/redux";

export const initialPolicy:Policy = {
  price: 1000,
  createdDate: new Date(),
  id: v4(),
  age:45,
  name:"Jonny Jonnyahoo Jr"
};

export const initialClaim:Claim = {
  amount: 30000,
  approved: true,
  createdDate: new Date(),
  id: v4(),
  polisy_id: initialPolicy.id,
};