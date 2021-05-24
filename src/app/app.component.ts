import {
  Component,
  ViewEncapsulation
} from '@angular/core';
import { title } from 'process';

declare var $: any;


@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ngAfterContentInit() {
    $(document).ready(function () {
      // --------------------- App/Overlay/Main JavaScript Here --------------------- //
      var menuIcon = document.getElementById("titlebar_button_menu");
      var closeIcon = document.getElementById("titlebar_button_close");

      var titlebarText = document.getElementById("titlebar_text");

      var navbar_item_services = document.getElementById("navbar_item_services");
      var navbar_item_pricing = document.getElementById("navbar_item_pricing");
      var navbar_item_schedule = document.getElementById("navbar_item_schedule");

      var x = document.getElementById("titlebar_button");
      var y = document.getElementById("navbar");
      var z = document.getElementById("navmask");
      var navbarOpen = false;

      x.addEventListener("click", toggleNavbar);
      z.addEventListener("click", closeNavbar);
      titlebarText.addEventListener("click", closeNavbar);
      navbar_item_services.addEventListener("click", closeNavbar);
      navbar_item_pricing.addEventListener("click", closeNavbar);
      navbar_item_schedule.addEventListener("click", closeNavbar);

      function toggleNavbar() {
        if (navbarOpen == false) {
          openNavbar();
        } else {
          closeNavbar();
        }
      }

      function openNavbar() {
        if (navbarOpen == false) {
          /* ~~~~~~~~~~~~~~ Begin animations ~~~~~~~~~~~~~~ */

          // Animate navbar into view and show mask
          z.style.display = "block";
          y.setAttribute("active", "");
          z.setAttribute("active", "");

          // Menu icon disappear, close icon appear
          setTimeout(function () { menuIcon.removeAttribute("active") }, 150);
          setTimeout(function () { closeIcon.setAttribute("active", "") }, 150);

          // Set attributes to start animations
          menuIcon.removeAttribute("spinIn");
          menuIcon.setAttribute("spinOut", "");
          closeIcon.removeAttribute("spinOut");
          closeIcon.setAttribute("spinIn", "");

          z.removeAttribute("fadeOut");
          z.setAttribute("fadeIn", "");

          // Temporarily disable toggling navbar until end of animation as to eliminate glitchiness...
          x.removeEventListener("click", toggleNavbar);
          setTimeout(function () { x.addEventListener("click", toggleNavbar) }, 300);
          z.removeEventListener("click", closeNavbar);
          setTimeout(function () { z.addEventListener("click", closeNavbar) }, 300);
          // ...and do the same with the title button
          titlebarText.removeEventListener("click", closeNavbar);
          setTimeout(function () { titlebarText.addEventListener("click", closeNavbar) }, 300);
          // plus the rest of the navbar items
          navbar_item_services.removeEventListener("click", closeNavbar);
          setTimeout(function () { navbar_item_services.addEventListener("click", closeNavbar) }, 300);
          navbar_item_pricing.removeEventListener("click", closeNavbar);
          setTimeout(function () { navbar_item_pricing.addEventListener("click", closeNavbar) }, 300);
          navbar_item_schedule.removeEventListener("click", closeNavbar);
          setTimeout(function () { navbar_item_schedule.addEventListener("click", closeNavbar) }, 300);


          /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

          // Set navbarOpen to true
          navbarOpen = true;
        }
      }

      function closeNavbar() {
        if (navbarOpen == true) {
          /* ~~~~~~~~~~~~~~ Begin animations ~~~~~~~~~~~~~~ */

          // Animate navbar out of view and hide mask
          y.removeAttribute("active");
          z.removeAttribute("active");
          setTimeout(function () { z.style.display = "none" }, 300);

          // Close icon disappear, menu icon appear
          setTimeout(function () { closeIcon.removeAttribute("active") }, 150);
          setTimeout(function () { menuIcon.setAttribute("active", "") }, 150);

          // Set attributes to start animations
          menuIcon.setAttribute("spinIn", "");
          menuIcon.removeAttribute("spinOut");
          closeIcon.removeAttribute("spinIn");
          closeIcon.setAttribute("spinOut", "");

          z.removeAttribute("fadeIn");
          z.setAttribute("fadeOut", "");

          // Temporarily disable toggling navbar until end of animation as to eliminate glitchiness...
          x.removeEventListener("click", toggleNavbar);
          setTimeout(function () { x.addEventListener("click", toggleNavbar) }, 300);
          z.removeEventListener("click", closeNavbar);
          setTimeout(function () { z.addEventListener("click", closeNavbar) }, 300);
          // ...and do the same with the title button
          titlebarText.removeEventListener("click", closeNavbar);
          setTimeout(function () { titlebarText.addEventListener("click", closeNavbar) }, 300);
          // plus the rest of the navbar items
          navbar_item_services.removeEventListener("click", closeNavbar);
          setTimeout(function () { navbar_item_services.addEventListener("click", closeNavbar) }, 300);
          navbar_item_pricing.removeEventListener("click", closeNavbar);
          setTimeout(function () { navbar_item_pricing.addEventListener("click", closeNavbar) }, 300);
          navbar_item_schedule.removeEventListener("click", closeNavbar);
          setTimeout(function () { navbar_item_schedule.addEventListener("click", closeNavbar) }, 300);

          /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

          // Set navbarOpen to false
          navbarOpen = false;
        }
      }
    });
  }
  title = 'ACR';
}
