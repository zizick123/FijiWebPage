<template>
    <div>
      <header class="navbar">
        <div class="logo-section">
          <span class="site-title">USU Fiji Page</span>
        </div>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <router-view />
      </main>
    </div>
  </template>
  
  <style>
  /* Basic reset */
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
  }
  
  .navbar {
    padding-bottom: 2rem;
    padding-top: 2rem;
    padding-right: 4rem;
    margin-right: 2rem;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #47e916;
    color: white;
    z-index: 1000;
    display: flex;
    align-items: center; /* Vertically center logo and links */
    justify-content: space-between; /* Space between logo and nav links */
    padding:  1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .logo-section {
    display: flex;
    align-items: center;
  }
  
  .site-title {
    font-size: 1.5rem; /* Adjust size of the title */
    font-weight: bold;
    color: white;
    letter-spacing: 0.1rem; /* Optional: add some spacing between letters */
  }
  
  .navbar nav ul {
    display: flex;
    list-style: none;
    padding-right: 1rem;
    margin: 0;
  }
  
  .navbar nav ul li {
    margin: 0 1rem; /* Spacing between links */
  }
  
  .navbar nav ul li a {
    color: white;
    text-decoration: none;
    font-weight: bold;
  }
  
  .navbar nav ul li a:hover {
    color: #ddd; /* Hover effect for links */
  }
  
  main {
    margin-top: 80px; /* Prevent content from being hidden under the fixed navbar */
    padding: 1rem;
  }
  </style>
  