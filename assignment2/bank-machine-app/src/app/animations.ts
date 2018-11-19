import { trigger, stagger, animate, style, group, query, transition, keyframes, animateChild } from '@angular/animations';
// import { trigger, stagger, animate, style, group, query as q, transition, keyframes } from '@angular/animations';

// const query = (s, a, o = {optional: true}) => q(s, a, o);

export const normalTransition = [
  style({position: 'relative'}),
  query(':enter, :leave', [
    style({
      // position: 'absolute',
      // top: 0,
      // left: 0,
      width: '100%'
    })
  ]),
  query(':enter', [
    style({left: '-100%'})
  ]),
  query(':leave', animateChild()),
  group([
    query(':leave', [
      animate('300ms ease-out', style({left: '100%'}))
    ]),
    query(':enter', [
      animate('300ms ease-out', style({left: '0%'}))
    ])
  ]),
  query(':enter', animateChild()),
];

const slideInSteps = [
  /* order */
  /* 1 */ query(':enter, :leave', style({position: 'fixed', width: '100%'})
    , {optional: true}),
  /* 2 */ group([  // block executes in parallel
    query(':enter', [
      style({transform: 'translateX(100%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
    ], {optional: true}),
    query(':leave', [
      style({transform: 'translateX(0%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateX(-100%)'}))
    ], {optional: true}),
  ])
];
const slideOutSteps = [
  /* order */
  /* 1 */ query(':enter, :leave', style({position: 'fixed', width: '100%'})
    , {optional: true}),
  /* 2 */ group([  // block executes in parallel
    query(':enter', [
      style({transform: 'translateX(-100%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
    ], {optional: true}),
    query(':leave', [
      style({transform: 'translateX(0%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateX(100%)'}))
    ], {optional: true}),
  ])
];
export const routerTransition = trigger('routeAnimations', [
  // transition('* <=> *', slideInSteps),
  transition('home => pastHome', slideInSteps),
  transition('pastHome => home', slideOutSteps),
  transition('complete => home', slideOutSteps),
  transition('* => pastHome', slideInSteps),
  transition('* => complete', slideInSteps),
  transition('login => *', slideInSteps),
  transition('* => login', slideOutSteps),
  // transition('* => *', slideInSteps),

]);

export const slideInAnimation =
  trigger('routeAnimations', [
    // transition('* <=> *', routerTransition),
    transition('home <=> pastHome', normalTransition),
    transition('* <=> pastHome', normalTransition),
    transition('login <=> *', normalTransition),
    transition('* <=> FilterPage', [
      style({position: 'relative'}),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({left: '-100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('200ms ease-out', style({left: '100%'}))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({left: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ])
  ]);
