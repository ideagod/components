# domOperation

#### **起步**

在html页面的head标签内引入css样式和js

```html
	<!-- domOperation样式 -->
    <link- [domOperation](#domoperation)
      - [**起步**](#起步)
      - [**html页面**](#html页面)
      - [js](#js)
      - [相关api](#相关api) rel="stylesheet" href="./domOperation.css">
    <!-- swiperJs -->
    <script src="./domOperation.js"></script>
```

#### **html页面**

```html
    <!-- domOperation主体 -->
<div class="content">
        <div class="con-left">
            <h4 class="clearfix">
                <p>热门目的地：</p>
                <ul>
                    <!-- 地点放置部分-->
                    <!-- <li class="local-list"><a href="javascript:;">aaaa</a></li>-->
                </ul>

            </h4>
            <div class="select-addr">
                <!-- 左边选择展示部分-->
                <!-- <span class="selected-list">
                    aaaaa
                    <a href="javascript:;">x</a>
                </span> -->
            </div>
        </div>
        <div class="con-right">
            <!-- 右边选择展示部分-->
            <!-- <span>
                aaaaa
            </span> -->
        </div>
    </div>
```

#### js

在html页面，body标签内最后添加

```html
     <script>
        var classT = new DomOperation('.content',{
            //存放数据
            area: ["叙利亚", "非洲", "南极"]
        });
    </script>
```

#### 相关api

-  area: ["叙利亚", "非洲", "南极"]

