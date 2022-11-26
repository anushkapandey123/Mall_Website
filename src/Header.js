import React from "react";


function Header() {
  return (
    <div>
    <section>
     <nav class = "navbar navbar-expand-lg navbar-dark bg-secondary">
      <a class = "navbar-brand" href="">Phoenix</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class = "collapse navbar-collapse" id = "navbarNavDropdown">
      
      <ul class = "navbar-nav ms-auto">
          <li class = "nav-item">
              <a class = "nav-link" href="#">Events</a>
          </li>

          <li class = "nav-item">
              <a class = "nav-link" href="#food">Dine</a>
          </li>

          <li class = "nav-item">
              <a class = "nav-link" href="#fashion">Fashion</a>
          </li>
          </ul>
      </div>
     </nav>
     </section>
   





    </div>
  );
}

export default Header;
