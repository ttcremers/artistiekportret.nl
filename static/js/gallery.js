(function () {
  const root = document.querySelector('[data-portrait-gallery]');
  if (!root) return;

  const items = Array.from(root.querySelectorAll('[data-gallery-item]'));
  const dialog = document.querySelector('[data-gallery-dialog]');
  const dialogImage = dialog?.querySelector('[data-gallery-dialog-image]');
  const dialogTitle = dialog?.querySelector('[data-gallery-dialog-title]');
  const dialogNote = dialog?.querySelector('[data-gallery-dialog-note]');
  const dialogCaption = dialog?.querySelector('[data-gallery-dialog-caption]');
  const closeButton = dialog?.querySelector('[data-gallery-close]');
  const prevButton = dialog?.querySelector('[data-gallery-prev]');
  const nextButton = dialog?.querySelector('[data-gallery-next]');

  if (!dialog || !dialogImage || !dialogTitle || !dialogNote || !dialogCaption || !closeButton || !prevButton || !nextButton) {
    return;
  }

  let currentIndex = 0;
  let opener = null;

  const getItem = (index) => items[(index + items.length) % items.length];

  const render = (index) => {
    currentIndex = (index + items.length) % items.length;
    const button = getItem(currentIndex);
    const image = button.querySelector('img');

    dialogImage.src = image.getAttribute('src') || '';
    dialogImage.alt = image.getAttribute('alt') || '';
    dialogImage.width = image.getAttribute('width') || '';
    dialogImage.height = image.getAttribute('height') || '';
    dialogTitle.textContent = button.dataset.galleryTitle || '';
    dialogNote.textContent = button.dataset.galleryNote || '';
    dialogCaption.textContent = image.getAttribute('alt') || '';
  };

  const open = (index, trigger) => {
    opener = trigger;
    render(index);
    dialog.showModal();
    closeButton.focus({ preventScroll: true });
  };

  const move = (delta) => {
    render(currentIndex + delta);
  };

  items.forEach((button, index) => {
    button.addEventListener('click', () => open(index, button));
  });

  prevButton.addEventListener('click', () => move(-1));
  nextButton.addEventListener('click', () => move(1));
  closeButton.addEventListener('click', () => dialog.close());

  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  });

  dialog.addEventListener('close', () => {
    if (opener) {
      opener.focus({ preventScroll: true });
    }
  });

  dialog.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      move(-1);
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      move(1);
    }

    if (event.key === 'Home') {
      event.preventDefault();
      render(0);
    }

    if (event.key === 'End') {
      event.preventDefault();
      render(items.length - 1);
    }
  });
})();
