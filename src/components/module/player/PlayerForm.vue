<script setup>
import { computed, onMounted, ref } from 'vue';


const props = defineProps(['player', 'confirmName']);
const emit = defineEmits(['submitForm', 'cancel']);

const nationalities = ref([]);
const clubs = ref([]);

onMounted(async() => {
    await loadClubs();
    await loadNationalities();
})

const player = computed(() => {
    return props.player || { club: {name: "Club"}, nationality: {name: "Nationality"}};
})

const errors = ref({});

const onSubmit = () => {
    errors.value = {};
    if(player.value.name?.trim() === "" || player.value.name === undefined) {
        errors.value.name = "Name is required";
    }
    if(player.value.number === undefined) {
        errors.value.number = "Number is required";
    }
    if(player.value.nationality.name === "Nationality" || player.value.nationality === undefined) {
        errors.value.nationality = "Nationality is required";
    }
    if(player.value.club.name === "Club" || player.value.club === undefined) {
        errors.value.club = "Club is required";
    }
    if(Object.keys(errors.value).length === 0) {
        player.value.club = "/api/clubs/" + player.value.club.id;
        player.value.nationality = "/api/nationalities/" + player.value.nationality.id,

        emit('submitForm', player.value);
    }
}

const loadClubs = async() => {
    try{
        const req = await fetch(import.meta.env.VITE_FOOTBALL_API + "/clubs", {
            headers: {
                "Accept": "application/json"
            }
        });
        clubs.value = await req.json();
    }
    catch(e) {
        console.error(e);
    }
}

const loadNationalities = async() => {
    try{
        const req = await fetch(import.meta.env.VITE_FOOTBALL_API + "/nationalities", {
            headers: {
                "Accept": "application/json"
            }
        });
        nationalities.value = await req.json();
    }
    catch(e) {
        console.error(e);
    }
}
</script>

<template>
    <form class="form" @submit.prevent="onSubmit()">
        <div class="form__group">
            <input placeholder="Name" v-model="player.name"/>
            <p class="form__error-msg" v-if="errors.name">{{ errors.name }}</p>
        </div>
        <div class="form__group">
            <input type="number" placeholder="Number" v-model="player.number"/>
            <p class="form__error-msg" v-if="errors.number">{{ errors.number }}</p>
        </div>
        <div class="form_row">
            <div class="form__group">
                <select v-model="player.club">
                    <option :value="{name:'Club'}">Club</option>
                    <option v-for="club in clubs" :value="{id: club.id, name: club.name}">{{ club.name }}</option>
                </select>
                <p class="form__error-msg" v-if="errors.club">{{ errors.club }}</p>
            </div>
            <div class="form__group">
                <select v-model="player.nationality">
                    <option :value="{name: 'Nationality'}">Nationality</option>
                    <option v-for="nationality in nationalities" :value="{id: nationality.id, name: nationality.name}">{{ nationality.name }}</option>
                </select>
                <p class="form__error-msg" v-if="errors.nationality">{{ errors.nationality }}</p>
            </div>
        </div>
        <div class="form__actions">
            <button class="primary-btn">{{ props.confirmName || "Submit" }}</button>
            <button class="primary-btn" @click="emit('cancel')">Cancel</button>
        </div>
    </form>
</template>

<style scoped>
</style>