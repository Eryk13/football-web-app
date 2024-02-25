<script setup>
import PlayerForm from '@/components/module/player/PlayerForm.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const onCancel = () => {
    router.push({name: "admin"})
}

const onSubmit = async (player) => {
    await addPlayer(player)
}

const addPlayer = async(player) => {
    try{
        await fetch(import.meta.env.VITE_FOOTBALL_API + "/players", { 
            headers: { 
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(player)
        });
    }
    catch(e) {
        console.error(e);
    }
    router.push({name: "admin"});
}
</script>

<template>
    <PlayerForm :confirm-name="'Add'" @submitForm="onSubmit($event)" @cancel="onCancel()"></PlayerForm>
</template>