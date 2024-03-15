export default function decorate(block) {
  const stockLocatorDOM = document.createElement('p');
  const paragraphText = document.createTextNode('This is the new stock locator.');
  stockLocatorDOM.appendChild(paragraphText);
  stockLocatorDOM.classList.add('sl-paragraph');
  block.textContent = '';
  block.append(stockLocatorDOM);
}
