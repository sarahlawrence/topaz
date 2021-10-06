import React from "react";
import { Link } from "react-router-dom";
import { Loading } from "../components/LoadingSpinner";
import { useGetProfilesQuery } from "../store/getProfile";

function LandingContainer() {
  const { data, isLoading } = useGetProfilesQuery("");

  if (isLoading || !data) {
    return <Loading />;
  }

  return (
    <div className="landing">
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
    </div>
  );
}

export default LandingContainer;
