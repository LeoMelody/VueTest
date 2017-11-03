<template>
    <div class="menu-container">
        <div class="menu-head">
            <i class="fa fa-arrow-left" @click="closeMenu">返回</i>
        </div>
        <div class="menu-body">
            <div class="list-item" v-for="(item, index) in menuList" :style="{'color': colorList[index%7]}" @click="chooseType($event,item.type)">
                {{item.name}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        show: {
            type: Boolean
        }
    },
    methods: {
        closeMenu() {
           this.$parent.$data.show = false
        },
        chooseType(e, type) {
            console.log(type)
        }
    },
    mounted() {
       this.$http.get('/api/menuList', {
           params: {
               'id': '10010'
           }
       }).then(response => {
           response = response.body
        //    console.log(response)
           if (response.errno === 0) {
               this.menuList = response.data
           }
       })
    },
    data() {
        return {
            menuList: [],
            colorList: ['#2384E8', '#9F7860', '#E4A813', '#2AB8CC', 'rgb(122, 106, 219)', 'rgb(159, 120, 96)', 'rgb(244, 143, 46)']
        }
    }
}
</script>

<style lang="scss">
    .menu-container {
        width: 100%;
        height: 100%;
        color: #000;
        position: absolute;
        z-index: 9999;
        background: rgb(255,255,255);
        top: 0;
        left: 0;            
        font-size: 32px;
       .menu-head {
           height: 80px;
           width: 100%;
           border-bottom: 1px solid rgba(51, 51, 51, 0.29);
           background: #eaeaea;
           .fa-arrow-left {
               float: left;
               padding: 20px;
               color: #333;
           }
       }
       .menu-body {
            width: 100%;
            margin-top: 35px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            .list-item,div {
                margin: 10px 0;
                width: 30%;
                font-size: 50px;
                height: 60px;
                line-height: 60px;
                text-align: center;
                color: rgb(random(255),random(255),random(255))
            }
       }
    }
</style>

