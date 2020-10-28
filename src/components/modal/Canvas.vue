<template>
  <div class="canvas">
        <div
      id="topology-canvas"
      ref="topology" 
    ></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { Topology, anchorsFns } from '@topology/core';
import { register as registerFlow } from '@topology/flow-diagram';
import { register as registerActivity } from '@topology/activity-diagram';
import { register as registerClass } from '@topology/class-diagram';
import { register as registerSequence } from '@topology/sequence-diagram';
import { register as registerChart } from '@topology/chart-diagram';


// 注册图形库
registerFlow();
registerActivity();
registerClass();
registerSequence();
registerChart();
 

declare const topology: any;


export default defineComponent({
  name: 'Canvas',
  components: {},
  data():{
      topologyOptions:any,
      subscribe:any,
      renderFlag:boolean
  }{
      return{
          topologyOptions:{
                on: null,
                rotateCursor: '/img/rotate.cur',
            },
            subscribe:null,
            renderFlag:false

      }
  },
  methods: {
    clearCanvas(){  
      topology.data.pens.forEach((e:any)=>{
        topology.activeLayer.pens = [topology.find(e.id)];
        topology.find(e.id).locked = 0;
        topology.delete();
      })
    } 
  },
  mounted(){
    new Topology('topology-canvas',this.topologyOptions);
    this.subscribe = (window as any).Store.subscribe('t-data', (val:any) => {
      console.log(1111,this.renderFlag,val)
      if(!this.renderFlag){
        this.renderFlag = true
      }else{
        this.clearCanvas()
         topology.data.locked = 1;
      }
      eval(val);
    });
    },
//     destroyed() {
//     this.subscribe.unsubscribe();
//     topology.destroy();
//   }
});
</script>
<style lang="scss" scoped>
.canvas{
    height: 43%;
    #topology-canvas {
      height: 100%;
      width: 100%;
      overflow: auto;
      background-color: #f4f4f4;
    }
}
</style>
