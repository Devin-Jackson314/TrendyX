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
              "-kl290and8j": {
        "firstName": "Cream",
        "lastName": "Phantom",
        "age": "53",
        "userName":"GlideinaGhost",
        "posts": {
            "-Q12ndk8udn":{
            "id":1,
            "time":"2:42pm",
            "post":"Ghost in the wind",
            "likes":"771",
            "dislikes":"150"
        },
        "-M3hdjJkson":{
            "id":2,
            "time":"2:53pm",
            "post":"Crazy Ride gotta run",
            "likes":"850",
            "dislikes":"45"
        },
        
        "-Vag3h4kedH":{
            "id":3,
            "time":"5:30pm",
            "post":"Stars in the ceiling",
            "likes":"888",
            "dislikes":"5"
        }}
    },
        })
    })
})

//delete data aka delete post
$deletebtn.click(function () {
    $.ajax({
        type: "DELETE",
        url: `${fireBaseUrl}-7dhek2nd9k${jsonEXT}`,
        success: (data) => {
            console.log("Deleted Successfully" + data)
        },
        error: (error) => {
            console.log(error)
        }
        
    })
})

//patch data edit button 
$editbtn.click(function () {
    $.ajax({
        type: "PATCH",
        url: `https://twitterclone-af72e-default-rtdb.firebaseio.com/-7dhek2nd9k/posts/-10dkfn4n5t/post${ jsonEXT }`,
        data: JSON.stringify({
            post:"Testing To See If This Works"
        }),
        success: (data) => {
            console.log(data)
         },
        error: (error) => {
            console.log(error)
        }
    })
})

