<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const nationalities = ref([]);
const router = useRouter();

onMounted(async () => {
    await loadNationalities();
})

const loadNationalities = async() => {
    try{
        const req = await fetch(import.meta.env.VITE_FOOTBALL_API + "/nationalities", {headers: {"Accept": "application/json"}});
        nationalities.value = await req.json();
    }
    catch(e) {
        console.error(e);
    }
};
</script>

<template>
    <div class="header">
        <h2>Nationalities</h2>
        <button @click="router.push({name: 'AdminNationalityAdd'})">Add nationality</button>
    </div>
    <table>
        <thead>
            <tr>
                <th>name</th>
                <th>actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="nationality in nationalities">
                <td>{{ nationality.name }}</td>
                <td>
                    <button @click="router.push({name: 'AdminNationalityEdit', params: {id: nationality.id}})">Edit</button>
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