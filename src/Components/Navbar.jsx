import React from 'react';
// import { Link } from 'react-router-dom';
import './Navbar.css'
import BookSlide from './Book-Slide';

const Navbar = () => {
  return (
    <div class="book-store">
    <div class="header">
     <div class="browse">
      <div class="browse-category">
       Browse Category
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down">
        <path d="M6 9l6 6 6-6" /></svg>
      </div>
      <div class="search-bar">
       <input type="text" placeholder="Search Book" />
      </div>
     </div>
     <div class="header-title">read<span>books</span></div>
     <div class="profile">
      <div class="user-profile">
       <img src="https://randomuser.me/api/portraits/women/63.jpg" alt="" class="user-img"/>
      </div>
      <div class="profile-menu">
       {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu">
        <path d="M3 12h18M3 6h18M3 18h18" /></svg> */}
       Menu
      </div>
     </div>
    </div>
    <BookSlide/>
    </div>
  );
}

export default Navbar;
