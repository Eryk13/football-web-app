<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import moment from 'moment';
const fixtures = ref([]);
const router = useRouter();

onMounted(async () => {
    await loadFixtures();
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
    <div class="table-section_header">
        <h2>Fixtures</h2>
        <button class="primary-btn" @click="router.push({name: 'AdminFixtureAdd'})">Add fixture</button>
    </div>
    <table>
        <thead>
            <tr>
                <th>Home</th>
                <th>Away</th>
                <th>Date</th>
                <th class="shrink-col">Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="fixture in fixtures">
                <td>{{ fixture.homeClub.name }}</td>
                <td>{{ fixture.awayClub.name }}</td>
                <td>{{ moment(fixture.date).format('MMMM Do, HH:mm') || "Not provided"}}</td>
                <td>
                    <button class="primary-btn" @click="router.push({name: 'AdminFixtureEdit', params: {id: fixture.id}})">Edit</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>
</style>