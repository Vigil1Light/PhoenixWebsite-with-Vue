<script setup>
import { ref } from 'vue'

const navbarList = ref([
    {
        title: '首页',
        href: '#'
    },
    {
        title: '下载',
        href: '#'
    },
    {
        title: '电影',
        href: '#'
    },
    {
        title: '挖矿',
        href: '#'
    },
    {
        title: '团队',
        href: '#'
    },
    {
        title: '博客',
        href: '#'
    },
    {
        title: '白皮书',
        href: '#'
    },
    {
        title: '帮助',
        href: '#'
    },
])

</script>

<template>
    <div class="flex flex-row justify-between 2xl:px-[16%] xl:px-[12%] px-[2%] items-center bg-white text-themeGreyText1 h-[60px] shadow-normal">
        <div class="lg:flex hidden items-center">
            <img src='../../assets/logo.svg' alt="no image" class="px-7"/>
            <button v-for="(item, index) in navbarList" :key="index" class="px-7">
                {{ item.title }}
            </button>
        </div>
        <div class="flex items-center lg:justify-center justify-end lg:w-fit w-full">
            <button class="bg-gradient-to-r from-[#F02148] to-[#FC4E2B] h-6 text-white px-[22px] rounded-[4px]">登录</button>
            <!-- <button ></button> -->
            <select class="px-2 text-themeGreyText1 outline-none">
                <option>中文</option>
            </select>

        </div>
    </div>
</template>

<style scoped>

</style>
