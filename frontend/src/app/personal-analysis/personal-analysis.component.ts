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
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      borderWidth: 1,
      borderColor: "#ffffff"
    }]
  };
  ethnicityData: ChartData = {
    labels: ["Asian", "Black", "Hispanic", "White", "Other"],
    datasets: [{
      data: [20, 15, 10, 45, 10],
      backgroundColor: ["#FF6384", "#4BC0C0", "#FFCE56", "#E7E9ED", "#36A2EB"]
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
      options: this.options
    });
  }


constructor() { }
}
