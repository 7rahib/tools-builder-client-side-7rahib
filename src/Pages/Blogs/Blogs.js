import React from 'react';

const Blogs = () => {

    return (
        <div className='grid grid-cols-1 m-12'>
            <h3 className='text-center text-3xl text-neutral-content my-7'>Questions and Answers</h3>
            <div class="card w-full bg-base-300 shadow-xl my-5">
                <div class="card-body">
                    <h2 class="card-title">How will you improve the performance of a React Application ?</h2>
                    <p>We can follow few steps to improve performance of a React Application.</p>
                    <ul>
                        <li>1. By keeping component state local.</li>
                        <li>2. Prevent components from unnecessary Re-renders.</li>
                        <li>3. Using import for splitting the code into different components.</li>
                        <li>4. Lazy loading images is also a great trick.</li>
                        <li>4. Making sure that components receive only necessary props.</li>
                        <li>4. Another clever techniques to minimize the number of costly DOM operations required to update the UI.</li>
                    </ul>
                </div>
            </div>
            <div class="card w-full bg-base-300 shadow-xl my-5">
                <div class="card-body">
                    <h2 class="card-title">What are the different ways to manage a state in a React application ?</h2>
                    <p className='font-semibold'>To manage Local State we use</p>
                    <ul>
                        <li>1. useState</li>
                        <li>2. useReducer</li>
                        <li>3. useCallback</li>
                    </ul>
                    <p className='font-semibold'>To manage Global State we use</p>
                    <ul>
                        <li>1. useReducer</li>
                        <li>2. useContext</li>
                    </ul>
                    <p className='font-semibold'>To manage Server State we use</p>
                    <ul>
                        <li>1. useState</li>
                        <li>2. useEffect</li>
                        <li>3. useQuery</li>
                    </ul>
                    <p className='font-semibold'>To manage URL State we use</p>
                    <ul>
                        <li>1. useHistory</li>
                        <li>2. useLocation</li>
                        <li>3. useParams</li>
                    </ul>
                </div>
            </div>
            <div class="card w-full bg-base-300 shadow-xl my-5">
                <div class="card-body">
                    <h2 class="card-title">How does prototypical inheritance work ?</h2>
                    <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Nowadays, in modern language, it is being set using __proto__. When we read a property from object, and it is missing, JavaScript automatically takes it from the prototype. In programming, this is called “prototypal inheritance”. And soon we will study many examples of such inheritance, as well as cooler language features built upon it. The property Prototype is internal and hidden, but there are many ways to set it. One of them is to use the special name __proto__,</p>
                </div>
            </div>
            <div class="card w-full bg-base-300 shadow-xl my-5">
                <div class="card-body">
                    <h2 class="card-title">How will you improve the performance of a React Application ?</h2>
                    <p>Using setState in React in the right way is very important. Data flows from top to bottom in the component tree. If we set the state in the top component, all the child components are re-rendered. Setting this state in the wrong way triggers an infinite loop among components which will break our application. The idea behind that is that in order to track changes in state and than re-render the component according to the changes, you have to use setState, because after setState, the render function is triggered.</p>
                </div>
            </div>
            <div class="card w-full bg-base-300 shadow-xl my-5">
                <div class="card-body">
                    <h2 class="card-title">What is a unit test? Why should write unit tests ?</h2>
                    <p>Unit tests are typically automated tests written and run by software developers to ensure that a section of an application known as the "unit" meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure. Unit testing allows software developers to actually think through the design of the software and what has to be done before they write the code. This can help them to stay focused and can also help them to create much better designs.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;