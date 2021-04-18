import React ,{useState, useDispatch} from "react";
import { connect } from "react-redux";
import moment from "moment";
import {addDomain} from '../redux/actions'
const DomainField = () => {
    const [domain, setDomain] = useState('')
    const dispatch = useDispatch()
    handleChange(event) {
    setDomain(event.target.value);
  }

  handleSubmit(event) {
    dispatch(addDomain(domain))
    event.preventDefault();
  }
    return (
        <form onSubmit={(event) => handleSubmit(event)}>
            <label for="domain">Add a domain:</label>
            <input type="url" id="domain" name="domain" value={domain} onChange={(event) => handleChange(event)} />
            <input type="submit" />
        </form>
    );
}

export default DomainField;
