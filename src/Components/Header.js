import React from 'react'
import Navbar from './Navbar'

export default function Header() {
  return (
    <div id='main'>
        <Navbar/>
        <div className='name'>
            <h1><span>Launch Your App</span>With Confidence and Creativity</h1>
            <p className='details'>When we need some filler text to complement our code, this extension will help us create a paragraph, a line or both in a very elegant and easy way. There is no need to search for more random texts as you can create your own. Lorem ipsum resembles Latin but has no real meaning. Each sentence is randomly delivered to simulate real text as shown below</p>
            <a href='#' className='cv-btn'>Download</a>
        </div>
    </div>
  )
}
