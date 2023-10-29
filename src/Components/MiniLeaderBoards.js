import Table from 'react-bootstrap/Table';

function MiniLeaderBoards() {
  return (
    <div className='miniLContainer'>
    <Table striped hover className='miniLeaderBoards'>
      <thead>
        <tr>
            <th colSpan={3}>Leaderboards</th>
        </tr>
        <tr>
          <th>Rank</th>
          <th>Name</th>
          <th>WPM</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>120</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>98</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Larry the Bird</td>
          <td>95</td>
        </tr>
      </tbody>
    </Table>
    </div>
  );
}

export default MiniLeaderBoards;