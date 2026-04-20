<script>
import api from '../../axios.js';
export default {
    name: 'home',
    data() {
        return {
            search_method: "title",
            resault: null,
            input : null,
        }
    },
    async mounted() {
        this.resault = (await api.get('/api/json')).data
    },
    methods: {
        getImage(id) {
            return new URL(`../assets/products/${id}.jpg`,
                import.meta.url).href
        },
        async search() {
          if(this.input.length != 0) {
            this.resault = (await api.get(`/api/json/search?input=${this.input}&type=${this.search_method}`)).data
          }else {
            this.resault = (await api.get('/api/json')).data
          }
        }
    },
}
</script>

<template>
<v-navigation-drawer color="#330e61" permanent class="pt-4" width="300">
    <v-list-item class="align-center justify-center">
        <v-avatar color="#4d1594" class="mr-2" icon="mdi-file-search">

        </v-avatar>
        <font size="3"><b>
                Advanced search (JSON)
            </b></font>

    </v-list-item>
    <v-text-field v-model="input" bg-color="white" icon-color="#4d1594" rounded="50" prepend-inner-icon="mdi-magnify" color="#4d1594" class="pr-4 pl-4 mt-3" :label="`Enter ${search_method}`" hint="Hint : apple pro max"></v-text-field>
    <center>
        <v-btn @click="search()" class="w-75" color="#5e1bb3">SEARCH</v-btn>
    </center>
    <v-divider class="mt-5"></v-divider>
    <v-list-item class="align-center justify-center">
        <v-avatar color="#4d1594" class="mr-2" icon="mdi-pencil">

        </v-avatar>
        <font size="3"><b>
                Search method
            </b></font>
    </v-list-item>
    <v-list-item>
        <v-radio-group v-model="search_method">
            <v-radio label="BY TITLE" value="title"></v-radio>
            <v-radio label="BY COMPANY" value="company"></v-radio>
            <v-radio label="BY MODEL" value="model"></v-radio>
        </v-radio-group>
    </v-list-item>

</v-navigation-drawer>
<v-container>
    <v-row justify="center">
        <v-col v-for="prod of resault" cols="3">
            <v-card elevation="3">
                <v-img height="200" cover :src="getImage(prod.id)"></v-img>

                <v-card-text>
                    <div>
                        <font size="4">{{ prod.title.length > 15 ? prod.title.slice(0,20) + '...' : prod.title }}</font>
                    </div>

                    <div>
                        <font size="2">{{ prod.company }}</font>
                    </div>
                    <div>
                        <font size="2">{{ prod.company }}</font>
                    </div>
                </v-card-text>

                <v-card-actions>
                    <v-btn block color="green" variant="flat">
                        View details
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</v-container>
</template>
