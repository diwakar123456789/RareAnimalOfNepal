/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/*
 * Taking all image attributes
 */
function imageData(_imageSrc, _imageTitle, _imageDescription) {
               this.imageSrc  =_imageSrc;
               this.imageTitle =_imageTitle;
               this.imageDescription =_imageDescription;
            }
           
            var imageSlider_counter = 0;
            var imageDataList = new Array();
            /*
             * function for sliding image
             */
           
            function Ready() {
                document.getElementById("imageSlider-container").innerHTML = "<img id='imageSlider-image' src=''/>";
                document.getElementById("imageSlider-image").src = imageDataList [imageSlider_counter].imageSrc;
                setInterval(function(){
                    imageSlider_counter = (imageSlider_counter + 1) % imageDataList.length;
                    document.getElementById("imageSlider-image").src = imageDataList[imageSlider_counter].imageSrc;
                },8000);
           }
           
           /*
            * list of image that will be changed in Ready() function
            */
            imageDataList.push(new imageData("images/slide1.jpg", "Title Image 1", "Description."));
            imageDataList.push(new imageData("images/slide2.jpg", "Title Image 2", "Description."));
            imageDataList.push(new imageData("images/slide3.jpg", "Title Image 3", "Description."));
            
/*
 * check whether user write message or not.
 */

function validateForm() {
    var x = document.forms["myForm"]["mail_content"].value;
    if (x == null || x == "") {
        alert("Please leave a message");
        return false;
    }
}



/*
 * check email format
 */

function checkEmail() {

    var email = document.getElementById('txtEmail');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email.value)) {
    alert('Please provide a valid email address');
    email.focus;
    return false;
 }
}

/*
 * alert message to reset all field
 */

function confirm_alert(node) {
    return confirm("Are you sure to clear all field?");
}