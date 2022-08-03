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
            //console.log(data, "you have logged your data");
            let userInfo = { ...data }
            for (const userName in userInfo) { 
            if (Object.hasOwnProperty.call(userInfo, userName)) {
                const userNameKey = userInfo[userName];
                console.log(userNameKey, "This is the user name key")
                //console.log(userNameKey.firstName)
                //let userGroup = "<div>" + "<p>" + userNameKey.firstName +
                    //" " + userNameKey.lastName + "</p>" + "</div>"
                //$('#userAppend').append(userGroup)
                //let userNameKey1 = { ...data }

   
                for (const post in userInfo) {
                    if (Object.hasOwnProperty.call(userInfo, post)) {
                        let feed = userInfo[post];
                        console.log(feed.time, "This is the time of the post")
                        console.log(feed, "this is the feed variable")

                        //let userGroup2 = "<div class = 'text-box' style= 'border: 1px solid black; margin-top: 5 px'>" +
                           // "<p>" + userNameKey.firstName + " " + userNameKey.lastName +
                           // "</p>" + "<p>" + feed + "</p>" +
                            //"<p>" + feed.time + "</p>" + "</div>"
                        //$('#userAppend').append(userGroup2)
                  
                    }
                }
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

