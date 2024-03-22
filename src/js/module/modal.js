export default function modal(elemModal, elemClose, buttons, animaitonOpen='feidUp')  {
  const modals = document.querySelectorAll(elemModal);
  const buttonsModal = document.querySelectorAll(buttons);
  const buttonsClose = document.querySelectorAll(elemClose);

  buttonsModal.forEach(btn => {
    btn.addEventListener('click', function(e) {
     const categoryButton = e.target.getAttribute('data-categoryButton');

     filterModal(categoryButton)
    });
  });

  buttonsClose.forEach(btn_close => {
    btn_close.addEventListener('click', e => 
      (e.target.parentElement.classList.contains('active')) ?
        e.target.parentElement.classList.remove('active') : null
      );
  })

  function filterModal(dateId) {
    modals.forEach(modal => {
      (dateId === modal.getAttribute('data-categoryModal')) ?
        modal.classList.add('active'):null
    });
  }
}