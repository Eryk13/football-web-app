<script setup>
import FixtureForm from '@/components/module/fixture/FixtureForm.vue';
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
        const req = await fetch(import.meta.env.VITE_FOOTBALL_API + "/fixtures", { 
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
    <FixtureForm :confirm-name="'Add'" @submitForm="onSubmit($event)" @cancel="onCancel()"></FixtureForm>
</template>