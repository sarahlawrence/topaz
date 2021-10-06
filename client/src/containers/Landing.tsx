import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Dispatch } from "redux";
import { Loading } from "../components/LoadingSpinner";
import { useGetProfilesQuery } from "../store/getProfile";

const handleClick = (dispatch: Dispatch, profile: string) => {
  return dispatch({ type: "set_profile", payload: profile });
};

function LandingContainer() {
  const dispatch = useDispatch();
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
              <Link
                to={`/profile/${p._id}`}
                onClick={() => handleClick(dispatch, p._id)}
              >
                {p.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default LandingContainer;
