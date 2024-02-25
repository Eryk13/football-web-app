<script setup>
import AdminLayout from '@/components/layout/AdminLayou.vue';
import ClubForm from '@/components/module/club/ClubForm.vue';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';


const route = useRoute();
const router = useRouter();
const club = ref({});

const loadClub = async(id) => {
    try{
        const req = await fetch(import.meta.env.VITE_FOOTBALL_API + "/clubs/" + id, { headers: { "Accept": "application/json"}});
        club.value = await req.json();
    }
    catch(e){
        console.error(e);
    }
} 

onMounted(async () => {
    await loadClub(route.params.id);
})

const onSubmit = async (club) => {
    try{
        await fetch(import.meta.env.VITE_FOOTBALL_API + "/clubs/" + club.id, {
            headers: {
                "Content-Type": "application/json"
            },
            method: "PUT",
            body: JSON.stringify(club)
        });
    }
    catch(e){
        console.error(e);
    }
    router.push({name: "admin"});
}

const onCancel = () => {
    router.push({name: "admin"});
}
</script>

<template>
    <AdminLayout>
        <ClubForm :confirm-name="'Edit'" :club="club" @submitForm="onSubmit($event)" @cancel="onCancel()"></ClubForm>
    </AdminLayout>
</template>