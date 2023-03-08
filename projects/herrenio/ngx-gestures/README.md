# @herrenio/ngx-gestures
**DEMO:** coming soon

This gesture library provides  a lightweight and flexible solution for incorporating a range of gestures into Angular applications. With customizable interactions, this library can enhance the usability and accessibility of your Angular app.

## Installation
```
npm install @herrenio/ngx-gestures
```

## Usage
Import the gesture module using
```javascript
import {NgxGestureModule} from '@herrenio/ngx-gestures';
```

### Tap gestures
Use the directive as follows
```angular2html
<div
  ngxTapGesture
  (tapCountReached)="tapCountReached()"
  [tapCount]="2"
  [maxTapIntervalMs]="200"
>
</div>
```

Following properties are available

| Name             | Default | Description                                                                              |  
|------------------|---------|------------------------------------------------------------------------------------------|
| tapCount         | 2       | How many times has to be clicked/tapped until `tapCountReached` gets fired               |
| maxTapIntervalMs | 200     | How much time (ms) is allowed between taps before the current tap interval gets canceled |

