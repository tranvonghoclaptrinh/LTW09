/**
 * LTW09 Portfolio - Trần Hữu Vọng (15DHTH07)
 * Interactive logic: Tab filter for static assignment cards, scroll dynamics, year update
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Set current year in footer
  const yearEl = document.querySelector("#current-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 2. Tab Filter for static cards (Thư viện / Đồ án nhóm / Tất cả)
  const tabButtons = document.querySelectorAll(".archive-tab-btn");
  const assignmentItems = document.querySelectorAll(".assignment-item");

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Toggle active state
      tabButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");

      assignmentItems.forEach((item) => {
        const category = item.getAttribute("data-category");
        if (filter === "all" || category === filter) {
          item.style.display = "block";
          item.classList.add("fade-in-up");
        } else {
          item.style.display = "none";
        }
      });
    });
  });

  // 3. Navbar background blur & shadow on scroll
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.style.boxShadow = "0 8px 24px rgba(11, 60, 93, 0.12)";
    } else {
      navbar.style.boxShadow = "none";
    }
  });

  // 4. Close mobile navbar after clicking a link
  const navLinks = document.querySelectorAll(".nav-link:not(.dropdown-toggle)");
  const navCollapse = document.querySelector(".navbar-collapse");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navCollapse && navCollapse.classList.contains("show")) {
        const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
        if (bsCollapse) bsCollapse.hide();
      }
    });
  });
});
