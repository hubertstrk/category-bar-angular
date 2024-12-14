import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CategoryBarComponent } from './category-bar/category-bar.component';
import { CategoryBarItem } from './category-bar/models/category-bar.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CategoryBarComponent],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'category-bar';

  items?: CategoryBarItem[];
  
  ngOnInit(): void {
    this.items = [
      {
        id: '1',
        name: 'Category 1',
        value: 20,
        color: 'red'
      },
      {
        id: '2',
        name: 'Category 2',
        value: 50,
        color: 'blue'
      },
      {
        id: '3',
        name: 'Category 3',
        value: 4,
        color: 'green'
      },
      {
        id: '4',
        name: 'Category 4',
        value: 26,
        color: 'orange'
      },
    ]
  }
}
