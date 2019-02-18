interface RaceSeries {
  title: string;
  slug: string;
  img: string;
  races: Race[];
  classes: RaceClass[];
  asterisk?: string;
  description?: string;
}

interface Race {
  date: string;
  name: string;
  description?: string;
}

interface RaceClass {
  name: string;
  race_order: number;
}
