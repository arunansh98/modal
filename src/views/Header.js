export default function Header(props) {
  const { setShowModal } = props;
  return (
    <div
      style={{
        display: "block",
        textAlign: "center",
      }}
    >
      <h1>
        Modal
        <span
          style={{
            float: "right",
            marginRight: "1rem",
            cursor: "pointer",
            color: "silver",
          }}
          onClick={() => setShowModal(false)}
        >
          X
        </span>
      </h1>
    </div>
  );
}
