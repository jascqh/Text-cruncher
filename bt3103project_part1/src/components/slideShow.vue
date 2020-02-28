<template>
<div class="col-lg-6">
    <div class="col-sm-6">
        <b-carousel
            v-model="slide"
            :interval="4000"
        >
            <b-carousel-slide>
                <template v-slot:img>
                <img
                    class="d-block w-200"
                    src="../assets/TextCruncherLogo.jpg"
                    alt="image slot"
                >
                </template>
            </b-carousel-slide>

            <b-carousel-slide>
                <template v-slot:img>
                <img
                    class="d-block w-200"
                    src="../assets/slide2.png"
                    alt="image slot"
                >
                </template>
            </b-carousel-slide>
                        <b-carousel-slide>
                <template v-slot:img>
                <img
                    class="d-block w-200"
                    src="../assets/slide3.png"
                    alt="image slot"
                >
                </template>
            </b-carousel-slide>
        </b-carousel>
    </div>
    </div>
</template>


