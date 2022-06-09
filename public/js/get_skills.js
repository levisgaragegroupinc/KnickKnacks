 async function get_skills() {
    

      const response = await fetch('/api/skill/', {
        method: 'GET',
      });
  
      if (response.ok) {
        
        document.location.assign('/');
      } else {
        alert(response.statusText);
      }
  };