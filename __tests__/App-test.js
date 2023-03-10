/**
 * @format
 */

import 'react-native';
import React from 'react';
import { render,fireEvent } from '@testing-library/react-native';
import InitView from '../src/components/initView/initView';

let component;

describe("<InitView />",()=>{
  beforeEach(()=>{
    global.fetch = jest.fn(()=>Promise.resolve({
      json: ()=> Promise.resolve(
        {
          "page": 1,
          "results": [
            {
              "poster_path": "/vC324sdfcS313vh9QXwijLIHPJp.jpg",
              "popularity": 47.432451,
              "id": 31917,
              "backdrop_path": "/rQGBjWNveVeF8f2PGRtS85w9o9r.jpg",
              "vote_average": 5.04,
              "overview": "Based on the Pretty Little Liars series of young adult novels by Sara Shepard, the series follows the lives of four girls — Spencer, Hanna, Aria, and Emily — whose clique falls apart after the disappearance of their queen bee, Alison. One year later, they begin receiving messages from someone using the name \"A\" who threatens to expose their secrets — including long-hidden ones they thought only Alison knew.",
              "first_air_date": "2010-06-08",
              "origin_country": [
                "US"
              ],
              "genre_ids": [
                18,
                9648
              ],
              "original_language": "en",
              "vote_count": 133,
              "name": "Pretty Little Liars",
              "original_name": "Pretty Little Liars"
            },
            {
              "poster_path": "/esN3gWb1P091xExLddD2nh4zmi3.jpg",
              "popularity": 37.882356,
              "id": 62560,
              "backdrop_path": "/v8Y9yurHuI7MujWQMd8iL3Gy4B5.jpg",
              "vote_average": 7.5,
              "overview": "A contemporary and culturally resonant drama about a young programmer, Elliot, who suffers from a debilitating anti-social disorder and decides that he can only connect to people by hacking them. He wields his skills as a weapon to protect the people that he cares about. Elliot will find himself in the intersection between a cybersecurity firm he works for and the underworld organizations that are recruiting him to bring down corporate America.",
              "first_air_date": "2015-05-27",
              "origin_country": [
                "US"
              ],
              "genre_ids": [
                80,
                18
              ],
              "original_language": "en",
              "vote_count": 287,
              "name": "Mr. Robot",
              "original_name": "Mr. Robot"
            }]
          }
      )
    }));
    component= render(<InitView/>);
  })
  it("Renderiza correctamente",()=>{
      expect(component).toBeDefined();
      expect(component.getByTestId("error-login-text")).toBeDefined();    
  })
   it("Renderiza loss elementos del APi",()=>{
        
   })
})
