import React from "react";
import { Link } from "react-router-dom";
import { useGetProfilesQuery } from "../store/api";

function LandingContainer() {
  const { data, isLoading } = useGetProfilesQuery("");

  return (
    <div className="App">
      {isLoading ? (
        <p>App is loading....</p>
      ) : (
        <div>
          Select a profile:
          <ul>
            {data.profiles.map((p: any, index: number) => (
              <li key={index}>
                <Link to={`/profile/${p._id}`}>{p.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default LandingContainer;
