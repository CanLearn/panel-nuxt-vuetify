<template>
    <NuxtLayout name="panel">
        <div class="d-flex  justify-center justify-space-between mx-10 ">
            <!-- <v-container class="bg-surface-variant"> -->
                <v-row no-gutters>
                    <v-col cols="12" sm="3">
                        <v-sheet class="ma-2 pa-2">
                            <PanelChartBar />
                        </v-sheet>
                    </v-col>
                    <v-col cols="12" sm="3">
                        <v-sheet class="ma-2 pa-2">
                            <PanelChartBar />
                        </v-sheet>
                    </v-col>
                    <v-col cols="12" sm="3">
                        <v-sheet class="ma-2 pa-2">
                            <PanelChartBar />
                        </v-sheet>
                    </v-col>
                    <v-col cols="12" sm="3">
                        <v-sheet class="ma-2 pa-2">
                            <PanelChartBar />
                        </v-sheet>
                    </v-col>
                </v-row>
            <!-- </v-container> -->
        </div>
    </NuxtLayout>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>