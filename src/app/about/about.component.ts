import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit  {
  section: string ='';
  
  constructor(private router: Router, 
            private route: ActivatedRoute, 
            ) {
              
             }

  handleButtonClick(route: string) {
    this.router.navigate([route]);
  }
  navigateToSection(section: string) {
    this.router.navigate(['/about'], { queryParams: { section } });
    
  }
  
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.section = params['section'] || '';
    });
   

  }
  
}


