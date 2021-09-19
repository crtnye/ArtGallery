<template>
    <div>
        <h1>GALLERY</h1>

        <div class="flex-container" >
            <Artwork :key="artwork.id" v-for="artwork in allArt"
                :work="artwork">
            </Artwork>
        </div>
    </div>
</template>

<script>

import service from "../utilities/service";
import Artwork from "./Artwork";

export default {
    name: "GalleryHome",
    components: {
        Artwork
    },
    data() {
        return{
            allArt: [],
            artInfo: [
                "id",
                "title",
                "artist_display",
                "date_display",
                "image_id"
            ]
        }
    },
    methods:{
        getSomeArtFromApi(){
            service.getSomeArt()
                .then(response => {
                    console.log(response);
                    this.allArt = response;
                });
        }
    },
    created(){
        this.getSomeArtFromApi();
    }

}
</script>

<style> 

.flex-container{
    display: flex;
    flex-direction: row;
    gap: 24px;
    flex-wrap: wrap;
    justify-content: center;
}

</style>