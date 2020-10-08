// Add your code here
function submitData(newName, newEmail){
  
  let formData = {
    newName,
    newEmail
  }

  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept":"application/json"
    },
    body: JSON.stringify(formData)
  }
  
   return fetch('http://localhost:3000/users', configObj)
    .then(response => response.json())
    .then(json => renderData(json))
    .catch(error => alert(error.message))
}

function renderData(data){
  document.querySelector("body").append(data)
}