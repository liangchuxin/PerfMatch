import React, { useEffect, useState } from "react";
import "../style/MatchList.scss";

const Employer = (props) => {
  const [employer, setEmployer] = useState({
    id: 0,
    name: "",
    age: -1,
    profilePhoto: null,
    description: "",
    email: null,
    createdAt: null,
  });

  const id = props.id;

  useEffect(() => {
    getEmployerDetails();
  }, []);

  const getEmployerDetails = () => {
    fetch("/api/getEmployer" + "?id=" + id)
      .then((response) => response.json())
      .then((data) => {
        setEmployer({
          name: data.name,
          age: data.age,
          profilePhoto: data.profile_photo,
          description: data.description,
          email: data.email,
          password: data.password,
          createdAt: data.created_at,
        });
      });
  };

  if (employer.profilePhoto == "") {
    employer.profilePhoto =
      "https://cdn.jsdelivr.net/gh/liangchuxin/blog-imgs/img/20210802205546.jpg";
  }

  return (
    <div className="matchCard">
      <div className="profilePic">
        <img src={employer.profilePhoto} />
      </div>
      <div className="profileInfo">
        <div className="profileMeta">
          <span>
            <h3>NAME</h3>
            <p>{employer.name}</p>
          </span>
          <span>
            <h3>AGE</h3>
            <p>{employer.age}</p>
          </span>
        </div>
        <p className="profileDescrip">{employer.description}</p>
      </div>
    </div>
  );
};

export default Employer;
