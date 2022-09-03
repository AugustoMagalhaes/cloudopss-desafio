import React from 'react';
import PlanType from '../PlanType/PlanType';
import './Plans.css';

function Plans() {
  return (
    <section className="plans-container">
      <h2 className="title">Conheça nossos planos</h2>
      <section className="plan-types-wrapper">
        <PlanType
          title={['Plano individual']}
          planPrice="19,90"
          planDescription="Este plano é para pessoas residente no mesmo endereço. Os planos e a lista de compras serão feitos para auxiliar ns objetivos de cada pessoa e facilitar a rotina da casa."
        />
        <PlanType
          title={['Plano casal']}
          planPrice="24,90"
          planDescription="Este plano é para pessoas residente no mesmo endereço. Os planos e a lista de compras serão feitos para auxiliar ns objetivos de cada pessoa e facilitar a rotina da casa."
        />
        <PlanType
          title={['Plano familiar', '(4 pessoas)']}
          planPrice="43,90"
          planDescription="Este plano é para pessoas residente no mesmo endereço. Os planos e a lista de compras serão feitos para auxiliar ns objetivos de cada pessoa e facilitar a rotina da casa."
        />
      </section>
    </section>
  );
}

export default Plans;
