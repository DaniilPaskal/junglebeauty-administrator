import { useContext } from 'react';
import { Accordion, Card, useAccordionButton } from 'react-bootstrap';
import './../App.css';

const AccordionMenu = ({ items }) => {
  var itemID = -1;
  var title = '';
  var body = '';

  return (
    <>
    <h1>oh</h1>
    <Accordion className='accordion' alwaysOpen flush>
      {items.map((item) => {
        itemID++;

        if (item.name) {
            title = item.name;
            
            Object.keys(item).map((key) => {
                body += `${key}: ${item.key}\n`;  
            });
        }

        return (
            <Accordion.Item className='accordion-item' eventKey={itemID}>
                <Accordion.Header className='accordion-header'>
                  <p className='accordion-header-text'>
                    {title}
                  </p>
                </Accordion.Header>
                <Accordion.Body>
                  {body}

                  <button type='edit'>Edit</button>
                </Accordion.Body>
            </Accordion.Item>
        )
      })}
    </Accordion>
    </>
  );
};

export default AccordionMenu;