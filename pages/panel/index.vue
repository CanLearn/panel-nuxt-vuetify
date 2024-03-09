<template>
    <div>
        <NuxtLayout name="panel">
            <v-container style="background-color: #171821;">
                <v-row no-gutters class="bg-surface-variant rounded">
                    <v-col cols="12" sm="3">
                        <v-sheet class="ma-2 pa-2 align-center text-center ">
                            <span>count user </span><br>
                            <span>10 </span>
                        </v-sheet>
                    </v-col>
                    <v-col cols="12" sm="3">
                        <v-sheet class="ma-2 pa-2 align-center text-center ">
                            <span>count category </span><br>
                            <span>10 </span>
                        </v-sheet>
                    </v-col>
                    <v-col cols="12" sm="3">
                        <v-sheet class="ma-2 pa-2 align-center text-center ">
                            <span>count article </span><br>
                            <span>10 </span>
                        </v-sheet>
                    </v-col>
                    <v-col cols="12" sm="3">
                        <v-sheet class="ma-2 pa-2 align-center text-center ">
                            <span>count payment </span><br>
                            <span>10 </span>
                        </v-sheet>
                    </v-col>
                </v-row><br>
                <v-row no-gutters class="bg-surface-variant rounded">
                    <v-col cols="12" sm="12">
                        <v-sheet class="ma-2 pa-2 align-center text-center ">
                            <span>payment 30 days</span>
                           <PanelChartPaymentMonth />
                        </v-sheet>
                    </v-col>
                </v-row>
                <v-row no-gutters class="bg-surface-variant rounded">
                    <v-col cols="12" sm="6">
                        <v-sheet class="ma-2 pa-2 align-center text-center ">
                            <span>payment 30 days</span>
                           <PanelChartLIne/>
                        </v-sheet>
                    </v-col>
                    <v-col cols="12" sm="6">
                        <v-sheet class="ma-2 pa-2 align-center text-center ">
                            <span>payment 30 days</span>
                           <PanelChartPaymentMonth />
                        </v-sheet>
                    </v-col>
                </v-row>
            </v-container>
        </NuxtLayout>
    </div>
</template>

<script>


</script>

<style scoped></style>