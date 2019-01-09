function route(pathname, directory) {
	var contentType;
	var adress = directory + pathname;

	if (pathname == "/" || pathname == "/index.html") {
		console.log(`html ok`);
		exports.contentType = "text/html";
		adress = directory + "/index.html";
	}else if(/\.css$/gi.test(adress)){
		console.log(`css ok`);
		exports.contentType = "text/css";
	}else if((/\.woff$/gi.test(adress)) || (/\.woff2$/gi.test(adress))){
		console.log(`woff ok`);
		exports.contentType = "application/font-woff";
	}else if(/\.jpg$/gi.test(adress)) {
		console.log("jpg ok");
		exports.contentType = "image/jpeg";
	}else if(pathname == "/favicon.ico") {
		console.log("favicon ok");
		exports.contentType = "image/vnd.microsoft.icon";
	}else if(/\.png$/gi.test(adress)) {
		console.log("png ok");
		exports.contentType = "image/png";
	}else{
		exports.contentType = "text/html";
		adress = directory + "/index.html";
	}
	exports.adress = adress;
}

exports.route = route;