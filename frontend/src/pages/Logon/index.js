import React from "react";

import "./styles.css";

import { FiLogIn } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";
import heroImg from "../../assets/heroes.png";

export default function Logon() {
  return (
    <div className="Logon-container">
      <section className="form">
        <img src={logoImg} alt="be the hero" />
        <form action="">
          <h1>Sign In</h1>
          <input placeholder="Your ID" />
          <button className="button" type="submit">
            Sign In
          </button>

          <a href="/register">
            <FiLogIn size={16} color="#E02041" />
            Register
          </a>
        </form>
      </section>

      <img src={heroImg} alt="Heroes" />
    </div>
  );
}
