import axios from "axios";

var service = {
    getSomeArt() {
        return axios.get(
            'https://api.artic.edu/api/v1/artworks?fields=id,title,artist_display,date_display,image_id',
        )
        .then(result => {
            return(result.data.data);
        })
    },

};

export default service;