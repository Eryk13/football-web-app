<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const players = ref([]);
const router = useRouter();

onMounted(async () => {
    await loadPlayers();
})

const loadPlayers = async() => {
    try{
        const req = await fetch(import.meta.env.VITE_FOOTBALL_API + "/players", {headers: {"Accept": "application/json"}});
        players.value = await req.json();
    }
    catch(e) {
        console.error(e);
    }
};
</script>

<template>
    <div class="header">
        <h2>Players</h2>
        <button @click="router.push({name: 'AdminPlayerAdd'})">Add Player</button>
    </div>
    <table>
        <thead>
            <tr>
                <th>name</th>
                <th>number</th>
                <th>club</th>
                <th>nationality</th>
                <th>actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="player in players">
                <td>{{ player.name }}</td>
                <td>{{ player.number }}</td>
                <td>{{ player.club }}</td>
                <td>{{ player.nationality }}</td>
                <td>
                    <button @click="router.push({name: 'AdminPlayerEdit', params: {id: player.id}})">Edit</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>
    .header{
        display: flex;
        align-items: center;
    }
    
    .header > button{
        margin-left: 1rem;
    }

    td, th{
        border: solid 1px black;
        padding: .5em 1em;
    }

    table{
        border-collapse: collapse;
        width: 100%;
    }
</style>