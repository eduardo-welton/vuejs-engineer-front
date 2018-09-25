import axios from 'axios'
import urlJoin from 'url-join';

const baseUrl = 'http://localhost:3000';

export default {
    async getCandidates() {
        const res = await axios.get(urlJoin(baseUrl, '/candidates'))
        return res.data;
    }

}