import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Chapter from './components/chapter/Chapter'
import Novel from './components/novel/Novel'
import Layout from './components/hoc/Layout/Layout';
import './App.css';

function App() {
  return (
    <div className="App">
     <Layout>
     <Switch>

          <Route path="/:novel/:chapter" component={Chapter} />
          <Route path="/:novel" component={Novel} />

          <Redirect to="/" />
        </Switch>
        </Layout>
    </div>
  );
}

export default App;
