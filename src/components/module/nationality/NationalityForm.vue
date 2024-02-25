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