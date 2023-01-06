import React from "react";
import { useDispatch } from "react-redux";
import {
  getAllCharacters,
  getAliens,
  getHumans,
} from "../redux/characterAction";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <div className="pb-5">
      <Menu as="div" className="relative inline-block text-left z-20">
        <div>
          <Menu.Button className="text-white font-mono text-xl bg-verdits3   hover:bg-verdits rounded-lg px-4 py-2.5 text-center inline-flex items-center">
            Options{" "}
            <svg
              class="ml-2 w-4 h-4 "
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-verdits3 shadow-lg ring-1 ring-verdits3 ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    onClick={() => dispatch(getAliens())}
                    className={classNames(
                      active ? "bg-verdits text-white" : "text-white",
                      "block px-4 py-2 font-mono text-lg font-bold hover:border-r-2 hover:border-l-2 hover:border-white"
                    )}
                  >
                    Aliens
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    onClick={() => dispatch(getHumans())}
                    className={classNames(
                      active ? "bg-verdits text-white" : "text-white",
                      "block px-4 py-2 text-lg font-mono font-bold hover:border-r-2 hover:border-l-2 hover:border-white"
                    )}
                  >
                    Humans
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    onClick={() => dispatch(getAllCharacters())}
                    className={classNames(
                      active ? "bg-verdits text-white" : "text-white",
                      "block px-4 py-2 text-lg font-mono font-bold hover:border-r-2 hover:border-l-2 hover:border-white"
                    )}
                  >
                    All
                  </a>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default Filter;
