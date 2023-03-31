import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div id='blogs'>
            <h2 className='blogs-title'>Blogs</h2>
            <div className='question'>
                <h2>Q.1: Difference between props vs state ?</h2>
                <p><strong>Answer: </strong>
                    In React, props are used to pass data to the component .props are immutable, the data sent from the parent component cannot be changed.
                    <br />
                    State is based on the position of the React component that can change. State is used to access the state of the component. It works with data. </p>
            </div>
            <div className='question'>
                <h2>Q.2: How does useState() works ?</h2>
                <p><strong>Answer: </strong>First, a state must be declared in the class or function body of the React component.
                    Then the use state must be declared with the two elements in one variable and the other set variable in the form of a function array. Its depends change the function. useState() get a initial value for depends on data type.</p>
            </div>
            <div className='question'>
                <h2>Q.3: Purpose of useEffect other than fetching data ?</h2>
                <p><strong>Answer: <br /> </strong>i. Clone or collect data from local storage or database. <br />
                    ii. 
                    Selecting the appropriate data from the dataset to suit the user's needs.  
                    <br />
                    iii. Data Scaling and Normalization.
                    </p>
            </div>
            <div className='question'>
                <h2>Q.4: How React Works ?</h2>
                <p><strong>Answer: </strong> React create a virtual DOM. When change anything in code , at first compare browser dom with virtual dom. After Changed finally show user interface. Its fixed only the change code thats why works very fast. React is component base library . Its resuable collection of code. </p>
            </div>
        </div>
    );
};

export default Blogs;