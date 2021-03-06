import { Component, Prop, Listen } from "@stencil/core";
import { raceseries } from "../../global/series";

@Component({
  tag: "app-root",
  styleUrl: "app-root.css"
})
export class AppRoot {
  raceseries: RaceSeries[] = raceseries;

  @Prop({ connect: "ion-toast-controller" })
  toastCtrl: HTMLIonToastControllerElement;

  /**
   * Handle service worker updates correctly.
   * This code will show a toast letting the
   * user of the PWA know that there is a
   * new version available. When they click the
   * reload button it then reloads the page
   * so that the new service worker can take over
   * and serve the fresh content
   */
  @Listen("window:swUpdate")
  async onSWUpdate() {
    const toast = await this.toastCtrl.create({
      message: "New version available",
      showCloseButton: true,
      closeButtonText: "Reload"
    });
    await toast.present();
    await toast.onWillDismiss();
    window.location.reload();
  }

  render() {
    return (
      <ion-app>
        <ion-router useHash={false}>
          <ion-route
            url="/"
            component="app-home"
            componentProps={{ raceseries: this.raceseries }}
          />
          {/* {this.raceseries.map(series => (
            <ion-route
              url={`/${series.slug}`}
              component="series-page"
              componentProps={{ series }}
            />
          ))} */}
          {this.raceseries.map(series => (
            <ion-route-redirect from={`/${series.slug}`} to="/" />
          ))}
          <ion-route url="/contact" component="contact-page" />
          <ion-route
            url="/contact/success"
            component="contact-page"
            componentProps={{
              success: true
            }}
          />
        </ion-router>
        <ion-nav />
      </ion-app>
    );
  }
}
