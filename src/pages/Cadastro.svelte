<script>
  import { global } from "../store";
  import { useNavigate } from "svelte-navigator";
  import { onMount } from "svelte";

  let nome = "";
  let senha = "";
  let confirmSenha = "";
  let savedUsers = [];
  const navigate = useNavigate();

  const criarUsuario = () => {
    if (nome === "" && senha === "" && confirmSenha === "") {
      alert("Preencha todos os campos");
      return;
    }
    if (nome.length < 4 || nome.length > 20) {
      alert(
        "Nome inválido, não permitido abaixo de 4 caracteres ou acima de 20"
      );
      return;
    }
    if (senha !== confirmSenha) {
      alert("As senhas não correspondem");
      return;
    }
    const newUser = {
      name: nome,
      password: senha,
    };
    global.update((data) => {
      return {
        ...data,
        user: newUser,
      };
    });

    const previousUsers = localStorage.getItem("listaUser");
    if (!previousUsers) {
      localStorage.setItem("listaUser", JSON.stringify([newUser]));
      alert("Usuario cadastrado");
      navigate("/");
      return;
    } else {
      const getCurrentUsers = JSON.parse(previousUsers);
      getCurrentUsers.push(newUser);
      localStorage.setItem("listaUser", JSON.stringify(getCurrentUsers));
    }

    alert("Usuario cadastrado");
    navigate("/");
  };
</script>

<main>
  <div class="cadastro-card">
    <div class="title">
      <span>CADASTRE-SE!</span>
    </div>
    <label id="labelNome" for="nome">Nome completo</label>
    <input type="text" id="nome" bind:value={nome} required />
    <label id="labelSenha" for="senha">Senha</label>
    <input type="password" id="senha" bind:value={senha} required />
    <label id="labelConfirmSenha" for="confirmSenha">Confirmar Senha</label>
    <input
      type="password"
      id="confirmSenha"
      bind:value={confirmSenha}
      required
    />
    <button on:click={criarUsuario}>Cadastrar</button>
  </div>
</main>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
  * {
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
  }
  main {
    background: url("./images/cadastrowall.jpeg") center;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cadastro-card {
    background-color: #ffffff80;
    display: flex;
    flex-direction: column;
    width: 600px;
    height: 400px;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
  }

  .cadastro-card span {
    display: flex;
    margin-top: -80px;
    font-size: 40px;
    color: rgb(0, 0, 0);
  }

  .cadastro-card input {
    width: 220px;
  }

  .cadastro-card button {
    height: 28px;
    width: 120px;
    margin-top: 30px;
    background-color: transparent;
    color: rgb(0, 0, 0);
    border: 2px solid black;
    border-radius: 5px;
    transition: ease-in-out 0.3s;
  }

  .cadastro-card button:hover {
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
  }
</style>
