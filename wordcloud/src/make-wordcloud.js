function randomColor() {
      return 'rgb(' + [
        Math.round(Math.random() * 160),
        Math.round(Math.random() * 160),
        Math.round(Math.random() * 160)
      ].join(',') + ')';
    }

function draw_wordcloud(originData) {
  const chart = echarts.init(document.getElementById('chart'));
  const data = originData.map(val => ({
    ...val,
    textStyle: {
      normal: {
        color: randomColor()
      }
    }
  }));
  // const maskImage = new Image();   /*自定义形状*/
  // maskImage.src = "";
  chart.setOption({
    backgroundColor: '#FFFFFF',
    series: [{
        type: 'wordCloud',
      
        /*要绘制的“云”的形状。可以是为回调函数，或一个关键字。
        可用的形状有(circle)圆形(默认)、(cardioid)心形，(diamond)菱形，(triangle-forward)三角形向前，(triangle)三角形，(pentagon)五边形和(star)星形。*/
        shape: 'circle',
        
        //保持maskImage的宽高比或1:1的形状，他的选项是支持从echarts-wordcloud@2.1.0
        keepAspect: false,

        //一个轮廓图像，其白色区域将被排除在绘制文本之外
        //意思就是可以通过图片，来自定义词云的形状
        // maskImage: maskImage,

       //设置显示区域的位置以及大小
        left: 'center',
        top: 'center',
        right: null,
        bottom: null,
        width: '100%',
        height: '100%',
 
        //数据中的值将映射到的文本大小范围。默认大小为最小12px，最大60px。
        sizeRange: [12, 60],

       //文本旋转范围和步进度。文本将通过rotationStep:45在[- 90,90]范围内随机旋转
        rotationRange: [-90, 90],
        rotationStep: 45,

    //以像素为单位的网格大小，用于标记画布的可用性
    //网格尺寸越大，单词之间的间距越大。
        gridSize: 8,

         //设置为true，允许文字部分在画布外绘制。
        //允许绘制大于画布大小的单词
        //从echarts-wordcloud@2.1.0开始支持此选项
        drawOutOfBound: false,

        //如果字体太大而无法显示文本，
        //是否收缩文本。如果将其设置为false，则文本将不渲染。如果设置为true，则文本将被缩小。
        //从echarts-wordcloud@2.1.0开始支持此选项
        shrinkToFit: false,

        // 执行布局动画。当有大量的单词时，关闭它会导致UI阻塞。
        layoutAnimation: true,

        //全局文本样式
        textStyle: {
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
            // Color可以是一个回调函数或一个颜色字符串
            color: function () {
                // Random color
                return 'rgb(' + [
                    Math.round(Math.random() * 160),
                    Math.round(Math.random() * 160),
                    Math.round(Math.random() * 160)
                ].join(',') + ')';
            }
        },
        emphasis: {
            focus: 'self',
            textStyle: {
                textShadowBlur: 10,
                textShadowColor: '#333'
            }
        },
       //数据是一个数组。每个数组项必须具有名称和值属性。
        data
    }]
  });
  //随着屏幕大小调节图表
  window.addEventListener("resize", () => {
      chart.resize();
  });
}