mui.init({
				
			mui.plus(function() {
				//读取本地存储，检查是否为首次启动
				var showGuide = plus.storage.getItem("lauchFlag");
				//仅支持竖屏显示
				plus.screen.lockOrientation("portrait-primary");
				if(showGuide) {
					//有值，说明已经显示过了，无需显示；
					//关闭splash页面；
					plus.navigator.closeSplashscreen();
					plus.navigator.setFullscreen(false);
					//预加载
					preload();
				} else {
					//显示启动导航
					mui.openWindow({
						id: 'guide',
						url: 'guide.html',
						styles: {
							popGesture: "none"
						},
						show: {
							aniShow: 'none'
						},
						waiting: {
							autoShow: false
						}
					});
					//延迟的原因：优先打开启动导航页面，避免资源争夺
					setTimeout(function() {
						//预加载
						preload();
					}, 200);
				}