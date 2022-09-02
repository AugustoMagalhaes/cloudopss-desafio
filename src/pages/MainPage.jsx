import React from 'react';
import DietChoice from '../components/DietChoice/DietChoice';
import DietDifficulty from '../components/DietDifficulty/DietDifficulty';
import FoodRestriction from '../components/FoodRestriction/FoodRestriction';
import Header from '../components/Header/Header';
import MainGoal from '../components/MainGoal/MainGoal';
import MealsPerDay from '../components/MealsPerDay/MealsPerDay';
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
      <DietChoice />
      <MealsPerDay />
      <FoodRestriction />
      <DietDifficulty />
    </>
  );
}
