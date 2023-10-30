import React, { Component } from "react";
import { Table } from "react-bootstrap";
import Container from "react-bootstrap/Container";

class Leaderboard extends Component {
  constructor() {
    super();
    this.state = {
      leaderboardData: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost/typetitan/src/Backend/leaderboards.php")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ leaderboardData: data }); 
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  render() {
    return (
      
        <Table striped hover className='leaderpagetable'>
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
        </Table>
        
    );
  }
}

export default Leaderboard;
