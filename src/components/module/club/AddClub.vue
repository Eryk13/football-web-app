<script setup>
import ClubForm from '@/components/module/club/ClubForm.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const onCancel = () => {
    router.push({name: "admin"})
}

const onSubmit = async (club) => {
    await addClub(club)
}

const addClub = async(club) => {
    try{
        const req = await fetch(import.meta.env.VITE_FOOTBALL_API + "/clubs", { 
            headers: { 
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(club)
        });
    }
    catch(e) {
        console.error(e);
    }
    router.push({name: "admin"});
}
</script>

<template>
    <ClubForm :confirm-name="'Add'" @submitForm="onSubmit($event)" @cancel="onCancel()"></ClubForm>
</template>