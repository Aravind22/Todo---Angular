import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo';
  todoArr = [];

  addTodO(value) {
    if (value !== "") {
      this.todoArr.push(value)
    } else {
      alert('Input required!!')
    }
  }

  deleteItem(todo) {
    for (let i = 0; i <= this.todoArr.length; i++) {
      if (todo == this.todoArr[i]) {
        this.todoArr.splice(i, 1)
      }
    }
  }


}
