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
                작가소개, 나는 너무 멋져 끝내준다 작가소개, 나는 너무 멋져 끝내준다 작가소개, 나는 너무 멋져 끝내준다 작가소개, 나는 너무 멋져 끝내준다 
                <div className  = "author-link-wrapper">
                    <AuthorLink link=""  linkLogoUrl="/img/facebook.png"/>
                    <AuthorLink link=""  linkLogoUrl="/img/brunch.png"/>
                    <AuthorLink link=""  />
                </div>
            </div>
        }
        if(author === AUTHORS[1]){
            return <div className = "author-desc">
                작가소개, 나는 너무 멋져 끝내준다 작가소개, 나는 너무 멋져 끝내준다 작가소개, 나는 너무 멋져 끝내준다 작가소개, 나는 너무 멋져 끝내준다 
                <div className  = "author-link-wrapper">
                    <AuthorLink link=""  linkLogoUrl="/img/facebook.png"/>
                    <AuthorLink link=""  linkLogoUrl="/img/brunch.png"/>
                    <AuthorLink link=""  />
                </div>
            </div>
        }
        if(author === AUTHORS[2]){
            return <div className = "author-desc">
                작가소개, 나는 너무 멋져 끝내준다 작가소개, 나는 너무 멋져 끝내준다 작가소개, 나는 너무 멋져 끝내준다 작가소개, 나는 너무 멋져 끝내준다 
                <div className  = "author-link-wrapper">
                    <AuthorLink link=""  linkLogoUrl="/img/facebook.png"/>
                    <AuthorLink link=""  linkLogoUrl="/img/brunch.png"/>
                    <AuthorLink link=""  />
                </div>
            </div>
        }
        if(author === AUTHORS[3]){
            return <div className = "author-desc">
                작가소개, 나는 너무 멋져 끝내준다 작가소개, 나는 너무 멋져 끝내준다 작가소개, 나는 너무 멋져 끝내준다 작가소개, 나는 너무 멋져 끝내준다 
                <div className  = "author-link-wrapper">
                    <AuthorLink link=""  linkLogoUrl="/img/facebook.png"/>
                    <AuthorLink link=""  linkLogoUrl="/img/brunch.png"/>
                    <AuthorLink link=""  />
                </div>
            </div>
        }
        return <></>
    }

    const AuthorLink = ({ linkLogoUrl, link })=>{

        return <div className  = "author-link">
            <a
            href ={link}
            >
                <img
                    src = {linkLogoUrl ? linkLogoUrl : '/img/link.png'}
                    alt = ''
                />
                
            </a>
            
            
            
        </div>
        

    }

 
    return(
    <div className = "author-description-wrapper">
        <AuthorCharacter  author = {tag}/>
        <AuthorDesc author = {tag} />
    </div>
    )
}


export default AuthorDescription