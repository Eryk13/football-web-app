<script setup>
import NationalityForm from '@/components/module/nationality/NationalityForm.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const onCancel = () => {
    router.push({name: "admin"})
}

const onSubmit = async (nationality) => {
    await addNationality(nationality)
}

const addNationality = async(nationality) => {
    try{
        const req = await fetch(import.meta.env.VITE_FOOTBALL_API + "/nationalities", { 
            headers: { 
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(nationality)
        });
    }
    catch(e) {
        console.error(e);
    }
    router.push({name: "admin"});
}
</script>

<template>
    <NationalityForm :confirm-name="'Add'" @submitForm="onSubmit($event)" @cancel="onCancel()"></NationalityForm>
</template>