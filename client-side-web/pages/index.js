import Fetch from 'isomorphic-unfetch';

import DisplayMenu from '../components/DisplayMenu';

const Index = (props) => (
  <div>
    <h1> Welcome to Contactless Ordering</h1>
    <DisplayMenu menu = { props.menu } />
  </div>
);

Index.getInitialProps = async (context) => {
  const res = await fetch('http://localhost:5000/mcdonalds/menudetails');
  const json = await res.json();
  return {menu: json}
}

export default Index;