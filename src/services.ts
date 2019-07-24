class BackendService {
    public msg: string

    constructor() {
        this.msg = 'Hello World!'
    }
}

export const backendService = new BackendService()
