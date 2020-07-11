let body = document.querySelector("body");
let h1 = document.querySelector("h1");
let bubble = [].slice.call(document.querySelectorAll(".bubble"));
let bubbleText = [].slice.call(document.querySelectorAll(".bubbles-con > div p"));

let bubbleTH = document.querySelector(".bubbles-con div:first-child");
let bubbleA = document.querySelector(".bubbles-con div:nth-child(2)");
let bubbleN = document.querySelector(".bubbles-con div:nth-child(3)");
let bubbleKS = document.querySelector(".bubbles-con div:nth-child(4)");
let bubbleG = document.querySelector(".bubbles-con.bottom-con div:first-child");
let bubbleOO = document.querySelector(".bubbles-con.bottom-con div:nth-child(2)");
let bubbleGL = document.querySelector(".bubbles-con.bottom-con div:nth-child(3)");
let bubbleE = document.querySelector(".bubbles-con.bottom-con div:nth-child(4)");


bubbleTH.addEventListener("click", function(event){
	event.preventDefault();
	body.style["background-image"] = "url(https://c1.wallpaperflare.com/preview/53/864/35/eggs-white-eggs-shell-breakfast.jpg)"
});

bubbleA.addEventListener("click", function(event){
	event.preventDefault();
	body.style["background-image"] = "url(https://images.freeimages.com/images/large-previews/a3d/broken-eggshell-1320153.jpg)"
});

bubbleN.addEventListener("click", function(event){
	event.preventDefault();
	body.style["background-image"] = "url(https://andygrimshaw.com/wp-content/uploads/2015/10/Egg-Yolk-on-Black.jpg) "
});

bubbleKS.addEventListener("click", function(event){
	event.preventDefault();
	body.style["background-image"] = "url(https://wallpapercave.com/wp/wp4411660.jpg)"
});

bubbleG.addEventListener("click", function(event){
	event.preventDefault();
	body.style["background-image"] = "url(https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/1200px-FullMoon2010.jpg)"
});

bubbleOO.addEventListener("click", function(event){
	event.preventDefault();
	body.style["background-image"] = "url(https://www.universetoday.com/wp-content/uploads/2016/04/titan_large.jpg)"
});

bubbleGL.addEventListener("click", function(event){
	event.preventDefault();
	let youSure = confirm("NO! continue anyway?");
	if (youSure === true) {
	  	h1.style["color"] = "black";
	  	h1.innerText = "Bingle";

		bubble.forEach(function(part, index, theArray){
			theArray[index].style["background-color"] = "black";
		});		
		bubbleText.forEach(function(part, index, theArray){
			theArray[index].style["color"] = "black";
		});
	}
	else{
		h1.style["color"] = null;

		bubble.forEach(function(part, index, theArray){
			theArray[index].style["background-color"] = null;
		});

		bubbleText.forEach(function(part, index, theArray){
			theArray[index].style["color"] = null;
		});
	}
});

bubbleE.addEventListener("click", function(event){
	event.preventDefault();
	body.style["background-image"] = "url(https://thumbs.gfycat.com/DapperAptKudu-size_restricted.gif)";
});
 