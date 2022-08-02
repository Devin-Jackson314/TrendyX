//get all my buttons by id 
const $pbutton = $('#pbtn');
const $deletebtn = $('#deletebtn');
const $editbtn = $('#editbtn');
const $gtbtn = $('#gtbtn');

let fireBaseUrl = "https://twitterclone-af72e-default-rtdb.firebaseio.com/";
let jsonEXT = ".json";


//get method
$gtbtn.click(function () {
   $.ajax({
        type: "GET",
        url: `${fireBaseUrl}${jsonEXT}`,
        success: function(data){
           console.log(data, "logging the entire data object")
        },
        error: function(error){
            console.log(error)
        }
    })
})
//get data func

     


//post data aka create new post 

//delete data aka delete post 

//patch data edit button 

