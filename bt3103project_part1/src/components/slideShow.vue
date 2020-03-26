<template>
<div class="col-lg-6" align="center">
    <div class="col-sm-6" align="center">
        <b-carousel
            :interval="4000"
        >
            <b-carousel-slide>
                <template v-slot:img>
                <img
                    class="d-block w-200"
                    src="../assets/TextCruncherLogo.jpg"
                    alt="image slot"
                    height="200"
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


