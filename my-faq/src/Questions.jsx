import React from 'react'

function Questions({questions}) {
  return (
    <div className='flex justify-between'>
      <p>{questions}</p>
      <img src="./images/icon-plus.svg" alt="" />
    </div>
  )
}

export default Questions
