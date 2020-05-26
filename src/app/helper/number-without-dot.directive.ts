import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[wmNumberWithOutDot]'
})
export class NumberWithoutDotDirective {

  private regex: RegExp = new RegExp(/^[0-9]+([0-9]*){0,1}$/g);
  private specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home', 'ArrowRight', 'ArrowLeft'];

  constructor(private el: ElementRef) { }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    // Allow Backspace, tab, end, and home keys
    if (this.specialKeys.indexOf(event.key) !== -1) {
      return;
    }
    const current: string = this.el.nativeElement.value;
    const next: string = current.concat(event.key);
    if (next && !String(next).match(this.regex)) {
      event.preventDefault();
    }
  }

  @HostListener('focus', ['$event'])
  onFocus(event: KeyboardEvent) {
    this.el.nativeElement.select();
  }

}