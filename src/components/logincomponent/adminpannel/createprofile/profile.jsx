import React from 'react';

export default class Profile extends React.Component{
  render(){
    return(
        <form>
      <div class="form-group">
      <label for="shopname">Shop Name</label>
      <input type="text" name="shopName" class="form-control" id="shopname" aria-describedby="emailHelp" />
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>

       <div class="form-group">
      <label for="mobile">Mobile</label>
      <input type="text" name="mobile" class="form-control" id="mobile" aria-describedby="emailHelp" />
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>

       <div class="form-group">
      <label for="address">Address</label>
      <input type="text" class="form-control" id="address" aria-describedby="emailHelp" />
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>

      <div class="form-group">
      <label for="exampleInputEmail1">Email</label>
      <input type="text" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>

      <div class="form-group">
      <label for="deals">Deals In</label>
      <input type="text" name="dealsIn" class="form-control" id="deals" aria-describedby="emailHelp" />
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <button type="button" class="btn btn-primary">Submit</button>
      </form>




    )
  }
}