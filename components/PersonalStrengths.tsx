const strengths = [
  { number: '01', title: '자기주도성', description: '프로그래밍 스터디를 직접 기획·운영하며, 필요한 일을 찾아 실행했습니다.' },
  { number: '02', title: '문제해결 실행력', description: '결제 승인 뒤 저장이 실패하는 상황을 재현하고, 계약 복구까지 확인했습니다.' },
  { number: '03', title: '실험정신', description: 'AI 요약의 순차·병렬 처리를 같은 조건에서 비교해 개선 효과를 확인했습니다.' },
  { number: '04', title: '학습민첩성', description: 'React 화면 구현에서 Spring Boot API와 Redis 상태 처리까지 경험을 넓혔습니다.' },
  { number: '05', title: '전략적 협업능력', description: '프런트엔드 리드로 상품 선택·가입 화면과 백엔드 API의 연동 흐름을 연결했습니다.' },
];

export function PersonalStrengths() {
  return <section className="personal-strengths" aria-label="인재상과 연결한 일하는 기준">
    <p className="strengths-label">TALENT · HOW I WORK</p>
    <ol>{strengths.map(strength => <li key={strength.title}>
      <span className="strength-marker" aria-hidden="true">{strength.number}</span>
      <div><h3>{strength.title}</h3><p>{strength.description}</p></div>
    </li>)}</ol>
  </section>;
}
