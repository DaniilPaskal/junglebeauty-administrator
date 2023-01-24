import { useContext } from 'react';
import { Accordion, Card, useAccordionButton } from 'react-bootstrap';
import './../App.css';

const AccordionMenu = ({ items }) => {
  var itemID = -1;

  return (
    <>
      {items.length > 0 &&
      <Accordion className='accordion' alwaysOpen flush>
        {items.map((item) => {
          var title = '';
          var body = [];
          itemID++;

          if (item.name) {
              title = item.name;
              
              Object.keys(item).map((key) => {
                  body.push(`${key}: ${item[key]}`);  
              });
          }

          return (
              <Accordion.Item className='accordion-item' key={itemID} eventKey={itemID}>
                  <Accordion.Header className='accordion-header'>
                    <p className='accordion-header-text'>
                      {title}
                    </p>
                  </Accordion.Header>
                  <Accordion.Body>
                    {body.map((line) => {
                      return (
                        <p>{line}<br /></p>
                      );
                    })}
                    <button type='edit'>Edit</button>
                  </Accordion.Body>
              </Accordion.Item>
          )
        })}
      </Accordion>
    }
    </>
  );
};

export default AccordionMenu;