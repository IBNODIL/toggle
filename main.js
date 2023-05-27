let elToggle = document.getElementById('toggle');
let elToggleCircle = document.getElementById('toggle-circle');
let isChecked = false;

elToggle.addEventListener('click', function(){
  if(isChecked){
    isChecked = false; 
    elToggle.classList.remove('red');
    elToggleCircle.classList.remove('toggle-circle-animation');
  } else{
    isChecked = true; 
    elToggle.classList.add('red');
    elToggleCircle.classList.add('toggle-circle-animation');
  }
});
