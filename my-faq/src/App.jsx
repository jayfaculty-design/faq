import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Questions from './Questions'

function App() {
  

  return (
   <>
    <div className='top-container'>
     
    </div>
    <div className="faq-container flex flex-col bg-White p-[30px]">
      <div className='flex'>
        <img src="./images/icon-star.svg" alt="" />
        <h1>FAQs</h1>
      </div>

      <div className='flex flex-col gap-[20px]'>
      <Questions questions='What is Frontend Mentor, and how will it help me' />
      <Questions questions='Is Frontend Mentor Free?' />
      <Questions questions=' Can I use Frontend Mentor projects in my portfolio?' />
      <Questions questions={`How can I get help if I'm stuck on a Frontend Mentor challenge?`} />
      </div>
      
    </div>
   </>
  )}

export default App
