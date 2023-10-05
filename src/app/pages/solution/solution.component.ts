import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.scss'],
})
export class SolutionComponent implements OnInit {
  doors: { selected: boolean; open: boolean }[] = [];
  show: boolean = false;

  constructor() {}

  ngOnInit() {
    for (let i = 0; i < 12; i++) {
      this.doors.push({ selected: false, open: false });
    }
  }

  chooseDoor() {
    this.show = true;
    this.doors = [];
    for (let i = 0; i < 12; i++) {
      if (i == 0) {
        this.doors.push({ selected: true, open: false });
      } else if (i == 8) {
        this.doors.push({ selected: false, open: false });
      } else {
        this.doors.push({ selected: false, open: true });
      }
    }
  }
}
