export class PageComponent {
    constructor() {
        this.element = document.createElement('ul');
        this.element.setAttribute('class', 'content-list');
    }
    attachTo(rootNode, position = 'afterbegin') {
        rootNode.insertAdjacentElement(position, this.element);
    }
}
