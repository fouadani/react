import axios from 'axios';

export async function getInitialDate(): Promise<string> {
    const response = await axios.get('http://localhost:3000/initialDate');
    return response.data.date;
}
