import {Component} from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('monitorFade',[
      state('in',style({
        opacity:1,
        transform:'translateY(0)'
      })),
      transition('void => *',[
        style({
          opacity:0,
          transform:'translateY(-40px)'
        }),
        animate(1000)
      ])
    ]),
    trigger('chatblips',[
      state('in',style({
        opacity: 1,
        transform:'translateY(0)'
      })),
      transition('void => *',[style({
        opacity: 0
      }),
        animate('{{time}}ms {{delay}}ms ease-in-out',keyframes([
          style({
            opacity: 0,
            transform: 'scale(.3)',
            offset: 0
          }),
          style({
            opacity: 1,
            transform: 'scale(1.0)',
            offset: 0.5
          }),
          style({
            opacity: 1,
            transform: 'scale(0.9)',
            offset: 0.7
          }),
          style({
            opacity: 1,
            transform: 'scale(1)',
            offset: 1
          })
        ]))
      ],{ params: { time : '2000',delay:'1000'}}),
    ])
  ]
})
export class AppComponent {
  title = 'app';

}
