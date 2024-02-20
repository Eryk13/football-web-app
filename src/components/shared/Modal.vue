<script setup>
const props = defineProps(['open'])
const emit = defineEmits(['close', 'confirm'])
</script>

<template>
    <Teleport to="body">
        <div class="backdrop" v-if="open">
            <div class="modal">
                <slot></slot>
                <button @click="emit('confirm')">Confirm</button>
                <button @click="emit('close')">Close</button>
            </div>
        </div>
    </Teleport>
</template>

<style scoped>
    .modal {
        position: fixed;
        z-index: 999;
        top: 20%;
        min-width: 30%;
        padding: 1em;
        border: solid 1px black;
        background-color: white;
    }

    .backdrop{
        height: 100vh;
        width: 100vw;
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0,0,0,0.8);
        display: flex;
        justify-content: center;
    }

    .modal button:nth-child(n+3){
        margin-left: 1rem;
    }
</style>