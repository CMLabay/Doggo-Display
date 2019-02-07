'use strict';
let numImage = 0;



//retrieve the images
function getImages(numImage){
    console.log('inside getImages. numImage ='+ numImage);
    for(let i = 0; i < numImage; i++){
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(responseJson => 
                displayImages(responseJson))
            .catch(error => alert('Whoops! Something went wrong!'));
    }
}

//display the images 
function displayImages(responseJson){
    const newImg = `<img class="js-image-result" src="${responseJson.message}">`
    $('.image-display').append(newImg);
}

//event listener for the button
function handleForm(){
    $('form').submit(event=> {
        event.preventDefault();
        $('.image-display').empty();
        numImage = $('#num-pics').val();
        if(numImage > 50 || numImage < 1){
            alert('Valid numbers are 1 through 50');
        }
        else{
            getImages(numImage);
        }
    });  
}
//when the page loads
$(function(){
    console.log('the page is loaded.');
    handleForm();
});