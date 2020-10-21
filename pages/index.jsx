import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
      <React.Fragment>
        <h1>{`Cloudfront 503/404 Error`}</h1>
        <p>
          {`Component: @sls-next/serverless-component@1.18.0-alpha.15`}
        </p>

        <Link href="/test">{`SSR Static Test`}</Link>
        <Link href="/test/nested">{`SSR Dynamic Test`}</Link>
        <br/>
        <Link href="/cat">{`Type Cat`}</Link>
        <Link href="/dog">{`Type Dog`}</Link>
        <br/>
        <Link href="/dog/one">{`Type Dog Slug One`}</Link>
        <Link href="/dog/two">{`Type Dog Slug Two`}</Link>
        <Link href="/cat/one">{`Type Cat Slug One`}</Link>
        <Link href="/cat/two">{`Type Cat Slug Two`}</Link>


      </React.Fragment>
  )
}
