<template>
    <div>
        <b-navbar toggleable="lg" type="dark bg-dark static-top" variant="info">
            <b-navbar-brand>
                <img src="../assets/TextCruncherLogo.jpg" height ="30" width ="30">
            </b-navbar-brand>
            <b-navbar-brand a>TextCruncher</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav >
            <b-navbar-nav class="ml-auto">
                <b-nav-item to="/" >Home</b-nav-item>
                <b-nav-item to="/about">About</b-nav-item>
                <b-nav-item to="/download">Download</b-nav-item>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>

</template>

<style lang="scss" scoped>
#nav a.router-link-exact-active {
    color: white;
}
#nav a{
    font-weight: bold;
    color:gray;

}

</style>