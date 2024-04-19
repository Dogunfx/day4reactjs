export default function HomePage() {
  return (
    <main>
      <div className="header">
        <div className="icon">
          <i className="fa fa-bars"></i>
        </div>
        <h1 className="no-space title">
          English Premier League Teams by DogunFX
        </h1>
        <div className="whatsapp">
          <a target="_blank" href="https://wa.me/+2348059060890">
            <i className="fa fa-whatsapp"></i>
          </a>
        </div>
      </div>
      <div className="teams">
        <div className="row">
          <SingleTeam
            teamName="Man City"
            teamDesc="Treble Winner for 2023 Season"
            teamClass="mancity"
            teamURL="https://www.mancity.com"
            teamLogo="images/mancity.png"
          />
          <SingleTeam
            teamName="Arsenal"
            teamDesc="Young Team star"
            teamClass="arsenal"
            teamLogo="images/Arsenal_FC.svg"
            teamURL="https://arsenal.com"
          />
          <SingleTeam
            teamName="Arsenal"
            teamDesc="Young Team star"
            teamClass="arsenal"
            teamLogo="images/Arsenal_FC.svg"
            teamURL="https://arsenal.com"
          />
        </div>
      </div>
    </main>
  );
}

function SingleTeam({ teamLogo, teamName, teamDesc, teamClass, teamURL }) {
  return (
    <div className="team">
      <div className="team-thumbnail ">
        <img src={teamLogo} alt="" />
      </div>
      <h4>{teamName}</h4>
      <p className="italics">{teamDesc}</p>
      <a className={teamClass} href={teamURL} target="_blank">
        View More
      </a>
    </div>
  );
}
