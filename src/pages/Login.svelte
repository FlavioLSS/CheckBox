<script>
  import { useNavigate } from "svelte-navigator";
  import { global } from "../store";
  import { Link } from "svelte-navigator";

  const navigate = useNavigate();
  let user = "";
  let password = "";

  let listaUser = [];

  $: {
    const currentUserStorage = JSON.parse(localStorage.getItem("listaUser"));
    if (currentUserStorage) {
      listaUser = [...listaUser, currentUserStorage]
    }
  }

  const validateUser = (username, password) => {
  const user = listaUser[0].find(u => u.name === username && u.password === password);
  return user !== undefined;
}

  const login = () => {
   const validation = validateUser(user, password)
   if(!validation){
    alert("Usuário ou senha incorretos")
    return
   }
    navigate("/tasks");
  };
</script>

<main>
  <header>
    <img src="./images/CHECKBOX.png" alt="" />
  </header>
  <div class="entrada">
    <div class="container">
      <span class="textp">
        Organize seu <br />
        trabalho e vida, finalmente.
      </span>
      <br />
      <span class="login"> Faça seu login ou Cadastre-se! </span>
      <div class="op">
        <label for="usuario">Usuário</label>
        <input
          type="text"
          id="usuario"
          placeholder=""
          bind:value={user}
          required
        />
        <label for="senha">Senha</label>
        <input
          type="password"
          id="senha"
          placeholder=""
          bind:value={password}
          required
        />

        <button on:click={login}>Acessar</button>
        <Link to="/cadastro"><button>Cadastre-se</button></Link>
      </div>
    </div>
  </div>
</main>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
  * {
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
  }

  header {
    display: flex;
    justify-content: center;
  }
  header img {
    width: 350px;
  }
  main {
    background: url(https://wallpaperaccess.com/full/175916.jpg) no-repeat
      center fixed;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
  }
  .entrada {
    text-align: center;
    max-width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .textp {
    display: flex;
    font-size: 50px;
  }

  .container {
    font-size: 25px;
  }

  .op {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 30px;
    position: relative;
  }

  .op button {
    height: 28px;
    width: 120px;
    margin-bottom: 10px;
    background-color: transparent;
    color: rgb(0, 0, 0);
    border: 2px solid black;
    border-radius: 5px;
    transition: ease-in-out 0.3s;
  }

  .op button:hover {
    background-color: rgb(8, 236, 8);
    color: white;
    cursor: pointer;
  }

  input {
    width: 190px;
    height: 25px;
    color: rgb(72, 154, 90);
    margin-bottom: 10px;
    border: 2px black solid;
    border-radius: 8px;
    background-color: transparent;
    position: relative;
  }

  .login {
    font-size: 40px;
    color: #158b00;
    display: flex;
    height: 80px;
  }
</style>
