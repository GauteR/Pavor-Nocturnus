import Link from 'next/link'
import Router from 'next/router'

const Header = () => (
  <header>
    <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
      <h5 class="my-0 mr-md-auto font-weight-normal">
        <a class="btn btn-link p-2" onClick={() => Router.push('/')}>SomaHub</a>
      </h5>
      <nav class="my-2 my-md-0 mr-md-3">
        <a class="btn btn-link p-2" onClick={() => Router.push('/about')}>About</a>
        <a class="btn btn-link p-2" onClick={() => Router.push('/contact')}>Contact</a>
      </nav>
      <a class="btn btn-outline-primary" href="#">Log in</a>
    </div>
  </header>
) 

export default Header