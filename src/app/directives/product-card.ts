import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appProductCard]',
})
export class ProductCard {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.setDefaultStyle();
  }

  private setDefaultStyle() {
    this.renderer.setStyle(this.el.nativeElement, 'border', '2px solid #ccc');
    this.renderer.setStyle(this.el.nativeElement, 'border-radius', '15px');
    this.renderer.setStyle(this.el.nativeElement, 'box-shadow', '0 2px 8px rgba(0,0,0,0.2)');
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'all 0.3s ease-in-out');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'border', '4px solid #82a2c4ff');
    this.renderer.setStyle(this.el.nativeElement, 'box-shadow', '0 4px 15px rgba(0,0,0,0.4)');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setDefaultStyle();
  }
}
