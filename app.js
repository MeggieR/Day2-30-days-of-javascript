// set inital value to zero
let count = 0;
// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    value.textContent = count;
  });
});


function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
      minutes = parseInt(timer / 60, 10)
      seconds = parseInt(timer % 60, 10);
  
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
  
      display.textContent = minutes + ":" + seconds;
  
      if (--timer < 0) {
        timer = duration;
      }
    }, 1000);
  }
  
  var fiveMinutes = 60 * 5,
  display = document.querySelector('#time');
  startTimer(fiveMinutes, display);


  function startTime() {
    //set time i nhours, minutes and seconds.
    const d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();

    //set m and s to have an added zero in front.
    m = addZero(m);
    s = addZero(s);

    //attach the calculations to the 'txt' in html
    document.getElementById("txt").innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
  }
function addZero(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

 