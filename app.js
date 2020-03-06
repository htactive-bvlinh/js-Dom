
fetch('http://5e5e2557725f320014ed10b3.mockapi.io/lists')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        data.forEach(listElement => {
            fetch(`http://5e5e2557725f320014ed10b3.mockapi.io/lists/${listElement.id}/tasks`)
            .then((response) => {
              return response.json();
            })
            .then((datajs) => {
              let dataListTodo = datajs.sort(function(a,b){
                  return a.order-b.order;
              })
              console.log(dataListTodo);

              function addDivListItem() {
                        
                // tạo div tổng
                let divTong = createDiv('col-lg-4 divTong');
                let todoList = createDiv('todoList');
                let title = createDiv('title');
                let listTodo = createDiv('listTodo');
                let input = createDiv('input');
            
                //todo list
               
                divTong.appendChild(todoList);
                
            
                title.innerHTML=`<h2>${listElement.name}</h2>`;
                todoList.appendChild(title);
            
            
                todoList.appendChild(listTodo);
                let ulList = document.createElement('ul');
                listTodo.appendChild(ulList);
            
                let liList = document.createElement('li');
                function addLi(title){
                    let li = document.createElement('li');
                    li.innerHTML=`<li>${title.title }  order= ${title.order}</li>`;
                    ulList.appendChild(li);
                }
               dataListTodo.forEach(element => {
                addLi(element);
               });
               
                
            
                todoList.appendChild(input);
            
                let todo = document.getElementById('todo');
                todo.appendChild(divTong);
              }
              addDivListItem();
            });  
            
        });
        
    })

function createDiv(divClassName) {
    let div = document.createElement('div');
    div.className = divClassName;
    return div;
}







    // todo.insertAdjacentHTML("afterbegin",);


   
