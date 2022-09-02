import React from 'react';
import Header from '../components/Header/Header';
import PersonalInfo from '../components/PersonalInfo/PersonalInfo';
import Planning from '../components/Planning/Planning';

export default function MainPage() {
  return (
    <>
      <Header />
      <Planning />
      <PersonalInfo />
    </>
  );
}
