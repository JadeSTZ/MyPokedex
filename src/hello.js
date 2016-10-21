import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => {
    return (
        <header>
            <h1>{props.AppTitle}</h1> 
        </header>
    )
}

const Content = (props) => {
    return (
    
           <section>
         {
             props.item.pokemons.map(item => (
                     <section>
                       <img src = {item.Pic} height="150 px" width="150 px"/>
                         <ul >
                         <li>
                         Name     : {item.Name}
                         <br/>Type     : {item.Type}
                         <br/>Skill 1 : {item.Skill1}
                         <br/>Skill 2 : {item.Skill2}
                          <br/>CP     : {item.CP}
                        </li>
                         </ul>
                     </section>
             ))
         }
     </section>
    
    )
}

const App = () => {

    const AppTitle = 'My Pokedex in list'
    const item = {'pokemons':[{
             Name   : 'Bulbasaur',
             Pic    : 'http://www.zogzagit.com/img/pokemon-go/Pokemon/001.png',
             Type   : 'Grass/Poison',
             Skill1 : 'Vine Whip"',
             Skill2 : 'Power Whip',
             CP     : '1071'
         },{
             Name   : 'Charmander',
             Pic    : 'http://www.zogzagit.com/img/pokemon-go/Pokemon/004.png',
             Type   : 'Fire',
             Skill1 : 'Ember',
             Skill2 : 'Flamethrower',
             CP     : '955'
         },{
             Name   : 'Squirtle',
             Pic    : 'http://www.zogzagit.com/img/pokemon-go/Pokemon/007.png',
             Type   : 'Water',
             Skill1 : 'Bubble',
             Skill2 : 'Aqua Tail',
             CP     : '1008'
         }
     ]}
    
        return (
            <section>
                 <Header AppTitle ={AppTitle} />
                 <Content 
                     item={item} />
                 
             </section>
        )
}

const element = document.getElementById('hello');
ReactDOM.render(<App />,element);