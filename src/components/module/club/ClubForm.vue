<script setup>
import { computed, onMounted, ref, toRef } from 'vue';


const props = defineProps(['club', 'confirmName']);
const emit = defineEmits(['submitForm', 'cancel']);

const club = computed(() => {
    return props.club || {};
})
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
            <button class="primary-btn">{{ props.confirmName || "Submit" }}</button>
            <button class="primary-btn" @click="emit('cancel')">Cancel</button>
        </div>
    </form>
</template>

<style scoped>
</style>