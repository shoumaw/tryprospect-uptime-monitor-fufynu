import React from "react";
import { connect } from "react-redux";
import moment from "moment";

import { getLastCheckedByDomain, getLatencyByDomain, getStatusByDomain } from '../redux/selectors';
import DomainField from './DomainField'
const ServerStatus = ({
  domain,
  latency,
  status
}) => {
  const lastChecked = moment().format('HH:mm:ss')
  return (

    <div className="status">
      <div>{domain}</div>
      <div>{moment().format('HH:mm:ss')}</div>
      <div>{latency}</div>
      <div>{status}</div>
    </div>
  );
}

const enhance = connect(
  (state, { domain }) => ({
    lastChecked: getLastCheckedByDomain(state, domain),
    latency: getLatencyByDomain(state, domain),
    status: getStatusByDomain(state, domain),
  }),
  dispatch => ({})
);

export default enhance(ServerStatus);
