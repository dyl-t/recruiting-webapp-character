export function ClassPane({ classes, setShowClass }) {
  return (
    <div className="char-pane">
      <h2>Classes</h2>
      <ul>
        {Object.keys(classes).map((cls, i) => (
          <li
            key={i}
            className={classes[cls] ? "valid" : "invalid"}
            onClick={() => setShowClass(cls)}
          >
            {cls}
          </li>
        ))}
      </ul>
    </div>
  );
}
