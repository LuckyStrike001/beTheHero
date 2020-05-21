import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";
import { FiArrowLeft } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";

export default function NewIncident() {
  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />
          <h1>Register new case</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, beatae
            nihil repellat nesciunt mollitia rerum vel delectus magnam.
          </p>
          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Go home
          </Link>
        </section>
        <form>
          <input placeholder="Case title" />
          <textarea placeholder="Description" />

          <input placeholder="Value" />

          <button className="button" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
