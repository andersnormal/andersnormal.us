<script>
  import { Router, Link, Route } from 'svelte-routing'
  import NavLink from './components/NavLink.svelte'
  import Home from './routes/Home.svelte'
  import About from './routes/About.svelte'

  export let url = ''
</script>

<Router {url}>
  <nav>
    <NavLink to="/">Home</NavLink>
    <NavLink to="about">About</NavLink>
  </nav>
  <div class="w-full max-w-screen-xl mx-auto px-6">
    <Route path="about" component={About} />
    <Route path="/" component={Home} />
  </div>
</Router>
