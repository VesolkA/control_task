const tabs = function (selector) {
    const tabs = document.querySelectorAll(selector);

    const tabsHandler = tabContainer => {

        const buttons = tabContainer.querySelector('.tabs__buttons');
        const contents = tabContainer.querySelector('.tabs__contents');
        if (!buttons || !contents) return;

        buttons.addEventListener ('click', (event) => {
            const target = event.target;

            if (target.classList.contains('tabs__button')){
                tabButton(target);

            }
            if (target.classList.contains('tabs__add')) {
                addButton(target);
            }
        });

    const addButton = button => {
        const tab = document.createElement('div');
        const content = document.createElement('div');
    
        tab.classList.add('tabs__button');
        content.classList.add('tabs__content');

        tab.innerHTML = `tab ${buttons.children.length}`;
        content.innerHTML = prompt(`Add new description of Dracon`);

        contents.append(content);
        buttons.insertBefore(tab, button);
    }

    const contentSwitch = (num) => {
        [].forEach.call(contents.children, (item, i) => {
            if (i === num) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    const tabButton = (button) => {
        [...buttons.children].forEach((item, i) => {
            if (item === button) {
                item.classList.add('active');
                contentSwitch(i);

            } else {
                item.classList.remove('active');
            }
        });
    }
}
    tabs.forEach(tab => tabsHandler(tab));
}

tabs('.tabs__container');