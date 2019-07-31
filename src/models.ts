
export type independentVariable =
    'startstateofcharge' |
    'altitude' |
    'temperature' |
    'dropsize' |
    'liquidwatercontent' |
    'newtemperature' |
    'windspeed' |
    'winddirection' |
    'relativehumidity' |
    'payload' |
    'missionspeed' |
    'model'

export type yVariable = 'range' | 'power'

export interface Params {
    validation: boolean
    validationcase: string // from dropdown
    dronename: string // from dropdown
    batterytechnology: any
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
    xlabel: independentVariable // From Dropdown
    ylabel: yVariable // From Dropdown
    title: string
    xarray: number[]
    weathereffect: string
}

export interface ValidationCase {
    id: string
    xvalid: number[]
    yvalid: number[]
    drone: object
    settings: object
}

// export type response = {
    // An array for each of the possible independentVariables and
    // the yVariables
// }
