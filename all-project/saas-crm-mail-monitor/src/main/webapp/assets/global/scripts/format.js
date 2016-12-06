function getWeatherLogo(weather) {
	var route = "assets/global/img/weather";// 文件夹路径
	var style_img = route + "/s_13.png";
	if (weather.indexOf("多云") !== -1 || weather.indexOf("晴") !== -1) {// 多云转晴，以下类同
		// indexOf:包含字串
		style_img = route + "/s_1.png";
	} else if (weather.indexOf("多云") !== -1 && weather.indexOf("阴") !== -1) {
		style_img = route + "/s_2.png";
	} else if (weather.indexOf("阴") !== -1 && weather.indexOf("雨") !== -1) {
		style_img = route + "/s_3.png";
	} else if (weather.indexOf("晴") !== -1 && weather.indexOf("雨") !== -1) {
		style_img = route + "/s_12.png";
	} else if (weather.indexOf("晴") !== -1 && weather.indexOf("雾") !== -1) {
		style_img = route + "/s_12.png";
	} else if (weather.indexOf("晴") !== -1) {
		style_img = route + "/s_13.png";
	} else if (weather.indexOf("多云") !== -1) {
		style_img = route + "/s_2.png";
	} else if (weather.indexOf("阵雨") !== -1) {
		style_img = route + "/s_3.png";
	} else if (weather.indexOf("小雨") !== -1) {
		style_img = route + "/s_3.png";
	} else if (weather.indexOf("中雨") !== -1) {
		style_img = route + "/s_4.png";
	} else if (weather.indexOf("大雨") !== -1) {
		style_img = route + "/s_5.png";
	} else if (weather.indexOf("暴雨") !== -1) {
		style_img = route + "/s_5.png";
	} else if (weather.indexOf("冰雹") !== -1) {
		style_img = route + "/s_6.png";
	} else if (weather.indexOf("雷阵雨") !== -1) {
		style_img = route + "/s_7.png";
	} else if (weather.indexOf("小雪") !== -1) {
		style_img = route + "/s_8.png";
	} else if (weather.indexOf("中雪") !== -1) {
		style_img = route + "/s_9.png";
	} else if (weather.indexOf("大雪") !== -1) {
		style_img = route + "/s_10.png";
	} else if (weather.indexOf("暴雪") !== -1) {
		style_img = route + "/s_10.png";
	} else if (weather.indexOf("扬沙") !== -1) {
		style_img = route + "/s_11.png";
	} else if (weather.indexOf("沙尘") !== -1) {
		style_img = route + "/s_11.png";
	} else if (weather.indexOf("雾") !== -1) {
		style_img = route + "/s_12.png";
	} else {
		style_img = route + "/s_2.png";
	}

	return style_img;
}