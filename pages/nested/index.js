import Link from 'next/link'

export default () => (
  <div>
    <Link href="/">
      <a>&lt; Go back home</a>
    </Link>
    <h1>Nested page</h1>
    <style jsx>{`
      h1 {
        font-family: 'Helvetica Neue';
        color: tomato;
      }
      a {
        text-decoration: none;
      }
    `}</style>
    <style jsx global>{`
      body {
        background-color: papayawhip;
      }
    `}</style>
  </div>
)
