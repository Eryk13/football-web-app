<script setup>
import AdminLayout from '@/components/layout/AdminLayout.vue';
import FixtureForm from '@/components/module/fixture/FixtureForm.vue';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import moment from 'moment';

const route = useRoute();
const router = useRouter();
const fixture = ref({});

const loadFixture = async(id) => {
    try{
        const req = await fetch(import.meta.env.VITE_FOOTBALL_API + "/fixtures/" + id, { headers: { "Accept": "application/json"}});
        fixture.value = await req.json();
        fixture.value.date = moment(fixture.value.date).format("YYYY-MM-DDThh:mm")
    }
    catch(e){
        console.error(e);
    }
} 

onMounted(async () => {
    await loadFixture(route.params.id);
})

const onSubmit = async (fixture) => {
    try{
        await fetch(import.meta.env.VITE_FOOTBALL_API + "/fixtures/" + fixture.id, {
            headers: {
                "Content-Type": "application/json"
            },
            method: "PUT",
            body: JSON.stringify(fixture)
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
        <FixtureForm :confirm-name="'Edit'" :fixture="fixture" @submitForm="onSubmit($event)" @cancel="onCancel()"></FixtureForm>
    </AdminLayout>
</template>