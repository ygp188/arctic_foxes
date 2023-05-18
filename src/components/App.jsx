import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import MainPage from './MainPage';
import FoxesPage from './Foxes/FoxesPage';
import OneFox from './Foxes/OneFox';
import SignUpPage from './Auth/SignUpPage';
import LoginPage from './Auth/LoginPage';
import PostsPage from './Posts/PostsPage';

export default function App({
  foxes, fox, user, posts,
}) {
  return (
    <div className="container">
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/foxes" element={<FoxesPage foxes={foxes} user={user} />} />
        <Route path="/foxes/:id" element={<OneFox fox={fox} />} />
        <Route path="/user/signup" element={<SignUpPage />} />
        <Route path="/user/login" element={<LoginPage />} />
        <Route path="/posts" element={<PostsPage posts={posts} user={user} />} />
      </Routes>
    </div>
  );
}
