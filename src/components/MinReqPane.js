import { CLASS_LIST } from "../consts";

export function MinReqPane({ showClass, setShowClass }) {
  return (
    <div className="char-pane">
      <h2>{showClass} Minimum Requirements</h2>
      <ul>
        {Object.keys(CLASS_LIST[showClass]).map((attr, i) => (
          <li key={i}>
            {attr}: {CLASS_LIST[showClass][attr]}
          </li>
        ))}
      </ul>
      <button onClick={() => setShowClass("")}>Close view</button>
    </div>
  );
}
