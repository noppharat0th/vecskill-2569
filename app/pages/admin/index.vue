<template>
    <input type="text" placeholder="fname" v-model="form.fname">
    <input type="text" placeholder="lname" v-model="form.lname">
    <input type="text" placeholder="username" v-model="form.username">
    <input type="text" placeholder="password" v-model="form.password">
    <input type="text"  placeholder="confirm password" v-model="form.confirm_password">
    <select v-model="form.role">
        <option value="evaluatee">evaluatee</option>
        <option value=""evaluator>evaluator</option>
    </select>
</template>

<script setup lang="ts">
import { useUserService } from '~/composables/service/users';

const { createUser, editUser, fetchUser, resetPassword, form } = useUserService()
</script>