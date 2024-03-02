<template>
    <header>
        <nav id="top-nav">
            <a class="anta-regular logo">Admin panel</a>
        </nav>
    </header>
    <main>
        <slot></slot>
    </main>
</template>

<style setup>
    #top-nav{
        border-bottom: solid 1px black;
        display: flex;
        justify-content: center;
    }
</style>