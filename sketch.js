const cars = []
let x = []
let y = []
let dir = []
let vueltas = []
let fondo
let ganador
let	hdi = 25
let	vdi = 20
let	hab = 20
let	vab = 25
let aui = 0
let r = 0

function preload() {
	
	cars[0] = loadImage(`images/car1de.png`)
	cars[1] = loadImage(`images/car2de.png`)
	cars[2] = loadImage(`images/car3de.png`)
	cars[3] = loadImage(`images/car4de.png`)
	cars[4] = loadImage(`images/car5de.png`)

	cars[5] = loadImage(`images/car1ab.png`)
	cars[6] = loadImage(`images/car2ab.png`)
	cars[7] = loadImage(`images/car3ab.png`)
	cars[8] = loadImage(`images/car4ab.png`)
	cars[9] = loadImage(`images/car5ab.png`)

	cars[10] = loadImage(`images/car1iz.png`)
	cars[11] = loadImage(`images/car2iz.png`)
	cars[12] = loadImage(`images/car3iz.png`)
	cars[13] = loadImage(`images/car4iz.png`)
	cars[14] = loadImage(`images/car5iz.png`)

	cars[15] = loadImage(`images/car1ar.png`)
	cars[16] = loadImage(`images/car2ar.png`)
	cars[17] = loadImage(`images/car3ar.png`)
	cars[18] = loadImage(`images/car4ar.png`)
	cars[19] = loadImage(`images/car5ar.png`)

	fondo = loadImage(`images/pista.jpg`)
}	


function setup() {

	createCanvas(windowWidth, windowHeight);
	frameRate(30)

	aux = width/2
	auy = 30
	for(let i = 0; i < 5; i++)
	{
		x[i] = aux
		aux -= 25
		y[i] = auy
		auy += 10
		dir[i] = 1
		vueltas[i] = 0
	}
}

function draw() {

	image(fondo, 0, 0, width, height)

	for(let i = 0; i < 5; i++)
	{		
		r = Math.floor(random(4, 20))
		aui = i

		if (x[i] === width/2 && vueltas[i] === 2 ) 
		{
			ganador = loadImage(`images/car${i + 1}ar.jpg`)
			image(ganador, width/2, height/2 , 72, 72)
		} else {

			vueltas[i]+=1
		}

		if(dir[i] === 1)
		{
			if(x[i] < 220)
			{
				image(cars[i], x[i] += r, y[i] -= r, hdi, vdi)

			} else {

				if(x[i] < width - 300)
				{
					image(cars[i], x[i] += r, y[i], hdi, vdi)

				} else { 

					if(x[i] < width - 150)
					{
						image(cars[aui + 5], x[i] += r, y[i] += r, hab, vab)

					} else { dir[i] = 2 } 
				}
			}
		}

		if(dir[i] === 2)
		{
			if(y[i] < height - 150)
			{
				image(cars[aui + 5], x[i], y[i] += r, hab, vab)

			} else { 

				if(y[i] < height - 100 )
				{
					image(cars[i], x[i] -= r, y[i] += r, hdi, vdi)

				} else { dir[i] = 3 } 
			}
		}

		if (dir[i] === 3) 
		{
			if(x[i] > width - 100)
			{
				image(cars[aui + 10], x[i] -= r, y[i] += r, hdi, vdi)

			} else { 

				if(x[i] > 200)
				{
					image(cars[aui + 10], x[i] -= r, y[i], hdi, vdi)

				} else { dir[i] = 4}
			}
		}

		if (dir[i] === 4) 
		{
			if(y[i] > height - 150)
			{
				image(cars[aui + 15], x[i] -= r, y[i] -= r, hab, vab)

			} else { 

				if(y[i] > 150)
				{
					image(cars[aui + 15], x[i], y[i] -= r, hab, vab)

				} else { dir[i] = 1}
			}
		}
	}
}
