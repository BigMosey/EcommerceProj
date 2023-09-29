import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function Sort() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <button> <Dropdown.Item href="#/action-1">Men's</Dropdown.Item></button>
        <button><Dropdown.Item href="#/action-2">Women's</Dropdown.Item></button>
        <button ><Dropdown.Item href="#/action-3">Other</Dropdown.Item></button>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Sort;