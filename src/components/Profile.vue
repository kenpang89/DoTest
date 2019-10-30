<template>
 <div class="container">
    <div class="row my-2">
        <div class="col-lg-4 order-lg-1 text-center">
            <Avatar :avatarUrl ="userData.avatar"/>
        </div>
        <div class="col-lg-8 order-lg-2">
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <a href="" data-target="#profile" data-toggle="tab" class="nav-link active">Profile</a>
                </li>
            </ul>
            <div class="tab-content py-4">
                <div class="tab-pane active" id="profile">
                    <form role="form">
                        <div class="form-group row">
                            <label class="col-lg-3 col-form-label form-control-label">First Name</label>
                            <div class="col-lg-9">
                                <input class="form-control" type="text" :value="userData.firstName">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-lg-3 col-form-label form-control-label">Last Name</label>
                            <div class="col-lg-9">
                                <input class="form-control" type="text" :value="userData.lastName">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-lg-3 col-form-label form-control-label">Email</label>
                            <div class="col-lg-9">
                                <input class="form-control" type="email" :value="userData.email">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-lg-3 col-form-label form-control-label">Followers</label>
                            <div class="col-lg-9">
                                <input class="form-control" type="text" :value="userData.followers" disabled>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-lg-3 col-form-label form-control-label">Follow</label>
                            <div class="col-lg-9 d-flex align-items-center">
                                <toggle-button :value="userData.followedByMe" :labels="{checked: 'Follow', unchecked: 'Unfollow'}" @change="onChangeToggle" :sync="true" :width="70"/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Avatar from './Avatar.vue';
import UserAPI from '@/api/user'

@Component({
  components: {
    Avatar
  },
  props: {

  }
})
export default class Profile extends Vue {
    userData: any;

    constructor() {
      super();
      this.userData = {};
    }

    created() {
        this.loadUserData();
    }

    async loadUserData() {
        this.userData = await UserAPI.getUserProfile('user_id','viewer_id');
    }

    onChangeToggle () {
        this.userData.followedByMe = ! this.userData.followedByMe
        UserAPI.followUserProfile('user_id', 'viewer_id', this.userData.followedByMe).then(res => {
            if (res.success)
            {
                this.userData.followedByMe = res.followedByMe
            }
        });
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
