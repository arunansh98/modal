import { useState } from "react";
import Modal from "./components/Modal";
import Header from "./views/Header";
import Footer from "./views/Footer";

export default function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ marginBottom: "1rem" }}>Click on the button below.</div>
      <button
        style={{
          padding: "0.5rem",
          background: "blue",
          color: "white",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={() => setShowModal(true)}
      >
        Open Modal
      </button>
      {showModal && (
        <Modal>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Header setShowModal={setShowModal} />
            <hr style={{ width: "100%" }} />
            <Footer />
          </div>
        </Modal>
      )}
    </div>
  );
}
