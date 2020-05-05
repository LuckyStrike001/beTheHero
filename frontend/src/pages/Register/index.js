import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";
import { FiArrowLeft } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";

export default function Register() {
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />
          <h1>Register</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, beatae
            nihil repellat nesciunt mollitia rerum vel delectus magnam.
          </p>
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Register
          </Link>
        </section>
        <form>
          <input placeholder="ONG Name" />
          <input type="email" placeholder="E-mail" />
          <input placeholder="WhatsApp" />

          <div className="input-group">
            <input placeholder="city" />
            <input placeholder="UF" style={{ width: 80 }} />
          </div>
          <button className="button" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
