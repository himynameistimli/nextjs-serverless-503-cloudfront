import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TestSlugPage = ({ slug }) => {
  return (
    <div>{`Dynamic Page`}<br/><br/>{`Slug: ${slug}`}<br/><br/>{`Try Refreshing This Page`}</div>
  );
};


export default TestSlugPage;

export const getServerSideProps = async ({ params }) => {
  const { slug } = params;

  return {
    props: {
      slug
    },
  };
};

