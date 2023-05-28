import { Time } from "@angular/common";
import { Timestamp } from "rxjs";

// LOCATION DATA
export interface Marker {
    position: google.maps.LatLngLiteral
    name: string;
}

// USER DATA
export interface AddUserDetails {
    name: string;
    email: string;
    password: string;
}
export interface LoginDetails {
    email: string;
    password: string;
}
export interface UserInfo {
    loginStatus: boolean;
    info: {
        sub: string;
        email: string;
        name: string;
        picture: string;
    }
}
// USER CREATED RESPONSE
export interface CreatedResponse {
    created: boolean;
    message: string;
}

export interface Alert {
	type: string;
	message: string;
}

// STANDARD WORKOUT DATA
export interface Workout {
    label: string;
    name: string;
    url: string;
    desc: string[];
}
// SELECTED WORKOUT DATA (EDITED BY USER)
export interface WorkoutData {
    name: string;
    selected: boolean;
    quantity: number;
}
// DATA SENT TO DB (SCHEDULED WORKOUT)
export interface ScheduledData {
    workouts: WorkoutData[];
    sets: number;
    location: Marker;
    date: Date;
    time: Time;
    email: string;
}

// EMAIL DATA
export interface EmailData {
    subject: string;
    date: string;
    time: string;
    location: string;
}