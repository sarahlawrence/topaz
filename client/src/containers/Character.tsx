import React from "react";
import { useParams } from "react-router-dom";
import { useGetCharacterQuery } from "../store/api";

function ProfileContainer() {
  const { id } = useParams() as any;
  const { data, isLoading } = useGetCharacterQuery(id);

  return (
    <div className="App">
      {isLoading ? (
        <p>App is loading....</p>
      ) : (
        <div>Hello {data.character.name}</div>
      )}
    </div>
  );
}

export default ProfileContainer;
