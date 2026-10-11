import Image from 'next/image';

const strengths = [
  { title: '긍정', english: 'Positive', image: 'positive', width: 1485, description: '실패 상황을 재현하고, 해결 방법을 찾아 다시 검증합니다.' },
  { title: '혁신', english: 'Innovation', image: 'creative', width: 1564, description: 'AI 요약의 순차·병렬 처리를 비교하며 더 나은 방식을 찾았습니다.' },
  { title: '열정', english: 'Passion', image: 'passionate', width: 1565, description: '화면 구현에서 데이터 처리와 복구까지 책임 범위를 넓혔습니다.' },
];

export function PersonalStrengths() {
  return <section className="personal-strengths talent-gallery" aria-label="긍정, 혁신, 열정으로 연결한 일하는 기준">
    <p className="strengths-label">HOW I WORK</p>
    <ol>{strengths.map(strength => <li key={strength.title}>
      <figure>
        <Image unoptimized src={`/assets/talent/${strength.image}.png`} alt={`${strength.english} · ${strength.title}`} width={strength.width} height={1756} decoding="async" />
        <figcaption>{strength.description}</figcaption>
      </figure>
    </li>)}</ol>
  </section>;
}
