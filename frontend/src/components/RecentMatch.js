import "../style/RecentMatch.scss";
import FadeInSection from './FadeIn';
import "../style/FadeIn.scss";

// const MatchBlock = ( { employeeFeed } ) => {
//     return (
//         <>
//             {employeeFeed.map( employee => (
//                 <h3 key={employee.id}> {employee.name} {employee.age} </h3>
//             ))}
//         </>
//     )
// }

const MatchBlock = ({ employeeFeed }) => {
  return (
    <>
    {employeeFeed.map( employee => (
      <FadeInSection>
      <div className="matchBlock" key={employee.id}>
        <div className="profilePic">
          <img src={employee.picurl} />
        </div>
        <div className="profileInfo">
          <div className="profileMeta">
              <span>
            <h3>NAME</h3>
            <p>{employee.name}</p></span><span>
            <h3>AGE</h3>
            <p>{employee.age}</p></span>
          </div>
          <p className="profileDescrip">
          {employee.descrip}
          </p>
        </div>
      </div>
      </FadeInSection>
      ))}
    </>
  );
};

export default MatchBlock;
