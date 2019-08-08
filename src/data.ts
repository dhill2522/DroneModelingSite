import { IndependentVariable, yVariable } from './models'

export const independentVariables: { name: IndependentVariable, display: string }[] = [
    { name: 'altitude' as IndependentVariable, display: 'Altitude' },
    { name: 'batterycapacity' as IndependentVariable, display: 'Battery Capacity' },
    { name: 'chord' as IndependentVariable, display: 'Chord' },
    { name: 'dropsize' as IndependentVariable, display: 'Drop Size' },
    { name: 'endurancemaxhover' as IndependentVariable, display: 'Max Hover Endurance' },
    { name: 'gustamplitude' as IndependentVariable, display: 'Gust Amplitude' },
    { name: 'gustfrequency' as IndependentVariable, display: 'Gust Frequency' },
    { name: 'height' as IndependentVariable, display: 'Height' },
    { name: 'length' as IndependentVariable, display: 'Length' },
    { name: 'liquidwatercontent' as IndependentVariable, display: 'Liquid Water Content' },
    { name: 'lifttodrag' as IndependentVariable, display: 'Lift to Drag' },
    { name: 'missionspeed' as IndependentVariable, display: 'Mission Speed' },
    { name: 'payload' as IndependentVariable, display: 'Payload' },
    { name: 'rainfallrate' as IndependentVariable, display: 'Rainfall Rate' },
    { name: 'relativehumidity' as IndependentVariable, display: 'Relative Humidity' },
    { name: 'rotordiameter' as IndependentVariable, display: 'Rotor Diameter' },
    { name: 'span' as IndependentVariable, display: 'Span' },
    { name: 'spanwiseefficiency' as IndependentVariable, display: 'Spanwise Efficiency' },
    { name: 'startstateofcharge' as IndependentVariable, display: 'Start State of Charge' },
    { name: 'temperature' as IndependentVariable, display: 'Temperature' },
    { name: 'width' as IndependentVariable, display: 'Width' },
    { name: 'windheading' as IndependentVariable, display: 'Wind Heading' },
    { name: 'windspeed' as IndependentVariable, display: 'Wind Speed' },
    { name: 'windspeeddown' as IndependentVariable, display: 'Downdraft' },
    { name: 'wingarea' as IndependentVariable, display: 'Wing Area' }
].sort((a, b) => {
    if (a.display > b.display) {
        return 1
    }
    return 0
})

export const yVariables: yVariable[] = ['range', 'power']

export const batteryTypes = [
    { id: 1, name: 'current', displayName: 'Current' },
    { id: 2, name: 'near-future', displayName: 'Near-future' },
    { id: 3, name: 'far-future', displayName: 'Far-future' },
]
