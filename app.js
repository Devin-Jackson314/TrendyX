//get all my buttons by id 
const $pbutton = $('#pbtn');
const $deletebtn = $('#deletebtn');
const $editbtn = $('#editbtn');
const $gtbtn = $('#gtbtn');
const $signinbtn = $('#signinbtn');

let fireBaseUrl = "https://twitterclone-af72e-default-rtdb.firebaseio.com/";
let jsonEXT = ".json";


//get method
//$gtbtn.click
(function () {
    $.ajax({
        type: "GET",
        url: `${fireBaseUrl}${jsonEXT}`,
        success: function (data) {
            console.log(data, "you have logged your data");
            let userInfo = { ...data }
            for (const userName in userInfo) {
                if (Object.hasOwnProperty.call(userInfo, userName)) {
                    const userNameKey = userInfo[userName];
                    console.log(userNameKey, "This is the user name key")
                    console.log(userNameKey.firstName)
                    let userGroup = "<div>" + "<p>" + userNameKey.firstName +
                        " " + userNameKey.lastName + "</p>" + "</div>"
                    $('#userAppend').append(userGroup)
                    let userNameKey1 = { ...data }
                    let userInfo2 = { ...data }
                    for (const id in userInfo2) {
                        if (Object.hasOwnProperty.call(userInfo2, id)) {
                            const feed = userInfo2[id].posts;
                            console.log(feed, "this is the feed")
                        
                            for (const post in feed) {
                                if (Object.hasOwnProperty.call(feed, post)) {
                                    const postinfo = feed[post];
                                    console.log(postinfo, "This is your post info");
                                    console.log(postinfo.id, "This is your post id");
                                    console.log(postinfo.time, "This is the time");
                                    console.log(postinfo.post, "This is your post title")
                            
                                    let userGroup2 = "<div class = 'text-box' style= 'border: 1px solid black; margin-top: 5 px'>" +
                                        "<p>" + userNameKey.firstName + " " + userNameKey.lastName +
                                        "</p>" + "<p>" + postinfo.post + "</p>" +
                                        "<p>" + postinfo.time + "</p>" + "</div>"
                                    $('#userAppend').append(userGroup2)
                               
                                }
                            }
                  
                        }
                    }
                }
            }
           
        },
        error: function (error) {
            console.log(error);
        }
    })
}());


//get data IFFY
// (function(){
//     $.ajax({
//         type: "GET",
//         url: `${fireBaseUrl}${jsonEXT}`,
//         success: function (data) {
//             let userInfo = { ...data }
//             for (const userName in userInfo) {
//                 if (Object.hasOwnProperty.call(userInfo, userName)) {
//                     const userNameKey = userInfo[userName];

//                     let userInfo2 = { ...data }
//                     for (const id in userInfo2) {
//                         if (Object.hasOwnPropery.call(userInfo2, id)) {
//                             const feed = userInfo2[id].posts;

//                             for (const post in feed) {
//                                 if (Object.hasOwnProperty.call(feed, post)) {
//                                     const postinfo = feed[post];

//                                     let userGroup2 = "<div class = 'text-box' style= 'border: 1px solid black; margin-top: 5 px'>" +
//                                         "<p>" + userNameKey.firstName + " " + userNameKey.lastName +
//                                         "</p>" + "<p>" + postinfo.post + "</p>" +
//                                         "<p>" + postinfo.time + "</p>" + "</div>";
//                                     $('#userAppend').append(userGroup2);
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
            

            
//         },
//         error: function(error){
//             console.log(error)
//         }
//     })
// })();

//login functionality
$signinbtn.click(function () {
    let currentUser = $('#username').val()
    $.ajax({
        type: "GET",
        url: `${fireBaseUrl}${currentUser}${jsonEXT}`,

        success: function (data) {
            if (data === null) {
                alert("User not reconigzed")
            } else {
                console.log("User exists")
            }
        },
        error: function (error) {
            console.log(error)
        }
    })
})
     


//post data aka create new post 
$pbutton.click(function () {
    $.ajax({
        type: "POST",
        url: `${fireBaseUrl}${jsonEXT}`,
        data: JSON.stringify({
              "-Yahsndjekd": {
        "firstName": "Christian",
        "lastName": "Pastor",
        "age": "32",
        "userName":"ProgressivePastor",
        "posts": {
            "-kekemdnfng":{
            "id":1,
            "time":"2:32",
            "post":"Life Changes",
            "likes":"7",
            "dislikes":"10"
        },
        "-kelrnamsju":{
            "id":2,
            "time":"2:42",
            "post":"Ball of Fire",
            "likes":"50",
            "dislikes":"2"
        },
        
        "-nkwiqouyts":{
            "id":3,
            "time":"4:30",
            "post":"A look inside",
            "likes":"30",
            "dislikes":"5"
        }}
    },
        })
    })
})

//delete data aka delete post 

//patch data edit button 

