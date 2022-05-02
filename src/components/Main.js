import React from 'react'
import './body.css';
import { Route,Routes } from 'react-router-dom';
import Hero from './Hero';
import Aboutus  from './Aboutus';
import Blog from './Blog';
import Contact from './Contact';
import CreatePost from '../pages/CreatePost/CreatePost';

const Main = () => {
  return (
    <div >
    <Routes >
            <Route path='/' element={<Hero />} />
            <Route path='/about' element={<Aboutus />} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/blog' element={<Blog/>} />
            <Route path='/posts' element={<CreatePost/>} />

        </Routes>
      </div>
  )
}

export default Main