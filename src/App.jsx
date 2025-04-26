import React, { useState } from "react";

export default function App() {
  const [name, setName] = useState(""); 
  const [greeting, setGreeting] = useState(""); 

  const handleGreet = () => {
    setGreeting(`Hello, ${name || "Stranger"}!`);
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#f3f4f6", padding: "1rem" }}>
      <div style={{ background: "white", borderRadius: "1rem", padding: "2rem", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", width: "100%", maxWidth: "400px" }}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem", textAlign: "center" }}>Simple Greeting App</h1>
        <input
          style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem", border: "1px solid #ccc", borderRadius: "0.5rem" }}
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          style={{ width: "100%", padding: "0.75rem", backgroundColor: "#4f46e5", color: "white", border: "none", borderRadius: "0.5rem", fontWeight: "bold", marginBottom: "1rem" }}
          onClick={handleGreet}
        >
          Greet Me
        </button>
        {greeting && (
          <p style={{ textAlign: "center", fontSize: "1.125rem", fontWeight: "500", color: "#16a34a" }}>
            {greeting}
          </p>
        )}
      </div>
    </div>
  );
}
