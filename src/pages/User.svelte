<script>
    import { global } from "../store";
    import { onMount } from "svelte";
    import { useNavigate } from "svelte-navigator";

    const navigate = useNavigate();

    onMount(() =>{
        if ($global.isLogged === false) {
            navigate("/")
        }
    })
</script>

<main>
    User
</main>