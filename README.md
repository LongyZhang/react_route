1: SPA concept
The single page concept

2： react dom
basically the react project contains react-dom

3: how to use route? 

define the navigation part and display part

<Link to="/home"> it points to home </Link>

<Routers>
<Route path="/home" element={<Home/>}>

it is suggested to use browserRouter to contain whole app.js


4: where do we store pages component?
we prefer to store it under src folder of pages

5: Route component vs normal component

    1: different syntax  
        normal component:
        <Demo/>
        route component: 
        <Route path="/home" element={<Home/>}><Route/>
    2: different storage:
        normal component:
        component folder
        route component:
        page folder 
    3: both can pass data through props