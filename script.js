"use strict";

const shareButton = document.querySelector(".share-div");
const socialLinks = document.querySelector(".social");
const hideIcon = document.querySelector(".hide");

shareButton.addEventListener("click", function (share) {
  if (share) {
    socialLinks.classList.toggle("hidden");
    /*
    The line `socialLinks.classList.toggle("hidden");` toggles the CSS class `"hidden"` on the `.social` element (referenced by `socialLinks`). If the class is absent, it adds it (hiding the element via `display: none` in your CSS); if present, it removes it (showing the element). This creates a show/hide toggle for the social links on button clicks. If you need to force add/remove instead of toggle, use `add()` or `remove()`.
    Yes, for `socialLinks.classList.toggle("hidden");` to work as intended (showing the social links on the first button click), the `.social` element must have the `"hidden"` class initially in your HTML (e.g., `<div class="social hidden">`). Without it, the first click would add `"hidden"` and hide the element instead of revealing it. Add `class="hidden"` to the element in your HTML file to fix this. If you want it visible by default, use `remove("hidden")` instead of `toggle`.
    */
    hideIcon.style.top = "0";
  }
});

hideIcon.addEventListener("click", function (share) {
  if (share) {
    socialLinks.classList.toggle("hidden");
    hideIcon.style.top = "0";
  }
});
