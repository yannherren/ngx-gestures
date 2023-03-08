import {Directive, ElementRef, EventEmitter, Input, OnDestroy, Output} from '@angular/core';
import {fromEvent, interval, merge, Subject, takeUntil} from "rxjs";

@Directive({
  selector: '[ngxTapGesture]'
})
export class TapGestureDirective implements OnDestroy {

  @Output()
  tapCountReached = new EventEmitter<void>();

  @Input()
  tapCount = 2;

  @Input()
  maxTapIntervalMs = 200;

  private tapCounter = 0;

  private timer = 0;

  private interval: any = undefined;

  private readonly onDestroy$ = new Subject<void>();

  private readonly tapDown = merge(
    fromEvent(this.elementRef.nativeElement, 'click'),
    fromEvent(this.elementRef.nativeElement, 'tap')
  )

  constructor(private readonly elementRef: ElementRef) {
    this.tapDown
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(() => {
      if (!this.interval) {
        this.interval = setInterval(() => this.intervalTick(), 1)
      }
      this.timer = 0;
      ++this.tapCounter
      if (this.tapCounter === this.tapCount) {
        this.tapCountReached.emit();
        this.reset();
      }
    })
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  private intervalTick() {
    ++this.timer;
    if (this.timer >= this.maxTapIntervalMs) {
      this.reset()
    }
  }

  private reset() {
    this.timer = 0;
    this.tapCounter = 0;
    clearInterval(this.interval);
    this.interval = undefined;
  }

}
