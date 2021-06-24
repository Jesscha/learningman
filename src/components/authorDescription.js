import { divide } from "lodash";
import React from "react";
import { AUTHORS } from "../constants/constant";
import './authorDescription.scss';


const AuthorDescription = ({tag}) =>{


    const AuthorCharacter = ({author}) => {

        if(author === AUTHORS[0]){
            return <div className = "author-thumbnail">
                <img src ='/img/Eddy.png'  />
            </div>
        }
        if(author === AUTHORS[1]){
            return <div className = "author-thumbnail">
                <img src ='/img/Jesse.png'  />
            </div>
        }
        if(author === AUTHORS[2]){
            return <div className = "author-thumbnail">
                <img src ='/img/Kay.png'  />
            </div>
        }
        if(author === AUTHORS[3]){
            return <div className = "author-thumbnail">
                <img src ='/img/Robbie.png'  />
            </div>
        }
        return <></>
    }

    const AuthorDesc= ({author}) =>{
        if(author === AUTHORS[0]){
            return <div className = "author-desc">
                desc
            </div>
        }
        if(author === AUTHORS[1]){
            return <div className = "author-desc">
                desc
            </div>
        }
        if(author === AUTHORS[2]){
            return <div className = "author-desc">
                desc
            </div>
        }
        if(author === AUTHORS[3]){
            return <div className = "author-desc">
                desc
            </div>
        }
        return <></>
    }

    const Link = ({fb, brunc, etc})=>{
        

    }

    const AuthorLinks = ({author}) =>{
         if(author === AUTHORS[0]){
            return <div className = "author-desc">
                desc
            </div>
        }
        if(author === AUTHORS[1]){
            return <div className = "author-desc">
                desc
            </div>
        }
        if(author === AUTHORS[2]){
            return <div className = "author-desc">
                desc
            </div>
        }
        if(author === AUTHORS[3]){
            return <div className = "author-desc">
                desc
            </div>
        }
        return <></>
    }
 
    return(
    <div className = "author-description-wrapper">
        <AuthorCharacter  author = {tag}/>
        <AuthorDesc author = {tag} />
    </div>
    )
}


export default AuthorDescription