import { Component, Prop, State } from "@stencil/core";
import { format, parseISO } from "date-fns";

@Component({
  tag: "series-page",
  styleUrl: "series-page.css"
})
export class SeriesPage {
  @Prop() series: RaceSeries;

  @State() e;

  render() {
    return [
      <scroll-header headerTitle={this.series.title} img={this.series.img} />,
      <ion-content scrollEvents={true} onIonScroll={e => (this.e = e)}>
        <ion-list no-padding>
          <ion-item-divider color="danger" sticky>
            <h2>Tentative Race Schedule</h2>
          </ion-item-divider>
          <ion-item-divider>
            <h6>
              All races at{" "}
              <a
                href="https://www.google.com/maps/place/Jordan+River+OHV+State+Recreation+Area/@40.8260378,-111.9422156,15z/data=!4m2!3m1!1s0x0:0x302ebf1cf901a78d?ved=2ahUKEwi5v5a86sXgAhXHzIMKHYPGA-EQ_BIwFXoECAYQCA"
                target="_blank"
              >
                Jordan River OHV, Utah
              </a>
            </h6>
          </ion-item-divider>
          {this.series.races.map((race, index) => (
            <ion-item
              lines={index + 1 === this.series.races.length ? "full" : null}
            >
              <ion-label text-wrap>
                <h2>{race.name}</h2>
                {race.description ? <p>{race.description}</p> : null}
              </ion-label>
              {format(parseISO(race.date), "M/d/yyyy")}
            </ion-item>
          ))}
        </ion-list>
        <ion-list>
          <ion-item-divider sticky>
            <h2>Race Classes</h2>
          </ion-item-divider>
          {this.series.classes.map((raceclass, index) => (
            <ion-item
              lines={index + 1 === this.series.classes.length ? "full" : null}
            >
              <ion-label text-wrap>
                <h2>{raceclass.name}</h2>
                {/* {class.description ? <p>{race.description}</p> : null} */}
              </ion-label>
            </ion-item>
          ))}
          {this.series.asterisk ? (
            <p>
              <label padding>{this.series.asterisk}</label>
            </p>
          ) : null}
        </ion-list>

        <ion-list>
          <ion-item-divider sticky>
            <h2>Race Order</h2>
          </ion-item-divider>
          {this.series.classes
            .sort((a, b) => {
              if (a.race_order < b.race_order) return -1;
              if (a.race_order > b.race_order) return 1;
              return 0;
            })
            .map((raceclass, index) => (
              <ion-item
                lines={index + 1 === this.series.classes.length ? "full" : null}
              >
                <ion-label text-wrap>
                  <h2>{`#${raceclass.race_order} ${raceclass.name}`}</h2>
                  {/* {class.description ? <p>{race.description}</p> : null} */}
                </ion-label>
              </ion-item>
            ))}
          {this.series.asterisk ? (
            <p>
              <label padding>{this.series.asterisk}</label>
            </p>
          ) : null}
        </ion-list>
        <div padding />
      </ion-content>
    ];
  }
}
