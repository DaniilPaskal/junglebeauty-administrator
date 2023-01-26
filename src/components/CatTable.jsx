import { useContext } from 'react';
import { Table } from 'react-bootstrap';
import './../App.css';

const CatTable = ({ cats }) => {
  
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name/Collar</th>
            <th>Birthdate</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {cats.map((cat) => {
            return (
              <tr key={cat.id}>
                <td>{cat.id}</td>
                <td>{cat.name}</td>
                <td>{cat.date || `N/A`}</td>
                <td>{cat.status || `N/A`}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default CatTable;