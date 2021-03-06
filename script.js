


const refreshRate = 1000 / 60;
const maxXPosition = 400;

angle = 0;
speed = 0;
target_fixed = 20;
count =0;
flag =0;
bar = document.getElementById("slider");


function up() {
  if (target_fixed<180) {
  target_fixed = target_fixed+10;
  bar.scrollLeft = (target_fixed/180*4)*bar.clientWidth;
  console.log(bar.scrollLeft);
}
}

function down() {
    if (target_fixed>10) {
  target_fixed = target_fixed-10;
  bar.scrollLeft = (target_fixed/180*4)*bar.clientWidth;
  console.log(bar.scrollLeft);
}
}

function arrow_control(event) {
  var x = event.which || event.keyCode;
  console.log(x);
  if (x==38) {up()};
  if (x==40) {down()};
}

function get_scroll() {
bar = document.getElementById("slider");
//return Math.round((bar.scrollLeft/bar.clientWidth)+1)/5*170;
return ((bar.scrollLeft/bar.clientWidth))/4*180;
}


function changeShadow(angle) {
  shadow = document.getElementById('shadow');
  bottom = document.getElementById("bottom_captor");
  filler = document.getElementById("filler");

if (angle<50 && flag != 1) {
  shadow.setAttribute("style", "fill:rgba(0,255,0,0.1)");
  bottom.setAttribute("style", "fill:PaleGreen")
  flag = 1;

} else if (angle<140 && angle>50 && flag != 2) {
  shadow.setAttribute("style", "fill:rgba(150,100,0,0.1)");
  bottom.setAttribute("style", "fill:SandyBrown")
    flag = 2;
} else if (angle<160 && angle>140 && flag != 3){
  shadow.setAttribute("style", "fill:rgba(255,0,0,0.1)");
  bottom.setAttribute("style", "fill:tomato")
  filler.classList.remove("red_alert");
  flag = 3;
} else if (angle>160 && flag != 4 ){
  filler.className += " red_alert";
  flag = 4;
} else {

  }
}

function step() {
  count++;
  target_fixed = get_scroll();
  target = target_fixed + 5*Math.sin(count/180*Math.PI*5)+3*Math.sin(count/180*Math.PI*3);


  let speed = (target-angle)/10;


  angle = angle + speed;
  pipohand = document.getElementById('pipohand');
  pipohand.setAttribute('transform', 'rotate(' + angle + ' 220 220)');
  changeShadow(angle);
  window.requestAnimationFrame(step);
}
window.requestAnimationFrame(step);
