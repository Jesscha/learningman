import React, { useEffect, useRef, useState } from "react"
import { rhythm } from "../utils/typography"
import { Link } from 'gatsby'
import './nav.css';

       

const Nav = ({tag, location}) => {
    const [move, setMove] = useState(false);
    let current;
    const navRef = useRef(null)

    const scrollToNav = (ref) => {
        ref && ref.current && window.scrollTo({
                                top: ref.current.offsetTop,
                                left: 0,
                                behavior: 'smooth'
                            })
        }

    useEffect(()=>{
        current = document.getElementById(tag) 
        // const changeFirstCategory  = ()=>{
        //     document.getElementById('all').innerText = tag
        //     document.getElementById('all').parentElement.classList.add('navBox-active')
        // }
        // const changeFirstCategoryToAll = () =>{
        //     document.getElementById('all')?parentElement.classList.add('navBox-active')
        // }
        // current?current.parentElement.classList.add('navBox-active') : 
        // location && location.pathname === "/" ?
        // changeFirstCategoryToAll()
        // :
        // changeFirstCategory()

        const navWrapper = document.querySelector('.navWrapper')
        const navPosition = navWrapper.offsetTop
        
    },[]
    )
    

  return (
    <div style={{
        display: 'flex',
        justifyContent: 'flex-start',
        marginBottom: rhythm(1),
    }}>
<div className='navWrapper' ref={navRef}>
    <div className="navBox" >
        <Link id={"nav-Eddy"} to={'/tags/eddy'} >
                Eddy
        </Link>
    </div>
    <div className="navBox" >
        <Link id={"nav-jesse"} to={'/tags/jesse'} >
                Jesse
        </Link>
    </div>
    <div className="navBox" >
        <Link id={"nav-Kay"} to={'/tags/kay'} >
                Kay
        </Link>
    </div>
    <div className="navBox" >
        <Link id={"nav-Robbie"} to={'/tags/robbie'} >
                Robbie
        </Link>
    </div>
{/* ~
    <div className="navBox" >
         <Link id={'essay'} to={'tags/essay'}>
                Essay
                </Link>
    </div>
    <div className="navBox">
        <Link id={'challenge'} to={'tags/challenge'}>Challenge</Link>
    </div> */}
    <div className="navBox navBox-end">
         1
    </div>
    
</div>

    </div>
    
  )
}

export default Nav
