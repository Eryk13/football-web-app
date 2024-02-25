<script setup>
import AdminLayout from '@/components/layout/AdminLayou.vue';
import AdminClub from '@/components/module/admin/AdminClub.vue';
import AdminNationality from '@/components/module/admin/AdminNationality.vue';
import AdminPlayer from '@/components/module/admin/AdminPlayer.vue';

</script>

<template>
    <AdminLayout>
        <AdminClub></AdminClub>
        <AdminNationality></AdminNationality>
        <AdminPlayer></AdminPlayer>
    </AdminLayout>
</template>
