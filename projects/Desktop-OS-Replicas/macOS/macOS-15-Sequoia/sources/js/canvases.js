//! Battery Label Canvas

const canvases = document.querySelectorAll('#batteryLabelCanvas');

let batteries = [
    {
        icon: 'mac',
		batt: 93,
		charging: false
    },
    {
        icon: 'ipad',
		batt: 12,
		charging: false
    },
    {
        icon: 'iphone',
		batt: 86,
		charging: true
    },
	{
		icon: 'airpod-pro-case',
		batt: 90,
		charging: true
	}
];

function createBatteries() {
	document.getElementById('bigbattery').innerHTML = '';
	for(let i=0;i<4;i++) {
		const gridEl = document.createElement('div');
		gridEl.classList.add('batteryGridEl');

		const batteryLabel = document.createElement('div');
		batteryLabel.classList.add('batteryLabel');

		const batteryText = document.createElement('div');
		batteryText.classList.add('batteryText');

		if(batteries[i]) {
			const battery = batteries[i];
			let icon = '';

			switch(battery.icon) {
				case 'mac':
					icon = './sources/image/icons/symbols/SidebarLaptop.png'
					break;
				case 'ipad':
					icon = './sources/image/icons/symbols/SidebariPad.png'
					break;
				case 'iphone':
					icon = './sources/image/icons/symbols/SidebariPhone.png'
					break;
				case 'airpod-pro-case':
					icon = './sources/image/icons/symbols/Airpods-Pro-Case.png'
					break;
				case 'apple-watch':
					icon = './sources/image/icons/symbols/AppleWatch.png'
					break;
			}

			const img = document.createElement('img');
			img.src = icon;

			const canv = document.createElement('canvas');

			batteryLabel.appendChild(img);
			batteryLabel.appendChild(canv);

			canvSetup(canv, battery.batt);
			batteryText.innerText = battery.batt + '%'

			
		} else {
			const canv = document.createElement('canvas');

			batteryLabel.appendChild(canv);
			batteryText.innerHTML = '&nbsp;';

			canvSetup(canv, 0);
		}

		if(batteries[i].charging) {
			const img = document.createElement('img');
			img.src = './sources/image/icons/symbols/bolt.fill.png';
			img.classList.add('chargeBolt');
			batteryLabel.appendChild(img);
		}

		gridEl.appendChild(batteryLabel);

		gridEl.appendChild(batteryText);

		document.getElementById('bigbattery').appendChild(gridEl)
	}
}

function canvSetup(canvas, percent) {
	const ctx = canvas.getContext('2d');
	const deg2FDeg = (degrees) => (degrees - 90) * (Math.PI / 180);
	const bP2Deg = (percent) => (360 / 100) * percent;

	function colorBP(percent) {
		if(percent <= 10) {
			return '#eb3137'
		}
		if(percent <= 20) {
			return '#fecd0b'
		}
		return '#27cd41'
	}

	let batteryPercent = percent;

	const circleSize = 50;
	const thickness = 10;

	canvas.width = 110;
	canvas.height = 110; 
	window.requestAnimationFrame(render);

	function render() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		const step = 360 / 24;
		
		ctx.fillStyle = 'black';

		for (let i = 0; i < 360; i+=step) {
			const x = Math.cos(i * (Math.PI / 180)) * circleSize;
			const y = Math.sin(i * (Math.PI / 180)) * circleSize;
			
			ctx.beginPath();
			ctx.arc(canvas.width / 2, canvas.height / 2, circleSize, deg2FDeg(0), deg2FDeg(360));
			ctx.strokeStyle = '#ffffff03';
			ctx.lineWidth = thickness;
			ctx.lineCap = 'round';
			ctx.stroke();

			ctx.beginPath();
			ctx.arc(canvas.width / 2, canvas.height / 2, circleSize, deg2FDeg(0), deg2FDeg(bP2Deg(batteryPercent)));
			ctx.strokeStyle = colorBP(batteryPercent);
			ctx.lineWidth = thickness;
			ctx.lineCap = 'round';
			ctx.stroke();
		} 

		window.requestAnimationFrame(render);
	}
}

let batteryInterval = setInterval(createBatteries, 1000);