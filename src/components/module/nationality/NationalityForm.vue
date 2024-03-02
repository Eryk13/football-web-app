<script setup>
import { computed, ref } from 'vue';


const props = defineProps(['nationality', 'confirmName']);
const emit = defineEmits(['submitForm', 'cancel']);

const nationality = computed(() => {
    return props.nationality || {};
})
const errors = ref({});

const onSubmit = () => {
    errors.value = {};
    if(nationality.value.name?.trim() === "" || nationality.value.name === undefined) {
        errors.value.name = "Name is required";
    }
    if(Object.keys(errors.value).length === 0) {
        emit('submitForm', nationality.value);
    }
}
</script>

<template>
    <form class="form" @submit.prevent="onSubmit()">
        <div class="form__group">
            <input placeholder="Name" v-model="nationality.name"/>
            <p class="form__error-msg" v-if="errors.name">{{ errors.name }}</p>
        </div>
        <div class="form__actions">
            <button class="primary-btn">{{ props.confirmName || "Submit" }}</button>
            <button class="primary-btn" @click="emit('cancel')">Cancel</button>
        </div>
    </form>
</template>

<style scoped>
</style>