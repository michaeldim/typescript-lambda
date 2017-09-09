import { Handler, Context, Callback } from "aws-lambda";
import TestClass from "./test-class"

interface HelloResponse {
    statusCode: number;
    body: string;
}

interface Test {
    result: number
}

const hello: Handler = (event: any, context: Context, callback: Callback) => {

    const awesomeResult : Test = TestClass.returnANumber();

    const response: HelloResponse = {
        statusCode: 200,
        body: JSON.stringify({
            message: awesomeResult.result
        })
    };

    callback(undefined, response);
};

export { hello }