import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetCharactersQuery } from "../store/api";

function ProfileContainer() {
  const { id } = useParams() as any;
  const { data, error, isLoading } = useGetCharactersQuery(id);

  console.log("character data", data);
  return (
    <div className="App">
      {isLoading ? (
        <p>App is loading....</p>
      ) : (
        <div>
          Your characters:
          <ul>
            {data.characters.map((c: any) => (
              <li>
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
