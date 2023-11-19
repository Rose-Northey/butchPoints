import { Outlet } from 'react-router-dom'

function Layout() {
  

  return (
    <>
      <header>
      <h1> Butch Of The Day ♡</h1>
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
