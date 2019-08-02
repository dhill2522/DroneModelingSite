import { independentVariable, yVariable } from './models'

export const independentVariables: independentVariable[] = [
    'startstateofcharge',
    'altitude',
    'temperature',
    'dropsize',
    'liquidwatercontent',
    'newtemperature',
    'windspeed',
    'winddirection',
    'relativehumidity',
    'payload',
    'missionspeed',
]

export const yVariables: yVariable[] = ['range', 'power']

export const batteryTypes = [
    {
        id: 1,
        name: 'near-future',
    },
]
