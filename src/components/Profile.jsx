import React from "react";
import "../styles/Profile.css";

export default function Profile({ profile }) {
  if (!profile) return null;
  const { name, email, phoneNumber, occupation, summary } = profile;
  return (
    <div className="profile-card">
      <h1 className="profile-name">{name}</h1>
      <p className="profile-occupation">{occupation}</p>
      <div className="profile-contact">
        <div>{email}</div>
        <div>{phoneNumber}</div>
      </div>
      <p className="profile-summary">{summary}</p>
    </div>
  );
}