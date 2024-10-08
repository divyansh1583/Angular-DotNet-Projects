import { Component } from '@angular/core';

@Component({
  selector: 'app-housing-location',
  template: `
  <section>
    <form>
      <input type="text" placeholder="Filter by city">
      <button class="primary" type="button">Search</button>
    </form>
  </section>
  <section class="results">
    <app-housing-location></app-housing-location>
  </section>
  `,
  styleUrls: ['./housing-location.component.scss']
})
export class HousingLocationComponent {

}
