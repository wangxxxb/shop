<template>
    <a class="banner" href="#">
        <img src="../assets/img/bannner.png" />
    </a>
</template>

<script>
export default {
    name: 'home-banner'
}
</script>
<style lang="less" scoped>
.banner {
    display: block;
    padding: 15px 15px 0;
    border-radius: 15px;
    overflow: hidden;
    img {
        width: 100%;
        height: 100%;
    }
}
</style>
