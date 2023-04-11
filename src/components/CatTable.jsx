import { useContext, useState } from 'react';
import { Table } from 'react-bootstrap';
import CatRow from './CatRow';
import './../App.css';

const CatTable = ({ cats }) => {
  const [sort, setSort] = useState('date');

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th onClick={() => setSort('id')}>ID</th>
            <th onClick={() => setSort('name')}>Name/Collar</th>
            <th onClick={() => setSort('date')}>Birthdate</th>
            <th onClick={() => setSort('status')}>Status</th>
          </tr>
        </thead>
        <tbody>
          {cats.sort((a,b) => `${a}.${sort}` > `${b}.${sort}` ? -1 : 1).map((cat) => {
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