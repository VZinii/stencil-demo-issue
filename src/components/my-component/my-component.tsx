import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {

  /**
   * Example prop
   */
  @Prop({reflect: true}) href?: string;

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
