// Show a friendly "last visit" message for the Additional Needs page
(function () {
  const el = document.getElementById('lastVisit');
  if (!el) return;
  const prev = localStorage.getItem('lastVisitAN'); // AN = Additional Needs
  el.textContent = prev
    ? `Welcome back! Last visited: ${new Date(+prev).toLocaleString()}`
    : 'Welcome! This is your first visit to this page.';
  localStorage.setItem('lastVisitAN', Date.now());
})();
