import "./CharacterSheet.css";
import { Character } from "../components/Character.js";
import {
  getCharacterData,
  getDefaultCharacter,
  saveCharacterData,
} from "../utils/utils";
import { useEffect, useState } from "react";

export default function CharacterSheet() {
  const [characters, setCharacters] = useState({});

  const updateCharacter = (type, key, value, id) => {
    const typeData = { ...characters[id][type] };
    typeData[key] = value;
    const newCharacters = { ...characters };
    newCharacters[id] = {
      ...newCharacters[id],
      [type]: typeData,
    };
    setCharacters(newCharacters);
  };

  const updateAttrs = (attr, value, charId) =>
    updateCharacter("attrs", attr, value, charId);
  const updateSkills = (skill, value, charId) =>
    updateCharacter("skills", skill, value, charId);

  const saveCharacters = async () => {
    await saveCharacterData(characters);
    alert("Character data saved!");
  };

  const addCharacter = () => {
    setCharacters({
      ...characters,
      [crypto.randomUUID()]: getDefaultCharacter(),
    });
  };

  const clearCharacters = () => {
    setCharacters({});
  };

  useEffect(() => {
    (async () => {
      const charData = await getCharacterData();
      if (charData && charData.body && Object.keys(charData.body).length) {
        setCharacters(charData.body);
      } else {
        addCharacter();
      }
    })();
  }, []);

  return (
    <>
      <div className="buttons">
        <button onClick={saveCharacters}>Save Characters</button>
        <button onClick={addCharacter}>Add Character</button>
        <button onClick={clearCharacters}>Clear Characters</button>
      </div>
      {Object.keys(characters).map((id, i) => (
        <Character
          key={id}
          id={id}
          name={i}
          character={characters[id]}
          updateAttrs={updateAttrs}
          updateSkills={updateSkills}
        />
      ))}
    </>
  );
}
