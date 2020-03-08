<template>
    <div id="app" a="1" b="2" d="123">
        <router-view />
    </div>
</template>

<script>
export default {
    created() {
        const a = '1'
        console.log(a)
        console.log(process.env)
    }
}
</script>

<style>
body {
    font-size: 16px;
    background-color: #f8f8f8;
    -webkit-font-smoothing: antialiased;
}
</style>
