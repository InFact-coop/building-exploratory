import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const TestingApp = ({data}) => {
  console.log(data);
  return (
    <div>Hello World!
    </div>
  )
};

  const query = gql`{
   getBuildings {
      significance
    }
  }`;
const Testing = graphql(query)(TestingApp);

export default Testing;
