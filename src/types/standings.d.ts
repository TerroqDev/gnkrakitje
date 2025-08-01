export interface Standings {
    standings: Standing [] 
}

export interface Standing {
    tournament:         Tournament;
    name:               string;
    type:               string;
    descriptions:       any[];
    rows:               Row[];
    id:                 number;
    updatedAtTimestamp: number;
}

export interface Row {
    team:               Team;
    descriptions:       any[];
    promotion?:         Promotion;
    position:           number;
    matches:            number;
    wins:               number;
    scoresFor:          number;
    scoresAgainst:      number;
    id:                 number;
    losses:             number;
    draws:              number;
    points:             number;
    scoreDiffFormatted: string;
}

export interface Promotion {
    text: string;
    id:   number;
}

export interface Team {
    name:              string;
    slug:              string;
    shortName:         string;
    gender?:           Gender;
    sport:             Sport;
    userCount:         number;
    nameCode:          string;
    national:          boolean;
    type:              number;
    id:                number;
    country:           TeamCountry;
    teamColors:        TeamColors;
    fieldTranslations: FieldTranslations;
    disabled?:         boolean;
}

export interface TeamCountry {
    alpha2: Alpha2;
    alpha3: Alpha3;
    name:   CountryName;
    slug:   Flag;
}

export enum Alpha2 {
    Hr = "HR",
}

export enum Alpha3 {
    Hrv = "HRV",
}

export enum CountryName {
    Croatia = "Croatia",
}

export enum Flag {
    Croatia = "croatia",
}

export interface FieldTranslations {
    nameTranslation:      NameTranslation;
    shortNameTranslation: ShortNameTranslation;
}

export interface NameTranslation {
    ar:  string;
    ru?: string;
}

export interface ShortNameTranslation {
    ar: string;
}

export enum Gender {
    M = "M",
}

export interface Sport {
    name: SportName;
    slug: Slug;
    id:   number;
}

export enum SportName {
    Football = "Football",
}

export enum Slug {
    Football = "football",
}

export interface TeamColors {
    primary:   Primary;
    secondary: Secondary;
    text:      Text;
}

export enum Primary {
    The00A550 = "#00a550",
    The235741 = "#235741",
    The374Df5 = "#374df5",
}

export enum Secondary {
    The000000 = "#000000",
    The1F2125 = "#1f2125",
    The374Df5 = "#374df5",
}

export enum Text {
    Ffffff = "#ffffff",
    The000000 = "#000000",
    The1F2125 = "#1f2125",
}

export interface Tournament {
    name:             string;
    slug:             string;
    category:         Category;
    uniqueTournament: UniqueTournament;
    priority:         number;
    isGroup:          boolean;
    isLive:           boolean;
    id:               number;
}

export interface Category {
    name:    CountryName;
    slug:    Flag;
    sport:   Sport;
    id:      number;
    country: TeamCountry;
    flag:    Flag;
    alpha2:  Alpha2;
}

export interface UniqueTournament {
    name:                        string;
    slug:                        string;
    category:                    Category;
    userCount:                   number;
    hasPerformanceGraphFeature:  boolean;
    id:                          number;
    country:                     UniqueTournamentCountry;
    displayInverseHomeAwayTeams: boolean;
}

export interface UniqueTournamentCountry {
}
