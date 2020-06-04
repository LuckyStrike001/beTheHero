import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";

import api from "../../services/api";

import LogoImg from "../../assets/logo.svg";

import "./styles.css";

export default function Profile() {
  const [incidents, setIncidents] = useState([]);

  const ongName = localStorage.getItem("ongName");
  const ongId = localStorage.getItem("ongId");

  useEffect(() => {
    api
      .get("profile", {
        headers: {
          Authorization: ongId,
        },
      })
      .then((response) => {
        setIncidents(response.data);
      });
  }, [ongId]);

  return (
    <div className="profile-container">
      <header>
        <img src={LogoImg} alt="Be the hero" />
        <span>Welcome, {ongName}</span>
        <Link className="button" to="/incident/new">
          New case
        </Link>
        <button type="button">
          <FiPower size={18} color="#E02041" />
        </button>
      </header>

      <h1>Cases</h1>

      <ul>
        {incidents.map((incident) => (
          <li key={incident.id}>
            <strong>Case:</strong>
            <p>{incident.title}</p>

            <strong>Description</strong>
            <p>{incident.description}</p>

            <strong>Value</strong>
            <p>
              {Intl.NumberFormat("pt-PT", {
                style: "currency",
                currency: "EUR",
              }).format(incident.value)}
            </p>

            <button type="button">
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
