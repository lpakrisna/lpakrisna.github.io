// Builds the mailto link in the browser so the address is not sitting in the page as plain text.
document.querySelectorAll('.email').forEach(function (el) {
  var addr = el.dataset.u + '@' + el.dataset.d;
  var a = document.createElement('a');
  a.href = 'mailto:' + addr;
  a.textContent = addr;
  el.replaceWith(a);
});
