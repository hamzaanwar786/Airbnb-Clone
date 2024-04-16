import {Controller} from "@hotwired/stimulus"
import {enter, leave,toggle} from "el-transition"

// Connects to data-controller="header"
export default class extends Controller {
    static targets = ['mobile_dropdown','dropdown','openMobileUserMenu', 'openUserMenu']

    connect() {
        console.log("Header controller connected!");

        this.openUserMenuTarget.addEventListener('click', (e) => {
            e.preventDefault();
            this.openDropdown(this.dropdownTarget);
        })

        this.openMobileUserMenuTarget.addEventListener('click', (e) => {
            e.preventDefault();
            this.openDropdown(this.mobile_dropdownTarget);
        })
    }

     openDropdown(element) {
        toggle(element).then(() => {
            console.log("Dropdown opened!");
        })
    }

    closeDropdown(element) {
        leave(element).then(() => {
            console.log("Dropdown closed!");
        })
    }
}
