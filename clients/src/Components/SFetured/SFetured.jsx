import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SCard from '../Crads/SCard';


const AppContainer = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;;
  gap: 1rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media (max-width: 668px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const SFetured = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('./cars.json');
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

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <AppContainer>
            {data.slice(0, 4).map((post) => (
                <SCard key={post.id} post={post} />
            ))}
        </AppContainer>
    );
};

export default SFetured;
