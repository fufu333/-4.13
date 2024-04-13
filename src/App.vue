<template>
  <div class="bigbox-container">
    <div class="bigbox">
      <div id="app" class="navbar-container">
        <nav class="nav-bar fixed-navbar">
          <router-link to="/SheZhi" class="navbar-shezhi-icon" @click="showShezhi = !showShezhi">
            <i class="iconfont icon-shezhi"></i>
          </router-link>
          <router-link to="/" class="nav-item" :class="{ active: isActive('/') }">推荐</router-link>
          <router-link to="/movies" class="nav-item" :class="{ active: isActive('/movies') }">频道</router-link>
          <router-link to="/profile" class="nav-item" :class="{ active: isActive('/profile') }">我的</router-link>
          <router-link to="/Search" class="navbar-search-icon" @click="showSearch = !showSearch">
            <i class="iconfont icon-sousuo"></i>
          </router-link>
        </nav>

      </div>
      <div class="scrollable-content">
        <div class="extra-content">
          <router-view /> <!-- 路由出口 -->
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',


  data() {
    return {
      currentRoute: null,
    };
  },
  methods: {
    isActive(path) {
      return this.$route.path === path;
    },
  },
  created() {
    this.$router.beforeEach((to, from, next) => {
      this.currentRoute = to.path;
      next();
    });
  },
});  
</script>

<style scoped>
.bigbox-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  margin: 0;
  overflow: hidden;
}

.bigbox {
  width: 375px;
  height: 667px;
  border: 13px solid rgb(42, 40, 40);
  border-radius: 40px;
  background-color: #f5f5f5;
  overflow: hidden;
  position: relative;
}

#app {
  width: 100%;

}

.scrollable-content {
  background-color: #ffffff;
  height: calc(100% - 50px);
  /* 高度设置为bigbox减去导航条的高度 */
  overflow-y: scroll;
  /* 允许垂直滚动 */
  scrollbar-width: none;
  /* Firefox */
  -ms-overflow-style: none;

  /* IE and Edge */
  &::-webkit-scrollbar {
    /* Chrome, Safari, Opera */
    display: none;
  }
}

.scrollable-content::-webkit-scrollbar {
  /* 确保所有webkit浏览器都不显示滚动条 */
  display: none;
}

/* 额外的样式用于隐藏滚动条，确保兼容所有浏览器 */
.scrollable-content {
  &::before {
    content: "";
    display: block;
    margin-bottom: -calc(50px);
    /* 根据滚动条宽度调整 */
  }
}

.navbar-container {
  width: 100%;
  position: sticky;
  z-index: 999;

}

.nav-bar {
  display: flex;
  align-items: center;
  height: 50px;
  background-color: #fff;
  overflow: hidden;
}

.nav-bar>* {
  margin-right: 48px;
}

.nav-bar>*:last-child {
  margin-right: 0;
}

.fixed-navbar {
  position: sticky;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 30px 30px 0 0;
}

.nav-item {
  color: black;
  text-decoration: none;
  font-weight: bold;
  position: relative;
}

.nav-item.active:after {
  content: '';
  position: absolute;
  width: 70%;
  height: 3px;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  background-color: yellow;
}

.navbar-search-icon,
.navbar-shezhi-icon {
  text-decoration: none;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.navbar-search-icon i,
.navbar-shezhi-icon i {
  font-size: 1.2em;
}

.navbar-search-icon i {
  color: red;
}

.navbar-shezhi-icon i {
  color: rgb(0, 0, 0);
  padding-left: 30px;
}
</style>
