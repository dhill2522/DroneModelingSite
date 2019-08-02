import { Params, ValidationCase } from './models'

class BackendService {
    public drones: any
    public validationCases: any

    private baseUrl = 'http://localhost:5000/'
    // private baseUrl = 'https://drones-and-weather.herokuapp.com/'
    private response: any

    public simulate(body: Params): void {
        console.log('Request body', body)
        fetch(this.baseUrl + 'simulate', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'appplication/json',
            },
        }).then((data) => {
            console.log('Response metadata', data)
            data.json().then((moreData) => {
                console.log('Response body', moreData)
                this.response = moreData
            })
        })
    }

    public getValidationCases(): Promise<ValidationCase[]> {
        return new Promise((resolve, reject) => {
            fetch(this.baseUrl + 'getValidationCases')
                .then((resp) => {
                    resp.json().then((data: ValidationCase[]) => {
                        console.log('Validation Cases', data)
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
                        resolve(data)
                    })
                })
        })
    }
}

export const backendService = new BackendService()
