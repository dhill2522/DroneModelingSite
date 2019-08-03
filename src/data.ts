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
    {
        id: 1,
        name: 'near-future',
    },
]
