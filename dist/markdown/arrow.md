# 箭头

连线箭头,没有实体类，包含在连线draw中。


可以设置箭头的形状

<div class="try-code">

```javascript

const newLine = topology.addLine({
    from:{
        x:100,
        y:100,
        direction:2,
        anchorIndex:2
     },
        to:{
        x:250,
        y:100,
        direction:1,
        anchorIndex:1
    },
    name:'line',
    toArrowColor:'red',
    fromArrow:'triangle',
    toArrow:'circleSolid'
}) 

``` 

<a class="try" data-set="arrow">试一试</a>

</div>


|箭头值|箭头名称|箭头形状|
|:---|:---|:---|
|(空)|无箭头|<img src="https://cdn.nlark.com/yuque/0/2019/png/179380/1571387509238-1aca52e9-02b6-489e-a981-89639dc2b82a.png?x-oss-process=image%2Fresize%2Cw_70" width="35.5px"> </img>|
|triangleSolid|实心三角形|<img src="https://cdn.nlark.com/yuque/0/2019/png/179380/1571387524726-93186131-b2fc-4042-80c7-402c00b7a346.png?x-oss-process=image%2Fresize%2Cw_62" width="35.5px"></img>|
|triangle|空心三角形|<img src="https://cdn.nlark.com/yuque/0/2019/png/179380/1571387540149-f36b1213-b7b5-429f-9129-571d24260ccf.png" width="35.5px"></img>|
|diamondSolid|实心菱形|<img src="https://cdn.nlark.com/yuque/0/2019/png/179380/1571387559591-2b2846c7-dc66-4aa7-af3e-9dc397a30108.png?x-oss-process=image%2Fresize%2Cw_70" width="35.5px"></img>|
|diamond|空心菱形|<img src="https://cdn.nlark.com/yuque/0/2019/png/179380/1571387581182-a87f2f21-3fd9-418a-bfb4-665991dc284d.png?x-oss-process=image%2Fresize%2Cw_56" width="35.5px"></img>|
|circleSolid|实心圆|<img src="https://cdn.nlark.com/yuque/0/2019/png/179380/1571387595107-818d0a0e-6dea-4027-bf06-096347216300.png?x-oss-process=image%2Fresize%2Cw_62" width="35.5px"></img>|
|circle|空心圆|<img src="https://cdn.nlark.com/yuque/0/2019/png/179380/1571387607798-c85e327c-5e0a-4e15-8feb-989f414002dc.png" width="35.5px"></img>|
|line|线型箭头|<img src="https://cdn.nlark.com/yuque/0/2019/png/179380/1571387618738-d6b8b161-f22a-44cb-a1b3-487fe3596392.png" width="35.5px"></img>|
|lineUp|上单边线箭头|<img src="https://cdn.nlark.com/yuque/0/2019/png/179380/1571387635119-efb84774-79fa-4723-b9bf-02e605bd1aaa.png?x-oss-process=image%2Fresize%2Cw_58" width="35.5px"></img>|
|lineDown|下单边线箭头|<img src="https://cdn.nlark.com/yuque/0/2019/png/179380/1571387645662-dd08fd99-a4ca-4220-b592-ff7621544c09.png?x-oss-process=image%2Fresize%2Cw_52" width="35.5px"></img>|



```javascript
const line = new Line();

// 设置起点箭头
line.fromArrow = 'circle';
// 设置终点箭头
line.toArrow = 'lineUp';
```