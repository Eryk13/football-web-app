<script setup>
import AdminLayout from '@/components/layout/AdminLayou.vue';
import NationalityForm from '@/components/module/nationality/NationalityForm.vue';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';


const route = useRoute();
const router = useRouter();
const nationality = ref({});

const loadNationality = async(id) => {
    try{
        const req = await fetch(import.meta.env.VITE_FOOTBALL_API + "/nationalities/" + id, { headers: { "Accept": "application/json"}});
        nationality.value = await req.json();
    }
    catch(e){
        console.error(e);
    }
} 

onMounted(async () => {
    await loadNationality(route.params.id);
})

const onSubmit = async (nationality) => {
    try{
        await fetch(import.meta.env.VITE_FOOTBALL_API + "/nationalities/" + nationality.id, {
            headers: {
                "Content-Type": "application/json"
            },
            method: "PUT",
            body: JSON.stringify(nationality)
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
        <NationalityForm :confirm-name="'Edit'" :nationality="nationality" @submitForm="onSubmit($event)" @cancel="onCancel()"></NationalityForm>
    </AdminLayout>
</template>