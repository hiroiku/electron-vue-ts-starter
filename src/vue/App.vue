<!-- script -->
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Nav from '@/vue/components/Nav.vue';

@Component<VueComponent>({
    components: {
        Nav,
    },
})
export default class VueComponent extends Vue { }
</script>

<!-- template -->
<template>
    <div>
        <Nav />
        <router-view></router-view>
    </div>
</template>

<!-- style -->
<style lang="scss">
body #wpwrap,
body #wpcontent,
body #wpbody,
body #wpbody-content {
    box-sizing: border-box;
    height: 100%;
}

body #wpcontent {
    padding: 0;
}

.wrap {
    padding-left: 20px;
}

#wpfooter {
    display: none;
}
</style>
