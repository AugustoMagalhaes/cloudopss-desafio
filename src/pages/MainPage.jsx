import React from 'react';
import Header from '../components/Header/Header';
import MainGoal from '../components/MainGoal/MainGoal';
import PersonalInfo from '../components/PersonalInfo/PersonalInfo';
import Planning from '../components/Planning/Planning';
import '../index.css';

export default function MainPage() {
  return (
    <>
      <Header />
      <Planning />
      <PersonalInfo />
      <MainGoal />
    </>
  );
}
