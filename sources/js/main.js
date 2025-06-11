window.addEventListener('keydown', (e) => {
    if(e.key === 'q' && e.ctrlKey) {
        document.querySelectorAll('a.project.disabled').forEach((el) => {
            el.classList.remove('disabled');
        })
    }
});