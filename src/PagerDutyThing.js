
import {api} from '@pagerduty/pdjs';

const pd = api({token: 'someToken1234567890'});

const handleGetClick = () => {
    console.log("GET Clicked")

    pd.get('/incidents')
    .then(({data, resource, next}) => console.log(data, resource, next))
    .catch(console.error);
}

const handlePostClick = () => {
    console.log("POST Clicked")
    const body = { 
        incident: {
            title: "CORS may not be working properly"
        } 
    }

    pd.post('/incidents', body)
    .then(({data, resource, next}) => console.log(data, resource, next))
    .catch(console.error);
}

function PagerDutyThing() {
    return (
        <div>
            <button onClick={handleGetClick}>
                Get PagerDuty Thing
            </button>
            <button onClick={handlePostClick}>
                Create PagerDuty Thing
            </button>
        </div>

    );
}

export default PagerDutyThing;