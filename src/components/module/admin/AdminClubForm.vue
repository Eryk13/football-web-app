<script setup>
import { onMounted, ref } from 'vue';

const nationalities = ref([]);
const players = ref([]);
const player = ref({nationality: 'Nationality'});

onMounted(async() => {
    await loadNationalities();
})

const loadNationalities = async() => {
    try{
        const req = await fetch(import.meta.env.VITE_FOOTBALL_API + '/nationalities', { headers: {'Accept': 'application/json'}});
        nationalities.value = await req.json();
    }catch(e) {
        console.error(e);
    }
}

const addPlayer = () => {
    players.value.push(player.value);
    player.value = {};
}
</script>

<template>
    <div class="container">
        <div class="column club-form">
            <h1>Club</h1>
            <form>
                <input placeholder="Name"/>
                <input placeholder="Stadium"/>
                <div v-if="players.length > 0">
                    <h3>Players</h3>
                    <ul>
                        <li v-for="item in players">{{ item.name }}</li>
                    </ul>
                </div>
                <div class="actions">
                    <button type="submit">Create</button>
                    <button type="button">Cancel</button>
                </div>
            </form>
        </div>
        <div class="column player-form">
            <h1>Player</h1>
            <form @submit.prevent="addPlayer">
                <input placeholder="Name" v-model="player.name"/>
                <input type="number" placeholder="Number" v-model="player.number"/>
                <select v-model="player.nationality">
                    <option>Nationality</option>
                    <option v-for="nationality in nationalities" :value="nationality.name">{{ nationality.name }}</option>
                </select>
                <div class="actions">
                    <button type="submit">Add</button>
                    <button type="button">Cancel</button>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>
h1{
    margin-bottom: 0;
}
    .container{
        display: flex;
        gap: 1rem;
        margin-top: 2rem;
    }
    .club-form{
        min-width: 70%;
        border: solid 1px black;
        padding: 1em;
    }
    .player-form{
        min-width: 30%;
        border: solid 1px black;
        padding: 1em;
        position: sticky;
        align-self: flex-start

    }
    form{
        margin-top: 1rem;
        display: flex;
        flex-direction: column;
    }
    input{
        padding: .5em 1em;
        margin: 1rem 0;
    }
    select{
        padding: .5em 1em;
        margin: 1rem 0;
    }
    .actions{
        margin-top: 1rem;
        display: flex;
        gap: 1rem;
    }
    .column{
        display: flex;
        flex-direction: column;
    }
</style>