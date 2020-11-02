<template>
  <div class="markdown-render">
    <div class="hljs" ref="hlDiv" @click.stop="handleClick" v-html="markdownHtml"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'; 
import marked from 'marked'
import hljs from "highlight.js";
// import javascript from 'highlight.js/lib/languages/javascript';
// import typescript from 'highlight.js/lib/languages/typescript';
import 'highlight.js/styles/xcode.css';
import {Throttle} from '@/utils/utils.ts'
export default defineComponent({
  name: 'Introduce',
  components: { 
  },
  data():{
    anchorList:string[];
    markdownHtml:string}{
     return{
        markdownHtml:'',
        anchorList:[]
     }
  },
  props:{
    mdCode:{
      type:String,
      default:''
    },
    titleList:{
      type:Array,
      default:()=>{
        return []
      }
    }
  }, 
  async mounted(){
    console.log(11,this.mdCode);
  
  },
  methods:{
    handleRender(){
        this.markdownHtml = this.mdCode; 
        const  renderer = new marked.Renderer();
        renderer.heading = (text:string, level:number,raw:number, slugger:object)=> {
            const  escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
            if(this.titleList.indexOf(level) !== -1){
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
          this.markdownHtml = marked(this.markdownHtml)
    },
    startThrottle:new Throttle().use((val:string[])=>{
      console.log('hello');
      (window as any).Store.set('anchorList', val);
    },300,false),
    async handleClick(event:any){
      const key:any = event.target.dataset.set
      const result = await this.axios.get('/apis/trycode.json');  
      if(key in result){
        (window as any).Store.set('tryCode',true);
        (window as any).Store.set('updateCode',result[`${key}`]);
      }
   }
  }
});
</script>
<style lang="scss" scoped> 
.markdown-render{
  height: 100%;
  ::v-deep .try-code{
    position: relative;
    background: #f8f8f8;
    padding: 30px;
    border: 1px solid #e8e8e8;
    .try{
      position: absolute;
      top: 10px;
      right: 10px;
      color: #FB8501;
    }
  }
}
</style>
