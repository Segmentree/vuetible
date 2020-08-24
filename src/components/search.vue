<template>
    <div>
        <v-text-field
            type="input"
            single-line
            placeholder="Enter an item to search"
            data-test="SearchText"
            v-model="inputText"
        ></v-text-field>
        <v-btn class="search-btn" @click="find" data-test="saveButton" color="primary">Enter</v-btn>
    </div>
</template>

<script>
export default {
    data() {
        return {
            inputText: '',      
        }
    },
    props: [

    ],
    methods: {
        find(){
            this.$emit('find', this.inputText);
            this.inputText = '';
        }
    },
}
</script>