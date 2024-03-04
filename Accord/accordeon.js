const accord = document.getElementsByClassName("accordeon");

for (i = 0; i < accord.length; i++) {
    accord[i].addEventListener("click", function() {
        this.classList.toggle("active");
        const text = this.nextElementSibling;
        if (text.style.display === "block") {
            text.style.display = "none";
        } else {
            text.style.display = "block";
        }
    });
}