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
    <div class="table-section_header">
        <h2>Players</h2>
        <button class="primary-btn" @click="router.push({name: 'AdminPlayerAdd'})">Add Player</button>
    </div>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Number</th>
                <th>Club</th>
                <th>Nationality</th>
                <th class="shrink-col">Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="player in players">
                <td>{{ player.name }}</td>
                <td>{{ player.number }}</td>
                <td>{{ player.club.name }}</td>
                <td>{{ player.nationality.name }}</td>
                <td>
                    <button class="primary-btn" @click="router.push({name: 'AdminPlayerEdit', params: {id: player.id}})">Edit</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>
</style>