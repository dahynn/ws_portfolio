const strengths = [
  { number: '01', value: 'Originality', title: '전문가 정신', description: '검색이 느려지는 원인을 실행 계획으로 확인하고, 쿼리 구조부터 다시 살폈습니다.' },
  { number: '02', value: 'Premium', title: '품질 극대화', description: '화면에 보이는 완료와 데이터에 남는 결과가 일치하는지, 실패 상황까지 확인했습니다.' },
  { number: '03', value: 'Challenge', title: '도전적 실행', description: '동시 요청과 외부 연동 문제를 직접 재현하고, 구현과 검증으로 해결 방식을 찾았습니다.' },
];

export function PersonalStrengths() {
  return <section className="personal-strengths" aria-label="핵심가치와 연결한 일하는 기준">
    <p className="strengths-label">CORE VALUES · MY APPROACH</p>
    <ol>{strengths.map(strength => <li key={strength.value}>
      <span className="strength-marker" aria-hidden="true">{strength.number}</span>
      <div><h3><span>{strength.value}</span>{strength.title}</h3><p>{strength.description}</p></div>
    </li>)}</ol>
  </section>;
}
