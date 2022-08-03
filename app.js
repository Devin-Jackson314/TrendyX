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
                //console.log(userNameKey)
                //console.log(userNameKey.firstName)
                //let userGroup = "<div>" + "<p>" + userNameKey.firstName +
                    //" " + userNameKey.lastName + "</p>" + "</div>"
                //$('#userAppend').append(userGroup)
                //let userNameKey1 = { ...data }

                //is feed an array now because of previous loop 
                for (const post in userNameKey) {
                    if (Object.hasOwnProperty.call(userNameKey, post)) {
                        const feed = userNameKey[post];
                        console.log(feed)
                        let userGroup2 = "<div class = 'text-box'> style= 'border: 1px solid black; margin-top: 5 px'>" +
                            "<p>" + userNameKey.firstName + " " + userNameKey.lastName +
                            "</p>" + "<p>" + feed.post + "</p>" +
                            "<p>" + feed.time + "</p>" + "</div>"
                        $('#userList').append(userGroup2)
                  
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

