function dropDownDisplay(event) {
	const dropDownContainer = event.target.nextElementSibling;

	const dropDownDisplayVal =
		event.target.nextElementSibling.attributes[1].value;

	if (dropDownDisplayVal === "display: none;") {
		dropDownContainer.style.display = "flex";
	} else {
		dropDownContainer.style.display = "none";
	}
}
