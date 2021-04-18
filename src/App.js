import { map } from "lodash";
import React from "react";
import { connect } from "react-redux";

import ServerStatus from "./components/ServerStatus";
import startUptimeCheckInterval from "./services/uptime";
import { getUptimes } from "./redux/selectors";
import DomainField from "./components/DomainField";
import "./style.css";

startUptimeCheckInterval();

function App({ uptimes }) {
  return (
    <div className="container">
      <h1>Uptime Monitor</h1>

      <div className="columns">
        <div>Domain</div>
        <div>Last Checked</div>
        <div>Latency</div>
        <div>Status</div>
      </div>

      {map(uptimes, ({ domain }) => (
        <ServerStatus domain={domain} />
      ))}
      <div className="domain">
        <DomainField />
      </div>
    </div>
  );
}

const enhance = connect(
  state => ({
    uptimes: getUptimes(state)
  }),
  dispatch => ({})
);

export default enhance(App);
