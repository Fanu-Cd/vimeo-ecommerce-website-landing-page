import Header from './components/header'
import Button from '@mui/material/Button';
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import {AiOutlineSearch} from 'react-icons/ai'
import {AiOutlineRollback} from 'react-icons/ai'
import {GiSecurityGate} from 'react-icons/gi'
import {IoTimer} from 'react-icons/io5'
import happywoman from './assets/closeup-shot-beautiful-young-women-with-shopping-bags.jpg'
function App() {
  return (
    <>
       <Header />
       <div className='container mt-5 row mx-auto ' style={{minHeight:'25rem',height:'auto'}}>
          <div className='col-12 col-md-4 d-flex flex-column'>
             <h2>
                Every purchase will be made with pleasure
             </h2>
             <p>Buying and selling of goods or services using the internet</p>
             <Button style={{width:'60%'}} className='mx-auto mx-md-0 bg-info text-white' endIcon={<BsFillArrowRightCircleFill style={{color:'brown'}} />}>Start Shopping</Button>
          </div>
          <div className='mt-4 mt-md-0 col-12 col-md-8'>
            <img src={happywoman} alt="happywoman" className='img-fluid rounded' style={{width:'100%',objectFit:'cover',height:'20rem'}} />
          </div>
       </div>
       <div className='container row p-1 my-2 mx-auto shadow rounded ' style={{minHeight:'3rem',height:'auto'}}>
          <div style={{height:'auto'}} className='bg-light h-auto col-6 col-md-2  d-flex flex-column'>
            <p className='m-0 fw-bold'>Location</p>
            <select className="form-select bg-light p-0 my-1 border-0" aria-label="Default select example">
              <option selected>United States</option>
              <option value="Ab">Ab</option>
              <option value="Ac">Ac</option>
              <option value="Ad">Ad...</option>
            </select>
          </div>
          <div style={{height:'auto'}} className='h-auto col-6 col-md-2  d-flex flex-column'>
            <p className='m-0 fw-bold'>DAT</p>
            <select className="form-select p-0 my-1 border-0" aria-label="Default select example">
              <option selected>12-12-2024</option>
              <option value="Ab">Ab</option>
              <option value="Ac">Ac</option>
              <option value="Ad...">Ad...</option>
            </select>
          </div>
          <div style={{height:'auto'}} className='h-auto  my-2 my-md-0  col-6 col-md-2  d-flex flex-column'>
            <p className='m-0 fw-bold'>YEA</p>
            <select className="form-select p-0 my-1 border-0" aria-label="Default select example">
              <option selected>2020</option>
              <option value="2021">2020</option>
              <option value="2022">2020</option>
              <option value="2023">2020...</option>
            </select>
          </div>
          <div style={{height:'auto'}} className='h-auto  my-2 my-md-0  col-6 col-md-2  d-flex flex-column'>
            <p className='m-0 fw-bold'>TYP</p>
            <select className="form-select p-0 my-1 border-0" aria-label="Default select example">
              <option selected>Weapons</option>
              <option value="Ab">Ab</option>
              <option value="Ac">Ac</option>
              <option value="Ad...">Ad...</option>
            </select>
          </div>
          <div style={{height:'auto'}} className='h-auto col-12 col-md-2 mx-md-auto my-2 my-md-0 d-flex flex-column'>
            <Button style={{width:'60%'}} className='mt-2 mx-auto mx-md-0 bg-info text-white' startIcon={<AiOutlineSearch style={{color:'white'}} />}>Search</Button>
          </div>
       </div>
       <div className="container row mx-auto mt-5">
          <h2 className='col-12 text-center'>Millions of people use <p className='m-0 d-inline text-success'>:vimeo</p></h2>
          <div className='row col-12 container-fluid'>
          <div style={{minHeight:'10rem',height:'auto'}} className='col-4 d-flex flex-column justify-content-center align-items-center'>
             <div className='rounded d-flex justify-content-center align-items-center' style={{backgroundColor:'gold',width:'3.5rem',height:'3.5rem'}}>
               <GiSecurityGate color='white' style={{width:'2rem',height:'2rem'}} />
             </div>
             <p className='pt-3 fw-bold'>Free Shipping</p>
          </div>
          <div style={{minHeight:'10rem',height:'auto'}} className='col-4 d-flex flex-column justify-content-center align-items-center'>
          <div className='rounded d-flex justify-content-center align-items-center' style={{backgroundColor:'green',width:'3.5rem',height:'3.5rem'}}>
               <IoTimer color='white' style={{width:'2rem',height:'2rem'}} />
             </div>
             <p className='pt-3 fw-bold'>24/7 Hour Support</p>
          </div>
          <div style={{minHeight:'10rem',height:'auto'}} className='col-4 d-flex flex-column justify-content-center align-items-center'>
          <div className='rounded d-flex justify-content-center align-items-center' style={{backgroundColor:'darkslategray',width:'3.5rem',height:'3.5rem'}}>
               <AiOutlineRollback color='white'  style={{width:'2rem',height:'2rem'}} />
             </div>
             <p className='pt-3 fw-bold'>100% Moneyback</p>
          </div>
          </div>
       </div>
       <footer className='footer'>
         <p className='text-center'>Copyright @copy; 2023 </p>
       </footer>
    </>
  );
}

export default App;
