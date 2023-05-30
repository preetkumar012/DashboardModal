import React from 'react';
import "./Style.css";

const Post = () => {
  return (
    <div className='replace-right'>
    <div className='container'>
    <h4 className=' text-center'>Welcome to Post Page</h4>
    <div className='row mt-4'>
    <div className='col-sm-12 col-md-4 col-lg-4'>
    <div> 
    <img src="./images/img1.jpg" alt="" width="400px" height="300px"/>
    </div>
   </div>
   <div className='col-sm-12 col-md-4 col-lg-4'>
   <div> 
   <img src="./images/img2.jpg" alt="" width="400px" height="300px"/>
   </div>
  </div>
  <div className='col-sm-12 col-md-4 col-lg-4'>
  <div> 
  <img src="./images/img3.jpg" alt="" width="400px" height="300px"/>
  </div>
 </div>
  {/*start second row */}
  <div className='col-sm-12 col-md-4 col-lg-4'>
  <div className='mt-3'> 
  <img src="./images/img3.jpg" alt="" width="400px" height="300px"/>
  </div>
 </div>
 <div className='col-sm-12 col-md-4 col-lg-4'>
 <div  className='mt-3'> 
 <img src="./images/img2.jpg" alt="" width="400px" height="300px"/>
 </div>
</div>
<div className='col-sm-12 col-md-4 col-lg-4'>
<div  className='mt-3'> 
<img src="./images/img1.jpg" alt="" width="400px" height="300px"/>
</div>
</div>
 {/*start second row */}
 <div className='col-sm-12 col-md-4 col-lg-4'>
 <div className='mt-3'> 
 <img src="./images/img1.jpg" alt="" width="400px" height="300px"/>
 </div>
</div>
<div className='col-sm-12 col-md-4 col-lg-4'>
<div  className='mt-3'> 
<img src="./images/img2.jpg" alt="" width="400px" height="300px"/>
</div>
</div>
<div className='col-sm-12 col-md-4 col-lg-4'>
<div  className='mt-3'> 
<img src="./images/img3.jpg" alt="" width="400px" height="300px"/>
</div>
</div>
    
    </div>
    </div>
    
    </div>
  )
}

export default Post