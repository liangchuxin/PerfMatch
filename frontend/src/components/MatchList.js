import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../style/MatchList.scss";
import Header from "./Header";
import Footer from "./Footer";
import FadeInSection from "./FadeIn";
// import "../style/FadeIn.scss";
import MatchBlock from "./RecentMatch";
import Employer from "./Employer";
import { styled } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";

const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: 3,
  width: 16,
  height: 16,
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 0 0 1px rgb(16 22 26 / 40%)"
      : "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
  backgroundColor: theme.palette.mode === "dark" ? "#394b59" : "#f5f8fa",
  backgroundImage:
    theme.palette.mode === "dark"
      ? "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))"
      : "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
  ".Mui-focusVisible &": {
    outline: "2px auto rgba(19,124,189,.6)",
    outlineOffset: 2,
  },
  "input:hover ~ &": {
    backgroundColor: theme.palette.mode === "dark" ? "#30404d" : "#ebf1f5",
  },
  "input:disabled ~ &": {
    boxShadow: "none",
    background:
      theme.palette.mode === "dark"
        ? "rgba(57,75,89,.5)"
        : "rgba(206,217,224,.5)",
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: "#ff8937",
  backgroundImage:
    "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
  "&:before": {
    display: "block",
    width: 16,
    height: 16,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: "#DD7937",
  },
});
function BpCheckbox(props) {
  return (
    <Checkbox
      sx={{
        "&:hover": { bgcolor: "transparent" },
      }}
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      inputProps={{ "aria-label": "Checkbox demo" }}
      {...props}
    />
  );
}
function MatchList() {
  const [active, setActive] = useState("null");
  const [ageRange, setAgeRange] = useState([20, 60]);
  const [yoeRange, setYoeRange] = useState([-1, 100]);
  const [orderOpt, setOrderOpt] = useState("null");
  const [checked, setChecked] = useState(true);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    getEmployerDetails();
  }, []);


  useEffect(() => {
    console.log("use effect");
    getEmployerDetails();
  }, [orderOpt, yoeRange, ageRange]);

  const ageRangeSelector = (event, newValue) => {
    setAgeRange(newValue);
  };

  const yoeRangeSelector = (event, newValue) => {
    setYoeRange(newValue);
  };

  const clickSetYoe = (range) => {
    setYoeRange(range);
  };

  const clickSetOrder = (order) => {
    console.log("set order");
    setOrderOpt(order);
    setActive(order);
  };

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const hasProfile = (profilePhoto) => {
    if (profilePhoto) {
      return profilePhoto;
    } else {
      return "https://cdn.jsdelivr.net/gh/liangchuxin/perfmatch-files/images/202201160930684.png";
    }
  };

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
    fetch(
      `/api/employers?age_min=${ageRange[0]}&age_max=${ageRange[1]}&yoe_min=${yoeRange[0]}&yoe_max=${yoeRange[1]}&ordering=${orderOpt}`
    )
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
          {/* <div className="optionLabel">Year Of Experience</div>
          <div className="optionItems">
            <Slider
              value={yoeRange}
              onChange={yoeRangeSelector}
              valueLabelDisplay="auto"
            />
          </div> */}
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
            <FormGroup>
              <a className="active">
                <BpCheckbox defaultChecked />
                All
              </a>
              <a>
                <BpCheckbox />
                English
              </a>
              <a>
                <BpCheckbox />
                Indonesian
              </a>
              <a>
                <BpCheckbox />
                Chinese
              </a>
              <a>
                <BpCheckbox />
                Others
              </a>
            </FormGroup>
          </div>
          <div className="optionLabel">Experience</div>
          <div className="optionItems">
            <a
              onClick={() => clickSetYoe([-1, 100])}
              className={
                yoeRange[0] === -1 && yoeRange[1] === 100 ? "active" : "null"
              }
            >
              All
            </a>
            <a
              onClick={() => clickSetYoe([-1, 1])}
              className={
                yoeRange[0] === -1 && yoeRange[1] === 1 ? "active" : "null"
              }
            >
              {"< 1 year"}
            </a>
            <a
              onClick={() => clickSetYoe([1, 100])}
              className={
                yoeRange[0] === 1 && yoeRange[1] === 100 ? "active" : "null"
              }
            >
              1 year +
            </a>
            <a
              onClick={() => clickSetYoe([3, 100])}
              className={
                yoeRange[0] === 3 && yoeRange[1] === 100 ? "active" : "null"
              }
            >
              3 years +
            </a>
            <a
              onClick={() => clickSetYoe([5, 100])}
              className={
                yoeRange[0] === 5 && yoeRange[1] === 100 ? "active" : "null"
              }
            >
              5 years +
            </a>
          </div>
          <div className="optionLabel">Age</div>
          <div className="optionItems">
            <Slider
              value={ageRange}
              onChange={ageRangeSelector}
              valueLabelDisplay="auto"
              min={20}
              max={60}
            />
            {/* 不想写死来着但不知道为什么 age_Range[0]和 age_range[1]都是 20 */}
          </div>
        </div>
        <div className="matches">
          <h1>List of Perfmatch</h1>
          <div className="matchTab">
            <a
              onClick={() => clickSetOrder("null")}
              className={active === "null" ? "active" : "null"}
            >
              General
            </a>
            <a
              onClick={() => clickSetOrder("-year_of_experience")}
              className={active === "-year_of_experience" ? "active" : "null"}
            >
              Experience
            </a>
            <a
              onClick={() => clickSetOrder("age")}
              className={active === "age" ? "active" : "null"}
            >
              Age
            </a>
            <a
              onClick={() => clickSetOrder("views")}
              className={active === "views" ? "active" : "null"}
            >
              Views
            </a>
          </div>
          {/* {profiles.map((profile) => {
            <Employer id={profile} />;
          })} */}
          {/* <Employer id="1" /> */}

          {employeeFeed.length == 0 ? (
            <div className="matchCard">
              <div className="profileInfo">
                <div className="profileMeta">
                  <p class="profileDescrip">
                    Sorry. We couldn't find you a match at this time. Please
                    come back later.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            employeeFeed.map((employee) => (
              <FadeInSection>
                <div className="matchCard">
                  <div className="profilePic">
                    <img src={hasProfile(employee.profilePhoto)} />
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
                        <h3>YEARS OF EXP</h3>
                        <p>{employee.year_of_experience}</p>
                      </span>
                    </div>
                    <p className="profileDescrip">
                      "{employee.description}" {employee.name} is {employee.age}{" "}
                      years old and has {employee.year_of_experience} years of
                      working experience as a helper. Find out more about{" "}
                      {employee.name}
                      here.
                    </p>
                  </div>
                </div>
              </FadeInSection>
            ))
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MatchList;
