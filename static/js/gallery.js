(function () {
  const root = document.querySelector('[data-portrait-gallery]');
  if (!root) return;

  const items = Array.from(root.querySelectorAll('[data-gallery-item]'));
  const dialog = document.querySelector('[data-gallery-dialog]');
  const dialogImage = dialog?.querySelector('[data-gallery-dialog-image]');
  const dialogTitle = dialog?.querySelector('[data-gallery-dialog-title]');
  const closeButton = dialog?.querySelector('[data-gallery-close]');
  const prevButton = dialog?.querySelector('[data-gallery-prev]');
  const nextButton = dialog?.querySelector('[data-gallery-next]');

  if (!dialog || !dialogImage || !dialogTitle || !closeButton || !prevButton || !nextButton) {
    return;
  }

  let currentIndex = 0;
  let opener = null;

  const getItem = (index) => items[(index + items.length) % items.length];

  const render = (index) => {
    currentIndex = (index + items.length) % items.length;
    const button = getItem(currentIndex);
    const image = button.querySelector('img');

    dialogImage.src = button.dataset.gallerySrc || image?.currentSrc || image?.src || '';
    if (image?.srcset) {
      dialogImage.srcset = image.srcset;
      dialogImage.sizes = 'min(90vw, 80rem)';
    } else {
      dialogImage.removeAttribute('srcset');
      dialogImage.removeAttribute('sizes');
    }
    dialogImage.alt = image?.getAttribute('alt') || '';
    dialogImage.width = image?.getAttribute('width') || '';
    dialogImage.height = image?.getAttribute('height') || '';
    dialogTitle.textContent = button.dataset.galleryTitle || '';
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
