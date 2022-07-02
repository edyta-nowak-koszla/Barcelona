let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  let i;
  let x = document.getElementsByClassName("slides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
   }
  x[slideIndex-1].style.display = "block";  
}


const bannerImgs = document.querySelectorAll('.photo3 img');
bannerImgs.forEach((banner) => {
banner.addEventListener('click', () => {
banner.classList.toggle('expanded');
banner.parentElement.classList.toggle('banner-expanded');
});
});

