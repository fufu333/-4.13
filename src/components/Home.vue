<template>
  <div class="carousel-container">  
    <div class="carousel-slide" :style="{ backgroundImage: `url(${currentImage})`, transition: 'transform 0.5s ease' }"  
      @click="goToVideo"></div>  
    <button @click="prevImage" :disabled="currentIndex === 0" class="carousel-arrow carousel-arrow-prev">  
      <i class="iconfont icon-xiangzuojiantou"></i>  
    </button>  
    <button @click="nextImage" :disabled="currentIndex === onlineImages.length - 1"  
      class="carousel-arrow carousel-arrow-next">  
      <i class="iconfont icon-xiangyoujiantou"></i>  
    </button>  
  </div> 

  <div class="container">
    <div class="text">正在热播</div>
    <div class="row">
      <div class="col-lg-1">
        <div class="nail">
          <img src="https://www.codelover.club/files/stutasks/userID_884/currNo_29/%E7%85%A7%E7%89%87/FsxoqiO6YXKU6OUY2nyrdJSvP_7H.jpg" class="qq" @click="goToVideo" alt="...">
          <div class="caption">
            <span class="aa">重启之极海听雷</span>
            <p class="ss">朱一龙组团破妖雷迷案</p>
            <div class="zz">
              <i class="iconfont icon-gengduo"></i>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-1">
        <div class="nail">
          <img src="https://www.codelover.club/files/stutasks/userID_884/currNo_29/%E7%85%A7%E7%89%87/FsxoqiO6YXKU6OUY2nyrdJSvP_7H.jpg" class="qq" @click="goToVideo" alt="...">
          <div class="caption">
            <span class="aa">重启之极海听雷</span>
            <p class="ss">朱一龙组团破妖雷迷案</p>
            <div class="zz">
              <i class="iconfont icon-gengduo"></i>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-1">
        <div class="nail">
          <img src="https://www.codelover.club/files/stutasks/userID_884/currNo_29/%E7%85%A7%E7%89%87/FsxoqiO6YXKU6OUY2nyrdJSvP_7H.jpg" class="qq" @click="goToVideo" alt="...">
          <div class="caption">
            <span class="aa">重启之极海听雷</span>
            <p class="ss">朱一龙组团破妖雷迷案</p>
            <div class="zz">
              <i class="iconfont icon-gengduo"></i>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-1">
        <div class="nail">
          <img src="https://www.codelover.club/files/stutasks/userID_884/currNo_29/%E7%85%A7%E7%89%87/FsxoqiO6YXKU6OUY2nyrdJSvP_7H.jpg" class="qq" @click="goToVideo" alt="...">
          <div class="caption">
            <span class="aa">重启之极海听雷</span>
            <p class="ss">朱一龙组团破妖雷迷案</p>
            <div class="zz">
              <i class="iconfont icon-gengduo"></i>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-1">
        <div class="nail">
          <img src="https://www.codelover.club/files/stutasks/userID_884/currNo_29/%E7%85%A7%E7%89%87/FsxoqiO6YXKU6OUY2nyrdJSvP_7H.jpg" class="qq" @click="goToVideo" alt="...">
          <div class="caption">
            <span class="aa">重启之极海听雷</span>
            <p class="ss">朱一龙组团破妖雷迷案</p>
            <div class="zz">
              <i class="iconfont icon-gengduo"></i>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-1">
        <div class="nail">
          <img src="https://www.codelover.club/files/stutasks/userID_884/currNo_29/%E7%85%A7%E7%89%87/FsxoqiO6YXKU6OUY2nyrdJSvP_7H.jpg" class="qq" @click="goToVideo" alt="...">
          <div class="caption">
            <span class="aa">重启之极海听雷</span>
            <p class="ss">朱一龙组团破妖雷迷案</p>
            <div class="zz">
              <i class="iconfont icon-gengduo"></i>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-1">
        <div class="nail">
          <img src="https://www.codelover.club/files/stutasks/userID_884/currNo_29/%E7%85%A7%E7%89%87/FsxoqiO6YXKU6OUY2nyrdJSvP_7H.jpg" class="qq" @click="goToVideo" alt="...">
          <div class="caption">
            <span class="aa">重启之极海听雷</span>
            <p class="ss">朱一龙组团破妖雷迷案</p>
            <div class="zz">
              <i class="iconfont icon-gengduo"></i>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-1">
        <div class="nail">
          <img src="https://www.codelover.club/files/stutasks/userID_884/currNo_29/%E7%85%A7%E7%89%87/FsxoqiO6YXKU6OUY2nyrdJSvP_7H.jpg" class="qq" @click="goToVideo" alt="...">
          <div class="caption">
            <span class="aa">重启之极海听雷</span>
            <p class="ss">朱一龙组团破妖雷迷案</p>
            <div class="zz">
              <i class="iconfont icon-gengduo"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';

  
export default {  
  name: 'Home',  
  setup() {  
    const onlineImages = [  
      'https://www.codelover.club/files/stutasks/userID_884/currNo_29/%E7%85%A7%E7%89%87/FiDJ6JytU-56Y2aGX_M4Cl5I9ZXK.jpg',  
      'https://www.codelover.club/files/stutasks/userID_884/currNo_29/%E7%85%A7%E7%89%87/FiJexGq40FDL66UYgzKqwWTVY44I.jpg',
      'https://www.codelover.club/files/stutasks/userID_884/currNo_29/%E7%85%A7%E7%89%87/FhTdObfhl_AjLcQZp_dbe9cZGj3f.jpg', 
    ];  
    const currentIndex = ref(0);  
    const currentImage = computed(() => onlineImages[currentIndex.value]);  
    const router = useRouter();  
  
    const nextImage = () => {  
      currentIndex.value = (currentIndex.value + 1) % onlineImages.length;  
    };  
  
    const prevImage = () => {  
      currentIndex.value = (currentIndex.value - 1 + onlineImages.length) % onlineImages.length;  
    };  
  
    const goToVideo = () => {  
      router.push('/Bofang');  
    };  
  
    const startAutoPlay = () => {  
      const interval = 2000; // 图片切换间隔  
      const intervalId = setInterval(() => {  
        nextImage();  
      }, interval);  
  
      // 在组件卸载时清除间隔  
      onBeforeUnmount(() => {  
        clearInterval(intervalId);  
      });  
    };  
  
    onMounted(() => {  
      startAutoPlay();  
    });  
  
    return {  
      currentImage,  
      currentIndex,  
      nextImage,  
      prevImage,  
      goToVideo,
      onlineImages,  
    };  
  },  
};  
</script>

<style>
.carousel-container {

  position: relative;
  width: 100%;
  height: 230px;
  overflow: hidden;

}

.carousel-slide {
  position: absolute;
  width: 375px;
  height: 220px;
  background-size: cover;
  background-position: center;
  transition: transform 0.5s ease, left 0.5s ease;
  cursor: pointer;
}

.carousel-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 999;
  background-color: rgba(255, 255, 255, 0.118);
  border: none;
  outline: none;
  cursor: pointer;

}

.carousel-arrow-prev {
  left: 3px;
  height: 50px;
  width: 30px;
}

.carousel-arrow-next {
  right: 5px;
  height: 50px;
  width: 30px;
}

.iconfont {
  font-size: 24px;
  color: #c3c3c3;
  font-weight: bold;
}

.text {
  /* font-weight: bold; */
  font-size: 16px;
  padding-top: 3px;
  padding-left: 20px;
}

.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: stretch;

}

.nail {
  width: 100%;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.nail img {
  width: 100%;
  height: auto;
  display: block;
}

.nail:hover {
  transform: scale(1.02);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding-bottom: 5px;
}

.col-lg-1 {
  width: 170px;
  height: 115px;
  padding-left: 12px;
  padding-top: 10px;
  padding-bottom: 20px;
  border-radius: 20px;
}

.qq {
  width: 170px;
  height: 100px;
  border-radius: 10px;
}

.aa {
  font-size: 14px;
  padding-left: 5px;
}

.ss {
  font-size: 10px;
  margin-top: 2px;
  padding-left: 5px;
  color: rgb(160, 160, 160);
}

.zz {
  margin-top: -35px;
  padding-left: 148px;
}
</style>