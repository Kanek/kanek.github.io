$().ready(function(){
	var tableHeaders = [];
	for (var i = 1; i <= 4; i++) {
		document.getElementById("Topicos" + i).addEventListener("click", function(){
			this.classList.toggle("active");
			if (this.classList.contains("active")) {
				ShowTableContent(this);
			}else{
				HideTableContent(this);
			}
		});
	}
});

function HideTableContent(element)
{
	var table = element.parentNode.parentNode;

	for (var i = 1; i <= table.rows.length - 1; i++) {
		table.rows[i].classList.add("hidden");
	}
}

function ShowTableContent(element)
{
	var table = element.parentNode.parentNode;

	for (var i = 1; i <= table.rows.length - 1; i++) {
		table.rows[i].classList.remove("hidden");
	}
}