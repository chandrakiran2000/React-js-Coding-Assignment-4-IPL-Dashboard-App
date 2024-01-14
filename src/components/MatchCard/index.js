// Write your code here

import './index.css'

const MatchCard = props => {
  const {each} = props
  const {competingTeam, competingTeamLogo, matchStatus, result} = each
  //  console.log(competingTeamLogo)

  const winOrLoss = matchStatus === 'Won' ? 'green' : 'red'
  return (
    <li className="each-match-card">
      <img
        className="each-match-card-logo"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <p className="each-match-card-team">{competingTeam}</p>
      <p className="each-match-card-result">{result}</p>
      <p className={`each-match-card-match-status ${winOrLoss}`}>
        {matchStatus}
      </p>
    </li>
  )
}

export default MatchCard
