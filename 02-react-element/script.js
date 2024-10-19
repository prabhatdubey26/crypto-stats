// const h2 = React.createElement('h2', {className:'subheading'}, 'Hello React !');

// const root = ReactDOM.createRoot(document.querySelector('#root'));

// root.render(h2);

const container = React.createElement('div', { className: 'container' },
    React.createElement('section', {
        key: 2,
        style : {
                width: '200px',
                background :" cyan"
        }
    },
        React.createElement('div', {},
            React.createElement('p', {},
                'React is best lib of JS !!')
        )
    )
);

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(container);


