import React from 'react';

const Header = () => {
  return <header className=' py-8'>
    <div className="container mx-auto">
      <div className='flex justify-between items-center'>
        <a className='flex flex-col' href="#">
          <h2 className='flex text-[25px] text-gradient btn-link'>NGOC</h2>
          <h2 className='flex text-[30px] font-bold ml-20 text-gradient lg:text-white btn-link'>HIEU</h2>
        </a>

        <button className='btn btn-sm'><a href='https://drive.google.com/file/d/1HdTdNTvW6Uk4UiVt9k95opFMGgsg4hGG/view?usp=drive_link'>Download CV</a></button>
      </div>
    </div>
  </header>;
};

export default Header;
