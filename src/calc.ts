
class Calculator {

    constructor () {

    }

    public sum ( x: int, y: int ) : { error: string, result: int } {
        return {
            error: null,
            result: x + y
        }
    }

}