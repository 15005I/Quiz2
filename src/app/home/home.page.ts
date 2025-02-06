import { Component } from '@angular/core';
import { JokesService } from '../jokes.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  randomJoke: any;
  listCategories: any = [];
  constructor(private jokesService: JokesService){}

  ngOnInit() {
    this.jokesService.getCategories().subscribe((data) => {
      this.listCategories = data;
    });

    this.jokesService.getRandomJoke().subscribe((data) => {
      this.randomJoke = data;
    });
  }
}