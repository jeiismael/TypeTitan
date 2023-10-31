import React, { Component } from "react";
import { Table } from "react-bootstrap";


class MiniLeaderBoards extends Component {
  constructor() {
    super();
    this.state = {
      leaderboardData: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost/typetitan/src/Backend/leaderIntermediate.php")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ leaderboardData: data }); 
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  render() {
    const limitedData = this.state.leaderboardData.slice(0, 5);
    return (
        <Table striped hover className='miniLeaderBoards'>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Username</th>
              <th>WPM</th>
            </tr>
          </thead>
          <tbody>
            {limitedData.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.username}</td>
                <td>{user.wpm}</td>
              </tr>
            ))}
          </tbody>
        </Table>
    );
  }
}

export default MiniLeaderBoards;