import { 
  Component, 
  Input, 
  OnInit 
} from '@angular/core';
import { DataChart } from './../../interfaces/data-chart.interface';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  public data: any;
  public options: any;

  @Input()
  public dataChart!: DataChart;

  ngOnInit() {
    this.configDataChart();
  }

  configDataChart() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.data = {
      labels: ['Habiliadadess'],
      datasets: [
        {
          data: [this.dataChart.skill, this.dataChart.restSkill],
          backgroundColor: [
            documentStyle.getPropertyValue('--brand-color-blue'),
            documentStyle.getPropertyValue('--brand-color-blue-hover')
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--brand-color-blue'),
            documentStyle.getPropertyValue('--brand-color-blue-hover')
          ]
        }
      ]
    };

    this.options = {
      cutout: '60%',
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      }
    };
  }

}
