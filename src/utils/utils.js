import { API_ENDPOINT, INIT_ATTR_VAL } from "../constants/constants";
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from "../consts";

export const getDefaultAttrs = () => {
  const attrs = {};
  ATTRIBUTE_LIST.forEach((attr) => (attrs[attr] = INIT_ATTR_VAL));
  return attrs;
};

export const getDefaultClasses = () => {
  const classes = {};
  Object.keys(CLASS_LIST).forEach((cls) => (classes[cls] = false));
  return classes;
};

export const getDefaultSkills = () => {
  const skills = {};
  SKILL_LIST.forEach((skill) => (skills[skill.name] = 0));
  return skills;
};

export const getDefaultCharacter = () => ({
  attrs: getDefaultAttrs(),
  skills: getDefaultSkills(),
});

export const getModifier = (attrVal) => Math.floor((attrVal - 10) / 2);

export const getTotalSkillPoints = (attrVal) => 10 + getModifier(attrVal) * 4;

export const saveCharacterData = async (characters) => {
  await fetch(API_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(characters),
  });
};

export const getCharacterData = async () => {
  return (await fetch(API_ENDPOINT)).json();
};
