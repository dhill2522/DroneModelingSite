export type IndependentVariable =
    'altitude' |
    'batterycapacity' |
    'chord' |
    'dropsize' |
    'endurancemaxhover' |
    'gustamplitude' |
    'gustfrequency' |
    'height' |
    'length' |
    'liquidwatercontent' |
    'lifttodrag' |
    'missionspeed' |
    'payload' |
    'rainfallrate' |
    'relativehumidity' |
    'rotordiameter' |
    'span' |
    'spanwiseefficiency' |
    'startstateofcharge' |
    'temperature' |
    'width' |
    'windheading' |
    'windspeed' |
    'windspeeddown' |
    'windspeednortheast' |
    'wingarea'

export type yVariable = 'range' | 'power'

export interface Params {
    validation: boolean
    validationCase: string // from dropdown
    droneName: string // from dropdown
    batteryTechnology: string
    stateOfHealth: number // use slider
    startStateOfCharge: number // use slider
    altitude: number
    dropSize: number
    liquidWaterContent: number // use slider
    temperature: number
    windSpeed: number // use slider
    windDirection: number
    relativeHumidity: number
    timestep: number
    xLabel: IndependentVariable // From Dropdown
    yLabel: yVariable // From Dropdown
    title: string
    xVals: number[]
    weatherEffect: IndependentVariable
    zParam: string
}

export interface ApiParams {
    validation: boolean
    validationcase: string // from dropdown
    dronename: string // from dropdown
    batterytechnology: string
    stateofhealth: number // use slider
    startstateofcharge: number // use slider
    altitude: number
    dropsize: number
    liquidwatercontent: number // use slider
    temperature: number
    windspeed: number // use slider
    winddirection: number
    relativehumidity: number
    timestep: number
    xlabel: IndependentVariable // From Dropdown
    ylabel: yVariable // From Dropdown
    title: string
    xvals: number[]
    weathereffect: IndependentVariable
    zParam: string
}

export interface ValidationCase {
    id: string
    xvalid: number[]
    yvalid: number[]
    drone: object
    settings: object
}

export interface Plottable {
    id: string
    displayName: string
    values: number[][]
}

export interface Response {
    plottables: Plottable[]
    zAxis: {
        id: string,
        displayName: string,
        values: number[],
    }
}
