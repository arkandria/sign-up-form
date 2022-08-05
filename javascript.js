



function checkPassword() {
    let pass1 = document.getElementById("pass");
    let pass2 = document.getElementById("pass-confirm");
    let match = document.getElementById("match");
    if (pass1.value!=='' || pass2.value!==''){
        if (pass1.value===pass2.value) {
            pass1.style.borderColor = "rgb(224, 218, 215)";
            pass2.style.borderColor = "rgb(224, 218, 215)";
            match.style.display = "none";
        } else {
            pass1.style.borderColor = "red";
            pass2.style.borderColor = "red";
            match.style.display = "block";
        }
    } 
}

