import React from 'react'

import './about.styles.scss'

export default function About() {
  //get stored name from localstorage
  const storedName = localStorage.getItem('loggedOnUser')
  return (
    <div className='about'>
    {
      storedName ? 
      <h1>Hey {storedName}!</h1>
      :
      null
    }
      <h1>What’s wrong with Lorem Ipsum?</h1>
      <p>Nothing. It’s a classic, after all. But we all get bored from seeing the same thing over and over again. Besides, surprising the rest of your design team with something else other than Lorem Ipsum might rip quite a few laughs and smiles – especially some of the alternatives on this list.</p>
    </div>
  )
}
