import React from 'react'
import { gql, useQuery } from '@apollo/client';
import Person from './Person'

//prompt user for page to search upon initial load
let page = prompt("Please enter a page number");

//create a query based on the input received above
const GetPeople = gql`
    {
        people(page: ${page}) {
        next
        previous
        results {
            name
            height
            mass
            gender
            homeworld
            }
        }
    }`;

export default function People() {

    //pending the resolution of the query, have conditional loading.
    const {loading, error, data} = useQuery(GetPeople);

    if(loading) return <h4>Loading...</h4>;
    if(error) return `ERROR! ${error.message}`;

    return (
        <React.Fragment>
            <h1>People</h1>
            {data.people.results.map(person => (
                <Person key={person.name} person={person} />
            ))}
        </React.Fragment>
    )
}
