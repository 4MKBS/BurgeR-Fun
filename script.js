
function plus(n) {
	let food = document.createElement("div");
	let end = document.querySelector("#end");

	food.style.width = "150px";
	food.style.height = "30px";
	food.style.margin = "2px";
	food.style.borderRadius = "2px";
	if (n === 1) {
		food.setAttribute("id", "ruti");
		food.style.backgroundColor = 'rgb(200,200,200)';
	} else if (n == 2) {
		food.setAttribute("id", "salad");
		food.style.backgroundColor = '#06d82d';
	} else {
		food.setAttribute("id", "amis");
		food.style.backgroundColor = 'orange';
	}
	const burger = document.getElementById("main").insertBefore(food, end);
	return burger;
}
let rutip = document.querySelector("#rutiplus");
function minus(name) {
	let food = document.querySelector(`#${name}`);
	food.remove();
}