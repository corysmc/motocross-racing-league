import { Component } from "@stencil/core";

@Component({
  tag: "app-home",
  styleUrl: "app-home.css"
})
export class AppHome {
  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Motocross Racing League</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
        <div class="image-wrapper">
          <img src="/assets/img/moto-tires.jpg" />
        </div>
        <div padding>
          <p>
            Welcome to the Motocross Racing League.com! <br />
            More coming soon!
          </p>
        </div>
      </ion-content>
    ];
  }
}
