import React from 'react'
import Title from './title';
import {StyledHome, Container, TitlePoke, ImagePoke, IndexPoke} from './home.style'

const AllPoke = ({ data, activatOpenAndClose }) => {
    const defaultImg = 'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png'
    
    return (
        <div>
            <Title 
                titleName= 'POKEDEX'
                ColorLine= 'white'
                ColorTitle = 'black'
            />
            {data.map(res => 
                <StyledHome  key={res.id}>
                    <Container onClick={() => activatOpenAndClose(res.id +1)}>
                        <ImagePoke 
                            src= {res.id +1
                                ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${res.id +1}.png` 
                                : defaultImg}
                            alt='poke'
                        />
                        <TitlePoke>{res.name}</TitlePoke>
                            <IndexPoke>id : {res.id +1}</IndexPoke>
                    </Container>
                </StyledHome> 
            )}
        </div>
    )
}

export default AllPoke