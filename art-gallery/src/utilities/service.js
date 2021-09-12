import axios from "axios";

var service = {
    getSomeArt() {
        return axios.get(
            'https://api.artic.edu/api/v1/artworks?fields=id,title,artist_display,date_display,main_reference_number',
        )
        .then(result => {
            console.log(result.data.data);
            return(result.data.data);
        })
    
    },

};

export default service;