<template>
    <div class="page">
        <div class="content-container">
            <img src="../assets/images/5.jpg" class="tx">
            <span class="name">福福</span>
            <div class="btn-group" role="group" aria-label="...">
                <button type="button" class="btn btn-default">修改密码</button>
                <button type="button" class="btn btn-default">退出登录</button>
            </div>
            <div class="btn-group" role="group" aria-label="..."><a href="https://github.com/fufu333/-4.13.git">点击查看Github仓库</a></div>
        </div>
    </div>
</template>

<script setup>

</script>

<style>
.page {

    flex-direction: column;
    /* 设置子元素垂直排列 */
    align-items: center;
    /* 垂直居中内容 */
    justify-content: center;
    /* 水平居中内容 */

}

.content-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

.tx {
    
    width: 200px;
    height: 200px;
    border-radius: 50%;
    height: auto;
    /* 图片高度自适应 */
    margin-bottom: 30px;
    /* 图片与文本之间的间距 */
}

.name {
    padding-bottom: 20px;
    font-size: 24px;
}

.btn-group {
    display: flex;
    /* 按钮组内部使用flex布局 */
    justify-content: center;
    /* 按钮水平居中 */
}

.btn-default {
    margin-right: 10px;
    /* 按钮之间的间距 */
}

/* 移除最后一个按钮的右边距 */
.btn-group .btn-default:last-child {
    margin-right: 0;
}
</style>