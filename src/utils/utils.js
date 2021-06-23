import { AUTHORS } from "../constants/constant";

export const  randomNumberGenerator = (range = 3) =>{

    return Math.floor(Math.random()*10) % (range + 1);  

}


export const randomAuthorGenerator = () =>{
    return AUTHORS[randomNumberGenerator()] 
}