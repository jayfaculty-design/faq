import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Questions from './Questions'

function App() {
  

  return (
   <>
    <div className='top-container laptop1024:h-[250px] desktop:h-[350px] laptop1024:bg-background-pattern-desktop tablet:bg-background-pattern-desktop lg:bg-background-pattern-desktop'>
     
    </div>
    <div className='absolute inset-0 flex items-center justify-center w-[100%] laptop1024:bottom-[150px] tablet:bottom-[50px] mobile:bottom-[50px] mobile:p-[30px]'>
      <div className="faq-container flex flex-col bg-White p-[30px]">
        <div className='flex gap-[20px]'>
          <img className='w-[25px] laptop1024:w-[26px]' src="./images/icon-star.svg" alt="" />
          <h1 className='laptop1024:text-[32px] font-bold text-[30px] text-dark_purple desktop:text-[35px]'>FAQs</h1>
        </div>

        <div className='flex flex-col gap-[20px] relative mt-[30px]'>
        <Questions questions='What is Frontend Mentor, and how will it help me' />
        <Questions questions='Is Frontend Mentor Free?' />
        <Questions questions=' Can I use Frontend Mentor projects in my portfolio?' />
        <Questions questions={`How can I get help if I'm stuck on a Frontend Mentor challenge?`} />
        </div>
        
      </div>
    </div>
    
   </>
  )}

export default App
