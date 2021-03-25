function responsiveFunction(){
  var responsive = document.getElementById("responsiveNav");
  if(responsive.className === "topNavBar"){
    responsive.className +="responsive";
    
  }else{
    responsive.className = "topNavBar";
  }
}


var text = [`<div class="mobile-rows" >
    
    <div class="row-item"><img src="./images/mobile/image-deep-earth.jpg" alt="" >
      <p class="first-p">Deep</p>
      <p class="second-p">earth</p>
    </div>

    <div class="row-item"><img src="./images/mobile/image-night-arcade.jpg" alt="" >
      <p class="first-p">Night </p>
      <p class="second-p">arcade</p>
    </div>

    <div class="row-item"><img src="./images/mobile/image-soccer-team.jpg" alt="" >
      <p class="first-p">Soccer </p>
      <p class="second-p">team VR</p>
    </div>


    <div class="row-item"><img src="./images/mobile/image-grid.jpg" alt="" >
      <p class="first-p">The </p>
      <p class="second-p">grid</p>
    </div>

    <div class="row-item"><img src="./images/mobile/image-from-above.jpg" alt="" >
      <p class="first-p">From up </p>
      <p class="second-p">above VR</p>
    </div>

    <div class="row-item"><img src="./images/mobile/image-pocket-borealis.jpg" alt="" >
      <p class="first-p">Pocket </p>
      <p class="second-p">borealis</p>
    </div>

    <div class="row-item"><img src="./images/mobile/image-curiosity.jpg" alt="" >
      <p class="first-p">The </p>
      <p class="second-p">curiosity</p>
    </div>

    <div class="row-item"><img src="./images/mobile/image-fisheye.jpg" alt="" >
      <p class="first-p">
        Make it </p>
      <p class="second-p">fisheye</p>
    </div>
 
    <button  class="newbtn" type="button">See all</button>
 
  </div>`];

    var div = document.createElement("div");
    div.className = "mobileClass";
    div.innerHTML = text;
    document.getElementById('mobileImg').appendChild(div);


function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

/* Close/hide the sidenav */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}