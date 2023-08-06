export function shoppingList() {
    // ## Dom Selection

    // let output;

    // output = document.all;
    // output = document.all[11];

    // output = document.documentElement;

    // output = document.head;
    // output = document.body;

    // output = document.head.children;
    // output = document.body.children;

    // output = document.doctype;
    // output = document.domain;
    // output = document.URL;
    // output = document.characterSet;
    // output = document.contentType;

    // output = document.forms;
    // output = document.forms[0];
    // output = document.forms[0].id;
    // output = document.forms[0].method;
    // output = document.forms[0].action;

    // document.forms[0].id = "new-id";

    // output = document.links;
    // output = document.links[0];
    // output = document.links[0].href;
    // output = document.links[0].id = "new-id";
    // output = document.links[0].className = "new-class";
    // output = document.links[0].classList;

    // output = document.images;

    // const forms = Array.from(document.forms);
    // forms.forEach((form) => console.log(form))

    // console.log(output);


    // ## DOM Selectors for Single Elements

    // document.getElementById()

    // console.log(document.getElementById('app-title'));
    // console.log(document.getElementById('app-title')!.id);
    // console.log(document.getElementById('app-title')!.className);
    // console.log(document.getElementById('app-title')!.getAttribute('id'));

    // set Attribute
    // document.getElementById('app-title')!.title = 'Shopping List';
    // document.getElementById('app-title')!.setAttribute('class', 'title');

    // const title = document.getElementById('app-title')!;

    // Get/Change Content
    // console.log(title.textContent);
    // title.textContent = 'Hello';
    // title.innerText = 'World';
    // title.innerHTML = '<strong>Shopping List</strong>';

    //Change Styling
    // title.style.color = 'red';
    // title.style.backgroundColor = 'black';
    // title.style.padding = '10px';
    // title.style.borderRadius = '5px';

    // document.querySelector()

    // console.log(document.querySelector('#app-title'));
    // console.log(document.querySelector('.title'));
    // console.log(document.querySelector('h1'));
    // console.log(document.querySelector('input[type="text"]'));
    // console.log(document.querySelector('li:last-child'));

    // Use these methods on other elements

    // const list = document.querySelector('ul')!;
    // console.log(list);

    // ## querySelectorAll()

    // const listItems = document.querySelectorAll('li');
    // console.log(listItems[1].innerText);

    // listItems.forEach((item, index) => {
    //     item.style.color = 'red'

    //     if (index === 1) {
    //         item.remove();
    //     }

    //     if (index === 0) {
    //         item.innerHTML = ` Oranges
    //         <button class="remove-item btn-link text-red">
    //             <i class="fa-solid fa-xmark"></i>
    //         </button>
    //         `
    //     }
    // });

    // const listItems2 = document.getElementsByClassName('items')

    // console.log(listItems2[0].innerHTML);

    // const listItemsArray = Array.from(listItems2);

    // listItemsArray.forEach((item:any) => {
    //     console.log(item.innerText);
    // })

    // const listItems3 = document.getElementsByTagName('li');
    // console.log(listItems3[0].innerText);

    // ## Traversing the DOM elements

    // #Get child elements DOM Element Relationships

    // let output;

    // const parent = document.querySelector('.parent')!;
    // output = parent.children;

    // output = parent.children[3].innerHTML = 'Hello';
    // output = parent.children[3].className;

    // parent.children[3].classList.add('child');

    // parent.firstElementChild!.innerHTML = 'First Element Child';
    // parent.lastElementChild!.innerHTML = 'Last Element Child';

    // Get parent elements from a child
    // const child = document.querySelector('.child')!;
    // output = child.parentElement;

    // child.parentElement!.style.border = '1px solid red';
    // child.parentElement!.style.padding = '10px';
    // child.parentElement!.style.borderRadius = '5px';

    // Get siblings
    // const secondItem:any = document.querySelector('.child:nth-child(2)')!;

    // output = secondItem
    // output = secondItem.nextElementSibling

    // secondItem.nextElementSibling!.style.color = 'red';
    // secondItem.previousElementSibling!.style.color = 'blue';


    // console.log(output);



    // DOM Node Types and DOM Node Relationships

    // let output;

    // const parent =  document.querySelector('.parent')!;

    // output = parent.childNodes;
    // output = parent.childNodes[0].textContent;
    // output = parent.childNodes[0].nodeName;
    // output = parent.childNodes[3].textContent;
    // output = parent.childNodes[3].outerHTML;

    // output = parent.childNodes[3].innerHTML = 'Child One';
    // output = parent.childNodes[3].nodeType;

    // output = parent.firstChild
    // output = parent.lastChild

    // parent.lastChild!.textContent = 'Last Child';


    // parent node

    // const child = document.querySelector('.child')!;

    // output = child.parentNode;
    // output = child.parentElement

    // child.parentElement!.style.backgroundColor = 'red';

    // Siblings
    // const secondItem = document.querySelector('.child:nth-child(2)')!;

    // output = secondItem;
    // output = secondItem.nextSibling;
    // output = secondItem.previousSibling;

    // console.log(output);


    // ## Creating Elements

    // const div = document.createElement('div');

    // div.className = 'my-element';
    // div.id = 'my-id';
    // div.setAttribute('title', 'my-title');

    // div.innerText = 'Hello World'; not the best way for creating elements

    // const text = document.createTextNode('Hello World');
    // div.appendChild(text);


    // document.body.appendChild(div);
    // document.querySelector('ul')!.appendChild(div);


    // ## List item challenge

    // Quick and dirty way
    // function createListItem(item:string) {
    //     const li = document.createElement('li');

    //     li.innerHTML = `${item}
    //     <button class="remove-item btn-link text-red">
    //         <i class="fa-solid fa-xmark"></i>
    //     </button>`

    //     document.querySelector('.items')?.appendChild(li);

    // }


    // Clean and Performant way

    // function crateNewItem(item:string) {
    //     const li = document.createElement('li');
    //     const text = document.createTextNode(item);
    //     li.appendChild(text);

    //     const button = createButton('');

    //     li.appendChild(button);

    //     document.querySelector('.items')?.appendChild(li);
    // }

    // function createButton(classes:string) {
    //     const button = document.createElement('button');
    //     button.className = classes;

    //     const icon = createIcon('fa-solid fa-xmark');
    //     button.appendChild(icon);
    //     return button;
    // }

    // function createIcon(classes:string) {
    //     const icon = document.createElement('i');
    //     icon.className = classes;
    //     return icon;
    // }

    // crateNewItem('Bananas');


    // ## Inserting Elements

    // // insertAdjacentElement Example
    // function insertElement() {
    //     const filter = document.querySelector('.filter')!;

    //     const h2 = document.createElement('h2');
    //     h2.textContent = 'insertAdjacentElement';

    //     filter.insertAdjacentElement('beforebegin', h2);
    // }

    // // insertAdhacentText Example

    // function insertAdhacentText() {
    //     const item = document.querySelector('li:first-child')!;
    //     item.insertAdjacentText('beforebegin', 'insertAdjacentText');
    // }

    // // insertAdjacentHTML Example
    // function insertAdjacentHTML() {
    //     const clearBtn = document.querySelector('.btn-clear')!;

    //     clearBtn.insertAdjacentHTML('afterend', '<h2>insertAdjacentHTML</h2>')
    // }

    // // insertBefore Example
    // function insertBeforeItem() {
    //     const ul = document.querySelector('ul')!;
    //     const li = document.createElement('li');

    //     li.textContent = 'insertBefore';

    //     const thirdItem = document.querySelector('li:nth-child(3)')!;

    //     ul.insertBefore(li, thirdItem);
    // }



    // insertElement();
    // insertAdhacentText();
    // insertAdjacentHTML();
    // insertBeforeItem();

    // <!-- beforeBegin -->
    // <p>
    //     <!-- afterBegin -->
    //     foo
    //     <!-- beforeEnd -->
    // </p>
    // <!-- afterEnd -->


    // ## Custom inserafter challenge

    // function insertAfter(newElement:HTMLElement, targetElement:Element) {
    //     targetElement.parentElement?.insertBefore(newElement, targetElement.nextSibling);
    // }

    //     // New element to insert
    //     const li = document.createElement('li');
    //     li.textContent = 'Insert Me After';

    //     // Existing element to insert after
    //     const firstItem = document.querySelector('li:first-child')!;

    //     // Our cunstom function
    //     insertAfter(li, firstItem);

    // ## Replace Elements

    // function replaceFirstItem() {
    //     const firstItem = document.querySelector('li:first-child')!;

    //     const li = document.createElement('li');
    //     li.textContent = 'Replaced First';

    //     firstItem.replaceWith(li);
    // }

    // function replaceSecondItem() {
    //     const secondItem = document.querySelector('li:nth-child(2)')!;

    //     secondItem.outerHTML = '<li>Replaced Second</li>';
    // }

    // function replaceAllItems() {
    //     const lis = document.querySelectorAll('li')!;

    //     // lis.forEach((li, i) => {
    //         // li.outerHTML = '<li>Replaced</li>';

    //     //     if (i === 1) {
    //     //         li.innerHTML = 'Replaced Second';
    //     //     }else{
    //     //         li.innerHTML = 'Replaced All';
    //     //     }

    //     // })

    //     lis.forEach((li, i) => li.outerHTML = i === 1 ? '<li>Replaced Second</li>' : '<li>Replaced All</li>')
    // }

    // function replaceChildHeading() {
    //     const header = document.querySelector('header')!;
    //     const h1 = document.querySelector('header h1');

    //     const h2 = document.createElement('h2');
    //     h2.id = 'app-title '
    //     h2.textContent = 'Shopping List';
    //     header.replaceChild(h2, h1!);

    // }

    // replaceFirstItem()
    // replaceSecondItem()
    // replaceAllItems()
    // replaceChildHeading()


    // ## Remove Elements

    // function removeClearButton() {
    //     const clearBtn = document.querySelector('#clear')
    //     clearBtn?.remove();
    // }

    // function removeFirstItem() {
    //     const ul = document.querySelector('ul')!;
    //     const li = document.querySelector('li:first-child')!;
    //     ul.removeChild(li);
    // }

    // function removeItem(item:number) {
    //     const ul = document.querySelector('ul')!;
    //     const li = document.querySelector(`li:nth-child(${item})`)!;
    //     ul.removeChild(li);
    // }

    // function removeItemSelectorAll(itemNumber:number) {
    //     const ul = document.querySelector('ul')!;
    //     const lis = document.querySelectorAll('li')!;
    //     const li = lis[itemNumber - 1];
    //     ul.removeChild(li);
    // }

    // function removeItemSelectorAllSimple(itemNumber:number) {
    //     const li = document.querySelectorAll('li')[itemNumber - 1];
    //     li.remove();
    // }

    // const removeItemSimple = (itemNumber:number) => document.querySelectorAll('li')[itemNumber - 1].remove();

    // removeClearButton();
    // removeFirstItem();
    // removeItem(3);
    // removeItemSelectorAllSimple(1);
    // removeItemSimple(1);

    // ## Adding and Removing Classes

    // const parent = document.querySelector<HTMLElement>('.parent')!;



    // document.querySelector('#run')!.addEventListener('click', () => {
        // parent.classList.add('red');

        // parent.classList.toggle('red');

        // parent.classList.replace('card', 'red');

        // Change Syles

        // parent.style.backgroundColor = 'red';

    // })
    // formInput.addEventListener('keydown', (e:KeyboardEvent) => {
    //     console.log((e.target as HTMLInputElement).value);
    // })

    // priority.addEventListener('change', (e) => {
    //     const value = (e.target as HTMLInputElement).value;
    //     console.log(value);
    // })

    // checkbox.addEventListener('input', (e:any) => {
    //     const isChecked = (e.target as HTMLInputElement).checked;
    //     console.log(isChecked);
    // })




    // const logo = document.querySelector('.logoShopping') as HTMLImageElement;

    // const onDoubleClick = (e:MouseEvent) => {
    //     e.preventDefault();

    //     if(document.body.style.backgroundColor !== 'white'){
    //         document.body.style.backgroundColor = 'white';
    //         document.body.style.color = '#333';
    //         clearBtn.style.backgroundColor = '#333';
    //         clearBtn.style.color = 'white';
    //     }else{
    //         document.body.style.backgroundColor = '#333';
    //         document.body.style.color = 'white';
    //         clearBtn.style.backgroundColor = 'white';
    //         clearBtn.style.color = '#333';
    //     }
    // }

    // const onRightClick = () => console.log('Right Click');


    // logo.addEventListener('dblclick', onDoubleClick)
    // logo.addEventListener('contextmenu', onRightClick)
    // logo.addEventListener('mousedown', () => console.log('Mouse Down'))
    // logo.addEventListener('mouseup', () => console.log('Mouse Up'))
    // logo.addEventListener('mouseenter', () => console.log('Mouse Enter'))
    // logo.addEventListener('mouseleave', () => console.log('Mouse Leave'))
    // logo.addEventListener('mouseover', () => console.log('Mouse Over'))
    // logo.addEventListener('mouseout', () => console.log('Mouse Out'))
    // logo.addEventListener('mousemove', () => console.log('Mouse Move'))
    // logo.addEventListener('dragstart', () => console.log("drag start"))
    // logo.addEventListener('drag', () => console.log("drag"))
    // logo.addEventListener('dragend', () => console.log('drag end'))


    // ## Event Object

    // const logo = document.querySelector('.logoShopping') as HTMLImageElement

    // const onClick = (e:MouseEvent) => {
        // console.log(e.target);
        // console.log(e.currentTarget);
        // console.log(e.type);
        // console.log(e.timeStamp);
        // console.log(e.clientX, e.clientY); relative to the window
        // console.log(e.offsetX, e.offsetY); relative to the element
        // console.log(e.pageX, e.pageY); relative to the page
        // console.log(e.screenX, e.screenY); relative to the screen

    // }

    // logo.addEventListener('click', onClick)
    // logo.addEventListener('drag', (event:MouseEvent) => {
    //     document.querySelector('h1')!.textContent = `X ${event.clientX} Y ${event.clientY}`
    // })

    // document.body.addEventListener('click', (e:MouseEvent) => {
    //     console.log(e.target);
    //     console.log(e.currentTarget);
    // })


    // ## Keyboard Events

    // const itemInput = document.querySelector('#item-input') as HTMLInputElement;

    // const onKeyPress = (e:KeyboardEvent) => {
    //     console.log(e.key);
    //     console.log(e.code);
    // }

    // itemInput.addEventListener('keypress', onKeyPress)
    // itemInput.addEventListener('keydown', (e:KeyboardEvent) => {
    //     console.log(e.key);
    //     console.log(e.code);
    // })
    // itemInput.addEventListener('keyup', (e:KeyboardEvent) => {
    //     console.log(e.key);
    //     console.log(e.code);
    // })

    // itemInput.addEventListener('input', () => {
    //     document.querySelector('h1')!.textContent = itemInput.value;
    // })

    // itemInput.addEventListener('keydown', (e:KeyboardEvent) => {
    //     if(e.key === 'Enter'){
    //         console.log('Enter');
    //     }
    // })


    // ## Event Bubbling

    // const button = document.querySelector('form button') as HTMLButtonElement;
    // const div = document.querySelector('form div:nth-child(2)') as HTMLDivElement;

    // const form = document.querySelector('form') as HTMLFormElement;

    // button.addEventListener('click', (e:Event) => {
    //     alert('Button Clicked');
    //     e.stopPropagation();
    // })

    // div.addEventListener('click', () => {
    //     alert('Div Clicked');
    // })

    // form.addEventListener('click', (e:Event) => {
    //     alert('Form Clicked');
    //     e.stopPropagation();
    // })

    // document.body.addEventListener('click', () => {
    //     alert('Body Clicked');
    // })



    // ## Event Delegation

    // const listItems = document.querySelectorAll('li') as NodeListOf<HTMLLIElement>;

    // listItems.forEach(item => {
    //     item.addEventListener('click', (e:Event) => {
    //         const li = e.target as HTMLLIElement;
    //         li.style.color = 'red';
    //     })
    // })


    // ## My version

    // const formInput = document.querySelector('#item-input') as HTMLInputElement;
    // const submitBtn = document.querySelector('#item-submit') as HTMLButtonElement;
    // const listParent = document.querySelector('#item-list') as HTMLUListElement;
    // const clearBtn = document.querySelector('#clear') as HTMLButtonElement;

    // submitBtn.addEventListener('click', (e) => {
    //     e.preventDefault();
    //     e.stopPropagation();

    //     if (formInput.value !== '') {
    //         crateNewItem();
    //     }else{
    //         alert('Please enter a value');
    //     }
    //     formInput.value = '';
    // })


    // function crateNewItem() {
    //     const li = document.createElement('li');
    //     li.textContent = formInput.value;
    //     listParent.appendChild(li);

    //     const button = createButton('');
    //     button.addEventListener('click', () => {
    //         listParent.removeChild(li);
    //     })
    //     li.appendChild(button);
    // }

    // function createButton(classes:string) {
    //     const button = document.createElement('button');
    //     button.className = classes;

    //     const icon = createIcon('fa-solid fa-xmark');
    //     button.appendChild(icon);
    //     return button;
    // }

    // function createIcon(classes:string) {
    //     const icon = document.createElement('i');
    //     icon.className = classes;
    //     return icon;
    // }

    // clearBtn.addEventListener('click', () => {
    //    listParent.innerHTML = '';
    // })


    const itemForm = document.getElementById('item-form') as HTMLFormElement;
    const itemInput = document.getElementById('item-input') as HTMLInputElement;
    const itemList = document.getElementById('item-list') as HTMLUListElement;
    const clearBtn = document.querySelector('#clear') as HTMLButtonElement;
    const itemFilter = document.getElementById('filter') as HTMLInputElement;
    const formBtn = itemForm.querySelector('.btn') as HTMLButtonElement;
    let isEditMode = false;


    const displayItems = () => {
        const items = getItemsFromStorage()

        items.forEach( (item:any) => {
            addItemToDOM(item)
        })

        checkUI()
    }

    const onAddItemSubmit = (e:Event) => {
        e.preventDefault()

        const newItem = itemInput.value.trim()

        //Validate input
        if(itemInput.value === ''){
            alert('Please add an item')
            return
        }

        //Check for edit mode
        if(isEditMode){
            const itemToEdit = itemList.querySelector('.edit-mode') as HTMLLIElement

            removeItemFromStorage(itemToEdit.textContent!)
            itemToEdit.classList.remove('edit-mode')
            itemToEdit.remove()
            isEditMode = false
        }else{
            if (checkIfItemExists(newItem)) {
                alert('Item already exists')
                return
            }
        }

        //create item DOM element
        addItemToDOM(newItem)

        //Add item to local storage
        addItemToStorage(newItem)

        checkUI()

        itemInput.value = ''

    }

    const addItemToStorage = (item:string) => {
        const itemsFromStorage = getItemsFromStorage()

        //Add new item to array
        itemsFromStorage.push(item)

        //Convert to JSON string and set to local storage

        localStorage.setItem('items', JSON.stringify(itemsFromStorage))
    }

    const getItemsFromStorage = () => {
        let itemsFromStorage

        if (localStorage.getItem('items') === null) {
            itemsFromStorage = []
        }else{
            itemsFromStorage = JSON.parse(localStorage.getItem('items')!)
        }

        return itemsFromStorage
    }

    const onClickItem = (e:any) => {
        const btn = e.target

        if(btn.parentElement!.classList.contains('remove-item')){
            removeItem(btn.parentElement!.parentElement)
        }else {
            setItemToEdit(btn)
        }
    }

    const checkIfItemExists = (newItem:string) => {
        let items = getItemsFromStorage()
        return items.includes(newItem)
    }

    const setItemToEdit = (item:HTMLUListElement) => {
        if (item.tagName === 'LI') {
            isEditMode = true

            itemList.querySelectorAll('li').forEach((i:any) => {
                i.classList.remove('edit-mode')
            })

            item.classList.add('edit-mode')
            itemInput.value = item.textContent!
            itemInput.focus()
            formBtn.innerHTML = '<i class="fas fa-pencil-alt"></i> Update Item'
            formBtn.style.backgroundColor = '#f39c12'
        }

    }

    const removeItemFromStorage = (item:any) => {
        let itemsFromStorage = getItemsFromStorage()

        itemsFromStorage = itemsFromStorage.filter((i:any) => i !== item)

        //Re=set to local storage
        localStorage.setItem('items', JSON.stringify(itemsFromStorage))
    }

    const removeItem = (item:any) => {
        if(confirm('Are you sure?')){
            //Remove from DOM
            item.remove()
            //Remove from local storage
            removeItemFromStorage(item.textContent)

            checkUI()
        }

    }

    const addItemToDOM = (item:string) => {
        //Create new item
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(item))

        const deleteBtn = createButton('remove-item')

        li.appendChild(deleteBtn)

        //Add li to the DOM
        itemList.appendChild(li)
    }

    const createButton = (classes:string) => {
        const button = document.createElement('button');
        button.className = classes;

        const icon = createIcon('fa-solid fa-trash');
        button.appendChild(icon);
        return button;
    }

    const createIcon = (classes:string) => {
        const icon = document.createElement('i');
        icon.className = classes;
        return icon;
    }

    const clearItems = () => {
        if (confirm('Are you sure?')) {
            while (itemList.firstChild) {
                itemList.removeChild(itemList.firstChild)
            }

            //Clear from local storage
            localStorage.removeItem('items')

            checkUI()
        }
    }

    const filterItems = (e:Event) => {
        const text = e.target as HTMLInputElement
        const items = itemList.querySelectorAll('li') as NodeListOf<HTMLLIElement>;

        items.forEach(item => {
            const itemName = item.firstChild!.textContent
            if (itemName !== null) {
                if (itemName.toLowerCase().indexOf(text.value.toLowerCase()) !== -1) {
                    item.style.display = 'flex'
                }else{
                    item.style.display = 'none'
                }
            }
        })
    }

    const checkUI = () => {
        itemInput.value = ''

        const items = itemList.querySelectorAll('li') as NodeListOf<HTMLLIElement>;
        if (items.length === 0 ) {
           clearBtn.style.display = 'none'
           itemFilter.style.display = 'none'
        }else{
            clearBtn.style.display = 'block'
            itemFilter.style.display = 'block'
        }

        formBtn.innerHTML = '<i class="fas fa-plus"></i> Add Item'
        formBtn.style.backgroundColor = '#2ecc71'

        isEditMode = false
    }

    //Initilize App
    function init() {
        // Event Listeners

        itemForm.addEventListener('submit', onAddItemSubmit)
        itemList.addEventListener('click', onClickItem)
        clearBtn.addEventListener('click', clearItems)
        itemFilter.addEventListener('input', filterItems)
        document.addEventListener('DOMContentLoaded', displayItems)

        checkUI()
    }

    init()

}
