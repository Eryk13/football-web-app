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
    <div class="table-section_header">
        <h2>Nationalities</h2>
        <button class="primary-btn" @click="router.push({name: 'AdminNationalityAdd'})">Add nationality</button>
    </div>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th class="shrink-col">Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="nationality in nationalities">
                <td>{{ nationality.name }}</td>
                <td>
                    <button class="primary-btn" @click="router.push({name: 'AdminNationalityEdit', params: {id: nationality.id}})">Edit</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>
</style>