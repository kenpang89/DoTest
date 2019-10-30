<template>
    <div class="profile-avatar">
        <img :src="avatarUrl" class="mx-auto img-fluid img-circle d-block profile-avatar">
        <hr/>
        <label class="custom-file">
            <input type="file" id="file" accept="image/*" class="custom-file-input d-none">
            <span class="custom-file-control">Choose file</span>
        </label>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
    name: 'profile-avatar',
    props: {
        avatarUrl: String
    }
})
export default class Avatar extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.profile-avatar{
    width: 150px;
    height: 150px;
}
</style>