//your JS code here. If required.


setInterval(()=>{
	const timer = document.getElementById("timer");
	let date = new Date().toLocaleDateString();
	let time = new Date().toLocaleTimeString();
	timer.innerText = `${date}, ${time}`
	
}, 1000)