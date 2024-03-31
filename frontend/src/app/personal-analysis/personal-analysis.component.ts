import { Component, OnInit } from '@angular/core';
import { Chart, ChartData } from 'chart.js';

@Component({
  selector: 'app-personal-analysis',
  templateUrl: './personal-analysis.component.html',
  styleUrls: ['./personal-analysis.component.css']
})
export class PersonalAnalysisComponent implements OnInit {

  diversityData: ChartData = {
    labels: ["Male", "Female", "Other"],
    datasets: [{
      data: [60, 30, 10],
      backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"],
      borderWidth: 1,
      borderColor: "#ffffff"
    }]
  };
  ethnicityData: ChartData = {
    labels: ["Asian", "African-American", "Hispanic", "Caucasian", "Other"],
    datasets: [{
      data: [20, 15, 10, 45, 10],
      backgroundColor: ["#FF6384", "#4BC0C0", "#FFCE56", "#800080", "#36A2EB"]
    }]
  };

  options = {
    responsive: true,
    maintainAspectRatio: false
  };

  diversityChart: Chart;
  ethnicityChart: Chart;

  ngOnInit(): void {
    // Get the context of the Diversity Ratio canvas element
    this.diversityChart = new Chart(
      document.getElementById("diversityChart") as HTMLCanvasElement,
       {
      type: 'pie',
      data: this.diversityData,
      options: this.options
    });
    // Get the context of the Ethnicity Representation canvas element
    this.ethnicityChart = new Chart(
      document.getElementById("ethnicityChart") as HTMLCanvasElement,
      {
      type: 'pie',
      data: this.ethnicityData,
      options: {
        ...this.options,
        plugins: {
        legend: {
          display: true,
          position: 'bottom'
        },
        tooltip: {
          callbacks: {
          label: (context) => {
            const label = context.label || '';
            const value = context.parsed?.value || 0;
            const total = context.dataset?.data.reduce((a: number, b: number) => a + b, 0) || 0;
            const percentage = total > 0 ? ((value / total) * 100).toFixed(2) : 0;
            return `${label}: ${percentage}%`;
          }
          }
        }
        }
      }
      }
    );
  }


constructor() { }
}
