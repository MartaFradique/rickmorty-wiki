import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacterDetail } from "../redux/characterAction";
import CharacterPage from "../components/CharacterCard";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
function CharactersDetails() {
  const dispatch = useDispatch();
  const params = useParams();

  const character = useSelector((state) => state.character.detail[params.id]);

  //perceber o que esta a ser feito
  useEffect(() => {
    dispatch(getCharacterDetail(params.id));
  }, [dispatch]);
  const newList = character || {}; //check if undefined

  return (
    <div>
      <CharacterPage list={newList} />
    </div>
  );
}

export default CharactersDetails;
