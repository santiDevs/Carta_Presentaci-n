//dark theme variables
const switcherTheme = document.querySelector(".check")
const textElements = document.querySelectorAll(".text");
const root = document.documentElement
 
//color change variables
const colorTextCheckBox = document.querySelectorAll(".text-color-option")

switcherTheme.addEventListener("click", toggletheme)

colorTextCheckBox.forEach(function (checkbox) {

    const text = document.querySelectorAll("p")

    checkbox.addEventListener('click', function () {
        if (checkbox.checked) {

            console.log("active")
            colorTextCheckBox.forEach(function (otherCheckBox) {
                if (otherCheckBox !== checkbox) {
                    otherCheckBox.checked = false
                }
            })
          
            ChangeColorText(checkbox)
        }
    })
})

function toggletheme() {
    const setTheme = switcherTheme.checked ? "dark" : "light"
    root.setAttribute("data-theme", setTheme)
}

function ChangeColorText(checkbox){
    if (textElements.length > 0){
        textElements.forEach(function(text){
            switch (checkbox.value) {
                case "check1":
                    text.style.color = "aliceblue";
                    break;
                case "check2":
                    text.style.color = "darkblue";
                    break;
                case "check3":
                    text.style.color = "darkseagreen";
                    break;
                default:
                    alert('Algo salió mal');
            }            
        })
    }
}

function DefaultValues(checkBoxColor){
    textElements.forEach(function(text){
        text.style.color = "black"
    })    
}