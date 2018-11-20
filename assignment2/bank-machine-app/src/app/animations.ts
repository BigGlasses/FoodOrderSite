// import { trigger, stagger, animate, style, group, query, transition, keyframes, animateChild } from '@angular/animations';
import { trigger, stagger, animate, style, group, query as q, transition, keyframes, animateChild } from '@angular/animations';

const query = (s, a, o = {optional: true}) => q(s, a, o);

export const normalTransitionIn = [
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
    style({left: '-100%', height: '100%'})
  ]),
  query(':leave', animateChild()),
  group([
    query(':leave', [
      animate('500ms ease-out', style({left: '100%'}))
    ]),
    query(':enter', [
      animate('500ms ease-out', style({left: '0%'}))
    ])
  ]),
  query(':enter', animateChild()),
];


export const normalTransitionOut = [
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
    style({right: '-100%', height: '100%'})
  ]),
  query(':leave', animateChild()),
  group([
    query(':leave', [
      animate('500ms ease-out', style({right: '100%'}))
    ]),
    query(':enter', [
      animate('500ms ease-out', style({right: '0%'}))
    ])
  ]),
  query(':enter', animateChild()),
];

// Doesn't work
const slideInSteps = [
  /* order */
  // /* 1 */ query(':enter, :leave', style({ })
  // /* 1 */ query(':enter, :leave', style({width: '100%', height: '100%'})
  /* 1 */ query(':enter, :leave', style({ position: 'fixed', width: '100%'})
  // /* 1 */ query(':enter, :leave', style({ position: 'absolute', width: '100%', height: '100%'})
  // /* 1 */ query(':enter, :leave', style({position: 'relative', width: '100%'})
  // /* 1 */ query(':enter, :leave', style({position: 'fixed', width: '100%'})
  // /* 1 */ query(':enter, :leave', style({position: 'fixed', width: '100%', height: '100%'})
    , {optional: true}),
  /* 2 */ group([  // block executes in parallel
    query(':enter', [
      style({transform: 'translateX(100%)', width: '100%'}),
      animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
    ], {optional: true}),
    query(':leave', [
      style({transform: 'translateX(0%)', width: '100%'}),
      animate('0.5s ease-in-out', style({transform: 'translateX(-100%)'}))
    ], {optional: true}),
  ])
];
// Doesn't work
const slideOutSteps = [
  /* order */
  /* 1 */ query(':enter, :leave', style({})
  // /* 1 */ query(':enter, :leave', style({width: '100%',height: '100%'})
  // /* 1 */ query(':enter, :leave', style({position: 'relative', width: '100%'})
  // /* 1 */ query(':enter, :leave', style({position: 'fixed', width: '100%'})
  // /* 1 */ query(':enter, :leave', style({position: 'fixed', width: '100%', height: '100%'})
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
  transition('home => pastHome', normalTransitionIn),
  // transition('home => pastHome', slideInSteps),
  transition('pastHome => home', normalTransitionOut),
  // transition('pastHome => home', slideOutSteps),
  transition('complete => home', normalTransitionOut),
  // transition('complete => home', slideOutSteps),
  transition('* => pastHome', normalTransitionIn),
  transition('* => complete', normalTransitionIn),
  transition('login => *', normalTransitionIn),
  transition('* => login', normalTransitionOut),
  // transition('* => *', slideInSteps),

]);

export const slideInAnimation =
  trigger('routeAnimations', [
    // transition('* <=> *', routerTransition),
    transition('home <=> pastHome', normalTransitionIn),
    transition('* <=> pastHome', normalTransitionIn),
    transition('login <=> *', normalTransitionIn),
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
