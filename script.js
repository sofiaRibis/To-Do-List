//se volgio il nome del giorno
const week = new Date();
let days = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];
document.getElementById("week-name").innerHTML = days[week.getDay()] + ",";

//se volgio il numero del giorno
const d = new Date();
document.getElementById("day-number").innerHTML = d.getDate();

//se voglio il nome del mese
const month = new Date();
let months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];
document.getElementById("month").innerHTML = months[month.getMonth()];

//* VARIABLES
//launch popup
let LaunchPopupDiv = document.querySelector(".Launch-popup");
let launchBtn = document.querySelector(".Launch-popup button");
let main = document.querySelector("main");

//per quando gli li vengono flaggati
let checkedItems = document.querySelectorAll("label input");
let listItems = document.querySelectorAll("label");
let text = document.querySelectorAll("p .list-item");
let li = document.querySelectorAll("li");

//modal pop up
let addTask = document.querySelector(".addTask");
let modalPopupTask = document.querySelector(".modal-add-task");
let saved = document.querySelector("input[type=submit]");

//create new element
let inputValue = document.querySelector(".popup input");
let listWrapper = document.querySelector("ul");

//delete item
let trash = document.querySelectorAll(".delete");

//label
const label = document.querySelectorAll("label");

//======================================================

//launch popup
launchBtn.addEventListener("click", function () {
	LaunchPopupDiv.style.display = "none";
	main.style.display = "flex";
});

//create new element
saved.addEventListener("click", function () {
	if (inputValue != "") {
		let newToDo = document.createElement("li");
		newToDo.innerHTML = `
                    <label>
                        <input type="checkbox">
                        <p class="list-item">${inputValue.value}</p>
                        <div class="delete">
                        </div>
                    </label>  
                    `;

		inputValue.value = "";
		listWrapper.appendChild(newToDo);
		//to  delete newToDo
		newToDo.querySelector(".delete").addEventListener("click", () => {
			deleteItem(newToDo);
		});

		// newToDo.querySelector("label").addEventListener("click", () => {
		// 	isChecked(newToDo);
		// 	console.log(isChecked(newToDo));
		// });
	}

	modalPopupTask.classList.remove("flex-popup");
});

//modal pop up
addTask.addEventListener("click", function () {
	modalPopupTask.classList.add("flex-popup");
});

//delete todo
label.forEach((element) => {
	const trash = element.querySelector(".delete");
	trash.addEventListener("click", function () {
		// element.style.display = "none";
		deleteItem(element);
	});
});

function deleteItem(element) {
	element.remove();
}

//check todo
// function isChecked(element) {
// 	let click = 0;
// 	if (click % 2 == 0) {
// 		element.style.backgroundColor = "rgba(240, 243, 255, 0.4)";
// 	} else {
// 		element.style.backgroundColor = "#F0F3FF";
// 	}
// }

// label.forEach((element) => {
// 	// element.addEventListener("click", function (e) {
// 	// 	if (e % 2 == 0) {
// 	// 		element.style.backgroundColor = "rgba(240, 243, 255, 0.4)";
// 	// 	} else {
// 	// 		element.style.backgroundColor = "#F0F3FF";
// 	// 	}
// 	// });
// 	element.addEventListener("click", isChecked(element));
// });

// function isChecked(element) {
// 	element.classList.toggle("checked-item");
// 	element.style.color = "red";
// }
