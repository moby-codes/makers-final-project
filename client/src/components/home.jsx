import React from 'react'

export const home = () => {
  return (
    <>
      Hello, This is our homepage

      <form>
  <fieldset>
    <legend>Sign In or Sign Up</legend>
    <div class="form-group row">
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1" class="form-label mt-4">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1" class="form-label mt-4">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
    </div>
    

    <button type="submit" class="btn btn-primary">Submit</button>
  </fieldset>
</form>


    </>
  )
}
export default home;
