import { Controller } from "@hotwired/stimulus"
import { enter, leave, toggle } from "el-transition"


export default class extends Controller {
  static targets = ['OpenUserMenu'];

  connect() {
    this.OpenUserMenuTarget.addEventListener('click', this.toggleDropdownMenu)
  }
  toggleDropdownMenu() {
    toggle(document.getElementById('menu-dropdown-items'));
  }
}
