import React, { useState } from 'react';
import './App.css';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Animals, AnimalsType } from './Components/Animals/animals';
import { Categories } from './Components/Categories/categories';
import { Cards } from './Components/Cards/cards';


function AnimalsApp() {

  const [filtredAnimals, setFiltredAnimals] = useState<AnimalsType[]>(Animals);

  const activeChangeHandler = (text: string) => {
    const index = filtredAnimals.findIndex((item) => item.category === text);
    const newAnimals = filtredAnimals.map((animal, i) => {
      if (i === index) {
        animal.isActive = !animal.isActive
      }
      return animal
    })
    setFiltredAnimals(newAnimals);
  };

  const seeAllHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newAnimals = [...filtredAnimals]
    newAnimals.map((animal) => {
      return animal.isActive = !animal.isActive;
    })
    setFiltredAnimals(newAnimals);
  };


  return (
    <Grid fluid>
      <Row>
        <Col xs={12}>
          <div className="AnimalsApp">
            <header className="App-header">
              <h1>Welcome!</h1>
              <h3>Please choose Latvian forest animal you would like to read about</h3>
            </header>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <div className="categories-wrapper">
            {Categories.map(({ id, text}) => {
              return (
                <span
                  key={id}
                  className="categories"
                >
                  {text}
                  <input
                    type="checkbox"
                    onChange={() => activeChangeHandler(text)}
                  />
                </span>
              )
            })
            }
            <span className="categories">
              See all
              <input
                type="checkbox"
                onChange={(event) => seeAllHandler(event)}
              />
            </span>
          </div>
        </Col>
      </Row>
      <Row center="xs">
        <Col xs={12}>
          <div className="card-section">
          {filtredAnimals.filter(({isActive}) => isActive === true).map(({ id, name, category, description, img, isActive }) => {
              return (
                <Cards
                   key={id}
                   img={img}
                   description={description}
                   name={name}
                />   
              )
            })}
          </div>
        </Col>
      </Row>
    </Grid>
  );
}

export default AnimalsApp;
