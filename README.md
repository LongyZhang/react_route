1: SPA concept
    The single page concept

2： react dom
    basically the react project contains react-dom

3: how to use route? 

    define the navigation part and display part

    <Link to="/home"> it points to home </Link>

    <Routers>
    <Route path="/home" element={<Home/>}>

    `it is suggested to use browserRouter to contain whole app.js


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

6: Pack your NavLink by using normal component

    1: using normal component to contain general class for navlink
    2: using props to customize the navlink
    3: using full version of navlink to customize your content

7: Nest Route Component

    1: Using Route component to contain another component
    2: The nest route component can change content of component 
    from another route 
    3: when we register route navlink, it is suggested to use home rather than /home
    4: more detail refers documentation

8: Pass parameters between routes
    1: using `Content/${obj.id}/${obj.title}` to register the url and pass value to certain addresss
    2: using Nest route to define and receive value from link
    <Route path='Content' element={<Content />}>
        <Route path=':id/:title' element={<Content />}></Route>
    </Route>
    3: using useParams() to receive value from element component
     