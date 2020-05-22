import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {DynamoService} from "../dynamo.service";

@Component({
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {

  public engi: Observable<any>;
  public name: string;

  constructor(private dynamoService: DynamoService) {}

  ngOnInit(): void {
    this.name = "";
  }

  searchEngineer(){
    this.engi = this.dynamoService.loadEngineer(this.name);
  }
}
