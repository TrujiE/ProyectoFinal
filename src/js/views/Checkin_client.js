import React from 'react';


const Checkin_client = () => {
    return ( 
        <div className = "container mt-5">
            <h1 className=" text-center">Te ayudo... con tu registro?</h1>
            <hr/>
            <div className="row"> 
            <div className="col-8">
            <form>
  <div class="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1">Example select</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect2">Example multiple select</label>
    <select multiple class="form-control" id="exampleFormControlSelect2">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Example textarea</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
</form>


            </div>
            <div className= "col-4">
                <button className="btn btn-danger float-right">Registrarse</button>
                <div class="card mt-5" >
  <img src="https://picsum.photos/id/1074/50/50" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title text-center">Nombre Cliente</h5>
    <p class="card-text"></p>
   
  </div>
</div>

            </div>
            </div>
        </div>
     );
}
 
export default Checkin_client;
