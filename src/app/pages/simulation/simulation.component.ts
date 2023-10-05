import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from 'src/app/models/model.game';
import { SimulationService } from 'src/app/services/simulation.service';

@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.scss'],
})
export class SimulationComponent implements OnInit {
  selectedRadioButton!: string;
  inputValue!: number;
  response: Game[] = [];
  winCount: number = 0;
  showResults: boolean = false;

  constructor(private service: SimulationService, private router: Router) {}

  ngOnInit(): void {}

  async onClickSimulate() {
    try {
      const switchDoor = this.selectedRadioButton === 'true';

      this.response = await this.service.simulate(switchDoor, this.inputValue);
      this.showResults = true;
      this.winCount = this.response.filter((game) => game.playerWon).length;
      console.log('Response: ', this.response);
    } catch (error) {
      console.log('Error: ', error);
    }
  }

  onClickSolution() {
    this.router.navigate(['solution']);
  }
}
