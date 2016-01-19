import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import assert from 'assert';
import MyApp from '../src/app/MyApp';


describe('MyApp component', function(){

  before('render and locate element', function() {

    var renderedComponent = TestUtils.renderIntoDocument(
      <MyApp name="test" />
    );


    // Searching for <div> tag within rendered React component
    // Throws an exception if not found
    var divComponent = TestUtils.findRenderedDOMComponentWithTag(
      renderedComponent,
      'div'
    );

    this.divElement = ReactDOM.findDOMNode(divComponent);
  });




  it('<div> should be of class "MyApp"', function() {
    assert(this.divElement.getAttribute('class') === 'MyApp');
  });

});
