import React ,{useState} from "react";
import { useDispatch } from "react-redux";
import {addDomain} from '../redux/actions'
const DomainField = () => {
    const [domain, setDomain] = useState('')
    const dispatch = useDispatch()
    const handleChange = (event) => {
    setDomain(event.target.value);
  }

  const handleSubmit = (event) => {
    dispatch(addDomain(domain))
    event.preventDefault();
  }
    return (
        <form onSubmit={(event) => handleSubmit(event)}>
            <label for="domain">Add a domain:</label>
            <input type="text" id="domain" name="domain" value={domain} onChange={(event) => handleChange(event)} />
            <input type="submit" />
        </form>
    );
}

export default DomainField;
