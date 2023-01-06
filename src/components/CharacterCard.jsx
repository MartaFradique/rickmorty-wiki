import React from "react";
import tw from "tailwind-styled-components";
import { Link } from "react-router-dom";

const Styledp1 = tw.p`
  bg-verdits2 
  text-white 
  h-8 
  pt-1 
  pl-3 
  flex
`;

const Styledp2 = tw.p`
  bg-verdits3
  pb-8
  pt-4
  text-l
  h-2
  mt-2
  pl-3
  mb-8
  flex
  hover:bg-verdits
  hover:border-r-4
  hover:border-l-4


`;
const CharacterPage = (props) => {
  const info = props.list;
  return (
    <div>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4  grid-cols-1 justify-center">
        <div className="flex  justify-center">
          <div className="pt-8">
            <Link to={`/`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="3"
                stroke="currentColor"
                class="w-9 h-9 text-black bg-verdits rounded-full"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                />
              </svg>
            </Link>
          </div>
          <div className="grid place-items-center mb-40">
            <div className="bg-coco2 h-50 w-40 border-2 px-4 pt-3 shadow-2xl rounded-lg z-0   hover:shadow-2xl">
              <img classname="rounded-t-lg" src={info.image} alt="Logo" />
            </div>
          </div>
        </div>
        <div className="flex pt-8 first-letter:justify-center ">
          <div className="bg-coco  ml-15 h-200 w-100 border-2 shadow-2xl rounded-lg z-0">
            <div className="bg-coco2 ml-4 mt-8 h-150 w-120 border-2 shadow-2xl rounded-lg z-1">
              <p className=" ml-3 pt-3 font-mono text-white text-2xl">
                {" "}
                Characters Details
              </p>
              <div className=" pt-3 mx-3 font-mono">
                <hr class="my-8 h-px  bg-verdits border-0 "></hr>
                <Styledp1> Name</Styledp1>

                <Styledp2 className="text-white"> {info.name}</Styledp2>
                <Styledp1>Specie</Styledp1>
                <Styledp2 className="text-white">Human</Styledp2>
                <Styledp1> Status</Styledp1>
                <Styledp2 className="text-white">ALive</Styledp2>
                <Styledp1>Gender</Styledp1>
                <Styledp2 className="text-white">Male</Styledp2>
                <Styledp1>Origin</Styledp1>
                <Styledp2 className="text-white">Earth</Styledp2>

                <hr class="my-8 h-px  bg-verdits border-0 "></hr>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterPage;
