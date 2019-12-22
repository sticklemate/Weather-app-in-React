import React from "react";
import ReactDom from "react-DOM"
import Form from "./../Form";
import { render } from '@testing-library/react';


it('renders without crashing', () => {
    const div =document.createElement('form');
    ReactDom.render(<form />, div);
    
  });
  