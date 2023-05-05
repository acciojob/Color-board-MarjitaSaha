//your JS code here. If required.
// Get the container element
const container = document.querySelector('.container');

// Create 800 boxes dynamically
for (let i = 0; i < 800; i++) {
	const box = document.createElement('div');
	box.classList.add('square');
	container.appendChild(box);

	// Add event listener to change the background color on hover
	box.addEventListener('mouseover', () => {
		box.style.backgroundColor = 'yellow';
	});

	// Add event listener to revert the background color after 1 second
	box.addEventListener('mouseout', () => {
		setTimeout(() => {
			box.style.backgroundColor = 'white';
		}, 1000);
	});
}
