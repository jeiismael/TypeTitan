import React, { Component } from "react";
import { Table, Tab, Tabs } from "react-bootstrap";
import Container from "react-bootstrap/Container";

class Leaderboard extends Component {
  constructor() {
    super();
    this.state = {
      overallData: [],
      beginnerData: [],
      intermediateData: [],
      expertData: [],
    };
  }

  componentDidMount() {
    this.fetchLeaderboardData("http://localhost/typetitan/src/Backend/leaderboards.php", "overallData");
    this.fetchLeaderboardData("http://localhost/typetitan/src/Backend/leaderBeginner.php", "beginnerData");
    this.fetchLeaderboardData("http://localhost/typetitan/src/Backend/leaderIntermediate.php", "intermediateData");
    this.fetchLeaderboardData("http://localhost/typetitan/src/Backend/leaderexpert.php", "expertData");
  }

  fetchLeaderboardData(url, stateKey) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ [stateKey]: data });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  renderTable(data) {
    return (
      <div className="leaderboard-container">
      <Table striped hover className="leaderpagetable">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Username</th>
            <th>WPM</th>
            <th>CPM</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.username}</td>
              <td>{user.wpm}</td>
              <td>{user.cpm}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      </div>
    );
  }

  render() {
    return (
      <div className="leaderboard-container">
        <Tabs defaultActiveKey="home" id="fill-tab-example" className="mb-3" fill justify>
          <Tab eventKey="home" title="Overall">
            {this.renderTable(this.state.overallData)}
          </Tab>
          <Tab eventKey="profile" title="Beginner">
            {this.renderTable(this.state.beginnerData)}
          </Tab>
          <Tab eventKey="longer-tab" title="Intermediate">
            {this.renderTable(this.state.intermediateData)}
          </Tab>
          <Tab eventKey="contact" title="Expert">
            {this.renderTable(this.state.expertData)}
          </Tab>
        </Tabs>
      
      </div>
      
    );
  }
}

export default Leaderboard;
