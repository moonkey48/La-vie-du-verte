export class PageComponent{
    private element:HTMLUListElement;
    constructor(){
        this.element = document.createElement('ul');
        this.element.setAttribute('class','content-list');
    }
    attachTo(rootNode:HTMLElement,position:InsertPosition = 'afterbegin'){
        rootNode.insertAdjacentElement(position, this.element);
    }
}