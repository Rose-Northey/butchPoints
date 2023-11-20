import { Outlet, Link} from 'react-router-dom'

function Layout() {
  

  return (
    <>
      <header>
      <div>
      <h1> Butch Of The Day ♡</h1>
      </div>
      <nav>
        <button><Link to='/log' >Points</Link></button>
        <button><Link to='/' >Home</Link></button>
        <button><Link to='/' >Log In</Link></button>
      </nav>
      </header>
      <article>
        <div className = 'under-header'>
          <Outlet />
        </div>
      </article>
      <footer>
        <p>Brought to you by problematic queer steriotypes.</p>
      </footer>
   </>
  )
}

export default Layout
