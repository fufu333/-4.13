<template>
    <div class="search">
        <div class="row">
            <div class="col-lg-6">
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="看点什么好呢">
                    <span class="input-group-btn">
                        <button class="shu" type="button">搜索</button>
                    </span>
                </div>
            </div>
        </div>
        <div class="qwq">
            <div class="aaa">
                <div class="bbb dropdown">
                    <button type="button" class="aaa" @click="toggleDropdown" :aria-expanded="isDropdownOpen">
                        影片 <i class="iconfont icon-xiajiantoucu"></i>
                    </button>
                    <div class="dropdown-menu" v-show="isDropdownOpen" :class="{ show: isDropdownOpen }">
                        <div class="biao">
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
                </div>
            </div>
            <div class="aaa">
                <div class="bbb">
                    <button type="button" class="aaa" @click="toggleDropdown" :aria-expanded="isDropdownOpen">
                        默认排序 <i class="iconfont icon-xiajiantoucu"></i>
                    </button>
                </div>
            </div>
            <div class="ccc">
                <div class="ddd">
                    <button type="button" class="aaa" @click="toDropdown" :aria-expanded="isDropdownOpen">
                        频道 <i class="iconfont icon-xiajiantoucu"></i>
                    </button>
                    <div class="dropdown-list" v-show="isDownOpen" :class="{ show: isDownOpen }">
                        <div class="lie">
                            <span class="label label-default">创意</span>
                            <span class="label label-default">剧情</span>
                            <span class="label label-default">动画</span>
                            <span class="label label-default">励志</span>
                            <span class="label label-default">实验</span>
                            <span class="label label-default">广告</span>
                            <span class="label label-default">搞笑</span>
                            <span class="label label-default">旅游</span>
                            <span class="label label-default">时尚</span>
                            <span class="label label-default">汽车</span>
                            <span class="label label-default">混剪</span>
                            <span class="label label-default">游戏</span>
                            <span class="label label-default">爱情</span>
                            <span class="label label-default">生活</span>
                            <span class="label label-default">科幻</span>
                            <span class="label label-default">记录</span>
                            <span class="label label-default">美食</span>
                            <span class="label label-default">运动</span>
                            <span class="label label-default">音乐</span>
                            <span class="label label-default">预告</span>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isDropdownOpen: false,
            isDownOpen:false,
        };
    },
    methods: {
        toggleDropdown() {
            this.isDropdownOpen = !this.isDropdownOpen;
        },
        toDropdown() {
            this.isDownOpen = !this.isDownOpen;
        },
    },
};  
</script>

<style>

.form-control {
    margin-top: 5px;
    width: 290px;
    height: 25px;
    margin-left: 15px;
    margin-right: 5px;
    border-radius: 60px;
    padding-left: 8px;
}

.shu {
    border: none;
    width: 40px;
    font-size: 14px;
    font-weight: bold;
    background-color: rgb(255, 255, 255);
}

.shu:hover {
    color: #d81010;
}



.aaa {
    border: none;
    background-color: rgb(255, 255, 255);
    font-weight: bold;
    font-size: 16px;
    margin-right: 5px;
    margin-left: 15px;
    margin-top: 8px;
    position: relative;
    z-index: 1;

}

.ccc {
    border: none;
    background-color: rgb(255, 255, 255);
    font-weight: bold;
    font-size: 16px;
    margin-right: 5px;
    margin-left: 15px;
    margin-top: 8px;

}
.icon-xiajiantoucu:before {
    color: #000;
    font-size: 16px;
    margin-left: 5px;
}

.qwq {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

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

.dropdown {  
    position: relative; 
    display: inline-block; 
} 

.dropdown-menu {  
    position: absolute;  
    top: 100%; 
    left: 0;  
    z-index: 1000; 
    display: none;  
}  
  
.dropdown-menu.show {  
    display: block;  
}

.bbb {  
    position: relative; 
    display: inline-block; 
} 
.ccc{   
    border: none;
    background-color: rgb(255, 255, 255);
    font-size: 16px;
    margin-right: 5px;
    margin-left: 15px;
    margin-top: 8px;
    z-index: 1;

}
.dropdown-list {  
    position: absolute; /* 相对于按钮进行定位 */   
    left: 0; /* 与按钮左对齐 */     
    background-color: rgba(255, 255, 255, 0.7); /* 半透明背景 */  
    padding: 20px; /* 上下左右内边距10px */  
    box-sizing: border-box; /* 包含内边距和边框 */  
    overflow: hidden; /* 内容超出时自动出现滚动条 */  
}  
  
/* 样式化菜单项 */  
.label {  
    display: inline-block; /* 内联块级元素，自动换行 */  
    margin-right: 5px; /* 文字之间相隔5px */  
    white-space: nowrap; /* 防止文字换行 */
    background-color: #f6f2f2; 
    border-radius: 20px; 
    width: 30px;
    height: 25px;
    margin-bottom: 10px;
    font-size: 15px;
    padding: 5px;
    
}  
  
/* 当菜单板显示时，为其添加类名show的样式 */  
.dropdown-list.show {  
    display: block; /* 显示菜单板 */  
}
</style>