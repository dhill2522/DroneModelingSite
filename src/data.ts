import { IndependentVariable, yVariable } from './models'

export const independentVariables: IndependentVariable[] = [
    'altitude',
    'batterycapacity',
    'chord',
    'dropsize',
    'endurancemaxhover',
    'gustamplitude',
    'gustfrequency',
    'height',
    'length',
    'liquidwatercontent',
    'lifttodrag',
    'missionspeed',
    'payload',
    'rainfallrate',
    'relativehumidity',
    'rotordiameter',
    'span',
    'spanwiseefficiency',
    'startstateofcharge',
    'temperature',
    'width',
    'windheading',
    'windspeed',
    'windspeeddown',
    'windspeednortheast',
    'wingarea'
]

export const yVariables: yVariable[] = ['range', 'power']

export const batteryTypes = [
    { id: 1, name: 'current', displayName: 'Current' },
    { id: 2, name: 'near-future', displayName: 'Near-future' },
    { id: 3, name: 'far-future', displayName: 'Far-future' },
]
