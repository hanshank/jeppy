import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Player } from 'src/app/components/models/player';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-game-setup',
  templateUrl: './game-setup.component.html',
  styleUrls: ['./game-setup.component.scss']
})
export class GameSetupComponent implements OnInit {
  hostGame: boolean = true;

  // @Input() startGame: any;
  @Output() startGame = new EventEmitter<string>();

  // @Input()  size: number | string;
  // @Output() sizeChange = new EventEmitter<number>();


  model = new Player();

  ngOnInit() {
  }

  showHostForm() {
    this.hostGame = true;
  }

  showJoinForm() {
    this.hostGame = false;
  }

  onHostFormSubmit(form: NgForm) {
    const { playerName } = form.value;
    this.startGame.emit(playerName);
    form.reset();
  }

  onJoinFormSubmit() {
    console.log(this.model);
  }
}
