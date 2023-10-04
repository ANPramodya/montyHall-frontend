import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SimulationService } from 'src/app/services/simulation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  login() {
    this.router.navigate(['simulation']);
  }
}
