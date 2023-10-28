import React, { Component } from "react";

class Leaderboard extends Component {
  constructor() {
    super();
    this.state = {
      leaderboardData: [],
    };
  }

  componentDidMount() {
    // Fetch the leaderboard data from your server
    fetch("http://localhost/typetitan/src/Backend/leaderboards.php") // Replace with your actual API endpoint
      .then((response) => response.json())
      .then((data) => {
        this.setState({ leaderboardData: data }); // Update the state with the fetched data
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  render() {
    return (
      <div >
        <div className="leaderpagetable">
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Username</th>
              <th>WPM</th>
            </tr>
          </thead>
          <tbody>
            {this.state.leaderboardData.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.username}</td>
                <td>{user.wpm}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    );
  }
}

export default Leaderboard;
