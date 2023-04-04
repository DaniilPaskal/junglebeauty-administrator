import { useContext } from 'react';
import { Table } from 'react-bootstrap';
import CatRow from './CatRow';
import './../App.css';

const CatTable = ({ cats }) => {
  console.log(cats);

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
          {cats.sort((a,b) => a.date > b.date ? -1 : 1).map((cat) => {
            return (
              <CatRow cat={cat} key={cat.id} />
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default CatTable;