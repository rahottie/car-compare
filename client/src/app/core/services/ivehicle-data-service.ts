import { Observable } from "rxjs/Observable";
import { Vehicle } from "../models/vehicle";

export interface IVehicleDataService {
    getAllYears();
    getMakes();
    getModels(make, year?);//: Observable<Vehicle>;
    getTrim(input): Observable<Vehicle>;
    getValue(input: Vehicle);//: Observable<any>;
}