import React, { useState } from "react";

function Questions({ questions, answers, activeItem, setActiveItem }) {
  const isActive = activeItem === answers;
  function handleShow() {
    setActiveItem(isActive ? null : answers)
  }

  return (
    <>
      <div onClick={handleShow} className="question-cta h-[100%] flex flex-col gap-[30px] justify-between tablet:gap-[30px] laptop1024:gap-10 cursor-pointer transition-all duration-300 ease-in-out">
        <div className="flex transition-all justify-between duration-300 ease-in-out">
          <p className="heading text-dark_purple font-bold w-[250px] laptop1024:text-[16px] lg:text-[16px] lg:w-[300px] desktop:text-[20px] laptop1024:w-[100%]">
            {questions}
          </p>
          <img
            className={`img-plus ${isActive ? 'hide-plus' : null} cursor-pointer`}
            src="./images/icon-plus.svg"
            alt=""
          />
          <img
            className={`img-minus ${isActive ? 'show-minus' : null} cursor-pointer`}
            src="./images/icon-minus.svg"
            alt=""
          />
        </div>

        <div>
          <p
            className={`faq-answers ${isActive ? 'show' : null} w-[100%] text-sm relative bottom-[20px] text-Grayish_purple`}
          >
            {answers}
          </p>
        </div>
      </div>
    </>
  );
}

export default Questions;
