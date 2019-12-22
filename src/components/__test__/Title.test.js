import React from "react";
import ReactDom from "react-DOM"
import Form from "./../Form";
import { render } from '@testing-library/react';
import renderer from "react-test-renderer";

it('renders without crashing', () => {
    const div =document.createElement('h2');
    ReactDom.render(<h2 />, div);
    
  });
  
  if("matches snapshots", ()=> {

   const tree = renderer.create(<h2></h2>).toJSON();
    expect(tree).toMatchSnapshot();
});