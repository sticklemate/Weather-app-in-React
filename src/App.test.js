import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import ReactDom from "react-dom";

it('renders without crashing', () => {
  const div =document.createElement('root');
  ReactDom.render(<App />, div);
  
});
