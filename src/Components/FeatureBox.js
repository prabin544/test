import React from 'react'

export default function FeatureBox(props) {
  return (
    <div className='a-box'>
        <div className='a-b-img'>
            <img src={props.image}/>
        </div>
        <div className='s-b-text'>
            <h2>{props.title}</h2>
            <p>When we need some filler text to complement our code, this extension will help us create a paragraph, a line or both in a very elegant and easy way. There is no need to search for more random texts as you can create your own. Lorem ipsum resembles Latin but has no real meaning. Each sentence is randomly delivered to simulate real text as shown below</p>
        </div>
    </div>
  )
}
