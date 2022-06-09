export class ImageComponent {
    constructor(url, title, message, name) {
        const template = document.createElement('template');
        template.innerHTML = `
        <li class="content-item">
            <img class="image">    
            <div class="content-textBox deep-green">
                <div class="content-part">
                    <h3 class="content-title"></h3>
                    <p class="content-text deep-green"></p>
                </div>
                <div class="content-info"></div>
            </div>
        </li>
        `;
        this.element = template.content.firstElementChild;
        const imgElement = this.element.querySelector('.image');
        imgElement.src = url;
        imgElement.alt = title;
        const titleElement = this.element.querySelector('.content-title');
        titleElement.textContent = title;
        const messageElement = this.element.querySelector('.content-text');
        messageElement.textContent = message;
        const nameElement = this.element.querySelector('.content-info');
        nameElement.textContent = name;
    }
    attachTo(rootNode, position = 'afterbegin') {
        rootNode.insertAdjacentElement(position, this.element);
    }
}
// <ul class="cotent-list">
//             </ul>
