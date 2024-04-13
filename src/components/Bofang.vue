<template>
    <div class="page">
        <div class="player" ref="playerContain">
            <div class="tools">
                <i class="left fa fa-chevron-left" @click="onGoHome"></i>
                <i class="right fa fa-upload"></i>
            </div>
            <div class="video">
                <video src="https://codelover.club/coursefiles/lnnpREORzoIdSs-hRgPHOKXVIzwM.mp4" ref="player" controls
                    autoplays></video>
                <div class="btn" v-show="isPause" @click.stop="onPlay">
                    <i :class="['play fa', isPause ? 'fa-play-circle' : 'fa-pause-circle']"></i>
                </div>
            </div>
        </div>
        <div class="content-box" :style="{ marginTop: vidHeight + 'px' }">
            <div class="content">
                <div class="movie-card">
                    <div class="body">
                        <h3 class="name">福福</h3>
                        <p class="info">片中职务：导演/编剧</p>
                    </div>
                    <div class="icon">
                        <i class="fa fa-angle-right detail"></i>
                    </div>
                </div>
                <div class="interest">
                    <template v-for="cate in interestData" :key="cate.name">
                        <h3 class="title">{{ cate.name }}</h3>
                        <div class="list-row">
                            <div class="list" :style="{ width: (200 + 5) * cate.data.length + 'px' }">
                                <div v-for="mv in cate.data" class="category-card"
                                    :style="{ backgroundImage: 'url(' + mv.url + ')' }">
                                    <div class="info">
                                        <span>{{ cate.name }}</span>/
                                        <span>{{ mv.length }} / {{ (200 + 5) * cate.data.length }}</span>
                                    </div>
                                    <div class="name">
                                        <span>{{ mv.name }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>

                    <div></div>
                </div>
            </div>
        </div>

        <div class="msg-box">
            <div class="input-box">
                <label class="fa fa-pencil-square-o"></label>
                <input type="text" />
            </div>
            <div>
                <div class="fa fa-heart-o">G</div>
                <div class="count">22</div>
            </div>
            <div>
                <div class="fa fa-upload">L</div>
                <div class="count">11</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUpdated } from 'vue';


const isPause = ref(true);
const vidHeight = ref(0);
const player = ref(null);
const interestData = ref([
    {
        name: "励志",
        data: [
            { id: 1, name: "电影标题", url: 'https://codelover.club/coursefiles/images/film/广告.jpeg', categ: "类型", length: `2'43"` },
            { id: 2, name: "电影标题2", url: 'https://codelover.club/coursefiles/images/film/搞笑.jpeg', categ: "类型", length: `2'43"` },
            { id: 3, name: "电影标题3", url: 'https://codelover.club/coursefiles/images/film/实验.jpeg', categ: "类型", length: `2'43"` },
            { id: 4, name: "电影标题4", url: 'https://codelover.club/coursefiles/images/film/励志.jpeg', categ: "类型", length: `2'43"` },
            { id: 5, name: "电影标题5", url: 'https://codelover.club/coursefiles/images/film/动画.jpeg', categ: "类型", length: `2'43"` },
        ]
    },
    {
        name: "温暖",
        data: [
            { id: 1, name: "电影标题1", url: 'https://codelover.club/coursefiles/images/film/剧情.jpeg', categ: "类型", length: `2'43"` },
            { id: 2, name: "电影标题2", url: 'https://codelover.club/coursefiles/images/film/创意.jpeg', categ: "类型", length: `2'43"` },
            { id: 3, name: "电影标题3", url: 'https://codelover.club/coursefiles/images/film/旅行.jpeg', categ: "类型", length: `2'43"` },
            { id: 4, name: "电影标题4", url: 'https://codelover.club/coursefiles/images/film/时尚.jpeg', categ: "类型", length: `2'43"` },
            { id: 5, name: "电影标题5", url: 'https://codelover.club/coursefiles/images/film/汽车.jpeg', categ: "类型", length: `2'43"` },
        ]
    },
    {
        name: "广告",
        data: [
            { id: 1, name: "电影标题1", url: 'https://codelover.club/coursefiles/images/film/混剪.jpeg', categ: "类型", length: `2'43"` },
            { id: 2, name: "电影标题2", url: 'https://codelover.club/coursefiles/images/film/游戏.jpeg', categ: "类型", length: `2'43"` },
            { id: 3, name: "电影标题3", url: 'https://codelover.club/coursefiles/images/film/爱情.jpeg', categ: "类型", length: `2'43"` },
            { id: 4, name: "电影标题4", url: 'https://codelover.club/coursefiles/images/film/生活.jpeg', categ: "类型", length: `2'43"` },
            { id: 5, name: "电影标题5", url: 'https://codelover.club/coursefiles/images/film/科幻.jpeg', categ: "类型", length: `2'43"` },
        ]
    },
]);

// 定义方法
const onChangeSize=() => {  
      const myElement = this.$refs.myElement;  
      if (myElement) {  
        const clientHeight = myElement.clientHeight;  
        // 使用 clientHeight 做一些操作  
      } else {  
        console.error('元素为 null,无法读取 clientHeight');  
      }  
    };  

const onPlay = () => {
    
    if (player.value.paused) {
        player.value.play();
        isPause.value = false;
    } else {
        player.value.pause();
        isPause.value = true;
    }
};


onMounted(() => {
    window.addEventListener('resize', onChangeSize);
});


onUpdated(() => {
    this.$router.push({
        path: "/"
    })
});

</script>
<style>
.page {
    
    overflow: hidden;
    margin-top: 150px;

    .player {
        width: 100%;
        position: absolute;
        margin-top: -120px;
        z-index: 1;

        .tools {
            width: 100%;
            position: absolute;
            background-color: rgba(255, 255, 255, 0.274);
            background: transparent;
            top: 0;
            z-index: 1;
            line-height: 20px;

            i {
                text-shadow: 2px 1px 7px grey;

                color: rgba(255, 255, 255, 0.438);
                padding: 15px;
                font-size: 22px;

                &:hover {
                    color: white;
                }
            }

            .left {
                float: left;
            }

            .right {
                float: right;
            }

        }

        .video {
            width: 100%;
            height: 100%;
            position: relative;
            top: 0;

            video {
                width: 100%;
                background: none;
            }

            .btn {
                display: flex;
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                align-content: center;
                justify-content: center;
                flex-direction: row;
                flex-wrap: wrap;

                .play {
                    padding: 20px;
                    border-radius: 50%;
                    display: block;
                    color: rgb(255, 255, 255);
                    font-size: 68px;
                    opacity: 0.6;
                }

                :hover .play {
                    opacity: 0.5;
                }
            }

            &:hover {
                .btn .play {
                    opacity: 1;
                }
            }
        }


    }

    .content-box {
        height: 60%;
        margin-bottom: 30px;


        .content {
            overflow: hidden;
            padding: 0 10px;
            margin-top: 80px;

            .movie-card {
                padding: 5px 16px 10px 0;
                position: relative;
                margin: 5px 5px;
                border-bottom: 1px solid #f4f4f4;
                color: aliceblue;

                .body {
                    text-align: left;
                    color: #000;
                }
                .name{
                    padding-bottom: 0;
                }
                
                .icon {
                    top: 44%;
                    position: absolute;
                    right: 15px;
                }

                i.detail {
                    color: red;
                    font-size: 22px;
                }
            }

            .info {

                margin-bottom: 0px;
            }

            .interest {
                text-align: left;



                .list-row {
                    width: 100%;
                    overflow-y: hidden;
                    overflow-x: scroll;

                    .list {
                        display: flex;

                        width: 300%;

                        .category-card {
                            display: flex;
                            flex-direction: column;
                            align-items: flex-start;
                            justify-content: flex-end;
                            border: 1px solid rgb(210, 210, 210);
                            background-color: rgb(0, 0, 0);
                            height: 100px;
                            width: 200px;
                            margin-right: 5px;
                            padding-left: 10px;
                            padding-bottom: 10px;
                            box-sizing: border-box;
                            background-size: cover;
                            color: white;


                            .info {
                                font-size: 14px;
                                position: relative;
                            }

                            .name {
                                font-size: 16px;
                            }
                        }
                    }
                }
            }
        }

    }



    .msg-box {
        display: flex;
        justify-content: space-around;
        font-size: 15px;
        box-shadow: 3px 5px 20px #a6a6a6;
        position: absolute;
        bottom: -255px;
        width: 100%;
        padding: 10px 0px;
        background-color: rgb(255, 255, 255);
        align-items: flex-end;

        .input-box {
            display: flex;
            flex-direction: row;
            align-items: center;
            border: 1px solid gray;
            border-radius: 18px;
            padding: 0px 15px;
            font-size: 18px;
            height: 28px;


            input {
                border: none;
                font-size: 18px;
                padding-left: 5px;

                &:focus-visible {
                    outline: none;
                }
            }
        }
    }
}
</style>