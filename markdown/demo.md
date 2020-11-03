<div class="try-code">

```javascript
const newNode = topology.addNode({
        rect: {
            x:10,
            y: 10,
            width: 50,
            height: 50
            },
        name: 'circle',
        strokeStyle: 'red',

        });
topology.render()
```
<a class="try" data-set="rect">试一试</a>
</div>

### 我们可以改变宽高

<div class="try-code">

```javascript
const newNode = topology.addNode({
        rect: {
            x:10,
            y: 10,
            width: 500,
            height: 500
            },
        name: 'circle',
        strokeStyle: 'red',

        });
topology.render()
```
<a class="try" data-set="strokeStyle">试一试</a>
</div>