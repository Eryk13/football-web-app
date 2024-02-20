<script setup>
import { onMounted, ref } from 'vue';
import Modal from '@/components/shared/Modal.vue';

const data = ref([]);
const showDeleteClubModal = ref(false);
const selectedClub = ref({});

onMounted(async () => {
    await loadClubs()
}
);

const loadClubs = async () => {
    try {
        const req = await fetch(import.meta.env.VITE_FOOTBALL_API + "/clubs", { headers: {"Accept": "application/json"}});
        data.value = await req.json();
    } catch(e) {
       console.error(e);
    }
}

const deleteClub = async (id) => {
    showDeleteClubModal.value = false;
    try{
        await fetch(import.meta.env.VITE_FOOTBALL_API + "/clubs/" + selectedClub.value.id, {
            method: 'DELETE'
        });
        await loadClubs();
    } catch(e) {
        console.error(e);
    }
};

const openDeleteClubModal = (club) => {
    showDeleteClubModal.value = true;
    selectedClub.value = club;
}

const closeDeleteClubModal = () => {
    showDeleteClubModal.value = false;
    selectedClub.value = null;
}

</script>

<template>
    <table>
        <thead>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>stadium</th>
                <th>actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="club in data">
                <td>{{ club.id }}</td>
                <td>{{ club.name }}</td>
                <td>{{ club.stadiumName }}</td>
                <td>
                    <button @click="">edit</button>
                    <button @click="openDeleteClubModal(club)">delete</button>
                </td>
            </tr>
        </tbody>
    </table>
    <Modal :open="showDeleteClubModal" @close="closeDeleteClubModal()" @confirm="deleteClub()">
        <h3>Are you sure you want to delete?</h3>
    </Modal>
</template>

<style scoped>
    table{
        border-collapse: collapse;
        width: 100%;
    }

    th, td{
        border: solid 1px black;
        padding: 1em;
    }

    button{
        padding: .5em 1em;
    }

    table button:nth-child(n+2){
        margin-left: 1rem;
    }

    button:hover{
        cursor: pointer;
    }
</style>