import React from 'react'

export default function About(props) {
  return (
    <div id='about'>
         <div className='about-image'>
             <img src={props.image} alt=''/>
         </div>
         <div className='about-text'>
             <h2>{props.title}</h2>
             <p>When we need some filler text to complement our code, this extension will help us create a paragraph, a line or both in a very elegant and easy way. There is no need to search for more random texts as you can create your own. Lorem ipsum resembles Latin but has no real meaning. Each sentence is randomly delivered to simulate real text as shown below</p>
            <button>{props.button}</button>
         </div>
    </div>
  )
}
