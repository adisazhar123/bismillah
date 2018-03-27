<style media="screen">
.middle{
  border-style: solid;
  padding: 30px;
  background-color: white;
  border-radius: 10px;
  border-color: white;
}

</style>
<div class="container">
  <h2>Register</h2>
  <div class="row">
      <div class="col-md-6 mx-auto">
        <div class="middle" style="">

        <form id="login_form" action="<?php echo base_url();?>users/register" method="post">
          <div class="form-group">
            <label for="team_name">Nama Tim</label>
            <input type="text" class="form-control" name="nama_tim" id="nama_tim" placeholder="Enter Nama Tim">
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" name="email_address" id="email_address" aria-describedby="emailHelp" placeholder="Enter email">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" name="tim_password" id="password_tim" placeholder="Password">
          </div>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div><br>
          <button type="submit" class="btn btn-primary login">Submit</button>
        </div>

        </form>
    </div>
  </div>
</div>

<script type="text/javascript">

</script>
