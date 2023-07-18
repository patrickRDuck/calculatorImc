export const modal = {
    wrapper: document.querySelector('.modal-wrapper'),
    message :document.querySelector('.modal .tittle'),
    closeButton: document.querySelector('.modal .close'),

    open: () => modal.wrapper.classList.add('open'),
    close: () => modal.wrapper.classList.remove('open')
}
