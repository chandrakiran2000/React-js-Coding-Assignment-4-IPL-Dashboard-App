// Write your code here

import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {each} = props
  const {id, name, teamImageUrl} = each
  return (
    <Link className="link-card" to={`/team-matches/${id}`}>
      <li>
        <div className="team-card">
          <img className="team-card-img" src={teamImageUrl} alt={name} />
          <p className="team-card-text">{name}</p>
        </div>
      </li>
    </Link>
  )
}

export default TeamCard
