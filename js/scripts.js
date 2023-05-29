addStudent = () => {
 let name = document.getElementById("name").value
 let email = document.getElementById("email").value
 let number = +document.getElementById("number").value
 let select = document.getElementById("select").value
 let check = document.getElementById("check").value

if (check = true){
   alert("Welcome " + name + "! Thank you for your interest in " + select + "! We will contact you via the email provided: " + email + ", or alternatively on the phone number: " + number + ".")
}
else{
    alert("Well, well, well... why don't you want to sign up for our newsletter... you don't seem to be that interested Name & Surname!  If you want to sign up, you better CHECK that newsletter box! ")
}

}