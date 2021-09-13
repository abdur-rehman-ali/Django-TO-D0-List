console.log("Welcome to cart");

// Targeting cart-button class 
let cart_buttons = document.getElementsByClassName("cart-button");


// Added click event on each button with class 'cart-button' 
for (let index = 0; index < cart_buttons.length; index++) {
  cart_buttons[index].addEventListener("click", function () {
    let product_id = cart_buttons[index].getAttribute("data-product");
    let action = cart_buttons[index].getAttribute("data-action");

    // current_user attribute is declared in main.html 
    if (current_user == "AnonymousUser") {
      console.log("User is not logged in");
    } else {
      cartButtonDataToBackend(product_id,action)
    }
  });
}

// This function will use fetch API to send data to backend
function cartButtonDataToBackend(product_id,action) {
    let data ={
        'product_id':product_id,
        'action':action,
    }

    let url = '/updateItem/';

    fetch(url, {
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response=>response.json() )
    .then(data=>{
        console.log('data:' + data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
    
}
