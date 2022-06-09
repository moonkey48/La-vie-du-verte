import { ImageComponent } from './page/item/image.js';
import { PageComponent } from './page/page.js';
class App {
    constructor(rootNode) {
        this.page = new PageComponent();
        this.page.attachTo(rootNode);
        const img = new ImageComponent('/images/img1.jpeg', 'this is title', 'this is my story abou green.', 'austin');
        img.attachTo(rootNode);
    }
}
new App(document.querySelector('.main'));
