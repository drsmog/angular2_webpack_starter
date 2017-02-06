import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	template: `
  <h2>aaaaaaa</h2>
  <button type="button" class="btn btn-primary">Left</button>
  <button type="button" class="btn btn-default">Middle</button>
  <button type="button" class="btn btn-default">Right</button>

  `,
})
export class AppComponent { name = 'Angular'; }
