import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Questions from "./Questions";

function App() {
  const [activeItem, setActiveItem] = useState(null);
  // const [activeIcon, setActiveICon] = useState()

  return (
    <>
      <div className="top-container md:h-[300px] tablet:h-[350px] lg:h-[350px] laptop1024:h-[250px] desktop:h-[350px] laptop1024:bg-[url('./images/background-pattern-desktop.svg')] tablet:bg-[url('./images/background-pattern-desktop.svg')] lg:bg-[url('./images/background-pattern-desktop.svg')] relative">
        {/* Top container content */}
      </div>

      {/* Main FAQ (positioned on top of top-container) */}
      <div className="main-faq desktop:mt-[80px] absolute top-[150px] left-1/2 transform -translate-x-1/2 w-[90%] max-w-[600px] h-[400px] flex items-center justify-center rounded-lg p-6 z-10">
        <div className="faq-container w-full flex flex-col bg-White p-[30px] rounded-md shadow-lg">
          <div className="flex gap-[20px]">
            <img
              className="w-[25px] laptop1024:w-[26px]"
              src="./images/icon-star.svg"
              alt=""
            />
            <h1 className="laptop1024:text-[32px] font-bold text-[30px] text-dark_purple desktop:text-[35px]">
              FAQs
            </h1>
          </div>

          <div className="flex flex-col gap-[0px] relative mt-[30px] transition-all duration-300 ease-in-out">
            <Questions
              questions="What is Frontend Mentor, and how will it help me?"
              answers="Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
              activeItem={activeItem}
              setActiveItem={setActiveItem}
            />
            <Questions
              questions="Is Frontend Mentor Free?"
              answers={`Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels`}
              activeItem={activeItem}
              setActiveItem={setActiveItem}
            />
            <Questions
              questions="Can I use Frontend Mentor projects in my portfolio?"
              answers={`Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!`}
              activeItem={activeItem}
              setActiveItem={setActiveItem}
            />
            <Questions
              questions={`How can I get help if I'm stuck on a Frontend Mentor challenge?`}
              answers={`The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.
`}
              activeItem={activeItem}
              setActiveItem={setActiveItem}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
