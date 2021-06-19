import React from 'react'

export const Slider = () => {
    return (
        <div  className=''>
            <div id="carouselExampleControls" class="carousel slide " data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active ">
      <img src="https://k.nooncdn.com/cms/pages/20210617/639647c3aabd5fffa15cd4e26f6cbd96/en_toggle-01-VIP.png" class="d-block w-100" alt="" />
      <img src="https://k.nooncdn.com/cms/pages/20210616/8051d499fc42fb4f6da58c97b9073bf0/en_slider-01-4DAYS.png" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
    <img src="https://k.nooncdn.com/cms/pages/20210617/639647c3aabd5fffa15cd4e26f6cbd96/en_toggle-01-VIP.png" class="d-block w-100" alt="" />
      <img src="https://k.nooncdn.com/cms/pages/20210617/fb9afb6b163f90f9add09d4e54456e26/en_hero.gif" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
    <img src="https://k.nooncdn.com/cms/pages/20210617/639647c3aabd5fffa15cd4e26f6cbd96/en_toggle-01-VIP.png" class="d-block w-100" alt="" />
      <img src="https://k.nooncdn.com/mon/1624077414314-ckq39rd0q0ncgrvr0uvpyk8qc.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
    )
}
