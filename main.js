document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.querySelector('.sidemenu-toggle');   // The toggle button
    const sidebar = document.querySelector('.app-sidebar'); 
    toggleBtn.addEventListener('click', function () {
        toggleBtn.classList.toggle('sidemenu-toggle-color')
      sidebar.classList.toggle('show');  // Toggle the 'show' class to show/hide the sidebar
      
    });

    const toggleX = document.querySelector('.toggleX');  
    toggleX.addEventListener('click', function () {
      // alert('working') 
      sidebar.classList.toggle('show');  // Toggle the 'show' class to show/hide the sidebar
    });
  });


    // const sidebar = document.querySelector('.app-sidebar'); 
           // The sidebar element
  
    
  
  