import React from 'react'
import { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import {GEO_API_URL, geoApiOption} from '../../api/api'

const SearchCity = ({onSearchChange}) => {
    const [search, setSearch] = useState(null)

    const loadOptions = (inputValue) => {
        return fetch(
            `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, 
            geoApiOption
            )
        .then(response => response.json())
        .then(response => {
            return{
                options: response.data.map((city)=>{
                    return{
                        value: `${city.latitude} ${city.longtide}` ,
                        label: `${city.name}, ${city.countryCode}`,
                    }
                })
            }
        })
        .catch(err => console.error(err));
    }

    const handleOnchage = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }

    return (
        <AsyncPaginate
            placeholder="Search For city"
            debounceTimeout={600}
            value={search}
            onChange={handleOnchage}
            loadOptions={loadOptions}
        />
    )
}

export default SearchCity
