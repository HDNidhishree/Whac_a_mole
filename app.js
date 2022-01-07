const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const timeLeft = document.querySelector("#time-left");
let score = document.querySelector("#score");

let currentTime = timeLeft.textContent;
let timerId = null;
let hitPosition;
let result = 0;

let randomSquare = () => {
	squares.forEach((square) => {
		square.classList.remove("mole");
	});

	let randomSquare = squares[Math.floor(Math.random() * 9)];
	randomSquare.classList.add("mole");
	// assign the id of the randomePos to hitPos
	hitPosition = randomSquare.id;
};

squares.forEach((square) => {
	square.addEventListener("mouseup", () => {
		if (square.id == hitPosition) {
			result = result + 1;
			score.textContent = result;
			hitPosition = null;
		}
	});
});

let moveMole = () => {
	timerId = setInterval(randomSquare, 500);
};

moveMole();

let countDown = () => {
	currentTime = currentTime - 1;
	timeLeft.textContent = currentTime;
	if (currentTime === 0) {
		clearInterval(timerId);
		clearInterval(countDownId);
		alert("GAME OVER! Your final score is : " + result);
	}
};

let countDownId = setInterval(countDown, 1000);
