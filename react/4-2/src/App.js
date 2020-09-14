import React from 'react';
import Card from './Card';

function App() {
  return (
    <div>
      <Card cardImg="https://images.squarespace-cdn.com/content/v1/5a7c0544d74cffa3a6ce66b3/1587740850248-HT0QC4V60Y17PK8D1A6F/ke17ZwdGBToddI8pDm48kFWxnDtCdRm2WA9rXcwtIYR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UcTSrQkGwCGRqSxozz07hWZrYGYYH8sg4qn8Lpf9k1pYMHPsat2_S1jaQY3SwdyaXg/%D7%AA%D7%9E%D7%95%D7%A0%D7%AA+%D7%A0%D7%95%D7%A3+-+%D7%90%D7%92%D7%9D++%D7%92%D7%90%D7%A8%D7%93%D7%94+%D7%90%D7%99%D7%98%D7%9C%D7%99%D7%94.jpg?format=2500w"
      cardTitle="Title one"
      cardDescription="some description"
      ></Card>
      <Card cardImg="https://www.misgeret.co.il/wht_Images/catalog/style/image_content_91.jpg"
      cardTitle="Title two"
      cardDescription="some description more more more"
      ></Card>
      <Card cardImg="https://cdn.shopify.com/s/files/1/2807/5684/products/photo_2019-08-09_21.17.40_1200x985.jpeg?v=1569531722"
      cardTitle="Title tree"
      cardDescription="some description more more more more more more"
      ></Card>
    </div>
  );
}

export default App;
