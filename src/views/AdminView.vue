<script setup>
import AdminLayout from '@/components/layout/AdminLayou.vue';
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
            <button @click="scrollTo(club)">Clubs</button>
            <button @click="scrollTo(nationality)">Nationalities</button>
            <button @click="scrollTo(player)">Players</button>
            <button @click="scrollTo(fixture)">Fixtures</button>
        </div>
        <section ref="club">
            <AdminClub></AdminClub>
        </section>
        <section ref="nationality">
            <AdminNationality></AdminNationality>
        </section>
        <section ref="player">
            <AdminPlayer></AdminPlayer>
        </section>
        <div ref="fixture">
            <AdminFixture></AdminFixture>
        </div>
    </AdminLayout>
</template>
