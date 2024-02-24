<script setup>
import { ref } from 'vue';


const props = defineProps(['club', 'confirmName']);
const emit = defineEmits(['submitForm', 'cancel']);

const club = ref(props.value?.club || {});
const errors = ref({});

const onSubmit = () => {
    errors.value = {};
    if(club.value.name?.trim() === "" || club.value.name === undefined) {
        errors.value.name = "Name is required";
    }
    if(club.value.stadiumName?.trim() === "" || club.value.stadiumName === undefined) {
        errors.value.stadium = "Stadium name is required";
    }
    if(Object.keys(errors.value).length === 0) {
        emit('submitForm', club.value);
    }
}
</script>

<template>
    <form class="form" @submit.prevent="onSubmit()">
        <div class="form__group">
            <input placeholder="Name" v-model="club.name"/>
            <p class="form__error-msg" v-if="errors.name">{{ errors.name }}</p>
        </div>
        <div class="form__group">
            <input placeholder="Stadium" v-model="club.stadiumName"/>
            <p class="form__error-msg" v-if="errors.stadium">{{ errors.stadium }}</p>
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
</style>