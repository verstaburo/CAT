export default () => {
  const { $ } = window;

  const services = $('.services');

  if (!services.length) {
    return;
  }

  const previews = services
    .find('.service-preview')
    .removeClass('service-preview_text_big service-preview_tall');

  if (!previews.length) {
    return;
  }

  const chunk = (arr, size) => arr.reduce((ar, it, i) => {
    const ix = Math.floor(i / size);

    if (!ar[ix]) {
      ar[ix] = []; // eslint-disable-line no-param-reassign
    }

    ar[ix].push(it);

    return ar;
  }, []);

  /* eslint-disable array-callback-return, consistent-return */
  const wrapper = (items) => {
    const nextItems = items.map((arrChunk) => {
      if (arrChunk.length === 1) {
        return `<div class="grid__col grid__col_six">${arrChunk[0].outerHTML}</div>`;
      }

      if (arrChunk.length === 2) {
        return arrChunk.map(el => `<div class="grid__col grid__col_three">${el.outerHTML}</div>`).join('');
      }

      if (arrChunk.length === 3) {
        const nextChunk = arrChunk.map((el, i) => {
          el.classList.add('service-preview_text_big');

          if (i === 0) {
            return el.outerHTML;
          }

          if (i === 1) {
            return `<div class="grid grid__subgrid"><div class="grid__col grid__col_six">${el.outerHTML}</div></div>`;
          }

          el.classList.add('service-preview_tall');
          return `<div class="grid__col grid__col_two">${el.outerHTML}</div>`;
        });

        const lastChunk = nextChunk.pop();

        return `<div class="grid__col grid__col_four">${nextChunk.join('')}</div>${lastChunk}`;
      }

      if (arrChunk.length === 4) {
        const nextChunk = arrChunk.map((el, i) => {
          if (i === 0) {
            el.classList.add('service-preview_text_big');
            return el.outerHTML;
          }

          if (i === 1 || i === 2) {
            return `<div class="grid__col grid__col_three">${el.outerHTML}</div>`;
          }

          el.classList.add('service-preview_text_big');
          el.classList.add('service-preview_tall');

          return `<div class="grid__col grid__col_two">${el.outerHTML}</div>`;
        });

        const firstChunk = nextChunk.shift();
        const lastChunk = nextChunk.pop();

        return `<div class="grid__col grid__col_four">${firstChunk}<div class="grid grid__subgrid">${nextChunk.join('')}</div></div>${lastChunk}`;
      }
    });

    return `<div class="grid">${nextItems.join('')}</div>`;
  };
  /* eslint-enable array-callback-return, consistent-return */

  services.html(wrapper(chunk(previews.toArray(), 4)));
};
