import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[winderOnScroll]'
})
export class OnScrollDirective {
  @Input() animation!: string;
  private hasAnimated = false;

  // detect when the element is in the viewport
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollTop + window.innerHeight >= rect.top + scrollTop && !this.hasAnimated) {
      this.renderer.addClass(this.el.nativeElement, this.animation);
      this.hasAnimated = true;
    }
  }
}
