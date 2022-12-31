<script>
  import { Router, Route } from "svelte-navigator";
    import { component_subscribe } from "svelte/internal";
  import Login from "./pages/Login.svelte";
  import Tasks from "./pages/Tasks.svelte";
  import User from "./pages/User.svelte";
  import Cadastro from "./pages/Cadastro.svelte"
</script>



<Router>
  <Route path="/" component={Login} />
  <Route path="tasks" component={Tasks} />
  <Route path="user" component={User} />
  <Route path="cadastro" component={Cadastro} />
</Router>
