import React, { useState } from "react";
import { useMakeCharacterMutation } from "../store/getCharacter";
import { connect, useSelector } from "react-redux";

function CreateCharacterContainer() {
  const [name, setName] = useState("");
  const { profile } = useSelector((state) => state) as any;
  console.log(profile);
  const [create] = useMakeCharacterMutation();
  return (
    <div className="create-character">
      <h1>Create a new character</h1>
      <input value={name} onChange={(evt) => setName(evt.target.value)} />
      <button
        onClick={() =>
          create({
            name,
            profile: profile.current,
            classes: [{ name: "foo", level: 1 }],
          })
        }
      >
        Create
      </button>
    </div>
  );
}

export default connect((state) => state)(CreateCharacterContainer);
