import React from "react";
import { Link, useParams } from "react-router-dom";
import { Loading } from "../components/LoadingSpinner";
import { useGetCharactersForProfileQuery } from "../store/getCharacter";

function ProfileContainer() {
  const { id } = useParams() as any;
  const { data, isLoading } = useGetCharactersForProfileQuery(id);

  if (isLoading || !data) {
    return <Loading />;
  }

  return (
    <div className="profile">
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
