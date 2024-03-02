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
        const req = await fetch(import.meta.env.VITE_FOOTBALL_API + "/clubs?order[name]=asc", {headers: {"Accept": "application/json"}});
        clubs.value = await req.json();
    }
    catch(e) {
        console.error(e);
    }
};
</script>

<template>
    <div class="table-section_header">
        <h2>Clubs</h2>
        <button class="primary-btn" @click="router.push({name: 'AdminClubAdd'})">Add club</button>
    </div>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Stadium</th>
                <th class="shrink-col">Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="club in clubs">
                <td>{{ club.name }}</td>
                <td>{{ club.stadiumName }}</td>
                <td>
                    <button class="primary-btn" @click="router.push({name: 'AdminClubEdit', params: {id: club.id}})">Edit</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>