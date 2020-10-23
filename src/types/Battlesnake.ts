import {Location} from './Location';

export type Battlesnake = {
    id: string;
    name: string;
    health: number;
    body: Location[];
    latency: string;
    head: Location;
    length: number;
    shout: string;
    squad: string;
};