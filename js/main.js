const menuCheckBox = document.getElementById("menu-checkbox");
const container = document.getElementById("container");

menuCheckBox.addEventListener("change", function() {
    if(menuCheckBox.checked) {
        document.body.style.overflow = 'hidden'
        container.classList.add('container-disabled');
    } else {
        document.body.style.overflow = 'auto'
        container.classList.remove('container-disabled')
    }
})

container.addEventListener("click", function() {
    console.log(menuCheckBox.checked)
    if(menuCheckBox.checked) {
        menuCheckBox.click();
        menuCheckBox.checked = false;
    }
})