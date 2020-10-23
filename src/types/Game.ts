export type Game = {
    id: string;
    ruleset: {
        name: string;
        version: string;
    };
    timeout: number;
};