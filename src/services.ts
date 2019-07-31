import { Params, ValidationCase } from './models'

class BackendService {
    private baseUrl = 'http://localhost:5000/'
    // private baseUrl = 'https://drones-and-weather.herokuapp.com/'
    private response: any

    public getValidationCases(): void {
        fetch(this.baseUrl + 'getValidationCases')
            .then((resp) => {
                resp.json().then((data: ValidationCase[]) => {
                    console.log('Validation Cases', data)
                })
            })
    }

    public makeRequest(body: Params): void {
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
}

export const backendService = new BackendService()
