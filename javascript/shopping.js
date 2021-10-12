document.addEventListener("DOMContentLoaded", () => {
	
	/* Add "buyProduct" functionality to each "Comprar" button
	*/
	const input_list = document.getElementsByTagName('input');
	for (let i = 0; i < input_list.length; i++) {
		const item = input_list.item(i);
		item.addEventListener("click", buyProduct);
	}
	
	/* Add "closeAlert" functionality to X button in "buy__alert" container
	*/
	document.getElementById("close__alert").addEventListener("click", closeAlert);

	/* Display the product's information in "buy__alert" container
	*/
	function buyProduct (product) {
		const p = product.path[3];
		const alert = document.getElementById("buy__alert");
		alert.getElementsByClassName("product__name")[0].innerHTML = p.dataset.name;
		alert.getElementsByClassName("product__description")[0].innerHTML = p.dataset.description;
		alert.getElementsByClassName("product__price")[0].innerHTML = p.dataset.price;
		alert.style.opacity = 1;	// Set container's opacity to 1
		alert.style.display = "block";	// Display container in the screen
	}

	/* Close "buy__alert" container
	*/
	function closeAlert () {
		const alert = document.getElementById("buy__alert");
		let opacity = alert.style.opacity;
		var intervalId = setInterval(() => {
			if (opacity > 0) {
				opacity = opacity - 0.1;
				alert.style.opacity = opacity;	// Decrease container's opacity
			} else {
				clearInterval(intervalId);
				alert.style.display = "none";	// Remove container from the screen
			}
		}, 20);
	}
});

