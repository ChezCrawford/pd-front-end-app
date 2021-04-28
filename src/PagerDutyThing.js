
import {api} from '@pagerduty/pdjs';

const pd = api({token: 'someToken1234567890'});

const handleClick = () => {
    console.log("Clicked")

    pd.get('/incidents')
    .then(({data, resource, next}) => console.log(data, resource, next))
    .catch(console.error);
}

function PagerDutyThing() {
    return (
        <button onClick={handleClick}>
            Do PagerDuty Thing
        </button>
    );
}

export default PagerDutyThing;