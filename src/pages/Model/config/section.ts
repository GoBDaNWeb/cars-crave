import section1 from "../../../../public/brand/section1.jpg";
import section2 from "../../../../public/brand/section2.jpg";

export const sectionContent = [
  {
    id: 1,
    title: "Контроль на дороге",
    boldText:
      "Интеллектуальная система полного привода с молниеносным переключением режимов.",
    paragraphs: [
      "Он может как ускориться на трассе, так и осторожно ездить по городу, в этом ему помогают интеллектуальные системы сканирования и управления движением.",
    ],
    image: section1.src,
    textIsLeft: true,
  },
  {
    id: 2,
    title: "Безопасность",
    boldText:
      "Базируется на мировых разработках лучших стандартов безопасности.",
    paragraphs: [
      "ZEEKR унаследовал глобальную концепцию безопасности бренда Jikrypton и делает каждую поездку максимально безопасной.",
    ],
    image: section2.src,
    textIsLeft: false,
  },
];
