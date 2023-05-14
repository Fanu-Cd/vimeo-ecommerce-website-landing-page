import {BsFillCartFill} from 'react-icons/bs'
import {AiOutlineMenu} from 'react-icons/ai'
import {AiOutlineShopping} from 'react-icons/ai'
import {BiPencil} from 'react-icons/bi'
const Header=()=>{
return(
  <nav className="navbar container navbar-expand-md">
  <div className="container-fluid d-block d-md-flex justify-content-between">
    <div className='d-inline-block'>
        <div className="bg-info d-inline-block" style={{width:'2rem',height:'2rem',borderRadius:'2rem',borderTopRightRadius:'0'}}>
          <BsFillCartFill  />
        </div>
        <p className='d-inline-block m-0 ms-1 fs-3 text-success'>:vimeo</p>
    </div>
    <button className="navbar-toggler float-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <AiOutlineMenu />
    </button>
    <div className="collapse d-md-flex justify-content-between navbar-collapse w-70" id="navbarNav" style={{maxWidth:'70%'}}>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">Shop</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">Brand</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">Woman</a>
        </li><li className="nav-item">
          <a className="nav-link" href="/#">Man</a>
        </li><li className="nav-item">
          <a className="nav-link" href="/#">Help</a>
        </li>
      </ul>
      <div>
      <div className="d-flex flex-column flex-md-row">
        <button className="btn" >
            <AiOutlineShopping />
          </button>
        <button className="btn">
            <BiPencil />
          </button>
      </div>
      </div>
    </div>
  </div>
</nav>
)
}
export default Header;