import { Component, Prop, State } from "@stencil/core";

@Component({
  tag: "app-home",
  styleUrl: "app-home.css"
})
export class AppHome {
  @Prop() raceseries: RaceSeries[];

  @State() e;

  render() {
    return [
      <scroll-header
        headerTitle="Motocross Racing League"
        img="/assets/img/moto-tires.jpg"
      />,
      <ion-content scrollEvents={true} onIonScroll={e => (this.e = e)}>
        <ion-item-divider color="danger" sticky>
          <ion-icon name="warning" slot="start" color="light" />
          <h5>All Races postponed until further notice</h5>
        </ion-item-divider>
        {/* <ion-grid>
          <ion-row>
            {this.raceseries.map(series => (
              <ion-col size="12" sizeSm="6" sizeMd="3">
                <ion-anchor href={`/${series.slug}`}>
                  <ion-card>
                    <img src={series.img} />
                    <ion-card-header>
                      <ion-card-title>{series.title}</ion-card-title>
                    </ion-card-header>

                    <ion-card-content>{series.description}</ion-card-content>
                  </ion-card>
                </ion-anchor>
              </ion-col>
            ))}
          </ion-row>
        </ion-grid> */}
        <div padding>
          <h1>Motocross Photos</h1>
          <a href="https://motofotos.photoreflect.com/">
            motofotos.photoreflect.com
          </a>
        </div>
        <div padding />
        <div padding>
          <ion-anchor href="/contact">Contact Us</ion-anchor>
        </div>
      </ion-content>
    ];
  }
}
