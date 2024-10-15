function mulberry32(seed: number) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function getRandomNumbers({count, seed}: {count: number; seed: number}) {
  if (count > 1001) {
    throw new Error(
      'The count cannot be greater than 1001 since there are only 1001 numbers from 0 to 1000.',
    );
  }

  const rng = mulberry32(seed); // 시드를 사용한 랜덤 생성기
  const numbers = Array.from({length: 1001}, (_, i) => i); // 0~1000 숫자로 채워진 배열

  // Fisher-Yates Shuffle을 시드 기반 난수 생성기를 사용하여 실행
  for (let i = numbers.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(rng() * (i + 1)); // 시드 기반으로 랜덤 인덱스 생성
    [numbers[i], numbers[randomIndex]] = [numbers[randomIndex], numbers[i]]; // 배열 요소 교체
  }

  return numbers.slice(0, count); // 섞인 배열의 앞에서 원하는 갯수만큼 반환
}
