import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./RoleSelection.css";

export default function RoleSelectionPage() {
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");

  const handleRoleSelection = (role) => {
    if (role === "Physician") {
      localStorage.setItem("currentRole", role); // Save role 

      // Navigate to Unity
      navigate("/unity");

      // Si Unity está en una URL externa, usar:
      // window.location.href = "https://tu-unity-build-url";
    } else {
      setErrorMessage( 
        `${role} is not available yet. The ECMO procedure must begin with the Physician.`
      );
    }
  };

  return (
    <div className="page">
      <div className="hero">
        <h1>ECMO Learning Hub</h1>
        <p>Mixed Reality Training for ECMO Personnel</p>
      </div>

      <h2 className="subtitle">
        Select your professional profile
      </h2>

      <div className="cards-container">

        <div
          className="role-card"
          onClick={() => handleRoleSelection("Physician")}
        >
          <div className="icon">👨‍⚕️</div>

          <h3>Physician</h3>

          <p>
            ECMO mode selection, team briefing,
            cannulation planning and procedure supervision.
          </p>
        </div>

        <div
          className="role-card"
          onClick={() => handleRoleSelection("Nurse")}
        >
          <div className="icon">🩺</div>

          <h3>Nurse</h3>

          <p>
            Monitoring, sedation, sterile preparation,
            laboratory checks and patient care.
          </p>
        </div>

        <div
          className="role-card"
          onClick={() => handleRoleSelection("Perfusionist")}
        >
          <div className="icon">⚙️</div>

          <h3>Perfusionist</h3>

          <p>
            Circuit priming, gas sweep management,
            heater control and ECMO startup.
          </p>
        </div>

      </div>

      {errorMessage && (
        <div
          style={{
            marginTop: "30px",
            maxWidth: "700px",
            marginLeft: "auto",
            marginRight: "auto",
            padding: "15px",
            borderRadius: "8px",
            backgroundColor: "#fff3cd",
            border: "1px solid #ffe69c",
            color: "#856404",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          ⚠ {errorMessage}
        </div>
      )}
    </div>
  );
}