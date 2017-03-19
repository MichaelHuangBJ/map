		/**
			设置默认的位置和缩放比例
		*/
		var map=L.map('map',{center:[39.9, 116.38],zoom:6});
		L.marker([39.9, 116.38]).addTo(map);
		/**
			设置底图
		*/
		L.tileLayer('http://map.zhtu.net:8080/r3t-basemap/{z}/{x}/{y}/tile.jpg').addTo(map);
		/**
			添加比例尺到右上角
		*/
		var scaleControl=L.control.scale({
			position:'topright'
		});
		map.addControl(scaleControl);
		/**
			双击显示经纬度
		*/
		//存储坐标的数组
		var latlngs=new Array();
		var popup = new L.popup();  
       	function onMapdblClick(e) {  
                   popup 
                            .setLatLng(e.latlng)  
                            .setContent("You clicked the map at " + e.latlng.toString())  
                            .openOn(map); 
                   var ee=popup.getLatLng();
                   //将经纬度存进Textarea中
                   document.getElementById("text").innerHTML+="["+ee.lat+","+ee.lng+"]"; 
                   // 画折线
                   var len=latlngs.length;
                   latlngs[len]=[ee.lat,ee.lng];   
              	   var polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);                    
         }  
         map.on('dblclick', onMapdblClick); 
         /**
         	取消双击放大
         */
        map.doubleClickZoom.disable();