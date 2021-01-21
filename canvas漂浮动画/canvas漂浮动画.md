# canvas漂浮动画

#### **起步**

#### CSS界面

```css
      .bubble {
            display: block;
        }
```



#### html界面

```html
 <canvas class="bubble">
     
    </canvas>
```

#### js运行代码

```js
    /*
         颜色挑选:string='light'|'dark'|'color'
         速度:Array=[反方向最小速度,正方向最大速度]
         颗粒数:number
         颗粒大小:Array=[最小颗粒半径,最大颗粒半径]
         颗粒形状是否为正方形:Boolean=true|false
     */
        canvasFloat({
            color: 'light',
            speed: [-1, 1],
            bubbleNum: 100,
            bubbleBaseData: [9,15],
            bubbleRent: true
        });
```

#### js

在html页面，body标签内最后添加

```js
        function canvasFloat(data) {
            let aColor,speed;
            'color' in data?aColor = setColor(data.color):aColor = ["#455A64", "#CFD8DC", "#009688", "#607D8B", "#FFFFFF", "#757575"];
            'speed' in data?speed=[-1,1]:speed=data.speed;

            let canvas = document.querySelector(".bubble");
            let w, h;
            let canCon = canvas.getContext("2d");
            let aBubble = [];

            ~~function setSize() {
                window.onresize = arguments.callee;     //函数本身
                return ~~function () {
                    w = window.innerWidth;
                    h = window.innerHeight;
                    canvas.width = w;
                    canvas.height = h;
                }();
            }();

            function setColor(data) {
                let color;
                switch (data) {
                    case 'light':
                        color = ["#455A64", "#CFD8DC", "#009688", "#607D8B", "#FFFFFF", "#757575"];
                        break;
                    case 'dark':
                        color = ['#5D4037', '#D7CCC8', '#9E9E9E', '#FFFFFF', '#212121', '#757575']
                        break;
                    case 'color':
                        color = ['#C2185B', '#FFEB3B', '#E91E63', '#FF5252', '#FFFFFF', '#757575']
                        break;
                }
                return color;
            }

            function random(min, max) {
                return Math.random() * (max - min) + min;
            }

            function Bubble(bubbleBaseData) {
                this.r = random(bubbleBaseData[0], bubbleBaseData[1]);
                this.x = random(this.r, w - this.r);
                this.y = random(this.r, h - this.r);
                this.color = aColor[Math.floor(random(0, 5))];
                this.vx = random(speed[0], speed[1]);
                this.vy = random(speed[0], speed[1]);
            }

            Bubble.prototype.draw = function () {
                canCon.beginPath();
                canCon.fillStyle = this.color;
                bubbleRent==true?canCon.fillRect(this.x, this.y, this.r, this.r):canCon.arc(this.x, this.y, this.r, 0, Math.PI * 2)
                // canCon.fillRect(this.x, this.y, this.r, this.r)
                canCon.fill();
            }

            Bubble.prototype.update = function () {
                this.x += this.vx;
                this.y += this.vy;
                if (this.x < this.r || this.x + this.r > w) {
                    this.vx = -this.vx;
                }
                if (this.y < this.r || this.y + this.r > h) {
                    this.vy = -this.vy;
                }
                this.draw();
            }

            function createBubble(num, bubbleBaseData,bubbleRent) {
                for (let i = 0; i < num; i++) {
                    let bubble = new Bubble(bubbleBaseData);
                    bubble.draw();
                    aBubble.push(bubble);
                }
            }

            let num,bubbleBaseData,bubbleRent;
            !'bubbleNum' in data? num = 100:num=data.bubbleNum;
            !'bubbleBaseData' in data?bubbleBaseData= [1, 3]:bubbleBaseData=data.bubbleBaseData;
            !'bubbleRent' in data?bubbleRent=false:bubbleRent=data.bubbleRent;
            createBubble(num,bubbleBaseData,bubbleRent);
            setInterval(() => {
                canCon.clearRect(0, 0, w, h);
                aBubble.forEach((item, index, arr) => item.update());
            }, 1000 / 60)
        }
```

#### 相关参数

-   颜色挑选:string='light'|'dark'|'color'
-   速度:Array=[反方向最小速度,正方向最大速度]
-   颗粒数:number
-   颗粒大小:Array=[最小颗粒半径,最大颗粒半径]
-   颗粒形状是否为正方形:Boolean=true|false

