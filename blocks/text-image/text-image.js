
/* eslint-disable no-plusplus */
export function generateTextImageDOM(props, classes) {
  // Extract properties, always same order as in model, empty string if not set
  const [pictureContainer, textarea, imagePosition] = props;
  const picture = pictureContainer.querySelector('picture');
  const hasTextarea = textarea.textContent.trim() !== '';

  // Build DOM
  const text-imageDOM = document.createRange().createContextualFragment(`
    <div class='background'>${picture ? picture.outerHTML : ''}</div>
    <div class='foreground'>
      <div class='text'>
        <div class='textarea'>${textarea.innerHTML}</div>
        <div class='imagePosition' style='display: none;'>${imagePosition.innerHTML}</div>
      </div>
      <div class='spacer'>
      </div>
    </div>
  `);

  // add final teaser DOM and classes if used as child component
  return text-imageDOM;
}

export default function decorate(block) {
  // get the first and only cell from each row
  const props = [...block.children].map((row) => row.firstElementChild);
  const text-imageDOM = generateTextImageDOM(props, block.classList);
  block.textContent = '';
  block.append(text-imageDOM);
}