import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DonutChartObject } from '../../interfaces/donutChart.interface';
import { DonutKeys } from '../../interfaces/donutKeys.interface';
import { FigureKeys } from '../../interfaces/figureKeys.interface';
import { donutChartBenefitsObject, donutChartExpensesObject, donutChartIncomesObject } from '../../mocks/donutChart';
@Component({
  selector: 'accounting-donut-chart',
  templateUrl: './accounting-donut-chart.component.html',
  styleUrls: ['./accounting-donut-chart.component.scss']
})
export class AccountingDonutChartComponent implements OnInit {

  router: Router;
  donutChartObject: DonutChartObject;
  donutKeys: Array<DonutKeys>;
  figureKeys: Array<FigureKeys>;
  backgroundColor: Array<string>;
  backgroundColorStyle: Array<string>;
  strokeDasharray: Array<string> = [];

  constructor(private _router: Router ) {
    this.router = _router;
  }

  ngOnInit() {
    this.backgroundColorStyle =  [
      'shape-fuschia',
      'shape-lemon-lime',
      'shape-blue',
      'shape-yellow',
      'shape-orange',
      'shape-blue-aquamarine'
    ];
    this.backgroundColor =  [
      '#ce4b99',
      '#b1c94e',
      '#377bbc',
      '#f5e82f',
      '#ecbc1e',
      '#4adef8'
    ];
    this.initializeDonutChart();
  }

  private initializeDonutChart () {
    switch (this.router.url) {
      case '/incomes': {
        this.donutChartObject = donutChartIncomesObject;
        break;
      }
      case '/expenses': {
        this.donutChartObject = donutChartExpensesObject;
        break;
      }
      case '/benefits': {
        this.donutChartObject = donutChartBenefitsObject;
        break;
      }
    }
    this.setStrokeDashArrayProperties(this.donutChartObject.figureKeys);
    this.setSegmentBackgroundColor();
    this.setLegendBackgroundColor();
    this.donutKeys = this.donutChartObject.donutKeys;
    this.figureKeys = this.donutChartObject.figureKeys;
  }

  private setSegmentBackgroundColor () {
    let index = 0;
    this.donutChartObject.donutKeys.forEach(x => {
      this.donutChartObject.donutKeys[index].backgroundColor = this.backgroundColor[index];
      if (index === (this.backgroundColorStyle.length - 1)) {
        index = 0;
      } else {
        index++;
      }
    });
  }

  private setLegendBackgroundColor () {
    let index = 0;
    this.donutChartObject.figureKeys.forEach(x => {
      this.donutChartObject.figureKeys[index].backgroundColor = this.backgroundColorStyle[index];
      if (index === (this.backgroundColor.length - 1)) {
        index = 0;
      } else {
        index++;
      }
    });
  }

  private setStrokeDashArrayProperties (figureKeys: Array<FigureKeys>) {
    const numOfItems: number = figureKeys.length - 1;
    let totalAmount = 0;
    let newStrokeDashArray = 0;
    let initialStrokeDashArray = 0;
    figureKeys.forEach(x => {
        totalAmount += x.amount;
    });
    this.donutChartObject.totalAmount = totalAmount;
    let index = 0;
    figureKeys.forEach(x => {
      initialStrokeDashArray =  (x.amount * 100 / totalAmount);
      this.donutChartObject.donutKeys[index].strokeDasharray = initialStrokeDashArray + ' ' + newStrokeDashArray;
      index++;
      newStrokeDashArray = initialStrokeDashArray;
    });
  }
}
