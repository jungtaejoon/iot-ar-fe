<template>
  <div class="nav_profile">
    <div class="media profile-left">
        <img src="../../../../static/img/kepco/webLogo_170.png">
    </div>
  </div>
</template>
<style scoped lang="scss">
  /* left side profile css */

  .profile-left {
    background-image: url("../../../assets/img/patterns/header-profile-skin-2.png");
    padding: 15px;
    min-height: 90px;
    border-bottom: 1px solid #EEE;
  }

  .profile-left .profile-thumb {
    border-radius: 50px;
    display: inline-block;
    padding-top: 9px;
  }

  .profile-left .media-heading {
    line-height: 23px;
    margin-top: 12px;
    font-weight: 500;
    font-size: 16px;
    color: #2E576B;
  }

  .profile-left .profile-thumb img {
    width: 54px;
  }

  .content-profile {
    padding-left: 15px;
    .icon-list {
      padding-left: 0;
    }
  }

  .content-profile .icon-list li {
    display: inline-block;
    padding: 0;
    vertical-align: top;
  }

  .content-profile .icon-list:before {
    content: '';
  }

  .content-profile .icon-list li i {
    font-size: 13px;
    color: #555;
    padding-top: 5px;
  }

  .content-profile .icon-list li a {
    display: block;
    width: 30px;
    height: 25px;
    text-align: center;
    line-height: 23px;
    transition: all 300ms ease-in-out;
  }

  .content-profile .icon-list li a {
    border: 1px solid #DDD;
  }

  .icon-list li a {
    position: relative;
  }
</style>
