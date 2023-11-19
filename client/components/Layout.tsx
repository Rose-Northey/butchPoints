import { Outlet } from 'react-router-dom'

function Layout() {
  

  return (
    <>
      <header>
      <div>
      <h1> Butch Of The Day ♡</h1>
      </div>
      <button>Log</button>
      </header>
      <article>
        <div className = 'under-header'>
          <Outlet />
        </div>
      </article>
      <footer>
        <p>footer</p>
      </footer>
   </>
  )
}

export default Layout
