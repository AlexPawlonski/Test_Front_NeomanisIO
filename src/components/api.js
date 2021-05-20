import axios from 'axios';

export default axios.create({
    headers: {
        post: {       
          header1: 'value1'
        }
    }
});
