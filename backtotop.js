document.addEventListener("DOMContentLoaded", function() {
  const backToTopBtn = document.getElementById("backToTop");
  backToTopBtn.addEventListener("click", function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
