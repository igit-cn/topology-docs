<template>
  <div class="index">
    <Header :class="opacity == 1?'show':''"/>
    <div class="content">
      <div class="bg">
        <img src="../../public/img/bg.png" alt="" :style="{'width':width+'px','height':height+'px'}"> 
        <img src="../../public/img/op-bg.png"  :style="{'width':width+'px','height':height+'px'}" class="op-bg" alt="">
      </div>
      <div class="topology">
          <p class="brand">Le5le Topology</p>
          <p class="advantage">开源、便捷、功能丰富、良好扩展的可视化工具</p>
          <div class="btn">
            <router-link to="/introduce">
              <button>起&nbsp;&nbsp;步</button>
            </router-link>
            <div class="github">
              <img src="../../public/img/github.png" alt="">
              <span>GitHub</span>
            </div>
          </div> 
      </div>
    </div>

    <section class="section">
        <h1>Why le5le-topology ? </h1>
        <div class="center-box">
          <div class="item" v-for="(item,index) in topologyAdvantage" :key="index">
            <div class="image">
              <img :src="item.img" alt="">
            </div>
            <h4>{{item.title}}</h4>
            <p v-html="item.text"></p> 
          </div>
        </div>
    </section>

    <section class="section" style="margin-bottom:118px">
      <div class="wrapper">
        <div class="item">
          <img src="../../public/img/img5.png" alt="">
          <div class="text">
            <h4>全新概念</h4>
            <p>高效、扩展、专注、丰富<br>
              插件式开发，无限扩展<br>
              0代码实现数据动态变化，解放程序员
              <br><br>
              HTML5、小程序<br>
              哪里有web哪里就有可视化
            </p>

          </div>

        </div>
      </div>

      <div class="pack">
        <div class="item">
            <div class="text">
              <h4>数据驱动显示</h4> 
              <p>数据与视图分离，<br>
                视图数据与业务数据分离
                <br><br>
                让数据专注于数据，让业务专注于业务<br>
                来源于业务，却可以多维度数据展示<br>
              </p> 
            </div>
            <img src="../../public/img/img6.png" alt="">
        </div>
      </div>
    </section>
  


      
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import func from 'vue-temp/vue-editor-bridge';
declare const window: any;

export default defineComponent({
  name: 'Index',
  components: {
    Header,
    Footer
  },
  data():{
    opacity:number,
    height:number,
    width:number,
    topologyAdvantage:object[]
  }{
    return{
      opacity:0,
      height:document.body.clientHeight,
      width:window.screen.width,
      topologyAdvantage:[{
        img:require('../../public/img/img1.png'),
        title:'开源免费',
        text:'遵循MIT开源协议，免费商用社区</br>活跃，多个技术交流群'
      },{
        img:require('../../public/img/img2.png'),
        title:'动画特效',
        text:'基于帧的节点动画，可以方便的以</br>易于理解的方式，制作自己的</br>节点动画'
      },{
        img:require('../../public/img/img3.png'),
        title:'功能丰富',
        text:'涵盖各行业图表，满足各种需求</br>实时数据、动效、视频、架构拓扑图、</br>UML图、脑图、web组态、SCADA、</br>大屏展示等各种场景支持'
      },{
        img:require('../../public/img/img4.png'),
        title:'高效可扩展',
        text:'插件式开发，节点、动画任意扩展</br>图标、第三方组件库、视频等</br>方便集成'
      }]
    }
  },
  mounted(){
    window.addEventListener('resize',()=>{
       this.height=document.body.clientHeight;
       this.width=window.screen.width;
    })
    window.addEventListener('scroll',this.handleScroll)
  },
  methods:{
    handleScroll(){
        const top = document.documentElement.scrollTop+30; //获取scroll偏移值
        let opacity = top / this.height;    //对opacity作计算，透明度从起始到1随偏移值而改变
        if(opacity >= 1){
          opacity = 1
        }
        this.opacity = opacity   //实时返回给opacityStyle
    },
  }
});
</script>
<style lang="scss" scoped>
@import '@/styles/index.scss';

  .index{
    .header{
      color: white!important;
      position: fixed;
      max-width: 100%;
      ::v-deep .left{
        color: white;
        span{
          color: white!important;
        }
      }
      ::v-deep .right{
        .nav{
          .item{
            a{
              color: white!important;
            }
          }
        }
      }
    }
    .show{
      z-index: 9999;
      color: #333333!important;
      background: white;
      ::v-deep .left{ 
              span{
                color: #333333!important;
              }
            }
            ::v-deep .right{
              .nav{
                .item{
                  a{
                    color: #333333!important;
                  }
                }
              }
            }
    }
    .content{
      height: 100vh;
      width: 99vw;

      .bg{
        position: absolute; 
        overflow: hidden;
        height: 100vh;
        width: 100%;
        top: 0;
        z-index:-1;
        right: 0;
        left: 0;
        .op-bg{
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
        }
      }
      .topology{
          position: absolute;
          z-index: 9;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
          .brand{
            font-size: 64px;
            font-family: Arial, Arial-Bold;
            font-weight: 700;
            color: #ffffff;
            margin-bottom: 0;
            line-height: 63px;
            text-align: center;
          }
          .advantage{
            font-size: 14px;
            font-family: Source Han Sans CN, Source Han Sans CN-Regular;
            font-weight: 400;
            text-align: left;
            color: #ffffff;
            text-align: center;
            margin:35px 0 50px
            
          }
          .btn{
            display: flex;
            flex-wrap: wrap;
            margin: 0 auto;
            justify-content: space-between;
            max-width: 223px;
            button{
              width: 98px;
              height: 36px;
              background: #fb8501;
              border-radius: 18px;
              font-size: 14px;
              font-family: Source Han Sans CN, Source Han Sans CN-Regular;
              font-weight: 400;
              text-align: center;
              border: none;
              color: white;
              margin-bottom: 15px;
            }
            .github{
              width: 98px;
              height: 36px;
              padding: 0 8px;
              box-sizing: border-box;
              background: #ffffff;
              border-radius: 18px; 
              display: flex;
              justify-content: space-around;
              align-items: center;
              cursor: pointer;
              img{
                height: 20px;
                width: 20px;
              }
              span{
                font-size: 14px;
                font-family: Arial, Arial-Regular;
                font-weight: 400;
                color: #333333;
              }
            }
          }
        }
      
    }
    .section{
      padding-top: 110px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      h1{
        font-size: 32px;
        font-family: Arial, Arial-Bold;
        font-weight: 700; 
        color: #333333;
        margin-bottom: 53px;
      }
      .center-box{
        display: flex;
        justify-content: space-between;
        width: 960px;
        max-width: 100%;
        .item{
          display: flex;
          flex-direction: column;
          align-items: center;
          .image{
              width: 79px;
              height: 86px;
              display: flex;
              justify-content: center;
              align-items: center;
          }
          h4{
            font-size: 18px;
            font-family: Source Han Sans CN, Source Han Sans CN-Bold;
            font-weight: 700;
            color: #333333;
            margin-top: 40px;
          }
          p{
            text-align: center;
            font-size: 14px;
            font-family: Source Han Sans CN, Source Han Sans CN-Regular;
            font-weight: 400;
            text-align: center;
            color: #333333;
          }
        }
      }
      .wrapper{
        width: 960px;
        max-width: 100%;
        .item{
          display: flex; 
          .text{
            h4{
              margin-top: 70px;
              font-size: 26px;
              font-family: Source Han Sans CN, Source Han Sans CN-Bold;
              font-weight: 700;
              text-align: left;
              color: #333333;
              position: relative;
              line-height: 1;
              &::after{
                content: '';
                width: 50px;
                height: 50px;
                background: #fb8501;
                border-radius: 50%;
                position: absolute;
                bottom: 0;
                left: -12px;
                z-index: -1;
              }
            }
            p{
              margin-top: 37px;
              font-size: 14px;
              font-family: Source Han Sans CN, Source Han Sans CN-Regular;
              font-weight: 400;
              color: #333333;
              text-indent:0;
            }
          }
          img{
            height: 296px;
            width: 600px;
          }
        }
      }
      .pack{
        width: 960px;
        margin-top: 68px;
        .item{
          display: flex;
          justify-content: space-between;
            .text{
              margin: 68px 0 0 65px;
              h4{
                margin-top: 10px;
                font-size: 26px;
                font-family: Source Han Sans CN, Source Han Sans CN-Bold;
                font-weight: 700;
                text-align: left;
                color: #333333;
                position: relative;
                &:after{
                  position: absolute;
                  left: 12px;
                  bottom: 12px;
                  z-index: -1;
                  content: '';
                  background: #fb8501;
                  height: 56px;
                  width: 56px;
                  transform:rotate(45deg);
                  -ms-transform:rotate(45deg); /* Internet Explorer */
                  -moz-transform:rotate(45deg); /* Firefox */
                  -webkit-transform:rotate(45deg); /* Safari 和 Chrome */
                  -o-transform:rotate(45deg); /* Opera */
                }
              }
              p{
                margin-top: 32px;
                font-size: 14px;
                font-family: Source Han Sans CN, Source Han Sans CN-Regular;
                font-weight: 400;
                color: #333333;
                text-indent:0;
              }
            }
        }
      }
    }
   
  }

 


</style>
