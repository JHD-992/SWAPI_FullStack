import React from 'react';
import { Link } from 'react-router-dom';

//export a card formatted section for each character name
export default function Person({ person : { name, height, mass, gender, homeworld }}) {
    return <div className="card card-body mb-3">
        <div className="row">
            <div className="col-md-9">
                <h4>{name}</h4>
            </div>
            <div className="col-md-3">
                <Link to={`/person/${name}`} className="btn btn-secondary">Personal Details</Link>
            </div>
        </div>
    </div>
}
