import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import api from "../../services/api";

import "./styles.css";
import { FiArrowLeft } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";

export default function NewIncident() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

  const history = useHistory();

  const ongId = localStorage.getItem("ongId");

  async function handleIncident(e) {
    e.preventDefault();

    const data = {
      title,
      description,
      value,
    };

    try {
      await api.post("incidents", data, {
        headers: {
          Authorization: ongId,
        },
      });

      history.push("/profile");
    } catch {
      alert("Error to try create incident, try again please");
    }
  }

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
        <form onSubmit={handleIncident}>
          <input
            placeholder="Case title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            placeholder="Value"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

          <button className="button" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
