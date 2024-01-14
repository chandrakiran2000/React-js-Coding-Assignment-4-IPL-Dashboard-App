// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {teamUrl: '', latestMatchD: {}, recentMatchD: [], isLoading: true}

  componentDidMount() {
    this.getTheData()
  }

  getTheData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    //  console.log(match)
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    //  console.log(data)
    //  console.log(data.team_banner_url)
    //  console.log(data.latest_match_details)
    //  console.log(data.recent_matches)
    const teamBannerUrl = data.team_banner_url
    const latestMatchDetails = {
      competingTeam: data.latest_match_details.competing_team,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      date: data.latest_match_details.date,
      firstInnings: data.latest_match_details.first_innings,
      id: data.latest_match_details.id,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      matchStatus: data.latest_match_details.match_status,
      result: data.latest_match_details.result,
      secondInnings: data.latest_match_details.second_innings,
      umpires: data.latest_match_details.umpires,
      venue: data.latest_match_details.venue,
    }
    //  console.log(latestMatchDetails)
    const recentMatches = data.recent_matches.map(each => ({
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      date: each.date,
      firstInnings: each.first_innings,
      id: each.id,
      manOfTheMatch: each.man_of_the_match,
      matchStatus: each.match_status,
      result: each.result,
      secondInnings: each.second_innings,
      umpires: each.umpires,
      venue: each.venue,
    }))
    //  console.log(recentMatches)

    this.setState({
      teamUrl: teamBannerUrl,
      latestMatchD: latestMatchDetails,
      recentMatchD: recentMatches,
      isLoading: false,
    })
  }

  getTheTeamMatches = () => {
    const {teamUrl, latestMatchD, recentMatchD} = this.state
    //  console.log(recentMatchD)
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)

    return (
      <div className={`team-matches-card ${id}`}>
        <img className="team-matches-img" src={teamUrl} alt="team banner" />
        <div className="latest-matches-card">
          <p className="latest-matches-text">Latest Matches</p>
          <LatestMatch latestMatchD={latestMatchD} />
        </div>

        <div>
          <ul className="match-card-card">
            {recentMatchD.map(each => (
              <MatchCard each={each} key={each.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  render() {
    const {recentMatchD, isLoading} = this.state
    console.log(recentMatchD)
    const {match} = this.props
    const {params} = match
    const {id} = params
    return (
      <div>
        {isLoading ? (
          <div className={`loader-card ${id}`} data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          this.getTheTeamMatches()
        )}
      </div>
    )
  }
}

export default TeamMatches
