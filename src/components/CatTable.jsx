import { useState } from 'react';
import { Table } from 'react-bootstrap';
import CatRow from './CatRow';
import './../App.css';

const CatTable = ({ cats }) => {
  const [sort, setSort] = useState('date');
  const [order, setOrder] = useState('des');
  const [filters, setFilters] = useState({colour: [], father: [], mother: [], status: [], sex: []});
  const colours = ['silver', 'brown'];
  const statuses = ['available', 'reserved', 'graduated'];
  const sexes = ['male', 'female'];

  cats.sort((a,b) => a[sort] > b[sort] ? -1 : 1);

  //
  useEffect(() => {
    setFilters({colour: colours, father: parents.filter((cat) => cat.sex === 'male').map((cat) => {return cat.name}), mother: parents.filter((cat) => cat.sex === 'female').map((cat) => {return cat.name}), status: ['available'], sex: sexes});
  }, [cats])

  const handleChange = (event) => {
    const { name, value } = event.target;
    var filterArray = filters[name];

    if (filterArray.includes(value)) {
      filterArray = filterArray.filter(item => item != value);
    } else {
      filterArray.push(value);
    }
    setFilters({ ...filters, [name]: filterArray});
  }

  const toggleAll = () => {
    if (filters['colour'].length > 0 || filters['father'].length > 0 || filters['mother'].length > 0 || filters['status'].length > 0) {
      setFilters({colour: [], father: [], mother: [], status: [], sex: []});
    } else {
      setFilters({colour: colours, father: parents.filter((cat) => cat.sex === 'male').map((cat) => {return cat.name}), mother: parents.filter((cat) => cat.sex === 'female').map((cat) => {return cat.name}), status: statuses, sex: sexes});
    }
  }
  //

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
      <Accordion className='filter-accordion' defaultActiveKey='1'>
        <Accordion.Item className='accordion-item' eventKey='0'>
            <Accordion.Header className='accordion-header'>
              <p className='accordion-header-text'>
                Filter kittens
              </p>
            </Accordion.Header>
            <Accordion.Body>
              {statuses.map((status) => {
                return (
                  <Checkbox key={status} label={capitalize(status)} name='status' value={status} handleChange={handleChange} checked={filters['status'].includes(status)} />
                )
              })}
              <br/>
              {colours.map((colour) => {
                return (
                  <Checkbox key={colour} label={capitalize(colour)} name='colour' value={colour} handleChange={handleChange} checked={filters['colour'].includes(colour)} />
                )
              })}
              <br/>
              {sexes.map((sex) => {
                return (
                  <Checkbox key={sex} label={capitalize(sex)} name='sex' value={sex} handleChange={handleChange} checked={filters['sex'].includes(sex)} />
                )
              })}
  
              <div className='parent-accordions-container'>
                <Accordion className='parent-accordion'>
                  <Accordion.Item eventKey={0}>
                    <Accordion.Header className='accordion-header'>
                      <p className='accordion-header-text'>Father</p>
                    </Accordion.Header>
                    <Accordion.Body>
                      {parents.filter((cat) => cat.sex === 'male').map((cat) => {
                        return (
                          <Checkbox key={cat.id} label={cat.name} name='father' value={cat.name} handleChange={handleChange} checked={filters['father'].includes(cat.name)} />
                        )
                      })}
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Accordion className='parent-accordion'>
                  <Accordion.Item eventKey={0}>
                    <Accordion.Header className='accordion-header'>
                      <p className='accordion-header-text'>Mother</p>
                    </Accordion.Header>
                    <Accordion.Body>
                      {parents.filter((cat) => cat.sex === 'female').map((cat) => {
                        return (
                          <Checkbox key={cat.id} label={cat.name} name='mother' value={cat.name} handleChange={handleChange} checked={filters['mother'].includes(cat.name)} />
                        )
                      })}
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>

              <div className='buttons-container'>
                <Button className='form-button' onClick={toggleAll}>Check/Uncheck All</Button>
              </div>
            </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Table className='cat-table' striped bordered hover>
        <thead>
          <tr>
            <th onClick={() => changeSort('id')}>ID</th>
            <th onClick={() => changeSort('name')}>Name/Collar</th>
            <th onClick={() => changeSort('date')}>Birthdate</th>
            {cats[0].mother && <th onClick={() => changeSort('mother')}>Mother</th>}
            {cats[0].father && <th onClick={() => changeSort('father')}>Father</th>}
            {!cats[0].mother && <th onClick={() => changeSort('sex')}>Sex</th>}
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