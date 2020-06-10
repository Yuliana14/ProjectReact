import {Card} from 'semantic-ui-react';

function ProductList({ products }) {
  function mapProductsToItems(products) {
    return products.map(product => ({
      header : product.name,
      image : product.mediaUrl,
      meta : `$${product.price}`,
      color: 'teal',
      fluid : true,
      childKey : product._id,
      href : `/product?_id=${product._id}`
    }))
  }
  
  return <Card.Group stackable itemsPerRow="3" centered items = {mapProductsToItems(products)} />
  
  /*let list = products.map(product => product);
  console.log(list);
  
  return <h1>HELLO</h1>*/
}

export default ProductList;
