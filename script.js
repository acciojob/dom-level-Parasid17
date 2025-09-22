//your JS code here. If required.
let level = document.getElementbyId('level');
let count = 0;
while (level.parentElement != null) {
	level = level.parentElement;
	count++;
}
alert(`The level of the element is: ${count}`);