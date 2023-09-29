import { useEffect, useState } from "react";
import { getDefaultClasses } from "../utils/utils";
import { CLASS_LIST } from "../consts";
import { AttributePane } from "./AttributePane";
import { ClassPane } from "./ClassPane";
import { MinReqPane } from "./MinReqPane";
import { SkillPane } from "./SkillPane";

export function Character({ id, name, character, updateAttrs, updateSkills }) {
  const [showClass, setShowClass] = useState("");
  const [classes, setClasses] = useState(getDefaultClasses());

  useEffect(() => {
    const classVals = { ...classes };
    for (const cls in CLASS_LIST) {
      classVals[cls] = true;
      for (const attr in character.attrs) {
        if (CLASS_LIST[cls][attr] > character.attrs[attr]) {
          classVals[cls] = false;
          break;
        }
      }
    }
    setClasses(classVals);
  }, [character.attrs]);

  return (
    <div>
      <h2 className="char-name">Character: {name + 1}</h2>
      <div className="char-data">
        <AttributePane
          id={id}
          attrs={character.attrs}
          updateAttrs={updateAttrs}
        />
        <ClassPane classes={classes} setShowClass={setShowClass} />
        {showClass && (
          <MinReqPane showClass={showClass} setShowClass={setShowClass} />
        )}
        <SkillPane
          id={id}
          attrs={character.attrs}
          skills={character.skills}
          updateSkills={updateSkills}
        />
      </div>
    </div>
  );
}
