import { Accordion } from 'react-bootstrap';
import './../App.css';

const AccordionMenu = ({ items }) => {
  var itemID = -1;

  return (
    <>
      {items.length > 0 &&
        <Accordion className='accordion' alwaysOpen flush>
          {items.map((item) => {
            var title = '';
            var body = '';
            itemID++;

            if (item.name) {
                title = item.name;
                
                body = `
                  id: ${item.id}
                  ${item.mother ? `collar:` : `name:`}: ${item.name}
                  birthdate: ${item.date}
                  colour: ${item.colour}
                  adjective: ${item.adj}
                  mother: ${item.mother}
                  father: ${item.father}
                  birth location: ${item.location}
                  cattery: ${item.cattery}
                `
            }

            return (
                <Accordion.Item className='accordion-item' key={itemID} eventKey={itemID}>
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
      }
    </>
  );
};

export default AccordionMenu;