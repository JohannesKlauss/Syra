import React from 'react';
import { PageError, RedirectError } from '../errors/PageErrors';

interface Props {

}

function ErrorPage({}: Props) {
  return (
    <>
      Oh no. There was an error. Please try again later.
    </>
  );
}

ErrorPage.getInitialProps = async function({ res, err }) {
  const props = {
    statusCode: 500,
    namespacesRequired: ['default'],
  };

  if (!res) return props;

  if (err instanceof PageError) {
    props.statusCode = err.statusCode;
    res.statusCode = err.statusCode;

    if (err instanceof RedirectError) {
      res.writeHead(err.statusCode, { Location: encodeURI(err.url) });
      res.end();
    }
  } else {
    console.error(err);
  }

  return props;
};

export default ErrorPage;
