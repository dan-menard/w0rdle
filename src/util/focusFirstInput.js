export default function focusFirstInput(el) {
  const firstInput = el.querySelector('input');

  firstInput.disabled = false;
  firstInput.focus();
}
