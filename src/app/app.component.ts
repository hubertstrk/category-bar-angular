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
        value: 20.23,
        color: '#ff33cc',
        unit: 'kg/ha'
      },
      {
        id: '2',
        name: 'Category 2',
        value: 50.85,
        color: '#ffff00',
        unit: 'kg/ha'
      },
      {
        id: '3',
        name: 'Category 3',
        value: 0.43,
        color: '#ff6600',
        unit: 'kg/ha'
      },
      {
        id: '4',
        name: 'Category 4',
        value: 26.30,
        color: '#00cc99',
        unit: 'kg/ha'
      },
      {
        id: '5',
        name: 'Category 4',
        value: 75.54,
        color: '#ddd',
        unit: 'kg/ha'
      },
    ]
  }
}
