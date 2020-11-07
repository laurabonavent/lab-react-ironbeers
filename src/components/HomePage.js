import React from 'react';
import {Link} from 'react-router-dom'

const ContainerHP = (props) => {
  return (
    <>
      <img src={props.src} alt="allbeers" />
      <h1><Link to={props.to}>{props.title}</Link></h1>
      <p>{props.description}</p>
    </>
  );
}

const HomePage = () => {
  return (
    <>
      <ContainerHP
        src="https://www.toulouscope.fr/wp-content/uploads/2017/01/11953-bar-209148-759x500.jpg"
        to="/beers"
        title="All Beers"
        description="loremp ipsum"
      />

      <ContainerHP
        src="https://quoifaireabordeaux.com/wp-content/uploads/2019/07/Bi%C3%A8res.jpeg"
        to="/random-beer"
        title="Random Beer"
        description="loremp ipsum"
      />

      <ContainerHP
        src="https://blog.eating.be/wp-content/uploads/2014/02/2053327e-8b61-11e3-b836-93aa88ddabcf_web_scale_0.1587302_0.1587302__1.jpg"
        to="/new-beer"
        title="New Beer"
        description="loremp ipsum"
      />
    </>
  );
};

export default HomePage;
