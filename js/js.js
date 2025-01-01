let datajson = [];

fetch('./js/data.json')
  .then(response => response.json())
  .then(data => {
    datajson = data;
  
    initializeEventListeners(); 
  })
  .catch(error => console.error('Error fetching JSON:', error));


function initializeEventListeners() {
  let send = document.querySelector(".submit");
  let aye = document.querySelector(".aya");

  send.addEventListener("click", function () {
    event.preventDefault(); 
    let nameinput = document.querySelector(".nameinput").value;
    let pas = document.querySelector(".pas").value;
    let hide = document.querySelector(".hide");
    let hidepas = document.querySelector(".hidepass");

    if (nameinput === "") {
      hide.innerHTML = "Your Name is required";
    } else {
      hide.innerHTML = "";
    }

    if (pas === "") {
      hidepas.innerHTML = "Your password is required";
    } else {
      hidepas.innerHTML = "";
    }


    if (nameinput !== "" && pas !== "") {
      const user = datajson.some(
        (user) => user.name === nameinput && user.password === pas 
      );

      if (user) {
        alert("Login successful!");
        window.location.href = "./hml/index2.html"
      } else {
        alert("Invalid username or password.");
      }
    }
  });

  aye.addEventListener("click", function () {
    let pas = document.getElementById("p");
    if (pas.type === "password") {
      pas.type = "text";
    } else {
      pas.type = "password";
    }
  });
}
let singup=document.querySelector(".sing-up")
let haveaccount=document.querySelector(".have-account")
singup.addEventListener("click",function () {
let Loginpage=document.querySelector(".log-in-page")
let singpage=document.querySelector(".sing-up-page")
if (singpage.classList.contains("hidee")) {
  singpage.classList.remove("hidee")
  Loginpage.classList.add("hidee")
  
} 
   
})
haveaccount.addEventListener("click",function () {
  let Loginpage=document.querySelector(".log-in-page")
  let singpage=document.querySelector(".sing-up-page")
  if (Loginpage.classList.contains("hidee")) {
    Loginpage.classList.remove("hidee")
    singpage.classList.add("hidee")
    
  } 
     
  })

