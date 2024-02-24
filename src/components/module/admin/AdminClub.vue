<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const clubs = ref([]);
const router = useRouter();

onMounted(async () => {
    await loadClubs();
})

const loadClubs = async() => {
    try{
        const req = await fetch(import.meta.env.VITE_FOOTBALL_API + "/clubs", {headers: {"Accept": "application/json"}});
        clubs.value = await req.json();
    }
    catch(e) {
        console.error(e);
    }
};
</script>

<template>
    <div class="header">
        <h2>Clubs</h2>
        <button @click="router.push({name: 'AdminClubAdd'})">Add club</button>
    </div>
    <table>
        <thead>
            <tr>
                <th>name</th>
                <th>stadium</th>
                <th>actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="club in clubs">
                <td>{{ club.name }}</td>
                <td>{{ club.stadiumName }}</td>
                <td>
                    <button @click="router.push({name: 'AdminClubEdit', params: {id: club.id}})">Edit</button>
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