import axios from "axios";

export const getCommit = () => {
    return axios.get('https://api.github.com/repos/tingreavinash/tingreavinash.github.io/commits?per_page=1');
};