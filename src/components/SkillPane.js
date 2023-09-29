import { SKILL_LIST } from "../consts";
import { getModifier, getTotalSkillPoints } from "../utils/utils";

export function SkillPane({ id, attrs, skills, updateSkills }) {
  const decrementSkill = (skill) => {
    if (skills[skill] > 0) {
      updateSkills(skill, skills[skill] - 1, id);
    }
  };

  const incrementSkill = (skill) => {
    const total = Object.values(skills).reduce((acc, a) => acc + a, 0);
    if (total < getTotalSkillPoints(attrs["Intelligence"])) {
      updateSkills(skill, skills[skill] + 1, id);
    } else {
      alert(
        `You've reached the max of ${getTotalSkillPoints(
          attrs["Intelligence"]
        )} skill points!`
      );
    }
  };

  return (
    <div className="char-pane">
      <h2>Skills</h2>
      <h3>
        Total points available: {getTotalSkillPoints(attrs["Intelligence"])}
      </h3>
      <ul>
        {SKILL_LIST.map((skill, i) => (
          <li key={i}>
            {skill.name}: {skills[skill.name]} (Modifier:&nbsp;
            {skill.attributeModifier}
            ):&nbsp;
            {getModifier(attrs[skill.attributeModifier])}&nbsp;
            <button onClick={() => incrementSkill(skill.name)}>+</button>
            &nbsp;
            <button onClick={() => decrementSkill(skill.name)}>-</button>
            &nbsp; Total: &nbsp;
            {getModifier(attrs[skill.attributeModifier]) + skills[skill.name]}
          </li>
        ))}
      </ul>
    </div>
  );
}
