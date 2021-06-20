import React from "react";
import { useGetProfilesQuery } from "./store/api";

function App() {
  const { data, error, isLoading } = useGetProfilesQuery("");

  console.log(data);
  return (
    <div className="App">
      {isLoading ? (
        <p>App is loading....</p>
      ) : (
        <div>
          Select profile:
          {data.profiles.map((x: any, index: number) => (
            <p key={index}>{x.name}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
