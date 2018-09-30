import axios from 'axios'
import urlJoin from 'url-join';

const baseUrl = 'http://localhost:3000';

export default {
    async getCandidates() {
        const res = await axios.get(urlJoin(baseUrl, '/candidates'))
        return res.data;
    },

    async deleteCandidate(candidateId) {
        const res = await axios.delete(urlJoin(baseUrl, '/candidates', candidateId.toString()))
        return res.data;
    },

    async updateCandidate(candidate) {
        const res = await axios.put(urlJoin(baseUrl, '/candidates', candidate.id.toString()), candidate)
        return res.data;
    }

}