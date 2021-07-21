import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetCharactersForProfileQuery } from "../store/api";

function ProfileContainer() {
  const { id } = useParams() as any;
  const { data, isLoading } = useGetCharactersForProfileQuery(id);

  return (
    <div className="App">
      {isLoading ? (
        <p>App is loading....</p>
      ) : (
        <div>
          Your characters:
          <ul>
            {data.characters.map((c: any, index: number) => (
              <li key={index}>
                <Link to={`/character/${c._id}`}>{c.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ProfileContainer;
