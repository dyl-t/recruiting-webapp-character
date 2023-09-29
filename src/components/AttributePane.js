import { MAX_TOTAL_ATTR_PTS } from "../constants/constants";
import { getModifier } from "../utils/utils";

export function AttributePane({ id, attrs, updateAttrs }) {
  const decrementAttr = (attr) => {
    if (attrs[attr] > 0) {
      updateAttrs(attr, attrs[attr] - 1, id);
    }
  };

  const incrementAttr = (attr) => {
    const total = Object.values(attrs).reduce((acc, a) => acc + a, 0);
    if (total < MAX_TOTAL_ATTR_PTS) {
      updateAttrs(attr, attrs[attr] + 1, id);
    } else {
      alert("You've reached the max of 70 attribute points!");
    }
  };

  return (
    <div className="char-pane">
      <h2>Attributes</h2>
      <ul>
        {Object.keys(attrs).map((attr, i) => (
          <li key={i}>
            {attr}: {attrs[attr]}&nbsp; (Modifier: {getModifier(attrs[attr])}
            )&nbsp;
            <button onClick={() => incrementAttr(attr)}>+</button>
            &nbsp;
            <button onClick={() => decrementAttr(attr)}>-</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
