import { Component, OnInit } from '@angular/core';
import { DashboardDataService } from '../service/dashboard-data.service';
import { FirstStageReactorTable } from '../models/FirstStageReactorTable';
import { SecondStageReactor } from '../models/SecondStageReactor';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  Data : FirstStageReactorTable;
  SecondStageData : SecondStageReactor;

  constructor(){
    this.Data = new FirstStageReactorTable();
    this.SecondStageData = new SecondStageReactor();
  }

  ngOnInit(): void {
    
  }

}
