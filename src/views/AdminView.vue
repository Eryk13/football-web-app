<script setup>
import MainLayout from '@/components/layout/MainLayout.vue';
import Club from '@/components/module/admin/Club.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
    <MainLayout>
        <div class="section-header">
            <h1>Admin</h1>
            <button class="btn" @click="router.push({name: 'AdminClubCreate'})">Add club</button>
        </div>
        <Club></Club>
    </MainLayout>
</template>