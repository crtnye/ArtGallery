<template>
    <div class="card">
        <h2>{{ work.title }}</h2>
        <img :src="getImageUrl()" class="image"/>
        <div class="image">
            <label>{{ work.artist_display }}</label>
        </div>
    </div>
</template>

<script>
export default {
    name: "Artwork",
    props:{
        work:{
            type: Object,
            default: () => {}
        }
    },
    methods:{
        getImageUrl(){
            var url = "https://www.artic.edu/iiif/2/";
            url += this.work.image_id;
            url += "/full/843,/0/default.jpg";
            return url;
        }
    },
    data(){
        return{
        }
    }
}
</script>

<style>
    .card{
        background-color: whitesmoke;
        border-radius: 20px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        width: fit-content;
        padding: 12px;
    }
    .image{
        padding: 0px 36px;
        max-width: 500px;
    }
</style>