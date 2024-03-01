<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import moment from 'moment';
const fixtures = ref([]);
const router = useRouter();

onMounted(async () => {
    await loadFixtures();
    console.log(fixtures.value)
})

const loadFixtures = async() => {
    try{
        const req = await fetch(import.meta.env.VITE_FOOTBALL_API + "/fixtures", {headers: {"Accept": "application/json"}});
        fixtures.value = await req.json();
    }
    catch(e) {
        console.error(e);
    }
};
</script>

<template>
    <div class="header">
        <h2>Fixtures</h2>
        <button @click="router.push({name: 'AdminFixtureAdd'})">Add fixture</button>
    </div>
    <table>
        <thead>
            <tr>
                <th>home</th>
                <th>away</th>
                <th>date</th>
                <th>actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="fixture in fixtures">
                <td>{{ fixture.homeClub.name }}</td>
                <td>{{ fixture.awayClub.name }}</td>
                <td>{{ moment(fixture.date).format('MMMM Do, hh:mm') || "Not provided"}}</td>
                <td>
                    <button @click="router.push({name: 'AdminFixtureEdit', params: {id: fixture.id}})">Edit</button>
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