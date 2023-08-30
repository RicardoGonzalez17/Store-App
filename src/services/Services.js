const BASE_URL = 'https://ecommerce-json-jwt.onrender.com'
//const BASE_URL = 'http://localhost:3000'

var requestOptionsget = {
    method: '',
    headers: '',
    redirect: 'follow'
  };
  var requestOptionspost = {
    method: '',
    headers: {"Content-Type": "application/json"},
    body: '',
    redirect: 'follow'
  };

const loginUserService = (data)=>{
    
    requestOptionspost.method = 'POST'
    requestOptionspost.body = JSON.stringify({
      "email": data.email,
      "password": data.password
    });
    
 
    return fetch(`${BASE_URL}/login`, requestOptionspost)
      .then(response => response.text())
      .catch(error => console.log('error', error));
    
}

const getInfoUserLogin = (token) => {
    requestOptionsget.method = 'GET'
    requestOptionsget.headers =  {"Content-Type": "application/json", "Authorization": `${token}`}

    return fetch(`${BASE_URL}/users/me`, requestOptionsget)
      .then(response => response.text())
      .catch(error => console.log('error', error));
};

const registerUserService = ((data)=>{
    fetch(`${BASE_URL}/register`, data)
    .then(response => response.json)
    .then(data=>{
        return data
    })
    .catch(console.log('Error'))
})


export{
    loginUserService,
    getInfoUserLogin,
    registerUserService
}