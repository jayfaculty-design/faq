import React from 'react'

function Questions({questions}) {
  return (
    <div className='flex gap-[30px] justify-between tablet:gap-[100px] laptop1024:gap-10'>
      <p className='text-dark_purple font-bold w-[250px] laptop1024:text-[16px] lg:text-[16px] lg:w-[300px] desktop:text-[20px] laptop1024:w-[100%]'>{questions}</p>
      <img className='cursor-pointer' src="./images/icon-plus.svg" alt="" />
    </div>
  )
}

export default Questions
