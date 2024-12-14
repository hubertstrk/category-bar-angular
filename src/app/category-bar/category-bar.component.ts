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

  ngAfterViewInit() {
    this.createBarChart();
  }

  createBarChart() {
    let xOffset = 0;

    const computeSum = (acc: number, category: CategoryBarItem) => acc + category.value;
    this.sum = this.categories.reduce(computeSum, 0);
  }

  trackByCategory(index: number, category: CategoryBarItem) {
    return category.id;
  }
}
