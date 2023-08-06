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

    <div class="container">
        <h2>Traversing The DOM</h2>
        <div class="parent card">
            <!-- Children -->
            <div class="child">Child 1</div>
            <div class="child">Child 2</div>
            <div class="child">Child 3</div>
        </div>
        <button class="btn" id="run">Run</button>
    </div>

`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
shoppingList()
