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
  const token = JSON.parse(localStorage.getItem('token'))

const newProduct = (data)=> {
    requestOptionspost.headers =  {"Content-Type": "application/json", "Authorization": `Bearer ${token.token}`}
    requestOptionspost.method = 'POST'
    requestOptionspost.body = JSON.stringify({
      "product_name": data.product_name,
      "description": data.description,
      "price": data.price,
      "category": data.category,
      "brand": data.brand,
      "sku": data.sku,
      "image": data.image
    });
    fetch(`${BASE_URL}/items`, requestOptionspost)
    .then(response => response.json())
    .catch(error => console.log('error', error));
}

export {
    newProduct
}

