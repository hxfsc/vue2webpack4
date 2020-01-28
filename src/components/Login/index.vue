<template>
  <div class="bg">
    <div class="form-signin">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">管理系统</h1>
        <p>使用Chrome、Firefox浏览器登入</p>
      </div>

      <div class="form-label-group">
        <input type="text" id="inputEmail" class="form-control" placeholder="用户">
      </div>

      <div class="form-label-group">
        <input type="password" id="inputPassword" class="form-control" placeholder="密码">
      </div>

      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"> 记住我
        </label>
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      <p class="mt-5 mb-3 text-muted text-center">{{datetime}}</p>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  data(){
    return{
      username:'',
      password:'',
      datetime: `2019-${moment(new Date()).format('YYYY')}`
    }
  }
}
</script>

<style src='./login.css' lang="css" scoped></style>
