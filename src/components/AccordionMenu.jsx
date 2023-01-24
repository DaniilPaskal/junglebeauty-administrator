import { useContext } from 'react';
import { Accordion, Card, useAccordionButton } from 'react-bootstrap';
import './../App.css';

const AccordionMenu = ({ items }) => {
  var itemID = -1;

  return (
    <Accordion className='accordion' alwaysOpen flush>
      {items.map((item) => {
        itemID++;

        return (
            <Accordion.Item className='accordion-item' eventKey={itemID}>
                <Accordion.Header className='accordion-header'>
                  <p className='accordion-header-text'>
                    {item.title}
                  </p>
                </Accordion.Header>
                <Accordion.Body>
                  {item.body}
                </Accordion.Body>
            </Accordion.Item>
        )
      })}
    </Accordion>
  );
};

export default AccordionMenu;