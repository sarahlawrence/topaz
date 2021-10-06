import React from "react";
import { useParams } from "react-router-dom";
import { useGetCharacterQuery } from "../store/getCharacter";
import { Loading } from "../components/LoadingSpinner";
import { connect } from "react-redux";

function CharacterContainer() {
  const { id } = useParams() as any;
  const { data, isLoading } = useGetCharacterQuery(id);

  if (isLoading || !data) {
    return <Loading />;
  }

  return (
    <div className="character">
      <h1>{data.character.name}</h1>
    </div>
  );
}

export default connect((state) => state)(CharacterContainer);
