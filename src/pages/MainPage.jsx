import React from 'react';
import DietChoice from '../components/DietChoice/DietChoice';
import DietDifficulty from '../components/DietDifficulty/DietDifficulty';
import DietInvestment from '../components/DietInvestment/DietInvestment';
import ExerciseActivity from '../components/ExerciseActivity/ExerciseActivity';
import FoodRestriction from '../components/FoodRestriction/FoodRestriction';
import Header from '../components/Header/Header';
import MainGoal from '../components/MainGoal/MainGoal';
import MealsPerDay from '../components/MealsPerDay/MealsPerDay';
import PersonalInfo from '../components/PersonalInfo/PersonalInfo';
import Planning from '../components/Planning/Planning';
import Suplements from '../components/Suplements/Suplements';
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
      <DietInvestment />
      <Suplements />
      <ExerciseActivity />
    </>
  );
}
