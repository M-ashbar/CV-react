  // const heading = React.createElement('h1', 
        //     '{}', 'Hello World from React !'
        // )

        // const parent = React.createElement(
            
        //     'div',
        
        //      {id: "parent", className: "parentClass"},
            
        //     [
        //     React.createElement('h1', '{}', 'Hello World from React H1 !'),
        
        //     React.createElement('h2', '{}', 'Hello World from React H2 !')
        //     ]
        // )
        
        //     const root = ReactDOM.createRoot(document.getElementById('root'))
        
        //     root.render(parent)





        const parent = React.createElement(
            'div',
            { id: "parent", className: "cv-container" },
            [
              React.createElement('header', { className: 'header' },
                React.createElement('h1', {}, 'Muhammad Ashbar Ashfaq'),
                React.createElement('h2', {}, 'Web Developer')
              ),
          
              React.createElement('section', { className: 'contact' },
                React.createElement('h2', {}, 'Contact Information'),
                React.createElement('ul', {},
                  React.createElement('li', {}, 'Email: mashbar120@gmail.com'),
                  React.createElement('li', {}, 'Phone: 03426260929'),
                 
                )
              ),
          
             
          
              React.createElement('section', { className: 'education' },
                React.createElement('h2', {}, 'Education'),
                React.createElement('ul', {},
                  React.createElement('li', {}, 'Software Engineering Diploma in (Aligarh Institute of Technology)')
                )
              ),
          
              React.createElement('section', { className: 'skills' },
                React.createElement('h2', {}, 'Skills'),
                React.createElement('ul', {},
                  React.createElement('li', {}, 'JavaScript'),
                  React.createElement('li', {}, 'HTML, CSS, Git')
                )
              )
            ]
          );
          
          const root = ReactDOM.createRoot(document.getElementById('root'));
          root.render(parent);
          