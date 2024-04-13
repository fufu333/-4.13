<template>  
    <div class="movie-list">  
        <div class="row">
            <div class="col-xs-6">
                <a href="#"@click.prevent="goToVideo" class="thumbnail">
                    <img src="https://codelover.club/coursefiles/images/film/创意.jpeg
"  alt="...">
                    <div class="overlay">  
                        <p class="overlay-text">创意</p>  
                    </div>
                </a>
            </div>
            <div class="col-xs-6">
                <a href="#"@click.prevent="goToVideo" class="thumbnail" >
                    <img src="https://codelover.club/coursefiles/images/film/剧情.jpeg
" alt="..." >
                    <div class="overlay">  
                        <p class="overlay-text">剧情</p>  
                    </div>
                </a>
            </div>
            <div class="col-xs-6">
                <a href="#"@click.prevent="goToVideo" class="thumbnail">
                    <img src="https://codelover.club/coursefiles/images/film/动画.jpeg" alt="...">
                    <div class="overlay">  
                        <p class="overlay-text">动画</p>  
                    </div>
                </a>
            </div>
            <div class="col-xs-6">
                <a href="#"@click.prevent="goToVideo" class="thumbnail">
                    <img src="https://codelover.club/coursefiles/images/film/励志.jpeg
" alt="...">
                    <div class="overlay">  
                        <p class="overlay-text">励志</p>  
                    </div>
                </a>
            </div>
            <div class="col-xs-6">
                <a href="#"@click.prevent="goToVideo" class="thumbnail">
                    <img src="https://codelover.club/coursefiles/images/film/实验.jpeg" alt="...">
                    <div class="overlay">  
                        <p class="overlay-text">实验</p>  
                    </div>
                </a>
            </div>
            <div class="col-xs-6">
                <a href="#" @click.prevent="goToVideo"class="thumbnail">
                    <img src="https://codelover.club/coursefiles/images/film/广告.jpeg
" alt="...">
                    <div class="overlay">  
                        <p class="overlay-text">广告</p>  
                    </div>
                </a>
            </div>
            <div class="col-xs-6">
                <a href="#"@click.prevent="goToVideo" class="thumbnail">
                    <img src="https://codelover.club/coursefiles/images/film/搞笑.jpeg" alt="...">
                    <div class="overlay">  
                        <p class="overlay-text">搞笑</p>  
                    </div>
                </a>
            </div>
            <div class="col-xs-6">
                <a href="#"@click.prevent="goToVideo" class="thumbnail">
                    <img src="https://codelover.club/coursefiles/images/film/旅行.jpeg" alt="...">
                    <div class="overlay">  
                        <p class="overlay-text">旅游</p>  
                    </div>
                </a>
            </div>
            <div class="col-xs-6">
                <a href="#"@click.prevent="goToVideo" class="thumbnail">
                    <img src="https://codelover.club/coursefiles/images/film/时尚.jpeg
" alt="...">
                    <div class="overlay">  
                        <p class="overlay-text">时尚</p>  
                    </div>
                </a>
            </div>
            <div class="col-xs-6">
                <a href="#"@click.prevent="goToVideo" class="thumbnail">
                    <img src="https://codelover.club/coursefiles/images/film/汽车.jpeg" alt="...">
                    <div class="overlay">  
                        <p class="overlay-text">汽车</p>  
                    </div>
                </a>
            </div>
            <div class="col-xs-6">
                <a href="#"@click.prevent="goToVideo" class="thumbnail">
                    <img src="https://codelover.club/coursefiles/images/film/混剪.jpeg
" alt="...">
                    <div class="overlay">  
                        <p class="overlay-text">混剪</p>  
                    </div>
                </a>
            </div>
            <div class="col-xs-6">
                <a href="#"@click.prevent="goToVideo" class="thumbnail">
                    <img src="https://codelover.club/coursefiles/images/film/游戏.jpeg
" alt="...">
                    <div class="overlay">  
                        <p class="overlay-text">游戏</p>  
                    </div>
                </a>
            </div>
            <div class="col-xs-6">
                <a href="#"@click.prevent="goToVideo" class="thumbnail">
                    <img src="https://codelover.club/coursefiles/images/film/爱情.jpeg
" alt="...">
                    <div class="overlay">  
                        <p class="overlay-text">爱情</p>  
                    </div>
                </a>
            </div>
            <div class="col-xs-6">
                <a href="#"@click.prevent="goToVideo" class="thumbnail">
                    <img src="https://codelover.club/coursefiles/images/film/生活.jpeg
" alt="...">
                    <div class="overlay">  
                        <p class="overlay-text">生活</p>  
                    </div>
                </a>
            </div>
            <div class="col-xs-6">
                <a href="#"@click.prevent="goToVideo" class="thumbnail">
                    <img src="https://codelover.club/coursefiles/images/film/科幻.jpeg
" alt="...">
                    <div class="overlay">  
                        <p class="overlay-text">科幻</p>  
                    </div>
                </a>
            </div>
            <div class="col-xs-6">
                <a href="#"@click.prevent="goToVideo" class="thumbnail">
                    <img src="https://codelover.club/coursefiles/images/film/纪录.jpeg" alt="...">
                    <div class="overlay">  
                        <p class="overlay-text">记录</p>  
                    </div>
                </a>
            </div>
            <div class="col-xs-6">
                <a href="#"@click.prevent="goToVideo" class="thumbnail">
                    <img src="https://codelover.club/coursefiles/images/film/美食.jpeg
" alt="...">
                    <div class="overlay">  
                        <p class="overlay-text">美食</p>  
                    </div>
                </a>
            </div>
            <div class="col-xs-6">
                <a href="#"@click.prevent="goToVideo" class="thumbnail">
                    <img src="https://codelover.club/coursefiles/images/film/运动.jpeg
" alt="...">
                    <div class="overlay">  
                        <p class="overlay-text">运动</p>  
                    </div>
                </a>
            </div>
            <div class="col-xs-6">
                <a href="#"@click.prevent="goToVideo" class="thumbnail">
                    <img src="https://codelover.club/coursefiles/images/film/音乐.jpeg
" alt="...">
                    <div class="overlay">  
                        <p class="overlay-text">音乐</p>  
                    </div>
                </a>
            </div>
            <div class="col-xs-6">
                <a href="#"@click.prevent="goToVideo" class="thumbnail">
                    <img src="https://codelover.club/coursefiles/images/film/预告.jpeg" alt="...">
                    <div class="overlay">  
                        <p class="overlay-text">预告</p>  
                    </div>
                </a>
            </div>
        </div>
    </div>  
</template>  
    
<script>  
export default {  
  methods: {  
    goToVideo() {  
      this.$router.push( '/Bofang' ); // 使用路由名称进行导航  
    }  
  }  
}  
</script>  
    
<style scoped>  
.row {  
  display: flex;  
  flex-wrap: wrap; 
  justify-content: flex-start; 
  align-items: stretch;
  
}  
.col-xs-6 {
    width: 187.5px;
    height: 180px;
    position: relative; 
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.col-xs-6 img {  
  width: 200px; 
  height: 180px; 
  display: block; 
}  
 
.thumbnail {  
    position: relative;  
    display: inline-block;  
}  
  
.overlay {  
    position: absolute;  
    bottom: 0;  
    left: 0;  
    right: 0;  
    background-color: rgba(0, 0, 0, 0.593);   
    color: white;  
    opacity: 0;  
    height: 0;  
    overflow: hidden; 
    transition: all 0.1s ease;  
}  
  
.thumbnail:hover .overlay {  
    opacity: 1; 
    height: 100%; 
}  
  
.overlay-text {  
    position: absolute;  
    top: 50%;
    left: 50%;  
    transform: translate(-50%, -60%);
    padding-bottom: 35px; 
    font-size: 25px;
}
</style>