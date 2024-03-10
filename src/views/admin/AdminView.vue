<script setup>
import AdminLayout from '@/components/layout/AdminLayout.vue';
import AdminClub from '@/components/module/admin/AdminClub.vue';
import AdminFixture from '@/components/module/admin/AdminFixture.vue';
import AdminNationality from '@/components/module/admin/AdminNationality.vue';
import AdminPlayer from '@/components/module/admin/AdminPlayer.vue';
import { ref } from 'vue';

const club = ref(null);
const nationality = ref(null);
const player = ref(null);
const fixture = ref(null);

const scrollTo = (el) => {
    if(el) {
        el.scrollIntoView({behavior: "smooth"});
    }
};
</script>

<template>
    <AdminLayout>
        <div>
            <nav>
                <a class="link" @click="scrollTo(club)">Clubs</a>
                <a class="link" @click="scrollTo(nationality)">Nationalities</a>
                <a class="link" @click="scrollTo(player)">Players</a>
                <a class="link" @click="scrollTo(fixture)">Fixtures</a>
            </nav>
        </div>
        <section class="table-section" ref="club">
            <AdminClub></AdminClub>
        </section>
        <section class="table-section" ref="nationality">
            <AdminNationality></AdminNationality>
        </section>
        <section class="table-section" ref="player">
            <AdminPlayer></AdminPlayer>
        </section>
        <section class="table-section" ref="fixture">
            <AdminFixture></AdminFixture>
        </section>
    </AdminLayout>
</template>

<style scoped>
    nav{
        border-bottom: solid 1px black;
        padding: 1em 4em;
        display: flex;
        justify-content: space-between;
        background: var(--color-base);
    }
    div{
        top: 0;
        position: sticky;
    }
</style>
