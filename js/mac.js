/*
 * Lazy Line Painter - Path Object
 * Generated using 'SVG to Lazy Line Converter'
 *
 * http://lazylinepainter.info
 * Copyright 2013, Cam O'Connell
 *
 */

var pathObj = {
    "MacBookPro": {
        "strokepath": [
            {
                "path": "M439.1,31.3c0-8.5-6.9-15.4-15.4-15.4L72.9,16.4c-8.5,0-15.4,6.9-15.4,15.4l0,0.1h0v240.6h8.4h364.8h8.4V31.8   h0L439.1,31.3z",
                "duration": 600
            },
            {
                "path": "M462.3,272.4h-0.1h-23c0,0,0,0,0,0l-89.3,0h-84.7h-36.9l0,0l-193.8,0h-0.1c-7.5,0-11.3,1-11.3,1v7.4l0.5,0   l12.4,0.6h23.9l257,0h120.1h0.6H449l0,0l1.4,0v0h10.3l12.4-0.6l0.5,0v-7.4C473.6,273.4,469.8,272.4,462.3,272.4z",
                "duration": 600
            },
            {
                "path": "M463.2,281.3l-4.3,0.1h-22H228.2l0,0l-168.4,0h-22l-4.3-0.1l-10-0.4c0,0,1.9,2.5,12.5,3h23.9h257h21.8l0,0   h98.3h23.9c10.6-0.5,12.5-3,12.5-3L463.2,281.3z",
                "duration": 600
            },
            {
                "path": "M213.3,272.4c0,0.1,0,0.2,0,0.3v1.1c0,3.1,2.5,5.6,5.6,5.6h58.8c3.1,0,5.6-2.5,5.6-5.6v-1.1c0-0.1,0-0.2,0-0.3   H213.3z",
                "duration": 600
            }
        ],
        "dimensions": {
            "width": 500,
            "height": 300
        }
    }
};

// var $window = $(window),
// 		$section = $('#section'),
// 		topSection = $section.offset('780px').top; //sectionのtopの位置を取得
// var Flag = false;　//フラグの設定
//
// 		$window.scroll(function() {
// 	if ($window.scrollTop() < topSection ) {　//スクロール
// 		if ( Flag === false ) {
// 			MacBookProAnimation();　//顔文字SVG出力
// 			Flag = true;
// 		}
// 	}
// });
//
// //クリックSVGのイベント
// $('#section05').on('click', function() {
// 	$('html, body').animate({scrollTop:topSection}, 800);
// 	event.preventDefault();
// 	return false;
// });

/*
 Setup and Paint your lazyline!
 */

 $(document).ready(function(){
 $('#MacBookPro').lazylinepainter(
 {
    "svgData": pathObj,
    "strokeWidth": 0.5,
    "strokeColor": "#000000"
}).lazylinepainter('paint');
 });
