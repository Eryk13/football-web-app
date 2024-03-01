<script setup>
import { computed, onMounted, ref } from 'vue';


const props = defineProps(['fixture', 'confirmName']);
const emit = defineEmits(['submitForm', 'cancel']);

const clubs = ref([]);

onMounted(async() => {
    await loadClubs();
})

const fixture = computed(() => {
    return props.fixture || { homeClub: {name: "Home"}, awayClub: {name: "Away"}};
})

const errors = ref({});

const onSubmit = () => {
    errors.value = {};
    if(fixture.value.homeClub.name === "Home" || fixture.value.homeClub === undefined) {
        errors.value.homeClub = "Home club is required";
    }
    if(fixture.value.awayClub.name === "Away" || fixture.value.awayClub === undefined) {
        errors.value.awayClub = "Away club is required";
    }
    if(Object.keys(errors.value).length === 0) {
        fixture.value.homeClub = "/api/clubs/" + fixture.value.homeClub.id;
        fixture.value.awayClub = "/api/clubs/" + fixture.value.awayClub.id,

        emit('submitForm', fixture.value);
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

</script>

<template>
    <form class="form" @submit.prevent="onSubmit()">
        <div class="form__group">
            <select v-model="fixture.homeClub">
                <option :value="{name:'Home'}">Home</option>
                <option v-for="club in clubs" :value="{id: club.id, name: club.name}">{{ club.name }}</option>
            </select>
            <p class="form__error-msg" v-if="errors.homeclub">{{ errors.homeClub }}</p>
        </div>
        <div class="form__group">
            <select v-model="fixture.awayClub">
                <option :value="{name: 'Away'}">Away</option>
                <option v-for="club in clubs" :value="{id: club.id, name: club.name}">{{ club.name }}</option>
            </select>
            <p class="form__error-msg" v-if="errors.awayClub">{{ errors.awayClub }}</p>
        </div>
        <div class="form__group">
            <input type="datetime-local" v-model="fixture.date"/>
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