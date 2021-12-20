//Selectors

const addItem = document.getElementById('add-item');
const inputItem = document.getElementById('userinput');
const listItems = document.querySelector('.items-list');

//Functions

const addToList = (event) => {
    //Prevent form form submitting
  event.preventDefault();
    //Add item
  const itemDiv = document.createElement('div');
  itemDiv.classList.add('item-div');
  const newItem = document.createElement('li');
  newItem.innerText = inputItem.value;
  newItem.classList.add('item');
  itemDiv.appendChild(newItem);
    //Check and delete buttons
  const checkBtn = document.createElement('button');
  checkBtn.innerHTML = '<i class="fas fa-check-circle"></i>';
  checkBtn.classList.add('check-btn');
  itemDiv.appendChild(checkBtn);

  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '<i class="fas fa-minus-circle"></i>';
  deleteBtn.classList.add('delete-btn');
  itemDiv.appendChild(deleteBtn);
    //Add to list
  listItems.appendChild(itemDiv);
    //Clear input value
  inputItem.value = '';
}

const deleteCheck = (event) => {
  const btn = event.target;
  // Check  item of list
  if (btn.classList[0] === 'check-btn') {
    const item = btn.parentElement;
    item.classList.toggle('completed')
  }

  // Delete item from list
  if (btn.classList[0] === 'delete-btn'){
    const item = btn.parentElement;
    item.classList.add('remove');
    item.addEventListener('transitionend', () => { item.remove() });
  };
}

//Event Listeners

addItem.addEventListener('click', addToList);
listItems.addEventListener('click', deleteCheck);
