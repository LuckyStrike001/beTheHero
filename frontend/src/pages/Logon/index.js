import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import api from "../../services/api";

import "./styles.css";

import { FiLogIn } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";
import heroImg from "../../assets/heroes.png";

export default function Logon() {
  const [id, setId] = useState("");
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post("sessions", { id });

      localStorage.setItem("ongId", id);
      localStorage.setItem("ongName", response.data.name);

      history.push("/profile");
    } catch (err) {
      alert("Fail");
    }
  }

  return (
    <div className="Logon-container">
      <section className="form">
        <img src={logoImg} alt="be the hero" />
        <form onSubmit={handleLogin}>
          <h1>Sign In</h1>
          <input
            placeholder="Your ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <button className="button" type="submit">
            Sign In
          </button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#E02041" />
            Register
          </Link>
        </form>
      </section>

      <img src={heroImg} alt="Heroes" />
    </div>
  );
}
