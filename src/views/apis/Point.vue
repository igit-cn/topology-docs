<template>
    <div class="point">
        <div class="hljs" ref="hlDiv" @click.stop="handleClick" v-html="introduce"></div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'; 
import marked from 'marked'
import hljs from "highlight.js";
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import 'highlight.js/styles/xcode.css';
// import 'highlight.js/styles/monokai-sublime.css';
import {Throttle} from '../../utils/utils.ts'
export default defineComponent({
  name: 'Introduce',
  components: { 
  },
  data():{
    anchorList:string[];
    introduce:string}{
     return{
        introduce:'',
        anchorList:[]
     }
  },
  async mounted(){
    this.introduce = await this.axios.get('/markdown/point.md'); 
    const  renderer = new marked.Renderer();
    renderer.heading = (text:string, level:number,raw:number, slugger:object)=> {
        const  escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
        if(level === 1 || level === 2){
          this.anchorList.push(text)
        }
        // 降低md里面的一级标题和二级标题渲染频率
        this.startThrottle(this.anchorList)
        return '<h' + level + ' id='+text+'><a name="' +
                    escapedText +
                    '" class="anchor" href="#' +
                    text +
                    '"><span class="header-link"></span></a>' +
                      text + '</h' + level + '>';
    };
    marked.setOptions({
          renderer,
          highlight: function(code:any) {
            return hljs.highlightAuto(code).value;
          },
          pedantic: false,
          gfm: true,
          tables: true,
          breaks: false,
          sanitize: false,
          smartLists: true,
          smartypants: false,
          xhtml: false
        }
      );
      this.introduce = marked(this.introduce)
  },
  methods:{
    startThrottle:new Throttle().use((val:string[])=>{
      (window as any).Store.set('anchorList', val);
    },300,false),
    async handleClick(event:any){
      console.log(event.target.dataset.set)
      const key:any = event.target.dataset.set
      const result = await this.axios.get('/apis/trycode.json');  
      // console.log('result',key in result)
      if(key in result){
        (window as any).Store.set('tryCode',true);
        (window as any).Store.set('updateCode',result[`${key}`]);
      }
   }
  }
})
</script>
<style lang="scss" scoped>
.point{
  ::v-deep .try-code{
    position: relative;
    background: #f8f8f8;
    .try{
      position: absolute;
      top: 10px;
      right: 10px;
      color: #FB8501;
    }
  }
}
</style>