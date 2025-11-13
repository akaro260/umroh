// // let Image,hero = document.getElementById('Expro')
        // let text = document.getElementById('text')
        // let btn = document.getElementById('btn')

        // window.addEventListener('scroll', function(){
        //     let value = window.scrollY;
        // })
        window.addEventListener("scroll", function (){
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 0) {
        navbar.classList.add("scrolled")
    } else {
        (navbar.classList.remove("scrolled"))
}
});
 const detailModal = document.getElementById('detailModal');
    detailModal.addEventListener('show.bs.modal', function (event) {
      const btn = event.relatedTarget;
      const title = btn.getAttribute('data-title');
      const price = btn.getAttribute('data-price');
      document.getElementById('modalTitle').textContent = title;
      document.getElementById('modalPrice').textContent = price;
    });