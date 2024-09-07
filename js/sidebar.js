document
  .getElementById("showSidebarBtn")
  .addEventListener("click", function () {
    const sidebar = document.getElementById("sidebar");
    this.classList.toggle("activeBtn"); // button
    sidebar.classList.toggle("active"); // sidebar
  });
