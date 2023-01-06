import React from "react";
import Typewriter from "typewriter-effect";
import RickMorty2 from "../data/aboutusImage.png";

const InitialPage = () => {
  const styles = {
    main: {
      color: "white",
      fontFamily: "monospace",
      fontSize: "35px",
      paddingLeft: "40px",
    },
  };
  return (
    <div>
      <div className="pb-30 flex flex-row min-h-screen justify-center items-center">
        <div className="bg-coco  h-200 w-700 border-2 shadow-2xl rounded-lg z-0 mb-20">
          <div className="bg-coco2  mx-2 my-5 h-150 w-650 border-2 shadow-2xl rounded-lg z-1">
            <div className=" items-center flex-row  mt-5">
              <div classname="App" style={styles.main}>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(" WELCOME TO RICK AND MORTY WIKI")
                      .callFunction(() => {
                        console.log("String typed out!");
                      })
                      // .pauseFor(2500)
                      // .deleteAll()
                      // .callFunction(() => {
                      //   console.log("All strings were deleted");
                      // })
                      .start();
                  }}
                />
              </div>
              {/* align text horizontally */}

              <div className="justify-center  px-10 pt-5 text-white text-mono leading-loose text-xl">
                <a>
                  In this project, I built a website in React to display content
                  from an API using Redux. The API in question was
                  https://rickandmortyapi.com/.
                </a>
                <div className="pt-10">
                  <a>The project's main features are:</a>
                  <li>List with characters </li>

                  <li>Page with the details of the characters</li>
                  <li>Pagination</li>
                  <li>Filter</li>
                </div>
              </div>
            </div>
            <div className="grid justify-center pr-10">
              <img className="sm:h-50 md:h-500" src={RickMorty2} alt="Logo" />
            </div>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default InitialPage;
