<template>
  <div class="home">
    <b-navbar id="navar" toggleable="lg" variant="info" type="dark">
      <b-navbar-brand class="ml-3 " id="logonav" :to="{ name: 'inicio' }" ><img src="../assets/logo_cobra.png" alt="" /></b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
       
          <b-nav-item class="ml-5 mt-2"> </b-nav-item>

          <b-nav-item class="ml-5 mt-2"> </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item right>
            <!-- Using 'button-content' slot -->
            <template>
              <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template v-slot:button-content>
                  <em><i class="el-icon-s-custom"></i> {{ usuario }}</em>
                </template>
                <!--b-dropdown-item href="#">Perfil</b-dropdown-item-->
                <b-dropdown-item  @click="logout" > 
                    <b-icon icon="power" aria-hidden="true"></b-icon> Cerrar
                    sesion
                  </b-dropdown-item
                >
              </b-nav-item-dropdown>
            </template>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <router-view></router-view>
  </div>
</template>

<script>
import Firebase from "firebase";
export default {
  name: "Home",

  methods: {
    logout() {
      Firebase.auth()
        .signOut()
        .then((accept) => {
          this.$router.push({ name: "login" });
          console.log(accept);
        });
    },
  },
  computed: {
    usuario() {
      let usuario = Firebase.auth().currentUser.email;
      return usuario;
    },
  },
};
</script>
<style lang="scss" scoped>
.home {
  text-align: center;
}
#logonav img {
  height: 30px;
  width: auto;
}
</style>
