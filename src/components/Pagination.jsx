import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import tw from "tailwind-styled-components";
import { setPagination } from "../redux/characterAction";

const Button2 = tw.button`
    inline-flex 
    items-center 
    px-4 
    py-2 
    text-sm 
    font-medium 
    text-white 
    bg-verdits2 
    rounded-l 
    hover:bg-verdits
`;

const Pagination = () => {
  const page = useSelector((state) => state.character.page);
  const dispatch = useDispatch();

  console.log(page);
  return (
    <div>
      <div class="flex flex-col items-center pt-10">
        <span class="text-sm text-white">
          Showing page <span class="font-semibold text-gray-900 ">{page}</span>
        </span>
        <div class="inline-flex mt-2 xs:mt-0">
          <Button2 onClick={() => dispatch(setPagination(page - 1))}>
            <svg
              aria-hidden="true"
              class="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            Prev
          </Button2>
          <Button2 onClick={() => dispatch(setPagination(page + 1))}>
            Next
            <svg
              aria-hidden="true"
              class="w-5 h-5 ml-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </Button2>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
