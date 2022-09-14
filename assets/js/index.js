let history=document.getElementById("history");

function myFunction() {
    var x = document.getElementById("navigation");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  let goBack=()=> {
    window.history.back()
  }

  if(history.innerHTML !== null){
    history.innerHTML= `
    <p><i class="fa fa-history"></i></p>

    <h4>You have not appllied for any exeat</h4>
    <button class="btn btn-danger " onclick="goBack()">Apply for exeat<i class="fa fa-angle-double-right"></i></button>
    `
  }