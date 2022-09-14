let history=document.getElementById("history");


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