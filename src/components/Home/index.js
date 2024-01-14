// Write your code here
//  import {Link} from 'react-router-dom'

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {teamCardsList: [], isLoading: true}

  componentDidMount() {
    this.getTeamCardsList()
  }

  getTeamCardsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    console.log(data.teams)
    const updatedData = data.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    //  console.log(updatedData)
    this.setState({teamCardsList: updatedData, isLoading: false})
  }

  getTheHome = () => {
    const {teamCardsList} = this.state
    return (
      <div className="home-card">
        <div className="ipl-logo-card">
          <img
            className="ipl-logo-img"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
          <h1 className="ipl-logo-ipl-dashboard-text">IPL Dashboard</h1>
        </div>
        <ul className="team-cards-list-card">
          {teamCardsList.map(each => (
            <TeamCard each={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="home-card">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          this.getTheHome()
        )}
      </div>
    )
  }
}

export default Home
