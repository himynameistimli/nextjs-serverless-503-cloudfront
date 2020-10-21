import React from 'react';
import PropTypes from 'prop-types';

import { useRouter } from 'next/router';

const TypeSlugPage = ({
  type, slug
}) => {
  return ( 
    <div>{`Dynamic SSG Page`}<br/><br/>{`Type: ${type}`}<br/>{`Slug: ${slug}`}</div>
  );
};

export default TypeSlugPage;

export const getStaticProps = async ({ params }) => {
  const { slug, type } = params;

  return {
    props: {
      slug,
      type
    },
    revalidate: 1, // In seconds
  };
};

export const getStaticPaths = () => {
  const paths = [
    {params: {slug: 'one', type: 'cat'} },
    {params: {slug: 'two', type: 'cat'} },
    {params: {slug: 'two', type: 'dog'} },
    {params: {slug: 'one', type: 'dog'} },
  ]
  return {
    paths,
    fallback: false,
  };
};
