export default function Footer() {
  return (
    <div
      style={{
        paddingRight: "10rem",
        paddingLeft: "10rem",
        paddingTop: "2rem",
      }}
    >
      What is a modal ?
      <div style={{ marginTop: "2rem", fontWeight: "bold" }}>
        Modal is a web page element that displays infront of the other content
        on the page. It doesn't allow the user to interact with the rest of the
        page. The modal then becomes the primary content that the user can
        interact with. The user can go to the main content by eithe interacting
        with the modal or by explicitly closing it.
      </div>
    </div>
  );
}
