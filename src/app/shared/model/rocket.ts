import { IRocket } from '../interfaces/rocket';
import { ISecondStage, IPayload, IOrbit, IFairings, IFirstStage, ICore  } from './../interfaces/inside-rocket';



export class Rocket implements IRocket{
  rocket_id: string;  rocket_name: string;
  rocket_type: string;
  first_stage: IFirstStage;
  second_stage: ISecondStage;
  fairings: IFairings;

  createEmpty() {
    this.rocket_id = null;
    this.rocket_type = null;
    this.first_stage = new FirstStage().createEmpty();
    this.second_stage = new SecondStage().createEmpty();
    this.fairings = new Fairings().createEmpty();

    return this;
  }
}

export class SecondStage implements ISecondStage {
  block: number;
  payloads: IPayload[];

  createEmpty() {
    this.block = null;
    this.payloads = new Payload().createEmpty();

    return this;
  }
}



export class Fairings implements IFairings {
  reused: boolean;
  recovery_attempt: boolean;
  recovered: boolean;
  ship: string;

  createEmpty() {
    this.reused = null;
    this.recovery_attempt = null;
    this.recovered = null;
    this.ship = null;

    return this;
  }


}

export class Payload implements IPayload {
  payload_id: string;
  norad_id: any[];
  reused: boolean;
  customers: any[];
  nationality: string;
  manufacturer: string;
  payload_type: string;
  payload_mass_kg: number;
  payload_mass_lbs: number;
  orbit: string;
  orbit_params: import("../interfaces/inside-rocket").IOrbit;

  createEmpty() {
    this.payload_id = null;
    this.norad_id = null;
    this.reused = null;
    this.customers = null;
    this.nationality = null;
    this.manufacturer = null;
    this.payload_type = null;
    this.payload_mass_kg = null;
    this.payload_mass_lbs = null;
    this.orbit = null;
    this.orbit_params = new Orbit().createEmpty();

    return Array<this>();
  }
}

export class Orbit implements IOrbit {
  reference_system: string;
  regime: string;
  longitude: number;
  semi_major_axis_km: string;
  eccentricity: string;
  periapsis_km: string;
  apoapsis_km: number;
  inclination_deg: number;
  period_min: string;
  lifespan_years: string;
  epoch: string;
  mean_motion: string;
  raan: string;
  arg_of_pericenter: string;
  mean_anomaly: string;

  createEmpty() {
    this.reference_system = null;
    this.regime = null;
    this.longitude = null;
    this.semi_major_axis_km = null;
    this.eccentricity = null;
    this.periapsis_km = null;
    this.apoapsis_km = null;
    this.inclination_deg = null;
    this.period_min = null;
    this.lifespan_years = null;
    this.epoch = null;
    this.mean_motion = null;
    this.raan = null;
    this.arg_of_pericenter = null;
    this.mean_anomaly = null;

    return this;
  }
}

export class FirstStage implements IFirstStage {
  cores: import("../interfaces/inside-rocket").ICore[];

  createEmpty() {
    this.cores = new Core().createEmprty();

    return this;
  }
}

export class Core implements ICore {
  core_serial: string;
  flight: number;
  block: string;
  gridfins: boolean;
  legs: boolean;
  reused: boolean;
  land_success: string;
  landing_intent: boolean;
  landing_type: string;
  landing_vehicle: string;

  createEmprty() {
    this.core_serial = null;
    this.flight = null;
    this.block = null;
    this.gridfins = null;
    this.legs = null;
    this.reused = null;
    this.land_success = null;
    this.landing_intent = null;
    this.landing_type = null;
    this.landing_vehicle = null;

    return Array<this>();
  }

}
