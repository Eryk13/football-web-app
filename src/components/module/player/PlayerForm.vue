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
    return props.player || { club: "Club", nationality: "Nationality"};
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
    if(player.value.nationality === "Nationality" || player.value.nationality === undefined) {
        errors.value.nationality = "Nationality is required";
    }
    if(player.value.club === "Club" || player.value.club === undefined) {
        errors.value.club = "Club is required";
    }
    if(Object.keys(errors.value).length === 0) {
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
        <div class="form__group">
            <select v-model="player.club">
                <option>Club</option>
                <option v-for="club in clubs" :value="club">{{ club.name }}</option>
            </select>
            <p class="form__error-msg" v-if="errors.club">{{ errors.club }}</p>
        </div>
        <div class="form__group">
            <select v-model="player.nationality">
                <option>Nationality</option>
                <option v-for="nationality in nationalities" :value="nationality">{{ nationality.name }}</option>
            </select>
            <p class="form__error-msg" v-if="errors.nationality">{{ errors.nationality }}</p>
        </div>
        <div class="form__actions">
            <button>{{ props.confirmName || "Submit" }}</button>
            <button @click="emit('cancel')">Cancel</button>
        </div>
    </form>
</template>

<style scoped>
    .form{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .form__group{
        width: 100%;
    }

    .form input{
        padding: 1em;
        width: 100%;
        box-sizing: border-box;
    }

    button:nth-child(n+2){
        margin-left: 1rem;
    }

    .form__error-msg{
        color: red;
    }

    select{
        padding: 1em;
    }
</style>