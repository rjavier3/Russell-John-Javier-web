
let generate = document.querySelector('.generate');
let download = document.querySelector('.download');

let dogImage = document.querySelector('.random-dog-image');
let dogBreed = document.querySelector('.dog-breed');
let imageContainer = document.querySelector('.image-con')

let randomDogUrl = "https://dog.ceo/api/breeds/image/random";

generate.addEventListener("click", function(event){
	event.preventDefault();
	//getting random dog json
	fetch(randomDogUrl, {method: "GET"}).then(response =>{
		// parse the response by extracting the json body
	  	return response.json();
	}).then(json_data => {
		changeDogImage(json_data.message);

		//taking dog breed from json link
		let imageLink = JSON.stringify(json_data.message);
		let imageLinkArray = imageLink.split('/');
		dogBreed.innerText = imageLinkArray[4];
	});
});

function changeDogImage(image_string) {
	dogImage.src = image_string;

	//making image size fit in container
	dogImage.addEventListener("load", function(event){
		dogImage.style.removeProperty('width');
		dogImage.style.removeProperty('height');
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

