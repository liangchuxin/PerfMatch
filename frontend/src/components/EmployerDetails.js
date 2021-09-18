import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import FadeInSection from "./FadeIn";
// icons
import iconDown from "../icons/chevrons-down.svg";
import iconRight from "../icons/chevrons-right.svg";
import buttonIconRight from "../icons/button-right.svg";
import buttonIconLeft from "../icons/button-left.svg";

const EmployerDetails = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const history = useHistory();
  const [active, setActive] = useState("info");
  return (
    <>
      <div className="Find findEmployee">
        <div className="full">
          <h1>Find Your Ideal Employee</h1>
          <p className="description">
            Thinking of hiring a FDW? We strive to help you find you the most
            suitable helper for your home.
          </p>
          <a className="findButton">
            <span className="icon">
              <img src={iconDown} />
            </span>
            COMPLETE YOUR DETAILS
          </a>
        </div>
      </div>
      <div className="infoCollection">
        <div className="progress">
          <div className="tabs">
            <span
              onClick={() => setActive("info")}
              className={`tab ${active === "info" ? "active" : ""}`}
            >
              <span className="tabIcon">
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <title>info</title>
                  <defs>
                    <path
                      d="M12,1 C18.0751322,1 23,5.92486775 23,12 C23,18.0751322 18.0751322,23 12,23 C5.92486775,23 1,18.0751322 1,12 C1,5.92486775 5.92486775,1 12,1 Z M12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 C16.9705627,21 21,16.9705627 21,12 C21,7.02943725 16.9705627,3 12,3 Z M12,11 C12.5522847,11 13,11.4477153 13,12 L13,12 L13,16 C13,16.5522847 12.5522847,17 12,17 C11.4477153,17 11,16.5522847 11,16 L11,16 L11,12 C11,11.4477153 11.4477153,11 12,11 Z M11.2928932,8.29289322 C11.6834175,7.90236893 12.3165825,7.90236893 12.7071068,8.29289322 C13.0976311,8.68341751 13.0976311,9.31658249 12.7071068,9.70710678 C12.3165825,10.0976311 11.6834175,10.0976311 11.2928932,9.70710678 C10.9023689,9.31658249 10.9023689,8.68341751 11.2928932,8.29289322 Z"
                      id="path-1"
                    ></path>
                  </defs>
                  <g
                    id="info"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <mask id="mask-2" fill="white">
                      <use xlinkHref="#path-1"></use>
                    </mask>
                    <use
                      id="Combined-Shape"
                      fill="#000000"
                      fill-rule="nonzero"
                      xlinkHref="#path-1"
                    ></use>
                    <g id="Group" mask="url(#mask-2)" fill="#000000">
                      <g id="COLOR/-black">
                        <rect
                          id="Rectangle"
                          x="0"
                          y="0"
                          width="24"
                          height="24"
                        ></rect>
                      </g>
                    </g>
                  </g>
                </svg>
              </span>
              BASIC INFORMATION
            </span>
            <span className="icon">
              <img src={iconRight} />
            </span>
            <span
              onClick={() => setActive("expec")}
              className={`tab ${active === "expec" ? "active" : ""}`}
            >
              <span className="tabIcon">
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <title>check-circle</title>
                  <defs>
                    <path
                      d="M2.63816372,4.8536377 C5.80331554,1.15041418 11.027246,-0.0298638476 15.4770621,1.95285834 C15.9815346,2.17763814 16.2082703,2.76881393 15.9834905,3.27328641 C15.7587107,3.77775889 15.1675349,4.0044946 14.6630624,3.7797148 C11.0223038,2.15748756 6.74817888,3.12316958 4.15850921,6.15307973 C1.56883953,9.18298988 1.28052739,13.5553533 3.44992201,16.8990745 C5.61931663,20.2427957 9.72963221,21.7613449 13.5518796,20.6312257 C17.374127,19.5011065 19.9977835,15.9915321 20.0000623,12.0062866 L20.0000623,12.0062866 L20.0000623,11.0762866 C20.0000623,10.5240018 20.4477775,10.0762866 21.0000623,10.0762866 C21.552347,10.0762866 22.0000623,10.5240018 22.0000623,11.0762866 L22.0000623,11.0762866 L22.0000623,12.0068583 C21.9972767,16.8784128 18.7905855,21.1678926 14.1189498,22.5491494 C9.44731406,23.9304062 4.42359501,22.0744017 1.7721127,17.9876313 C-0.879369607,13.9008609 -0.526988104,8.55686121 2.63816372,4.8536377 Z M21.2929555,2.29917979 C21.6834798,1.9086555 22.3166448,1.9086555 22.7071691,2.29917979 C23.0976933,2.68970408 23.0976933,3.32286906 22.7071691,3.71339335 L22.7071691,3.71339335 L11.7071691,14.7133934 C11.3166448,15.1039176 10.6834798,15.1039176 10.2929555,14.7133934 L10.2929555,14.7133934 L7.29295549,11.7133934 C6.9024312,11.3228691 6.9024312,10.6897041 7.29295549,10.2991798 C7.68347978,9.9086555 8.31664476,9.9086555 8.70716905,10.2991798 L8.70716905,10.2991798 L11.0000623,12.592073 Z"
                      id="path-2"
                    ></path>
                  </defs>
                  <g
                    id="check-circle"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <mask id="mask-3" fill="white">
                      <use xlinkHref="#path-2"></use>
                    </mask>
                    <use
                      id="Combined-Shape"
                      fill="#000000"
                      fill-rule="nonzero"
                      xlinkHref="#path-2"
                    ></use>
                    <g id="Group" mask="url(#mask-3)" fill="#000000">
                      <g id="COLOR/-black">
                        <rect
                          id="Rectangle"
                          x="0"
                          y="0"
                          width="24"
                          height="24"
                        ></rect>
                      </g>
                    </g>
                  </g>
                </svg>
              </span>
              EXPECTATIONS
            </span>
            <span className="icon">
              <img src={iconRight} />
            </span>
            <span
              onClick={() => setActive("social")}
              className={`tab ${active === "social" ? "active" : ""}`}
            >
              <span className="tabIcon">
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <title>twitter</title>
                  <defs>
                    <path
                      d="M22.4256003,2.19314569 C23.1806406,1.66055938 24.192239,2.34918819 23.9736093,3.24692703 C23.6310685,4.65347058 22.9444409,5.94991003 21.9788599,7.02132259 C21.9937365,7.18329745 22.0014671,7.3463315 22.0020066,7.51030895 C22.0020066,19.3697472 10.5559398,25.4620085 0.516363648,19.8844662 C-0.404318339,19.3729762 -0.0106389431,17.9692391 1.04175123,18.0110991 C2.72835076,18.0781854 4.39795342,17.7428694 5.91616311,17.0435499 C3.71202262,15.6849506 2.30067136,13.8862895 1.60829924,11.7585118 C0.893424718,9.56158036 0.997770257,7.25288415 1.59415826,5.06028119 C1.77456266,4.39702972 1.95792376,3.89728084 2.08819503,3.60417048 C2.40386638,2.89390995 3.37366873,2.79952999 3.8203631,3.43559805 C5.491951,5.81584675 8.13498283,7.30170538 11.001725,7.51681475 C10.9863639,5.23227435 12.3906808,3.17608052 14.5274996,2.36050079 C16.4598913,1.62294672 18.6215935,2.04110729 20.134814,3.39534626 C20.9469085,3.09683321 21.7171835,2.69284499 22.4256003,2.19314569 Z M20.1503395,5.49783918 C19.7737087,5.61125078 19.3655742,5.49333979 19.1074524,5.19654675 C18.1491781,4.09470557 16.6049363,3.70831412 15.2406764,4.22902397 C13.8764166,4.74973383 12.9823419,6.06678046 13.0020066,7.54030895 L13.0020066,8.54030895 C13.0020066,9.08249669 12.5699333,9.52591881 12.0279277,9.53997294 C8.76719289,9.62452337 5.65195562,8.34094251 3.40606656,6.05356852 C3.01103234,7.75866021 2.98214764,9.51702981 3.51014541,11.1396571 C4.18717213,13.2202758 5.73701866,14.9093301 8.40814505,16.0964974 C9.12490821,16.4150588 9.21261237,17.3971738 8.5636365,17.8376975 C7.44453411,18.5973423 6.21832478,19.1674612 4.93400793,19.5340545 C12.6131607,21.5543029 20.0020073,16.4565164 20.002012,7.51361498 C20.0012958,7.29696781 19.9804657,7.08085507 19.9397898,6.86805943 C19.8771193,6.54019857 19.9821683,6.2026853 20.2198339,5.96830227 C20.4425963,5.74861654 20.6489193,5.51446738 20.8376958,5.26780813 C20.6111912,5.3513637 20.381972,5.42808966 20.1503395,5.49783918 Z"
                      id="path-3"
                    ></path>
                  </defs>
                  <g
                    id="twitter"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <mask id="mask-4" fill="white">
                      <use xlinkHref="#path-3"></use>
                    </mask>
                    <use
                      id="Shape"
                      fill="#000000"
                      fill-rule="nonzero"
                      xlinkHref="#path-3"
                    ></use>
                    <g id="Group" mask="url(#mask-4)" fill="#000000">
                      <g id="COLOR/-black">
                        <rect
                          id="Rectangle"
                          x="0"
                          y="0"
                          width="24"
                          height="24"
                        ></rect>
                      </g>
                    </g>
                  </g>
                </svg>
              </span>
              SOCIAL MEDIA
            </span>
          </div>
        </div>
        <FadeInSection>
          <div className={`fields ${active === "info" ? "" : "inactive"}`}>
            <form>
              <div className="name">
                <span className="label">
                  Full Name <span style={{ color: "#ED721D" }}>*</span>
                </span>
                <span className="fieldGroup twoCol">
                  <input placeholder="Jane" />
                  <input placeholder="Doe" />
                </span>
              </div>
              <div className="birth">
                <span className="label">
                  Date of Birth <span style={{ color: "#ED721D" }}>*</span>
                </span>
                <span className="fieldGroup threeCol">
                  <select name="year">
                    <option value="1990">1990</option>
                  </select>
                  <select name="month">
                    <option value="1">January</option>
                  </select>
                  <select name="date">
                    <option value="1">01</option>
                  </select>
                </span>
              </div>
              <div className="nationality">
                <span className="label">
                  Nationality <span style={{ color: "#ED721D" }}>*</span>
                </span>
                <span className="fieldGroup fullCol">
                  <select name="nationality">
                    <option value="indonesian">Indonesian</option>
                    <option value="chinese">Chinese</option>
                  </select>
                </span>
              </div>
              <div className="fin">
                <span className="label">
                  Full Name <span style={{ color: "#ED721D" }}>*</span>
                </span>
                <span className="fieldGroup fullCol">
                  <input placeholder="T1234567A" />
                </span>
              </div>
              <div className="mobile">
                <span className="label">
                  Mobile Number <span style={{ color: "#ED721D" }}>*</span>
                </span>
                <span className="fieldGroup fullCol">
                  <input placeholder="(65) 8888 - 8888" />
                </span>
              </div>
              <div className="marital">
                <span className="label">
                  Marital Status <span style={{ color: "#ED721D" }}>*</span>
                </span>
                <span className="fieldGroup fullCol">
                  <select name="marital">
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                  </select>
                </span>
              </div>
              <div>
                <a className="next" onClick={() => setActive("expec")}>
                  NEXT
                  <span>
                    <img src={buttonIconRight} />
                  </span>
                </a>
              </div>
            </form>
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className={`fields ${active === "expec" ? "" : "inactive"}`}>
            <form>
              <div className="name">
                <span className="label">
                  Full Name <span style={{ color: "#ED721D" }}>*</span>
                </span>
                <span className="fieldGroup twoCol">
                  <input placeholder="Jane" />
                  <input placeholder="Doe" />
                </span>
              </div>
              <div className="birth">
                <span className="label">
                  Date of Birth <span style={{ color: "#ED721D" }}>*</span>
                </span>
                <span className="fieldGroup threeCol">
                  <select name="year">
                    <option value="1990">1990</option>
                  </select>
                  <select name="month">
                    <option value="1">January</option>
                  </select>
                  <select name="date">
                    <option value="1">01</option>
                  </select>
                </span>
              </div>
              <div className="nationality">
                <span className="label">
                  Nationality <span style={{ color: "#ED721D" }}>*</span>
                </span>
                <span className="fieldGroup fullCol">
                  <select name="nationality">
                    <option value="indonesian">Indonesian</option>
                    <option value="chinese">Chinese</option>
                  </select>
                </span>
              </div>
              <div className="fin">
                <span className="label">
                  Full Name <span style={{ color: "#ED721D" }}>*</span>
                </span>
                <span className="fieldGroup fullCol">
                  <input placeholder="T1234567A" />
                </span>
              </div>
              <div className="mobile">
                <span className="label">
                  Mobile Number <span style={{ color: "#ED721D" }}>*</span>
                </span>
                <span className="fieldGroup fullCol">
                  <input placeholder="(65) 8888 - 8888" />
                </span>
              </div>
              <div className="marital">
                <span className="label">
                  Marital Status <span style={{ color: "#ED721D" }}>*</span>
                </span>
                <span className="fieldGroup fullCol">
                  <select name="marital">
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                  </select>
                </span>
              </div>
              <div>
                <a className="prev" onClick={() => setActive("info")}>
                  <span>
                    <img src={buttonIconLeft} />
                  </span>
                  BACK
                </a>
                <a className="next" onClick={() => setActive("social")}>
                  NEXT
                  <span>
                    <img src={buttonIconRight} />
                  </span>
                </a>
              </div>
            </form>
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className={`fields ${active === "social" ? "" : "inactive"}`}>
            <form>
              <div className="name">
                <span className="label">
                  Full Name <span style={{ color: "#ED721D" }}>*</span>
                </span>
                <span className="fieldGroup twoCol">
                  <input placeholder="Jane" />
                  <input placeholder="Doe" />
                </span>
              </div>
              <div className="birth">
                <span className="label">
                  Date of Birth <span style={{ color: "#ED721D" }}>*</span>
                </span>
                <span className="fieldGroup threeCol">
                  <select name="year">
                    <option value="1990">1990</option>
                  </select>
                  <select name="month">
                    <option value="1">January</option>
                  </select>
                  <select name="date">
                    <option value="1">01</option>
                  </select>
                </span>
              </div>
              <div className="nationality">
                <span className="label">
                  Nationality <span style={{ color: "#ED721D" }}>*</span>
                </span>
                <span className="fieldGroup fullCol">
                  <select name="nationality">
                    <option value="indonesian">Indonesian</option>
                    <option value="chinese">Chinese</option>
                  </select>
                </span>
              </div>
              <div className="fin">
                <span className="label">
                  Full Name <span style={{ color: "#ED721D" }}>*</span>
                </span>
                <span className="fieldGroup fullCol">
                  <input placeholder="T1234567A" />
                </span>
              </div>
              <div className="mobile">
                <span className="label">
                  Mobile Number <span style={{ color: "#ED721D" }}>*</span>
                </span>
                <span className="fieldGroup fullCol">
                  <input placeholder="(65) 8888 - 8888" />
                </span>
              </div>
              <div className="marital">
                <span className="label">
                  Marital Status <span style={{ color: "#ED721D" }}>*</span>
                </span>
                <span className="fieldGroup fullCol">
                  <select name="marital">
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                  </select>
                </span>
              </div>
              <div>
                <a className="prev" onClick={() => setActive("expec")}>
                  <span>
                    <img src={buttonIconLeft} />
                  </span>
                  BACK
                </a>
                <button className="next">
                  SUBMIT
                  <span>
                    <img src={buttonIconRight} />
                  </span>
                </button>
              </div>
            </form>
          </div>
        </FadeInSection>
      </div>
    </>
  );
};

export default EmployerDetails;
