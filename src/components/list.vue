<template>
    <div>
        <v-alert data-test="alertElement" type="success" :value="true" outlined >
            The current temperature in {{ city }} is {{ fahrenheitTemperature }}.
        </v-alert>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    props: {
        city: {
            type: String
        },
        fahrenheitTemperature: {
            type: Number
        }
    },
}
</script>