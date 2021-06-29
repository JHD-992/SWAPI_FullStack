import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';



export default function PersonInfo() {

    //get name from url parameters and ensure it is in string format
    let getname = useParams();
    let charname = getname.name.toString();

    //create query based on character name retrieved from the url.
    const GetPerson = gql`
    {
        person(name: "${charname}") {
            results {
                name
                height
                mass
                gender
                homeworld
            }
        }
    }
`;

    //pending the resolution of the query, have conditional loading.
    const {loading, error, data} = useQuery(GetPerson);

    if(loading) return <h4>Loading...</h4>;
    if(error) return `ERROR! ${error.message}`;

    return (
        <React.Fragment>
            <h1>{data.person.results[0].name}</h1>
            <h4>Height: {data.person.results[0].height} cm</h4>
            <h4>Mass: {data.person.results[0].mass} kg</h4>
            <h4>Gender: {data.person.results[0].gender}</h4>
            <h4>Homeworld: {data.person.results[0].homeworld}</h4>
            <hr/>
            <Link to="/" className="btn btn-secondary">Back</Link>
        </React.Fragment>
    )
}
