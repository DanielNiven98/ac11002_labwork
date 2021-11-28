fetch(//www.omdbapi.com/?apikey=e24094e8&s=batman)
   .then((resp) => resp.json())
   .then(function(data) {
     Title:"Harry Potter and the Deathly Hallows: Part 2";/B
     "Year":"2011";
     })
   })
   .catch(function(error) {
     // If there is any error you will catch them here
   });
