import { Component, OnInit } from '@angular/core';
import { SimulationService } from 'src/app/services/simulation.service';

@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.scss'],
})
export class SimulationComponent implements OnInit {
  selectedRadioButton!: string;
  inputValue!: number;

  constructor(private service: SimulationService) {}

  ngOnInit(): void {}

  async onClickSimulate() {
    try {
      const switchDoor = this.selectedRadioButton === 'true';

      const response = await this.service.simulate(switchDoor, this.inputValue);
      console.log('Response: ', response);
    } catch (error) {
      console.log('Error: ', error);
    }
  }
}
