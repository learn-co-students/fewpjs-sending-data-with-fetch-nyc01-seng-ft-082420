// const { server } = require("sinon")

// Add your code here
document.addEventListener("DOMContentLoaded", function() {
//     function postDog(url, obj) {
//         fetch(url, obj)
//     }
    
//     const dogObj = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "Accept" : "application/json"
//         },
//         body: JSON.stringify({
//             dogName: "Buddy",
//             dogBreed: "Golden Retriever"
//         })
//     }
    
//     postDog('http://localhost:3000/dogs', dogObj)
// 

function submitData(username, email) {
    let formContent = {
        userName: username,
        emailAddress: email
    }

    let dataObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formContent)
    }
    return fetch('http://localhost:3000/users', dataObj)
}



submitData("Floopynoopers", "Tattypro@yahoo.com")

function serverResponse(username, email) {
    let formContent = {
        userName: username,
        emailAddress: email
    }

    let dataObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formContent)

    }

    fetch('http://localhost:3000/users', dataObj)
    .then(function(response) {
        return response.json()
    }).then(function(object){
        appendEl(object)
    }).catch(function(error){
        const body = document.querySelector('body')
        const message = document.createElement('div')
        message.innerHTML = `${error.message}`
        body.appendChild(message)
    })

}

    
    
    
    
    
    function appendEl(element) {
        const body = document.querySelector('body')
        const ele = document.createElement('div')
        ele.innerHTML = `${element.id}`
        body.appendChild(ele)
    }



    serverResponse("Floopynoopers", "Tattypro@yahoo.com")




})

