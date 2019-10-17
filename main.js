var accordianHeaders = document.querySelectorAll('#accordian .accordian-headers');
var accordianDescriptions = document.querySelectorAll('#accordian .accordian-description');

//drop-down//
function expandAccordianDescription() {

//handles toggle//
  for (i = 0; i < accordianHeaders.length; i++) {
    accordianHeaders[i].childNodes[3].innerHTML = '<i class="fas fa-holly-berry"></i>';
    accordianDescriptions[i].classList.remove('accordian-open');
  }


this.nextElementSibling.classList.toggle('accordian-open');
this.childNodes[3].innerHTML = '<i class="fas fa-candy-cane"></i>';
}

//Add event click//
for (i=0; i < accordianHeaders.length; i++) {

accordianHeaders[i].addEventListener('click', expandAccordianDescription);
}
