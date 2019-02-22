import Link from 'next/link'
export default () => (
  <div>
    Boring home page.
    <ul>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href="/nested">
          <a>Nested index</a>
        </Link>
      </li>
      <li>
        <Link href="/nested/subpage">
          <a>Nested subpage</a>
        </Link>
      </li>
    </ul>
  </div>
)
