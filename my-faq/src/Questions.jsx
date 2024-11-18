import React, { useState } from 'react'

function Questions({questions, answers}) {

  const [isAnswerDisplayed, setIsAnswerDisplayed] = useState(false)


  function handleShow(){
     setIsAnswerDisplayed(true)
  }
  function handleHide(){
     setIsAnswerDisplayed(false)
  }

  return (
    
    <>
    <div className='question-cta flex flex-col gap-[30px] justify-between tablet:gap-[100px] laptop1024:gap-10 cursor-pointer transition-all duration-300 ease-in-out'>
      <div className='flex transition-all duration-300 ease-in-out'>
      <p className='text-dark_purple font-bold w-[250px] laptop1024:text-[16px] lg:text-[16px] lg:w-[300px] desktop:text-[20px] laptop1024:w-[100%]'>{questions}</p>
      <img onClick={handleShow} className={`img-plus ${isAnswerDisplayed ? 'hide-plus' : ''} cursor-pointer`} src="./images/icon-plus.svg" alt="" />
      <img onClick={handleHide} className={`img-minus ${isAnswerDisplayed ? 'show-minus' : ''} cursor-pointer`}src="./images/icon-minus.svg" alt="" />
      </div>
      
      <div>
      <p className={`faq-answers ${isAnswerDisplayed ? 'show' : ''} w-[100%] text-sm relative bottom-[20px] text-Grayish_purple`}>
        {answers}
      </p>
     </div>
    </div>
    
    </>
    
    
  )
}

export default Questions
