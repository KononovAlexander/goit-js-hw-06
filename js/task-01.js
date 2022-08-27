'use strict';
function task_01() {
    
    const items = document.querySelectorAll('.item');
    console.log('Number of categories:', items.length);

    items.forEach(element => {
        let title = element.firstElementChild.textContent;
        let list = element.lastElementChild.childNodes.length;
        console.log('category: ', title);
        console.log('elements: ', list);
    });
    

}
task_01();