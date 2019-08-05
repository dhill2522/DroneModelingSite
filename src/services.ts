import { Params, ValidationCase, ApiParams, Response, Drone } from './models'
import { EventEmitter } from 'events'

class BackendService {
    public eventEmitter = new EventEmitter()
    public simulationResults: any
    public validationCases: any
    
    private baseUrl = 'http://localhost:5000/'
    private drones: Drone[] = []
    private selectedDrone: Drone = {'Drone Name': ''}
    // private baseUrl = 'https://drones-and-weather.herokuapp.com/'

    public simulate(data: Params): void {
        const body: ApiParams = {
            validation: data.validation,
            validationcase: data.validationCase,
            dronename: data.droneName,
            batterytechnology: data.batteryTechnology,
            stateofhealth: Number(data.stateOfHealth),
            startstateofcharge: Number(data.startStateOfCharge),
            altitude: Number(data.altitude),
            dropsize: Number(data.dropSize),
            liquidwatercontent: Number(data.liquidWaterContent),
            temperature: Number(data.temperature),
            windspeed: Number(data.windSpeed),
            winddirection: Number(data.windDirection),
            relativehumidity: Number(data.relativeHumidity),
            timestep: Number(data.timestep),
            xlabel: data.xLabel,
            ylabel: data.yLabel,
            title: data.title,
            xvals: data.xVals,
            weathereffect: data.weatherEffect,
            zParam: data.zParam
        }

        console.log('Request body', body)
        fetch(this.baseUrl + 'simulate', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'appplication/json',
            },
        }).then((resp) => {
            console.log('Response metadata', resp)
            resp.json().then((moreData: Response) => {
                if (moreData.error) {
                    console.log('Error running simulation:', moreData.log)
                } else {
                    console.log('Response body', moreData)
                    this.simulationResults = moreData
                    this.eventEmitter.emit('simulateComplete')
                }
            })
        }).catch((err: TypeError) => {
            console.log('Error fetching simulation results', err)
            console.log(err.message)
            alert('Error fetching simulation results. If this problem persists, \
            please report it as an issue on the github repository \
            (https://github.com/dhill2522/DroneModelingSite).')
        })
    }

    public getValidationCases(): Promise<ValidationCase[]> {
        return new Promise((resolve, reject) => {
            fetch(this.baseUrl + 'getValidationCases')
                .then((resp) => {
                    resp.json().then((data: ValidationCase[]) => {
                        console.log('Validation Cases', data)
                        data.push({
                            id: 'None',
                            xvalid: [],
                            yvalid: [],
                            drone: {},
                            settings: {}
                        })
                        resolve(data)
                    })
                })
        })
    }

    public getDrones(): Promise<any> {
        return new Promise((resolve, reject) => {
            fetch(this.baseUrl + 'getDrones')
                .then((resp) => {
                    resp.json().then((data) => {
                        console.log('Drones', data)
                        this.drones = data
                        resolve(data)
                    })
                })
        })
    }

    public getSelectedDrone(): any {
        return this.selectedDrone
    }

    public setSelectedDrone(droneName: string): void {
        const drone = this.drones.find((d) => d['Drone Name'] === droneName )
        if (drone) {
            this.selectedDrone = drone
        } else {
            this.selectedDrone = {'Drone Name': 'No Drone Selected'}
        }
        this.eventEmitter.emit('drone', this.selectedDrone)
    }
}

export const backendService = new BackendService()
