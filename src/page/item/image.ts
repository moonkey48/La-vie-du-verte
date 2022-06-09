
export class ImageComponent{
    private element:HTMLElement;
    constructor(url:string,title:string,message:string,name:string){
        const template = document.createElement('template');
        template.innerHTML =`
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
        `
        this.element = template.content.firstElementChild! as HTMLElement;

        const imgElement = this.element.querySelector('.image')! as HTMLImageElement;
        imgElement.src = url;
        imgElement.alt = title;

        const titleElement = this.element.querySelector('.content-title')! as HTMLElement;
        titleElement.textContent = title;

        const messageElement = this.element.querySelector('.content-text')! as HTMLParagraphElement;
        messageElement.textContent = message;

        const nameElement = this.element.querySelector('.content-info')! as HTMLElement;
        nameElement.textContent = name;
    }
    attachTo(rootNode:HTMLElement,position:InsertPosition = 'afterbegin'){
        rootNode.insertAdjacentElement(position, this.element);
    }
}

// <ul class="cotent-list">
                
                
                
//             </ul>