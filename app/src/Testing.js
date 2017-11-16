import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const TestingApp = ({data}) => {
  return (
    <div>Hello World!</div>
  )
};

  const query = gql`
    query getBuildings {
      significance
    }
  `
const Testing = graphql(query)(TestingApp);

export default Testing;
