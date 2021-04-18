import axios from "axios";
import { useSelector } from "react-redux";
import { setUptime } from "../redux/actions";
import { getDomains } from "../redux/selectors";
const DOMAINS_TO_CHECK = [
  "passfoo.com",
  "failxx.com",
  "salesforce.com",
  "gmail.com"
];
const checkUptime = async domains => {
  console.log("wwww", domains);
  for (const domain of domains) {
    /**
     * This endpoint is a dummy endpoint we have implemented for the purpose of this challenge.
     *
     * Some gotchas that you should know:
     *
     * - Any domain that starts with "pass___" always returns 'status: OK'
     * - Any domain that starts with "fail___" always returns 'status: FAILED'
     * - All other domains return a status of OK vs FAILED randomly
     */
    const url = `https://uptime-checker.tryprospect.repl.co/status?domain=${domain}`;
    const response = await axios.get(url);
    setUptime(response.data);
  }
};

export default domains => {
  checkUptime(domains);

  setInterval(checkUptime, 5000);
};
