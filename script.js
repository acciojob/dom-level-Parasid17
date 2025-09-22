//your JS code here. If required.
let level = document.getElementById('level');
let count = 1;
while (level.parentElement != null) {
	level = level.parentElement;
	count++;
}
alert(`The level of the element is: ${count}`);