export interface IFirstStage {
  cores: Array<ICore>;
}

export interface ISecondStage {
  block: number;
  payloads: Array<IPayload>;


}

export interface IFairings {
  reused: boolean;
  recovery_attempt: boolean;
  recovered: boolean;
  ship: string;
}

export interface IPayload {
    payload_id: string;
    norad_id: Array<any>;
    reused: boolean;
    customers: Array<any>;
    nationality: string;
    manufacturer: string;
    payload_type: string;
    payload_mass_kg: number;
    payload_mass_lbs: number;
    orbit: string;
    orbit_params: IOrbit;
}

export interface IOrbit {
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
}

export interface ICore {
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
}

