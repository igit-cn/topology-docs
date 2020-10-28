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
 



export default defineComponent({
  name: 'Canvas',
  components: {},
    mounted(){
        new Topology('topology-canvas');
        // this.subscribe = Store.subscribe('t-data', (val) => {
        //   topology.open(val.data);
        // });
    }, 
});
</script>
<style lang="scss" scoped></style>
