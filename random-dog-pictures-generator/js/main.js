
let generate = document.querySelector('.generate');
let download = document.querySelector('.download');

let dogImage = document.querySelector('.random-dog-image');
let dogBreed = document.querySelector('.dog-breed');
let imageContainer = document.querySelector('.image-con')

let randomDogUrl = "https://dog.ceo/api/breeds/image/random";

generate.addEventListener("click", function(event){
	event.preventDefault();
	//get random dog
	fetch(randomDogUrl, {method: "GET"}).then(response =>{
		//console.log(response.status);
		// parse the response by extracting the json body
	  	return response.json();
	}).then(json_data => {
		//console.log(json_data.message);
		changeDogImage(json_data.message);
	});
});

function changeDogImage(image_string) {
	dogImage.src = image_string;

	dogImage.addEventListener("load", function(event){
		dogImage.style.removeProperty('width');
		dogImage.style.removeProperty('height');
		console.log('img width ' + dogImage.width);
		console.log('img height ' + dogImage.height);
		console.log('con width ' + imageContainer.offsetWidth);
		console.log('con height ' + imageContainer.offsetHeight);
		if (imageContainer.offsetWidth - dogImage.width < imageContainer.offsetHeight - dogImage.height){
			dogImage.style.width = "100%";
			console.log('width wins');
		}
		else {
			dogImage.style.height = "100%"; 
			console.log('height win');
		}
	});
}

