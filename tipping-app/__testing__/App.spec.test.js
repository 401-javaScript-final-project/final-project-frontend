import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App.js'; // This line breaks the test

console.log("Hello!");

it("Test suite runs", () => {
  expect(true).toBe(true);
});

it('App should render correctly', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});