import { Controller } from "@hotwired/stimulus"
import { enter, leave, toggle } from "el-transition"

export default class extends Controller {
  static targets = "OpenUserMenu";
  connect() {
    /* this.element.textContent = "Hello World!"
    this.OpenUserMenuTarget.addEventListener("click", toggleDropdownMenu)
     toggle.DropdownMenu()
    toggle(document.getElementById("menu-dropdown-items")); */
    console.log(this.element.textContent);
  }
}
