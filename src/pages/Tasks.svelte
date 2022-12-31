<script defer>
  import { onMount } from "svelte";
  import { useNavigate } from "svelte-navigator";
  import { Link } from "svelte-navigator";

  const navigate = useNavigate();
  //Seleção de Elementos
  let checkForm = document.forms["checkform"];
  let checkInput = "";
  let editForm;
  let editInput = "";
  let cancelEditBtn = document.querySelector("#cancel-edit-btn");
  let checkList;
  let check;

  onMount(()=>{
    editForm = " document.forms['edit-form']";
  })

  onMount(() => {
    checkList = document.getElementById("check-list");
  });

  const saveCheck = (text) => {
    const check = document.createElement("div");
    check.classList.add("check", "s-Ouhuiank_kGq");

    const checkTitle = document.createElement("h3");
    checkTitle.classList.add("txt", "s-Ouhuiank_kGq");
    checkTitle.innerText = text;
    check.appendChild(checkTitle);

    const doneBtn = document.createElement("button");
    doneBtn.classList.add("finish-check", "btn-check", "s-Ouhuiank_kGq");
    doneBtn.innerHTML = '<i style="pointer-events: none" class="fa-solid fa-check"></i>';
    check.appendChild(doneBtn);

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-check", "btn-check", "s-Ouhuiank_kGq");
    editBtn.innerHTML = '<i style="pointer-events: none" class="fa-solid fa-pen"></i>';
    check.appendChild(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("remove-check", "btn-check", "s-Ouhuiank_kGq");
    deleteBtn.innerHTML = '<i style="pointer-events: none" class="fa-solid fa-xmark"></i>';
    check.appendChild(deleteBtn);

    checkList.appendChild(check);

    checkInput = "";
  };


  function submit() {
    const inputValue = checkInput;
    if (inputValue) {
      saveCheck(inputValue);
    }
  }


  document.addEventListener("click", handleClick);
  function handleClick(event) {
    const element = event.target;
    const dadEl = element.parentNode;

    let previousElement = element.previousElementSibling;
    while (previousElement && previousElement.tagName !== "H3") {
      previousElement = previousElement.previousElementSibling;
    }

    if (element.classList.contains("finish-check") && previousElement && previousElement.tagName === "H3") {
      previousElement.classList.toggle("done-txt")
      dadEl.classList.toggle("done");
    } if(element.classList.contains("remove-check")){
      dadEl.remove();
    } if(element.classList.contains("edit-check")){
      
    }

  }
</script>

<main>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
    integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />
  <div class="principal">
    <header>
      <span class="titulo">Tasks</span>
      <Link to="/">
      <button id="out-btn" style="background-color: #005967; color: white; width:60px; height:30px; position: absolute; left: 60%; top: 11%">Sair</button>
      </Link>
    </header>
    <div class="form-control">
      <form on:submit|preventDefault={() => submit()} id="checkform">
        <p class="par">Adicione sua tarefa:</p>
        <div class="fix">
          <input
            class="form-input"
            type="text"
            id="check-input"
            bind:value={checkInput}
            placeholder="O que você vai fazer?"
          />
          <button type="submit">
            <i class="fa-thin fa-plus" />
          </button>
        </div>
      </form>
    </div>
    <form id="edit-form" class="hide">
      <p class="par">Edite a sua tarefa</p>
      <div class="form-control">
        <input
          type="text"
          bind:value={editInput}
          class="form-input"
          id="edit-input"
        />
        <button type="submit">
          <i class="fa-solid fa-check-double" />
        </button>
      </div>
      <button id="cancel-edit-btn">Cancelar</button>
    </form>
    <div id="toolbar">
      <div id="search">
        <h4>Pesquisar:</h4>
        <form class="form-s">
          <input
            class="form-input-s"
            type="text"
            id="search-input"
            placeholder="Buscar"
          />
          <button id="erase-button">
            <i class="fa-solid fa-delete-left" />
          </button>
        </form>
      </div>
      <div id="filter">
        <h4>Filtrar:</h4>
        <select id="filter-select">
          <option value="all">Todos</option>
          <option value="done">Feitos</option>
          <option value="todo">A Fazer</option>
        </select>
      </div>
    </div>
    <div id="check-list">
      <div class="check done">
        <h3 class="txt done-txt">"Estou fazendo alguma coisa..."</h3>
        <button class="finish-check btn-check">
          <i class="fa-solid fa-check" />
        </button>
        <button class="edit-check btn-check">
          <i class="fa-solid fa-pen" />
        </button>
        <button class="remove-check btn-check">
          <i class="fa-solid fa-xmark" />
        </button>
      </div>
      <div class="check">
        <h3 class="txt">"Estudar javascript..."</h3>
        <button class="finish-check btn-check">
          <i class="fa-solid fa-check" />
        </button>
        <button class="edit-check btn-check">
          <i class="fa-solid fa-pen" />
        </button>
        <button class="remove-check btn-check">
          <i class="fa-solid fa-xmark" />
        </button>
      </div>
    </div>
  </div>
</main>

<style>
  /*Geral*/
  #out-btn{
    transition: 0.4s;
    
  }
  #out-btn:hover{
    background-color: red !important;
  }
  * {
    padding: 0;
    margin: 0;
    font-family: Helvetica, sans-serif;
    color: white;
    box-sizing: border-box;
  }

  /* Firefox */
  * {
  scrollbar-width: thin;
  scrollbar-color: #63184d #000000;
}

/* Chrome, Edge, e Safari */
*::-webkit-scrollbar {
  width: 10px;
}

*::-webkit-scrollbar-track {
  background: transparent;
}

*::-webkit-scrollbar-thumb {
  background-color: #63184d;
  border-radius: 20px;
  border: 3px solid #000000;
}
  main {
    background: url("./images/tasksbg.jpg") center;
    background-size: cover;
    background-attachment: fixed;
    width: 100%;
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
  }

  button {
    background-color: #63184d;
    color: white;
    border: 2px solid #63184d;
    padding: 0.3rem 0.6rem;
    font-size: 1rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.4s;
  }

  button:hover {
    background-color: #005967;
    border: 2px solid white;
  }

  i {
    pointer-events: none !important;
  }

  input {
    color: black;
  }

  input,
  select {
    padding: 0.25rem 0.5rem;
  }

  .hide {
    display: none;
  }

  /* Check Header */

  .principal {
    max-width: 450px;
    max-height: 650px;
    overflow: scroll;
    margin: 3rem auto;
    background-color: #10092c;
    padding: 1.5rem;
    border-radius: 15px;
  }

  header {
    text-align: center;
    padding: 0 1rem 1rem;
    border-bottom: 1px solid #ccc;
  }
  .titulo {
    font-size: 32px;
  }

  /* Check Form */

  #checkform,
  #edit-form {
    padding: 1rem;
    border-bottom: 1px solid #ccc;
  }

  .par {
    margin-bottom: 0.5rem;
    font-weight: bold;
  }

  .form-control {
    display: flex;
  }

  .fix {
    display: flex;
  }

  .form-input {
    margin-right: 0.3rem;
  }

  #cancel-edit-btn {
    margin-top: 1rem;
  }

  /* Check Ferramentas*/

  #toolbar {
    padding: 1rem;
    border-bottom: 1px solid #ccc;
    display: flex;
  }

  h4 {
    margin-bottom: 0.5rem;
  }

  #search {
    border-right: 1px solid #ddd;
    padding-right: 1rem;
    margin-right: 1rem;
    width: 65%;
    display: flex;
    flex-direction: column;
  }

  .form-s {
    display: flex;
  }

  .form-input-s {
    margin-right: 0.3rem;
    width: 100%;
  }

  #filter {
    width: 35%;
    display: flex;
    flex-direction: column;
  }

  select {
    flex: 1;
    color: rgb(255, 255, 255);
    background-color: rgb(0, 0, 0);
  }

  /*CheckList*/

  .check {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1rem;
    border-bottom: 1px solid #ddd;
    transition: 0.3s;
  }

  .txt {
    flex: 1;
    font-size: 0.9rem;
  }

  .btn-check {
    margin-left: 0.4rem;
  }

  .done {
    background-color: #005967;
  }

  .done-txt {
    color: #63184d !important;
    text-decoration: line-through !important; 
    font-style: italic !important;
  }
</style>
