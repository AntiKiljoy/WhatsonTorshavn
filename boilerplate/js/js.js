/**
 * file: js/js.js
 * purpose: Behaviors
 **/
console.log('Success: JavaScript from js/js.js running!')

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

    function openSvartafoss() {
    window.open(`https://www.google.com/maps/place/Svartafoss+Waterfall/@62.0261447,-6.7833135,17z/data=!4m6!3m5!1s0x48bc2e22784731b5:0x7347831d2c83f913!8m2!3d62.0261411!4d-6.7807392!16s%2Fg%2F11cn6d1bhh?entry=ttu`, '_blank');
  }

  function openKongaminnid() {
    window.open(`https://www.google.com/maps/place/Kongaminni%C3%B0/@62.0120867,-6.7719179,17z/data=!3m1!4b1!4m6!3m5!1s0x48bc2e0306f1d4e9:0xab93ac1b3927c82d!8m2!3d62.0120842!4d-6.769343!16s%2Fg%2F11cn69dsjh?entry=ttu`, '_blank');
  }

  function openNolsoy() {
    window.open(`https://www.google.com/maps?q=loc:62.0229107,-6.7562732`, '_blank');
  }