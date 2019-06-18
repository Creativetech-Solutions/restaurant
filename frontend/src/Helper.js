
const API_URL = "http://localhost:4000/";

export function addToCart(data) {
	if (localStorage.getItem("cart_items") === null) {
		localStorage.setItem("cart_items", JSON.stringify([data]));
		console.log(data);
	} else {
		var cart_items = JSON.parse(localStorage.getItem("cart_items"));
		var isExist = false;
		cart_items.forEach(function(item, i){
			console.log(item);
			if(cart_items[i]['productId'] == data['productId']){
				cart_items[i]['quantity'] = data['quantity']
				isExist = true;
			}
		});
		if(!isExist)
			cart_items.push(data);
		localStorage.setItem("cart_items", JSON.stringify(cart_items));
	}
	console.log(localStorage.getItem("cart_items"));
}
