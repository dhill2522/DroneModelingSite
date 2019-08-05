import { IndependentVariable, yVariable } from './models'

export const independentVariables: { name: IndependentVariable, display: string }[] = [
    { name: 'altitude', display: 'Altitude'},
    { name: 'batterycapacity', display: 'Battery Capacity'},
    { name: 'chord', display: 'Chord'},
    { name: 'dropsize', display: 'Drop Size'},
    { name: 'endurancemaxhover', display: 'Max Hover Endurance'},
    { name: 'gustamplitude', display: 'Gust Amplitude'},
    { name: 'gustfrequency', display: 'Gust Frequency'},
    { name: 'height', display: 'Height'},
    { name: 'length', display: 'Length'},
    { name: 'liquidwatercontent', display: 'Liquid Water Content'},
    { name: 'lifttodrag', display: 'Lift to Drag'},
    { name: 'missionspeed', display: 'Mission Speed'},
    { name: 'payload', display: 'Payload'},
    { name: 'rainfallrate', display: 'Rainfall Rate'},
    { name: 'relativehumidity', display: 'Relative Humidity'},
    { name: 'rotordiameter', display: 'Rotor Diameter'},
    { name: 'span', display: 'Span'},
    { name: 'spanwiseefficiency', display: 'Spanwise Efficiency'},
    { name: 'startstateofcharge', display: 'Start State of Charge'},
    { name: 'temperature', display: 'Temperature'},
    { name: 'width', display: 'Width'},
    { name: 'windheading', display: 'Wind Heading'},
    { name: 'windspeed', display: 'Wind Speed'},
    { name: 'windspeeddown', display: 'Downdraft'},
    { name: 'wingarea', display: 'Wing Area'}
]

export const yVariables: yVariable[] = ['range', 'power']

export const batteryTypes = [
    { id: 1, name: 'current', displayName: 'Current' },
    { id: 2, name: 'near-future', displayName: 'Near-future' },
    { id: 3, name: 'far-future', displayName: 'Far-future' },
]
