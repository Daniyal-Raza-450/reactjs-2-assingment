import React from 'react'

export default function Home() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light colornav">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img src="" alt="" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-3 mb-2 mb-lg-0 w-100">
              <li className="nav-item fgfdg">
                <a className="nav-link active d-flex " aria-current="page" href="#"><img src="https://z.nooncdn.com/s/app/com/noon/images/logos/noon-black-en.svg" width='100px' alt="" /></a>
              </li>
              {/* input */}


              <li className='w-100'>
                <input type="text" id="Searchbar" className="inp my-2  py-2 round d-flex " placeholder="what are you looking for?" />
              </li >
<div className=' marg '>

              <li className="my-3 mx-3 ">
                العربیۃ
              </li>

</div>

              <div className= ' d-flex mx-3 marg'>
                <div className="image  ">
                  <li className="  ">
                    <img className='mt-30 ps-' src="https://z.nooncdn.com/s/app/com/common/images/flags/ae.svg" alt="" />


                  </li>
                </div>

                <div className='marg mt-3 mx-3 '>
                  <li className=' d-flex  fnt '>ship <span  className=' ms-1'>to </span>

                    {/* <br /> */}
                  </li>
                  <li className='bld '>UAE</li>
                </div>
              </div>

              <div className='d-flex my-2 mt-3 my-2 mx-3   '>

                <li className='bld d-flex bld mt-1 '> Sign <span  className=' ms-1'>  In</span></li>
                <li className=' ms-2 '><img src="https://z.nooncdn.com/s/app/com/noon/icons/user_thin.svg"  width='20' alt="" /></li>
              </div>

              <span className='d-flex clin ' > </span>
              <div className='d-flex icoon my-2  mt-3 mx-3  '>

                <li className='cart  bld  mt-1'> Cart </li>
                <li className='icn ms-2'> <img src="https://z.nooncdn.com/s/app/com/noon/icons/cart.svg"  width='23' alt="" /> </li>

              </div>
            </ul>
            {/* { <form className="d-flex">
        <input className="form-control me-2 w-10%" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> } */}
          </div>
        </div>
      </nav>
    </div>
  )
}
