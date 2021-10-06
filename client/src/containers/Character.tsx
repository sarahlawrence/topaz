import React from "react";
import { useParams } from "react-router-dom";
import { useGetCharacterQuery } from "../store/api";
import { withLoadingSpinner } from "../components/withLoadingSpinner";
import { connect, useSelector } from "react-redux";

function CharacterContainer() {
  const { id } = useParams() as any;
  const { data } = useGetCharacterQuery(id);

  return (
    <div className="App">?{/* <div>Hello {data.character.name}</div>  */}</div>
  );
}

// class CharacterContainer extends React.Component<any, any> {
//   render() {
//     console.log("CC", this.props);
//     return <div>???</div>;
//   }
// }

export default connect((state) => state)(CharacterContainer);
