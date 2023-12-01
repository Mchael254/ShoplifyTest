import http from 'k6/http';
import { sleep } from 'k6';

export const options ={
    vus: 1,
    duration: '10s',
};

export default function () {
    const body = JSON.stringify({
        email: 'michealvenum007@gmail.com',
        password: 'Mike1234567'
    });
    const paramas = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    http.post('http://localhost:5400/login/',body,paramas);
    sleep(1);
}