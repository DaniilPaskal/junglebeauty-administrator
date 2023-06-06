import { useContext, useState } from 'react';
import { Table } from 'react-bootstrap';
import CatRow from './CatRow';
import './../App.css';

const CatTable = ({ cats }) => {
  const [sort, setSort] = useState('date');
  const [order, setOrder] = useState('des');

  cats.sort((a,b) => a[sort] > b[sort] ? -1 : 1);

  const changeSort = (category) => {
    cats.sort((a,b) => a[category] > b[category] ? 1 : -1);

    if (category === sort) {
      if (order === 'des') {
        setOrder('asc');
      } else {
        setOrder('des');
        cats.reverse();
      }
    } else {
      setSort(category);
    }
  }

  return (
    <>
      <Table className='cat-table' striped bordered hover>
        <thead>
          <tr>
            <th onClick={() => changeSort('id')}>ID</th>
            <th onClick={() => changeSort('name')}>Name/Collar</th>
            <th onClick={() => changeSort('date')}>Birthdate</th>
            {cats[0].mother && <th onClick={() => changeSort('mother')}>Mother</th>}
            {cats[0].father && <th onClick={() => changeSort('father')}>Father</th>}
            <th onClick={() => changeSort('status')}>Status</th>
          </tr>
        </thead>
        <tbody>
          {cats.map((cat) => {
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