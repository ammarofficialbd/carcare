import React, { useEffect, useState } from 'react'
import Heading from '../Heading'
import ECard from '../Crads/ECard';
import Cards from '../Crads/Cards';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 668px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
function SUV() {

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [filteredCars, setFilteredCars] = useState([]);

  useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await fetch('cars.json');
              if (!response.ok) {
                  throw new Error(`HTTP error! status: ${response.status}`);
              }
              const result = await response.json();
              setData(result);
          } catch (error) {
              setError(error);
              console.error('Error fetching data:', error);
          }
      };

      fetchData();
  }, []);

  useEffect(() => {
      const filterCars = () => {
          if (data.length > 0) {
              const filtered = data.filter(car => car.type.includes('SUV'));
              setFilteredCars(filtered);
          }else{
            return <p> Data is Not load</p>
          }
      };

      filterCars();
  }, [data]);

  if (error) {
      return <div>Error: {error.message}</div>;
  }

  if (data.length === 0) {
      return <div>Loading...</div>;
  }

  return (
    <div>
        <Heading title="'SUV's Choiese" subtitle="Article of the Today" />
        <AppContainer> 
        {
        filteredCars 
        &&
        filteredCars.slice(0,4).map((car, index) => (
          <ECard key={index} car={car}/>
                
          ))}
          
        </AppContainer>
    </div>
  )
}

export default SUV