
import {api} from '@pagerduty/pdjs';

const pd = api({token: 'y_NbAkKc66ryYTWUXYEu'});

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

const handlePutClick = () => {
    console.log("PUT Clicked")
    const body = {
        incident: {
            title: "CORS may not be working properly"
        }
    }

    pd.put('/incidents/PRVZI4Q', body)
    .then(({data, resource, next}) => console.log(data, resource, next))
    .catch(console.error);
}

const handleEarlyAccessClick = () => {
    console.log("GET Clicked")

    fetch('https://api.pagerduty.com/status_dashboards', {
        headers: {
            'Accept': 'application/vnd.pagerduty+json;version=2',
            'X-Early-Access': 'status-dashboards'
        }
    })
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
            <button onClick={handlePutClick}>
                Update PagerDuty Thing
            </button>
            <button onClick={handleEarlyAccessClick}>
                Early PagerDuty Thing
            </button>
        </div>

    );
}

export default PagerDutyThing;