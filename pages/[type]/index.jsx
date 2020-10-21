import React from 'react';
import PropTypes from 'prop-types';

import { useRouter } from 'next/router';

const TypePage = ({
  type
}) => {
  return ( 
    <div>Type: {type}</div>
  );
};

export default TypePage;

export const getStaticProps = async ({ params }) => {
  const {  type } = params;

  return {
    props: {
      type
    },
    revalidate: 1, // In seconds
  };
};

export const getStaticPaths = () => {
  const paths = [
    {params: { type: 'cat'} },
    {params: { type: 'dog'} },
  ]
  return {
    paths,
    fallback: false,
  };
};
