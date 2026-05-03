const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');[cite: 1]
      obs.unobserve(e.target);[cite: 1]
    }
  });
}, {
  threshold: 0.1[cite: 1]
});

document.querySelectorAll('.reveal').forEach(el => obs.observe(el));[cite: 1]