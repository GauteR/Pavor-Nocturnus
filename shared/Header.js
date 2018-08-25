import Link from 'next/link'
import Router from 'next/router'

const Header = () => (
  <header>
    <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 border-bottom shadow-sm">
      <h5 class="my-0 mr-md-auto font-weight-normal text-white">
        <a class="btn btn-link p-2" onClick={() => Router.push('/')}>Pavor Nocturnus</a>
      </h5>
      <nav class="my-2 my-md-0 mr-md-3 text-white">
        <a class="btn btn-link p-2" onClick={() => Router.push('/blog')}>Blog</a>
        <a class="btn btn-link p-2" onClick={() => Router.push('/community')}>Community</a>
        <a class="btn btn-link p-2" onClick={() => Router.push('/leaderboards')}>Leaderboards</a>
      </nav>
      <a class="btn btn-outline-primary text-white" href="#">Log in</a>
    </div>
  </header>
) 

export default Header