import { ComicsService } from './../../shared/services/comics.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit {

  comics:any = [];
  cities = [
    {name: 'New York', code: 'NY'},
    {name: 'Rome', code: 'RM'},
    {name: 'London', code: 'LDN'},
    {name: 'Istanbul', code: 'IST'},
    {name: 'Paris', code: 'PRS'}
  ];
  selectedCity:any;


  constructor(private comicsService: ComicsService) { }

  ngOnInit(): void {
    this.comicsService.getComics().subscribe((res:any) => {
      this.comics = res
  })
}
}
