import { useState } from 'react';
import { Table } from 'react-bootstrap';
import CatRow from './CatRow';
import './../App.css';

const ParentTable = ({ parents }) => {
  const [sort, setSort] = useState('date');
  const [order, setOrder] = useState('des');

  parents.sort((a,b) => a[sort] > b[sort] ? -1 : 1);

  const changeSort = (category) => {
    parents.sort((a,b) => a[category] > b[category] ? 1 : -1);

    if (category === sort) {
      if (order === 'des') {
        setOrder('asc');
      } else {
        setOrder('des');
        parents.reverse();
      }
    } else {
      setSort(category);
    }
  }

  return (
    <Table className='cat-table' bordered hover>
        <thead>
            <tr>
            <th onClick={() => changeSort('id')}>ID</th>
            <th onClick={() => changeSort('name')}>Name/Collar</th>
            <th onClick={() => changeSort('date')}>Birthdate</th>
            <th onClick={() => changeSort('sex')}>Sex</th>
            <th onClick={() => changeSort('status')}>Status</th>
            </tr>
        </thead>
        <tbody>
            {parents.map((cat) => {
            return (
                <CatRow cat={cat} key={cat.id} />
            );
            })}
        </tbody>
    </Table>
  );
};

export default ParentTable;