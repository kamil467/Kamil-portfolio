import { Component, OnInit } from '@angular/core';
const ELEMENT_DATA = [
  {name: 'Exam',content:'SSLC'},
  {name: 'Board:',content:'Tamil Nadu State Board'},
  {name: 'Year of Passing',content:'2009'},
  {name: 'Score', content:'94.5'},
  {name: 'Achievements', content:'Top Scorer among govt schools in Ramnad City.'}
];

const HSEC_SOURCE =[
  {name: 'Exam',content:'Higher Secondary'},
  {name: 'Board:',content:'Tamil Nadu State Board'},
  {name: 'Year of Passing',content:'2011'},
  {name: 'Score', content:'91.75'},
  {name: 'Achievements', content:'District rank holder among govt schools in Ramnad city.Please see awards and achievements section for more details.'}
]

const VIT_SOURCE =[
  {name: 'Degree:',content:'Bachelor of Technology'},
  {name: 'Major',content:'Information Technology'},
  {name: 'CGPA',content:'8.15'}
]



@Component({
  selector: 'app-academic',
  templateUrl: './academic.page.html',
  styleUrls: ['./academic.page.scss'],
})
export class AcademicPage implements OnInit {
  displayedColumns: string[] = ['name','content'];
  dataSource = ELEMENT_DATA;
  steria_dataSource= VIT_SOURCE;
  hsec_dataSource = HSEC_SOURCE;
  type:string;



  constructor() { }
   
  ngOnInit() {
  this.type= 'vit'; 
  }
  segmentChanged(event:any)
  {
    this.type = event.detail.value;
    
  }
}
