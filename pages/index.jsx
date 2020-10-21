import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (

      <div style={{padding: "30px", display: "flex", flexDirection: "column", fontFamily: "sans-serif" }}>
        <h1>{`Cloudfront 503/404 Error`}</h1>
        <p>
          Both the SSR pages will return a 503/404 error when you refresh the page. They function normally when navigating from the index. Locally works fine on refresh.
        </p>

        <p>
          *On <red>Type</red> and <green>Slug</green> Pages, I have set <strong>fallback: false</strong>, but if I set it to <strong>true</strong>, and refresh a Test page, it will try to load the <red>Type</red> pages instead
        </p>

        <Link href="/test">{`SSR Test (SSR)`}</Link>
        <Link href="/test/nested">{`SSR Nested Test (SSR)`}</Link>
        <br/>
        <Link href="/cat">{`Type Cat`}</Link>
        <Link href="/dog">{`Type Dog`}</Link>
        <br/>
        <Link href="/dog/one">{`Type Dog Slug One`}</Link>
        <Link href="/dog/two">{`Type Dog Slug Two`}</Link>
        <Link href="/cat/one">{`Type Cat Slug One`}</Link>
        <Link href="/cat/two">{`Type Cat Slug Two`}</Link>


      </div>
  )
}
