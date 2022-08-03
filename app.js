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
                    //console.log(userNameKey, "This is the user name key")
                    //console.log(userNameKey.firstName)
                    //let userGroup = "<div>" + "<p>" + userNameKey.firstName +
                    //" " + userNameKey.lastName + "</p>" + "</div>"
                    //$('#userAppend').append(userGroup)
                    //let userNameKey1 = { ...data }

                    let userInfo2 = { ...data }
                    for (const id in userInfo2) {
                        if (Object.hasOwnProperty.call(userInfo2, id)) {
                            const feed = userInfo2[id].posts;
                            console.log(feed, "this is the feed")

                            //let userGroup2 = "<div class = 'text-box' style= 'border: 1px solid black; margin-top: 5 px'>" +
                            // "<p>" + userNameKey.firstName + " " + userNameKey.lastName +
                            // "</p>" + "<p>" + feed + "</p>" +
                            //"<p>" + feed.time + "</p>" + "</div>"
                            //$('#userAppend').append(userGroup2)

                         for (const post in feed) {
                            if (Object.hasOwnProperty.call(feed,post)) {
                                const postinfo = feed[post];
                                console.log(postinfo, "This is your post info");
                                console.log(postinfo.id, "This is your post id");
                                console.log(postinfo.time, "This is the time");
                               
                                
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
})
//get data func

     


//post data aka create new post 

//delete data aka delete post 

//patch data edit button 

