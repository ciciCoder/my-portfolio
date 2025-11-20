import axios from 'axios'
import Swal from 'sweetalert2'

function initHeader() {
  const navbar = document.querySelector<HTMLElement>('#header')
  if (!navbar) throw new Error('header is undefined on line 3: main.ts')
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('bg-white', 'shadow-md');
      navbar.classList.remove('bg-transparent');
      return
    }
    navbar.classList.add('bg-transparent');
    navbar.classList.remove('bg-white', 'shadow-md');
  });
}

function initContactForm() {
  const form = document.querySelector<HTMLFormElement>('#contact-form')
  if (!form) throw new Error('form is undefined on line 17: main.ts')
  form.addEventListener('submit', async (e) => {
    try {

      e.preventDefault()
      const formData = new FormData(form)
      Swal.fire({
        title: 'Contact Form',
        text: 'Sending Email...',
        icon: 'info',
        didOpen() {
          Swal.showLoading()
        },
      })
      const inputs = {
        name: formData.get('name'),
        message: formData.get('message'),
        email: formData.get('email'),
      }
      await axios.post('https://script.google.com/macros/s/AKfycbwJKxgKLeaHkeQHwSs_b_Qbv7FsxdsAM7OsC3ePvxCJM_sOsGCOEafr1e6GG_4qhV4r/exec', inputs, {
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
      })
      form.reset()
      Swal.close()
      Swal.fire({ title: 'Success', text: 'Email Successfully sent', icon: 'success' })
    } catch (e) {
      Swal.close()
      Swal.fire({ title: 'Error', text: 'Oops something went wrong', icon: 'error' })
    }
  })
}

initContactForm()

initHeader()