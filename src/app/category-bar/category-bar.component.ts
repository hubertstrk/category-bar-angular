import { AfterViewInit, Component, Input } from '@angular/core';
import * as d3 from 'd3';
import { CategoryBarItem } from './models/category-bar.model';

@Component({
  selector: 'app-category-bar',
  standalone: true,
  imports: [],
  templateUrl: './category-bar.component.html',
})
export class CategoryBarComponent implements AfterViewInit {
  @Input() categories: CategoryBarItem[] = [];

  ngAfterViewInit() {
    this.createBarChart();
  }

  createBarChart() {
    const svg = d3.select('#category-bar')
      .append('svg')
      .attr('width', '100%')
      .attr('height', 50);

    const barHeight = 10;
    let xOffset = 0;

    const computeSum = (acc: number, category: CategoryBarItem) => acc + category.value;

    const sum = this.categories.reduce(computeSum, 0);

    this.categories.forEach(category => {
      const widthPercentage = (category.value / sum) * 100;

      svg.append('rect')
        .attr('x', `${xOffset}%`)
        .attr('y', 0)
        .attr('width', `${widthPercentage}%`)
        .attr('height', barHeight)
        .attr('fill', category.color);

      xOffset += widthPercentage;
    });
  }
}
