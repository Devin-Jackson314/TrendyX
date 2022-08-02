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
        success: function (data) {
            console.log(data, "you have logged your data");
            let userInfo = { ...data }
            for (const userName in userInfo) { 
            if (Object.hasOwnProperty.call(userInfo, userName)) {
                const element = userInfo[userName];
                console.log(userInfo, userName)
                    
            }
            }
           
        },
        error: function (error) {
            console.log(error);
        }
    })
})
//get data func

     


//post data aka create new post 

//delete data aka delete post 

//patch data edit button 

