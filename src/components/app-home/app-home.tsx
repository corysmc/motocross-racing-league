import { Component } from "@stencil/core";
import { format, parseISO } from "date-fns";

@Component({
  tag: "app-home",
  styleUrl: "app-home.css"
})
export class AppHome {
  raceseries = [
    {
      title: "Mini Motocross",
      races: [
        {
          date: "2019-05-01",
          name: "Clinic 1",
          description:
            "Learn to ride clinic for all sizes of mini riders. Sponsored by The Edge Powersports.",
          img: "/assets/img/moto-tires.jpg"
        },
        {
          date: "2019-05-15",
          name: "Race 1",
          img: "/assets/img/moto-tires.jpg"
        },
        {
          date: "2019-05-29",
          name: "Race 2",
          img: "/assets/img/moto-tires.jpg"
        },
        {
          date: "2019-06-12",
          name: "Race 3",
          img: "/assets/img/moto-tires.jpg"
        },
        {
          date: "2019-08-28",
          name: "Clinic 2",
          description:
            "Learn to ride clinic for all sizes of mini riders. Sponsored by The Edge Powersports.",
          img: "/assets/img/moto-tires.jpg"
        },
        {
          date: "2019-09-04",
          name: "Race 4",
          img: "/assets/img/moto-tires.jpg"
        },
        {
          date: "2019-09-18",
          name: "Race 5",
          img: "/assets/img/moto-tires.jpg"
        },
        {
          date: "2019-10-02",
          name: "Race 6",
          img: "/assets/img/moto-tires.jpg"
        }
      ]
    },
    /////
    {
      title: "Fast Moto Fridays",
      races: [
        {
          date: "2019-04-19",
          name: "Race 1",
          img: "/assets/img/moto-tires.jpg"
        },
        {
          date: "2019-05-10",
          name: "Race 2",
          img: "/assets/img/moto-tires.jpg"
        },
        {
          date: "2019-06-07",
          name: "Race 3",
          img: "/assets/img/moto-tires.jpg"
        },
        {
          date: "2019-08-23",
          name: "Race 4",
          img: "/assets/img/moto-tires.jpg"
        },
        {
          date: "2019-09-13",
          name: "Race 5",
          img: "/assets/img/moto-tires.jpg"
        }
      ]
    },
    /////
    {
      title: "Up In Smoke",
      races: [
        {
          date: "2019-05-18",
          name: "Race 1",
          img: "/assets/img/moto-tires.jpg"
        },
        {
          date: "2019-06-01",
          name: "Race 2",
          img: "/assets/img/moto-tires.jpg"
        },
        {
          date: "2019-06-29",
          name: "Race 3",
          img: "/assets/img/moto-tires.jpg"
        },
        {
          date: "2019-09-07",
          name: "Race 4",
          img: "/assets/img/moto-tires.jpg"
        },
        {
          date: "2019-09-21",
          name: "Race 5",
          img: "/assets/img/moto-tires.jpg"
        }
      ]
    }
  ];

  render() {
    return [
      <ion-header>
        <ion-toolbar color="dark">
          <ion-title>Motocross Racing League</ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-content>
        <div class="image-wrapper">
          <img src="/assets/img/moto-tires.jpg" />
        </div>
        <h2 class="announcement">Tentative Race Schedule</h2>
        {this.raceseries.map(series => [
          <ion-list>
            <h1>{series.title}</h1>

            <ion-item-divider no-padding>
              <p>
                All races at <a href="https://www.google.com/search?q=jordan+river+ohv+utah&oq=jordan+river+ohv+utah&aqs=chrome..69i57j0l3.3151j0j4" target="_blank">Jordan River OHV, Utah</a>
              </p>
            </ion-item-divider>
            {series.races.map((race, index) => (
              <ion-item
                lines={index + 1 === series.races.length ? "full" : null}
              >
                <ion-label text-wrap>
                  <h2>{race.name}</h2>
                  {race.description ? <p>{race.description}</p> : null}
                </ion-label>
                {format(parseISO(race.date), "M/d/yyyy")}
              </ion-item>
            ))}
          </ion-list>
        ])}
      </ion-content>
    ];
  }
}
