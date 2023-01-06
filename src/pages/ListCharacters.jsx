import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import Filter from "../components/Filter";
import { useDispatch, useSelector } from "react-redux";
import { getAllCharacters } from "../redux/characterAction";
import Pagination from "../components/Pagination";

const ListCharacters = () => {
  const page = useSelector((state) => state.character.page);
  const dispatch = useDispatch(); // dispatch is a function that allows you to dispatch actions

  const character = useSelector((state) => state.character); // useSelector is a hook that allows you to extract data from the Redux store state, using a selector function.

  useEffect(() => {
    // useEffect is a hook that allows you to perform side effects in function components
    dispatch(getAllCharacters(page));
  }, [dispatch, page]);
  //use getHumans and getAliens to filter the characters

  const filterList = character.filteredList;
  return (
    <div className="container mx-auto pt-4 px-8 mb-20">
      <Filter />
      <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-6">
        {filterList.map((nl) => (
          <Link to={`/details/${nl.id}`}>
            <Card list={nl} />
          </Link>
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default ListCharacters;
