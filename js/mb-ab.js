/*
 * Lazy Line Painter - Path Object
 * Generated using 'SVG to Lazy Line Converter'
 *
 * http://lazylinepainter.info
 * Copyright 2013, Cam O'Connell
 *
 */

var pathObj = {
    "mb-ab": {
        "strokepath": [
            {
                "path": "M306.9,223.9c-32-12-72.7,31.4-74.6,59.5c0,29.3,32.4,43.2,74.2-55.8c-47.5,94.3-33.6,115,44.4,5  c7.8-10.1-13.3-33-37.1,62.7c-1.7,20.6,27.9,11.9,29.8-21.5c0.5-16.5-14.2-0.5-10.5,12.4c3.7,12.8,18.3,8.7,22.9,0.9",
                "duration": 600
            },
            {
                "path": "M370.5,267.6c-37.1,32.4-0.8,61.1,16.5,7.8c3.4-9.9-16.5-17-13.8,13.3c7.3,21.4,28.7-0.3,39.7-19.9  c-23,43.4-7.6,55.4,25.9-1.3c-34.5,66.4,8.6,41,36.8-22.5c-35,74.5-9.9,66.6,8.6,42.1",
                "duration": 600
            },
            {
                "path": "M520.2,304.4c31.1-35.5,49.9-59.6,26.4,0.3c27.2-52.5,44.9-47.3,26.6-0.5c25.1-48.9,47.8-44.9,28-9.4  c-6.3,17.5,10.4,12.3,21.4-6.8",
                "duration": 600
            },
            {
                "path": "M625.8,286.6c49.6-10.2,5.2-38.7-1.6-2.6c-7.6,27.2,12.5,27.7,31.3,2.9",
                "duration": 600
            },
            {
                "path": "M 456 266 L 481.6 265.5",
                "duration": 600
            }
        ],
        "dimensions": {
            "width": 842,
            "height": 596
        }
    }
};


/*
 Setup and Paint your lazyline!
 */

 $(document).ready(function(){
 $('#mb-ab').lazylinepainter(
 {
    "svgData": pathObj,
    "strokeWidth": 5,
    "strokeColor": "#ffffff"
}).lazylinepainter('paint');
 });
