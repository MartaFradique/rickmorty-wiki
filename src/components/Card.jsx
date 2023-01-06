import React from "react";

const Card = (props) => {
  const character = props.list;

  return (
    <div className="relative">
      <div
        className="bg-coco2 h-10 w-10 border-2 shadow-2xl rounded-lg absolute flex justify-center items-center z-10 focus:ring-4 focus:outline-none focus:ring-verdits hover:bg-verdits2  
"
      >
        <h3 className="text-xl p-5 font-mono text-ovo mb-3">
          {character.name}
        </h3>
      </div>
      <div className="flex pt-12 first-letter:justify-center ">
        {/* <div className="bg-coco2 h-50 w-50 sm:h-45 md:h-45 border-2 shadow-2xl rounded-lg z-0 hover:bg-verdits2"> */}
        <div className="bg-coco2 h-50 w-40 border-2 px-3 pt-3 shadow-2xl   rounded-lg z-0  hover:bg-verdits2  hover:shadow-2xl">
            <img classname="rounded-t-lg" src={character.image} alt="Logo" />
            {/* <div className="p-5">
              
            </div> */}
          </div>
          {/* <div className="bg-coco2 h-50 w-40 border-2 px-4 pt-3 shadow-2xl rounded-lg z-0   hover:shadow-2xl">
              <img classname="rounded-t-lg" src={info.image} alt="Logo" />
            </div> */}

        {/* </div> */}
      </div>
    </div>
  );
};

export default Card;
