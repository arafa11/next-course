import NavLink from '../ui/NavLink'
import SignInButton from '../ui/SigninButton'
import ThemeButton from '../ui/ThemeButton'

const Header = () => {
  return (
    <header className="p-4">
      <nav className="container flex items-center justify-between">
        <ul className="flex gap-3">
          <li>
            <NavLink href={'/'}>Home</NavLink>
          </li>
          <li>
            <NavLink href={'/about'}>About</NavLink>
          </li>
          <li>
            <NavLink href={'/posts'}>Blog</NavLink>
          </li>
          <li>
            <NavLink href={'/todos'}>Todos</NavLink>
          </li>
          <li>
            <NavLink href={'/guestbook'}>Guestbook</NavLink>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <ThemeButton />
          <SignInButton />
        </div>
      </nav>
    </header>
  )
}

export default Header
