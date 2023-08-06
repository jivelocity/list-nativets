import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import { shoppingList } from './shopping-list.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
        <a href="https://vitejs.dev" target="_blank">
        <img src="${viteLogo}" class="logo" alt="Vite logo" />
        </a>
        <a href="https://www.typescriptlang.org/" target="_blank">
        <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
        </a>
        <h1>Vite + TypeScript</h1>
        <div class="card">
        <button id="counter" type="button"></button>
        </div>
        <p class="read-the-docs">
        Click on the Vite and TypeScript logos to learn more
        </p>
  </div>

  <div class="container">
    <h2>Event Key Code</h2>
    <div id="output">
        <div class="key">
            <small>key</small>
        </div>
        <div class="key">
            <small>keyCode</small>
        </div>
        <div class="key">
            <small>code</small>
        </div>
    </div>
    <div id="insert">
        <input class="form-input" type="text" id="key" placeholder="Enter Key" />
    </div>
    </div>
  <div class="container">
      <header>
        <img class="logoShopping" src="images/note.png" alt="" />
        <h1 class="title" id="app-title" title="hallo">Shopping List</h1>
      </header>
      <form id="item-form">
        <div class="form-control">
          <input
            type="text"
            class="form-input"
            id="item-input"
            name="item"
            placeholder="Enter Item"
          />
        </div>

        <!--
        <select name="priority" id="priority" class="form-input">
            <option value="0">Select Priority</option>
            <option value="1">Low</option>
            <option value="2">Medium</option>
            <option value="3">High</option>
        </select>

        <div class="checkbox">
            <input type="checkbox" id="checkbox" />
            Recurring Item
        </div>
        -->

        <div class="form-control">
          <button type="submit" class="btn" id="item-submit">
            <i class="fa-solid fa-plus"></i> Add Item
          </button>
        </div>
      </form>

      <div class="filter">
        <input
          type="text"
          class="form-input-filter"
          id="filter"
          placeholder="Filter Items"
        />
      </div>

      <ul id="item-list" class="items">
        <!--
            <li>
            Apples
            <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
            </button>
        </li>
        <li>
            Orange Juice
            <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
            </button>
        </li>
        <li>
            Oreos
            <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
            </button>
        </li>
        <li>
            Milk
            <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
            </button>
        </li>
        -->
      </ul>

      <button id="clear" class="btn-clear">Clear All</button>
    </div>





`

window.addEventListener('load',() => {
    // document.querySelector<HTMLDivElement>('#app-title')!.innerHTML = 'Hello World'
    console.log('Page loaded');

})

window.addEventListener('DOMContentLoaded', () => {
    // document.querySelector<HTMLDivElement>('#app-title')!.innerHTML = 'Hello World'
    console.log('DOM loaded');
})

console.log('Run Me');

window.addEventListener('resize', () => {
    console.log('Resized', window.innerWidth, window.innerHeight);
})

window.addEventListener('scroll', () => {
    console.log('Scrolled',);
})


const inputKey = document.querySelector<HTMLInputElement>('#key')!

inputKey.addEventListener('keydown', (e:KeyboardEvent) => {
    document.querySelector<HTMLDivElement>('.key:nth-child(1)')!.innerHTML = e.key.toUpperCase()
    document.querySelector<HTMLDivElement>('.key:nth-child(2)')!.innerHTML = e.keyCode.toString()
    document.querySelector<HTMLDivElement>('.key:nth-child(3)')!.innerHTML = e.code

    setTimeout(() => {
        inputKey.value = ''
        e.preventDefault()
    }, 1000);
})

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
shoppingList()
