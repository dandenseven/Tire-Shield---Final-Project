// import React, { useContext, useState, useEffect} from 'react';
// import { FirebaseContext } from '../Firebase';
// import { AuthUserContext, withAuthorization } from '../Session';

// function WeatherPage() {
//     const[version, setVersion] = useState("");
//     const[transactionid, setTransactionId] = useState("");
//     const[expire_time_gmt, setExpireTimeGmt] = useState("");
    


//     // need user id
//     const userId = useContext(FirebaseContext).uid
    
//     async function addTrip() {
//         const data = JSON.stringify({
//             charactistic: integer, 
//             class: string,
//             expire_time_gmt: integer,
//             event_end: integer,
            
//         })
//         const configs = {
//             method: 'post',
//             data: data,
//             headers: {"Content-Type": "application/json"}
//         }
//         const response = await fetch(`http://api.weather.com/v2/turbo/vt1observation`
//         const success = await response.json();
//         setSuccess(success.status)

//     }

//     return (
        
//         <div>
            
//         </div>


//     );

// }


// const condition = authUser => !!authUser;


// export default withAuthorization(condition)(WeatherPage);


