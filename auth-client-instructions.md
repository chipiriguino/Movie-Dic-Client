### Using the stater code in auth-client-boilerplate

```bash
cd auth-client-boilerplate

npm i
```

#### Agregamos route para renderizar los componentes `Login` y `Signup` en App.js

#### Actualizamos `App.js`

```jsx
// src/App.js

import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Private from "./pages/Private";

class App extends Component {
  render() {
    return (
      <div className='container'>
        <Navbar />

        <Switch>
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/private' component={Private} />
        </Switch>
      </div>
    );
  }
}

export default App;

```

#### Ejecutamos la app y vemos su funcionalidad básica.

#### Usando la Context API  de React vamos a crear un provider y un consumer

#### Creamos el componente `AuthProvider` el cuál mantendrá el estado con esta información:

- `isLoggedin` boolean - mostrando si el usuario está logueado o no
- `user` objeto con los datos del usuario provinientes de la BD
- `isLoading` flag
- funciones que estarán disponibles a través de `props` en los componentes Consumer.

#### Creamos `lib/AuthProvider.js`

```jsx
// lib/AuthProvider.js

import React from "react";
import auth from "./auth-service";	// Importamos funciones para llamadas axios a la API
const { Consumer, Provider } = React.createContext();

// HOC para crear Consumer
const withAuth = (WrappedComponent) => {};

// Provider
class AuthProvider extends React.Component {
  state = { isLoggedin: false, user: null, isLoading: true };

componentDidMount() {
    auth.me()
    .then((user) => this.setState({ isLoggedin: true, user: user, isLoading: false }))
    .catch((err) => this.setState({ isLoggedin: false, user: null, isLoading: false }));
  }

  signup = (user) => {};

  login = (user) => {};
	
  logout = () => {};
	
  render() {
    const { isLoading, isLoggedin, user } = this.state;
    const { login, logout, signup } = this;
    
    return (
      isLoading ? 
      <div>Loading</div> 
      :
      (<Provider value={{ isLoggedin, user, login, logout, signup}} >
         {this.props.children}
      </Provider>)
    )	/*<Provider> "value={}" datos que estarán disponibles para todos los componentes <Consumer> */
  }
}

export { Consumer, withAuth };		//  <--	RECUERDA EXPORTAR  ! ! !

export default AuthProvider;		//	<--	RECUERDA EXPORTAR  ! ! !
```
#### Finalicemos los métodos `signup()` , `login()` and `logout()` en `AuthProvider.js`

```jsx
// lib/AuthProvider.js

// Provider
class AuthProvider extends React.Component {
  	...
    		...
    				....
    
  signup = (user) => {
    const { username, password } = user;
    
    auth.signup({ username, password })
      .then((user) => this.setState({ isLoggedin: true, user}) )
      .catch(({response}) => this.setState({ message: response.data.statusMessage}));
  };


  login = (user) => {
    const { username, password } = user;

    auth.login({ username, password })
      .then((user) => this.setState({ isLoggedin: true, user }))
      .catch((err) => console.log(err));
  };


  logout = () => {
    auth.logout()
      .then(() => this.setState({ isLoggedin: false, user: null }))
      .catch((err) => console.log(err));
  };

				...
		...
  
```

### `Context.Provider`

#### El valor dentro de `<Provider  value={/* some value */}/>` estará disponible para todos los components `<Consumer>`

### Importamos `AuthProvider` en `App.js` y envolvemos todo el component (a fin de que comparta el contexto)

```jsx
// src/App.js

...

import AuthProvider from "./lib/AuthProvider";

...
	...

class App extends Component {
  render() {
    return (
      <AuthProvider>        {/*       <---  Envolvemos los componentes con AuthProvider       */}
       
        <div className="container">
          <Navbar />
          <h1>Basic React Authentication</h1>

          <Switch>
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/private" component={Private} />
          </Switch>
        </div>
        
      </AuthProvider>       {/*       <---  Envolvemos los componentes con AuthProvider       */}
      );
  }
}
```

#### Usando HOC creamos un HOC `withAuth`

#### El HOC `withAuth` devuelve un componente envuelto en el componente `<Consumer>`

#### Lee primero  https://es.reactjs.org/docs/context.html#contextconsumer

```jsx
// lib/AuthProvider.js

const withAuth = (WrappedComponent) => {

  return class extends React.Component {
    render() {
      
      return (
        <Consumer>
{/* El componente <Consumer> provee un callback que recibe el "value" con el objeto Providers */}  
        { 
          ({login, signup, user, logout, isLoggedin}) => {
          return (
            <WrappedComponent 
              login={login} 
              signup={signup} 
              user={user}
              logout={logout}
              isLoggedin={isLoggedin}
              {...this.props} />
          );
        }}
        </Consumer>
      );
    }
  };
};
```
#### Ahora necesitamos editar todos los componentes que necesitan usar las funciones del Provider, y hacerlos consumers, para que tengan acceso a él

#### Actualizamos `pages/Signup.js` - para envolver al componente y hacerlo un consumer

`pages/Signup.js`

```jsx
// pages/Signup.js

...

import { withAuth } from "../lib/AuthProvider";			//	<-- UPDATE HERE

...
	...


  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    //  console.log('Signup -> form submit', { username, password });
  
    this.props.signup({ username, password });			//	<-- UPDATE HERE
  };

			...
  ...


export default withAuth(Signup);			            //	<-- UPDATE HERE
```

#### Actualizamos `pages/Login.js` - para envolver al componente y hacerlo un consumer

`pages/Login.js`

```jsx
// pages/Login.js

...

import { withAuth } from "../lib/AuthProvider";			//	<-- UPDATE HERE

...
		...
				...

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    //  console.log('Signup -> form submit', { username, password });		
  
    this.props.login({ username, password });			//	<-- UPDATE HERE
  };

			...
  ...


export default withAuth(Login);				           //	<-- UPDATE HERE
```

#### Actualizamos `pages/Private.js` - para envolver al componente y hacerlo un consumer

`pages/Prvate.js`

```jsx
// pages/Private.js

import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";			//	<-- UPDATE HERE

class Private extends Component {
  render() {
    return (
      <div>
        <h1>Welcome {this.props.user.username}</h1>	  {/* 	<-- UPDATE HERE	      */}
      </div>
    );
  }
}

export default withAuth(Private);				        //	<-- UPDATE HERE

```

#### Actualizamos `components/Navbar.js`

```jsx
// components/Navbar.js

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";			//	<-- UPDATE HERE

class Navbar extends Component {
  render() {

    const { user, logout, isLoggedin } = this.props;	//	<-- UPDATE HERE
    return (
      <nav className="navbar">
            <Link to={'/'} id='home-btn'>
          <h4>Home</h4>
        </Link>
        {
          isLoggedin ? {/*     <-- UPDATE HERE	    */}
          (<>
            <p className="navbar-user">username: {user.username}</p>	{/* 	<-- UPDATE HERE     */}
            <button className="navbar-button" onClick={logout}>Logout</button>	{/* 	<-- UPDATE HERE     */}
          </>) 
         : 
          (<>
            <Link to="/login">
              <button className="navbar-button">Login</button>
            </Link>
            <br />
            <Link to="/signup">
              <button className="navbar-button">Sign Up</button>
            </Link>
          </>)
        }
      </nav>
    );
  }
}

export default withAuth(Navbar);				        //	<-- UPDATE HERE
```
#### Ahora podemos hacer `signup` de un nuevo usuario, y veremos que la Navbar cambia

#### También podemos hacer `logout`.

#### Todavía necesitamos crear un enrutamiento adecuado:

    - Cuando el usuario está logueado, necesitamos redireccionarlo a la página private, en nuestro caso el componente `Private`
    - Cuando el usuario no está logueado e intenta acceder a la página `/private` necesitamos direccionarlo al componente `Login`

* Cuando el usuario no está logueado y trata de acceder al componente `Signup` o `Login`, tenemos que permitirle ir a cualquiera de los dos.

### Creamos `components/AnonRoute.js`

```jsx
// components/AnonRoute.js

import React from "react";
import { Route, Redirect } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

function AnonRoute({ component: Component, isLoggedin, ...rest }) {
 return (
  <Route
    {...rest}
    render={(props) => !isLoggedin ? <Component {...props} /> : <Redirect to="/private"/>}
   />
  );
}

export default withAuth(AnonRoute);
```

#### Actualizamos `App.js`

```jsx
// src/App.js

...
		...

import AnonRoute from "./components/AnonRoute";


...
		...
				...

   	<h1>Basic React Authentication</h1>

    <Switch>
      <AnonRoute path="/signup" component={Signup} />{/* UPDATE <Route> to <AnonRoute> */}
      <AnonRoute path="/login" component={Login} />	{/* UPDATE <Route> to <AnonRoute> */}
      <Route path="/private" component={Private} />
    </Switch>
```

### Creamos `components/PrivateRoute.js`

```jsx
// components/PrivateRoute.js

import React from "react";
import { Route, Redirect } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

function PrivateRoute({ component: Component, isLoggedin, ...rest }) {
  return (
   <Route
    {...rest}
    render={ (props)  => isLoggedin ? <Component {...props} /> : <Redirect to="/login" />}
   />
  );
}

export default withAuth(PrivateRoute);

```

#### Actualizamos `App.js`

```jsx
// src/App.js

...
		...

import PrivateRoute from "./components/PrivateRoute";


...
		...
				...

   	<h1>Basic React Authentication</h1>

    <Switch>
      <AnonRoute path="/signup" component={Signup} />
      <AnonRoute path="/login" component={Login} />	
      <PrivateRoute path="/private" component={Private} />{/* <Route> to <PrivateRoute>*/}
    </Switch>
```

#### Felicitaciones, has creado tu primer autenticación en Rect 👏 👏 👏 👏 👏 

