import { Component, OnInit } from '@angular/core';
import { Report } from '../models/report';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  reports: Report[] = mockFiles;
  states: string[] = mockStates;
  selectedValue: string = 'option1';
  constructor() { }
  filteredReports: Report[] = [];
  companyNameFilter: string = '';
  regionFilter: string = '';
  locationFilter: string = '';
  dateFilter: string = '';
  sizeFilter: string = '';
  industryFilter: string = '';


  applyFilters() {
    this.filteredReports = this.reports.filter(report => {
      const companyNameMatch = report.title.toLowerCase().includes(this.companyNameFilter.toLowerCase());
      const regionMatch = this.regionFilter === '' || this.regionFilter === report.region;
      const locationMatch = this.locationFilter === '' || this.locationFilter === report.location;
      const dateMatch = this.dateFilter === '' || this.formatDate(report.dateCreated) === this.dateFilter;
      const sizeMatch = this.sizeFilter === '' || this.getFileSize(report.link) === this.sizeFilter;
      return companyNameMatch && regionMatch && locationMatch && dateMatch && sizeMatch;
    });
  }

  getFileSize(link: string): string {
    // Implement logic to get the file size from the link
    // Return the file size as a string
    return '';
  }
  ngOnInit(): void {
  }

  downloadReport(link: string) { 
    window.open(link, '_blank'); 
  }

  formatDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    return `${day}-${month}-${year}`;
  }
}


const mockFiles: Report[] = [
  {
    title: 'RogerCorp',
    dateCreated: new Date('2023-03-15'),
    link: 'https://www.rogerscorp.com/-/media/project/rogerscorp/documents/general/english/rogers-2021-esg-report.pdf',
    'region': 'North America',
    'location': 'United States',
    'size': 'less than 10'
  },
  {
    title: 'Prudent',
    dateCreated: new Date('2024-03-03'),
    link: 'https://s1.q4cdn.com/379746662/files/doc_downloads/2022/PRU_ESG21.pdf',
    'region': 'Europe',
    'location': 'United Kingdom',
    'size': '10-49'
  },
  {
    title: 'GSK',
    dateCreated: new Date('2021-02-25'),
    link: 'https://www.gsk.com/media/9962/esg-performance-report-2022.pdf',
    size: '50-249',
    'region': 'Asia',
    'location': 'India'
  },
  {
    title: 'Delta News',
    dateCreated: new Date('2023-03-15'),
    link: 'https://news.delta.com/sites/default/files/2023-04/delta_esgreport2022_0.pdf',
    'region': 'North America',
    'location': 'United States', 
    'size': 'more than 250'
  },
];



const mockStates: string[] = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]
