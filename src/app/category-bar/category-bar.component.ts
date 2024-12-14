import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, Input } from '@angular/core';
import { TooltipModule } from 'primeng/tooltip';
import { CategoryBarItem } from './models/category-bar.model';

@Component({
  selector: 'app-category-bar',
  standalone: true,
  imports: [CommonModule, TooltipModule],
  templateUrl: './category-bar.component.html',
  styleUrls: ['./category-bar.component.scss']
})
export class CategoryBarComponent implements AfterViewInit {
  @Input() categories: CategoryBarItem[] = [];

  sum?: number;
  items: {id: string, name: string, value: number, color: string, percentage: number}[] = [];

  ngAfterViewInit() {
    this.createBarChart();
  }

  createBarChart() {
    const computeSum = (acc: number, category: CategoryBarItem) => acc + category.value;
    this.sum = this.categories.reduce(computeSum, 0);

    this.items = this.categories.map(category => {
      const percentage = (category.value / this.sum!) * 100;
      return {
        id: category.id,
        name: category.name,
        value: category.value,
        color: category.color,
        percentage: Math.round(percentage)
      };
    });
  }

  trackByCategory(index: number, category: CategoryBarItem) {
    return category.id;
  }
}
