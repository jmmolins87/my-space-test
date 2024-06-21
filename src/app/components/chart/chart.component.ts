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
            documentStyle.getPropertyValue(this.dataChart.colorSkill),
            documentStyle.getPropertyValue(this.dataChart.colorRestSkill)
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue(this.dataChart.colorHoverSkill),
            documentStyle.getPropertyValue(this.dataChart.colorHoverRestSkill)
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
