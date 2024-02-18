import { Component, OnInit, Input } from '@angular/core';

export type LevelValue = 0 | 1 | 2 | 3 | 4;

@Component({
    selector: 'icon-strength-level',
    templateUrl: './strength-level.component.svg',
    styleUrls: ['./strength-level.component.scss'],
})
export class StrengthLevelComponent implements OnInit {
    @Input() level: LevelValue = 1;
    @Input() accentColor?: string = 'currentColor';

    constructor() { }

    ngOnInit() { }

}
