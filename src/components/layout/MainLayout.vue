<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
    <header>
        <RouterLink id="logo" to="/">Football</RouterLink>
        <nav>
            <RouterLink class="link" :to="{ name: 'home' }">Home</RouterLink>
        </nav>
    </header>
    <main>
        <slot></slot>
    </main>
</template>

<style scoped>
main {
    margin: 0 10rem;
}

header {
    border-bottom: solid 1px black;
    padding: 1em 10em;
    display: flex;
    background-color: var(--color-primary);
}

#logo {
    font-size: 2rem;
    font-weight: 900;
    font-family: "Anta", sans-serif;
    margin-right: 2rem;
}

nav {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.link {
    font-family: "Anta", sans-serif;
    font-weight: bold;
    font-size: 1.2rem;
}

.link:hover {
    color: white;
}
</style>
