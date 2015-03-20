var ios = TT.require("module.ios");

ios(function(bridge){
	var uniqueId = 1;
	bridge.init(function(message, responseCallback){
		var data = {'Javascript Response':'Wee'};
		responseCallback(data);
	});

	bridge.registerHandler('testCallHandler',function(data, responseCallback){
		var responseData = {"a":"1"};
		responseCallback(responseData);
	});

	var button = document.getElementById("buttons").appendChild(document.createElement('button'));
	button.innerHTML = 'Send message to Objc';
	button.onclick= function(e){
		e.preventDefault();
		var data = 'Hello from JS button';
		bridge.send(data, function(responseData){
			
		});
	}

	var callbackButton = document.getElementById("buttons").appendChild(document.createElement('button'));
	callbackButton.innerHTML = 'Fire testObjCallback';
	callbackButton.onclick = function(e){
		e.preventDefault();
		bridge.callHandler("testJavascriptHandler",{'foo':'bar'},function(response){
			console.log(response);
		});
	}
});
