<script setup>
import AdminLayout from '@/components/layout/AdminLayou.vue';
import PlayerForm from '@/components/module/player/PlayerForm.vue';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';


const route = useRoute();
const router = useRouter();
const player = ref({});

const loadPlayer = async(id) => {
    try{
        const req = await fetch(import.meta.env.VITE_FOOTBALL_API + "/players/" + id, { headers: { "Accept": "application/json"}});
        player.value = await req.json();
    }
    catch(e){
        console.error(e);
    }
} 

onMounted(async () => {
    await loadPlayer(route.params.id);
})

const onSubmit = async (player) => {
    console.log(player)
    try{
        await fetch(import.meta.env.VITE_FOOTBALL_API + "/players/" + player.id, {
            headers: {
                "Content-Type": "application/json"
            },
            method: "PUT",
            body: JSON.stringify(player)
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
        <PlayerForm :confirm-name="'Edit'" :player="player" @submitForm="onSubmit($event)" @cancel="onCancel()"></PlayerForm>
    </AdminLayout>
</template>