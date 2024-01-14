// Write your code here

import './index.css'

const LatestMatch = props => {
  const {latestMatchD} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatchD
  console.log(competingTeam)
  return (
    <div className="latest-match-card">
      <div className="latest-match-card-1">
        <div>
          <p className="latest-match-card-1-heading">{competingTeam}</p>
          <p className="latest-match-card-1-date">{date}</p>
          <p className="latest-match-card-1-venue">{venue}</p>
          <p className="latest-match-card-1-result">{result}</p>
        </div>
        <div className="latest-match-card-2-sm">
          <img
            className="latest-match-card-2-img-sm"
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
          />
        </div>
      </div>
      <div className="latest-match-card-2">
        <img
          className="latest-match-card-2-img"
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
        />
      </div>
      <div className="latest-match-card-3">
        <p className="latest-match-card-3-first-innings-heading">
          First Innings
        </p>
        <p className="latest-match-card-3-first-innings-text">{firstInnings}</p>
        <p className="latest-match-card-3-second-innings-heading">
          Second Innings
        </p>
        <p className="latest-match-card-3-second-innings-text">
          {secondInnings}
        </p>
        <p className="latest-match-card-3-man-of-the-match-heading">
          Man Of The Match
        </p>
        <p className="latest-match-card-3-man-of-the-match-text">
          {manOfTheMatch}
        </p>
        <p className="latest-match-card-3-umpires-heading">Umpires</p>
        <p className="latest-match-card-3-umpires-text">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
