import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";
import { dataModel } from 'src/app/models/DataModel';
import {ApiServiceService} from '../../services/api-service.service'


@Component({
  selector: 'app-chart-page',
  templateUrl: './chart-page.component.html',
  styleUrls: ['./chart-page.component.scss']
})
export class ChartPageComponent {
  data: dataModel[] = [{visitors: 11, time: '2023-01-01 15:00'},
  {visitors: 10, time: '2023-01-01 15:15'},
  {visitors: 13, time: '2023-01-01 15:20'},
  {visitors: 10, time: '2023-01-01 15:25'},
  {visitors: 15, time: '2023-01-01 15:30'},
  {visitors: 2, time: '2023-01-01 15:35'},
  {visitors: 4, time: '2023-01-01 15:40'},];
  title = 'ng2-charts-demo';
  dates: string[] = [];
  visitors: number[] = [];
  
  constructor(private api: ApiServiceService) {
  }
  

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: this.dates,
    datasets: [
      {
        data: this.visitors,
        label: 'Series A',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.3)'
      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
  public lineChartLegend = true;

  async ngOnInit() {
    // await this.api.getData().subscribe((response:dataModel[]) => {
    //   console.log(response);
    // this.data = response;
    // })
    for(let datapoint of this.data) {
      this.visitors.push(datapoint.visitors);
      this.dates.push(datapoint.time);
    }
  }
}
