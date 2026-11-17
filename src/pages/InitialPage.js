import { useState } from "react";
import { useNavigate } from "react-router-dom";

import emmahLogo from "../images/logo_emmah.png";
import hawLogo from "../images/logo_haw.jpg";

function InitialPage() {
  const navigate = useNavigate();

  const [consent, setConsent] = useState(false);

  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.6",
      }}
    >
      {/* Logos */}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "60px",
          marginBottom: "30px",
          flexWrap: "wrap",
        }}
      >
        <img
          src={emmahLogo}
          alt="EMMAH"
          style={{
            height: "100px",
            objectFit: "contain",
          }}
        />

        <img
          src={hawLogo}
          alt="HAW Hamburg"
          style={{
            height: "100px",
            objectFit: "contain",
          }}
        />
      </div>

      {/* Header */}

      <div
        style={{
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        <h3
          style={{
            color: "#666",
            marginBottom: "10px",
          }}
        >
          Project Seminar in Engineering
        </h3>

        <h2
          style={{
            color: "#003366",
            marginBottom: "10px",
          }}
        >
          ECMO Cannulation Mixed Reality Training Simulator
        </h2>

        <p>
          <strong> Professor: Dr. Bernd Flick</strong>
        </p>
      </div>

      <hr />

      {/* Objective */}
      
      <h3
        style={{
        marginTop: "40px",
        marginBottom: "20px",
        }}    
>
        Learning Objective
      </h3>

      <p>
        Practise the preparation and initiation of an ECMO
        procedure within a mixed reality environment, while
        understanding the responsibilities of the different
        clinical team members.
      </p>

      {/* Scenario */}

        <h3
        style={{
        marginTop: "40px",
        marginBottom: "20px",
        }}    
>
        Scenario Overview
      </h3>

      <p>
        Users will participate in the setup of an Extracorporeal
        Membrane Oxygenation (ECMO) procedure. Depending on the
        current phase of the simulation, specific clinical roles
        will be enabled to progress through the workflow.
      </p>

      {/* Consent */}


      <label
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginTop: "30px",
          fontWeight: "bold",
        }}
      >
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
        />
        I have read and understood the information above and I
        consent to participate.
      </label>

      {/* Continue Button */}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
        }}
      >
        <button
          onClick={() => navigate("/roleselection")}
          disabled={!consent}
          style={{
            padding: "18px 50px",
            fontSize: "20px",
            fontWeight: "bold",
            border: "none",
            borderRadius: "10px",
            backgroundColor: consent ? "#003366" : "#cccccc",
            color: "white",
            cursor: consent ? "pointer" : "not-allowed",
            minWidth: "220px",
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default InitialPage;