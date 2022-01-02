import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../style/MatchList.scss";
import Header from "./Header";
import Footer from "./Footer";
// import FadeInSection from "./FadeIn";
// import "../style/FadeIn.scss";
import MatchBlock from "./RecentMatch";
import Employer from "./Employer";
import Slider from '@material-ui/core/Slider';

function MatchList() {
  useEffect(() => {
    window.scrollTo(0, 0);
    getEmployerDetails();
  }, []);

  const ageRangeSelector = (event, newValue) => {
    setAgeRange(newValue);
    getEmployerDetails()
  };

  const yoeRangeSelector = (event, newValue) => {
    setYoeRange(newValue);
    getEmployerDetails()
  };

  const [ageRange, setAgeRange] =  React.useState([0, 100]);

  const [yoeRange, setYoeRange] =  React.useState([-1, 100]);

  // Fetch from restapi

  const [employer, setEmployer] = useState({
    id: 0,
    name: "",
    age: -1,
    profilePhoto: null,
    description: "",
    email: null,
    createdAt: null,
  });


  // End fetch

  const id = 1;
  const [employeeFeed, setEmployeeFeed] = useState([]);

  const getEmployerDetails = () => {
    fetch(`/api/employers?age_min=${ageRange[0]}&age_max=${ageRange[1]}&yoe_min=${yoeRange[0]}&yoe_max=${yoeRange[1]}`)
      .then((response) => response.json())
      .then((data) => {
        setEmployeeFeed(data);
      });
  };

  return (
    <div className="pageContainer">
      <Header />
      {/* <MatchBlock employeeFeed={employeeFeed} /> */}
      <div className="matchContainer">
        <div className="options">
        <div className="optionLabel">Age</div>
          <div className="optionItems">
            <Slider 
              value={ageRange}
              onChange={ageRangeSelector}
              valueLabelDisplay="auto"
            />
          </div>
          <div className="optionLabel">Year Of Experience</div>
          <div className="optionItems">
            <Slider 
              value={yoeRange}
              onChange={yoeRangeSelector}
              valueLabelDisplay="auto"
            />
          </div>
          <div className="optionLabel">Categories</div>
          <div className="optionItems">
            <a className="active">All</a>
            <a>Child care</a>
            <a>Senior care</a>
            <a>School support</a>
            <a>Housekeeping</a>
            <a>Day care</a>
            <a>Pet care</a>
          </div>
          <div className="optionLabel">Languages</div>
          <div className="optionItems">
            <a className="active">All</a>
            <a>English</a>
            <a>Indonesian</a>
            <a>Chinese</a>
            <a>Others</a>
          </div>
          <div className="optionLabel">Experience</div>
          <div className="optionItems">
            <a className="active">All</a>
            <a>{"< 1 year"}</a>
            <a>1 year +</a>
            <a>3 years +</a>
            <a>5 years +</a>
          </div>
        </div>
        <div className="matches">
          <h1>List of Perfmatch</h1>
          <div className="matchTab">
            <a className="active">General</a>
            <a>Experience</a>
            <a>Rating</a>
            <a>Views</a>
          </div>
          {/* {profiles.map((profile) => {
            <Employer id={profile} />;
          })} */}
          {/* <Employer id="1" /> */}

          {employeeFeed.length == 0 ? 

                <div className="matchCard">
                  <div className="profileInfo">
                    <div className="profileMeta">
                      <span>
                        <h3>Sorry. We couldn't find you a match at this time. Please come back later.</h3>
                      </span>
                    </div>
                  </div>
                </div>
          
          
          : employeeFeed.map((employee) => (
            // <FadeInSection>
            <div className="matchCard">
              <div className="profilePic">
                <img src={employee.profilePhoto} />
              </div>
              <div className="profileInfo">
                <div className="profileMeta">
                  <span>
                    <h3>NAME</h3>
                    <p>{employee.name}</p>
                  </span>
                  <span>
                    <h3>AGE</h3>
                    <p>{employee.age}</p>
                  </span>
                  <span>
                    <h3>Year Of Experience</h3>
                    <p>{employee.year_of_experience}</p>
                  </span>
                </div>
                <p className="profileDescrip">{employee.description}</p>
              </div>
            </div>
            // </FadeInSection>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MatchList;
