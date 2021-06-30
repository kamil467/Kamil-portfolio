import { Component, OnInit } from '@angular/core';
const ELEMENT_DATA = [
  {name: 'Location Worked:',content:'Mysore, Bangalore, Pune, Chennai'},
  {name: 'Duration',content:'3 Years'},
  {name: 'Domain',content:'PLM & FMCG,CRS(Consumer Response System)'},
  {name: 'Technical Stack Worked', content:'C#,Asp.NET MVC,SQL Server'}
];

const SOPRA_STERIA =[
  {name: 'Location Worked:',content:'Chennai'},
  {name: 'Duration',content:'2.9 Years'},
  {name: 'Domain',content:'Workforce Scheduling,Insurance'},
  {name: 'Technical Stack Worked', content:'.NET Core, Asp.NET Core,EntityFramework Core,SQL Server,Angular'}
]

@Component({
  selector: 'app-experience',
  templateUrl: './experience.page.html',
  styleUrls: ['./experience.page.scss'],
})
export class ExperiencePage implements OnInit {

  displayedColumns: string[] = ['name','content'];
  dataSource = ELEMENT_DATA;
  steria_dataSource= SOPRA_STERIA;
  constructor() { }

  ngOnInit() {
  }

}
