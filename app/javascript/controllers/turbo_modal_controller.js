import {Controller} from "@hotwired/stimulus"

// Connects to data-controller="turbo-modal"
export default class extends Controller {
  static targets = ["modal"]

  hideModal() {
    this.element.parentElement.removeAttribute("src") // it might be nice to also remove the modal SRC
    this.modalTarget.remove()
    let modalBg = document.getElementById('modal-bg')
    if (modalBg) {
      modalBg.classList.add('hidden')
    }

    let modal = document.getElementById('modal')
    if (modal) {
      modal.classList.remove('transform-none')
      modal.classList.add('translate-x-full')
    }
  }

  showModal() {
    let modal = document.getElementById('modal')
    if (modal) {
      modal.classList.remove('translate-x-full')
      modal.classList.add('transform-none')
    }
    let modalBg = document.getElementById('modal-bg')
    if (modalBg) {
      modalBg.classList.remove('hidden')
    }
  }

  submitEnd(e) {
    console.log('e.detail.success', e.detail.success)
    if (e.detail.success) {
      this.hideModal()
    }
  }
}
