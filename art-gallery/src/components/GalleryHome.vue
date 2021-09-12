<template>
    <div>
        <h1>This is the Gallery </h1>
        <button @click="getSomeArtFromApi">
            Get some art from the api
        </button>

        <table>
            <thead>
                <tr>
                    <th v-bind:key="key" v-for="key in artInfo">
                        {{ key }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-bind:key="id" v-for="id in allArt">
                    <td v-bind:key="key" v-for="key in artInfo">
                        {{id[key]}}
                    </td>
                </tr>
            </tbody>
        </table>
        
    </div>
</template>

<script>

import service from "../utilities/service";

export default {
    name: "GalleryHome",
    data() {
        return{
            allArt: [],
            artInfo: [
                "id",
                "title",
                "artist_display",
                "date_display",
                "main_reference_number"
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
    }

}
</script>

<style>
</style>