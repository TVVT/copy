if (document.readyState === "complete") { copyToolInit(); }else{
	alert('页面没有加载完，请稍后...')
}

function copyToolInit(){
	var iframe = document.createElement('iframe');

	    iframe.style.display = "none";
	    iframe.src = 'http://localhost:9000/middle.html';

    document.body.appendChild(iframe);

	 	// var iframe = document.querySelector('iframe');

    var win = iframe.contentWindow;

		// the window hasn't changed its location.	
	iframe.onload = function(){
		var title = document.title;
		win.postMessage(title, "http://localhost:9000");
	}

	function receiveMessage(event){
	  // Do we trust the sender of this message?  (might be
	  // different from what we originally opened, for example).
	  if (event.origin !== "http://localhost:9000")
	    return;

	  // event.source is popup
	  // event.data is "hi there yourself!  the secret response is: rheeeeet!"
	  console.log('receive message from ' + event.origin);
	}


	window.addEventListener("message", receiveMessage, false);
}

