
const ReviewData = [
    {
      id: 1,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4YWGN243rZuvGmJ_MoBy_aPLqXyC1VxuXNw&usqp=CAU',
      name: 'Maria Ferguson',
      title: 'Java development',
      quote:
      "I can't believe how much I've grown since joining FuturoLearn. The personalized learning paths, expert instructors, and practical projects have given me the confidence to excel in my career.",
    },
    {
      id: 2,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8CldTqNpzN9ENCGC79zNXg6EfcqEHXTLjQg&usqp=CAU',
      name: 'john smith',
      title: 'UI/UX design',
      quote:
      "FuturoLearn Academy embodies the future of education. The video-based learning, global connections, and forward-thinking courses have equipped me with skills that stand out in the modern workforce."

      ,
    },
    {
      id: 3,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjYk4VQfp0KA2EZWF63ixKaFtHpXw2BAPnLg&usqp=CAU',
      name: ' susan andersen ',
      title: 'Fontend development',
      quote:
      "FuturoLearn Academy has transformed my learning experience. The innovative approach, engaging courses, and flexibility have truly prepared me for the future. Highly recommended!",
    },
    {
      id: 4,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUAtdCRf_mGFea-5kQG7J8tcahbpjUotyls2KG3pKzJOZVpNFEpKYbShfwELrIZlF23_c&usqp=CAU',
      name:  'john doe',
      title: 'Php development',
      quote:"FuturoLearn is not just an academy; it's a hub of innovation and inspiration. The courses are tailored to the demands of the evolving world, and the emphasis on skill-building is truly commendable.",
    },{
        id: 5,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoajLsNd32YFWNB6QVOOrHsdfREZhCGljbrc-eguau7HGyx_GNp-Y_JzBOKXoa_Pepavg&usqp=CAU',
      name:  'william k.s',
      title: 'Ruby development',
      quote:"As a working professional, FuturoLearn's flexibility has been a game-changer. The ability to learn at my own pace without compromising on quality has been invaluable to my career."
    },{
        id:6,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZI0v4L7qqtfWXll1Y95wKsn0vqs_jbg_RkEkvFmf6iriSjrifeeDAoHejunx8adjKg5Q&usqp=CAU',
        name:'Adam m.o',
        title:'Backend development',
        quote:"I was skeptical about online learning until I joined FuturoLearn. The dynamic courses, interactive discussions, and real-time feedback have changed my perspective completely.",
    },{
        id:7,
        image:"data:image/jpeg;base64,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",
        name:'Sofia aremu',
        title:'Python development',
        quote:"FuturoLearn's courses are like a breath of fresh air. The up-to-date content, interactive tools, and real-world applications make learning enjoyable and meaningful."
    },{
        id:8,
        image:'data:image/jpeg;base64,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',
        name:'Ella Hunt',
        title:'Java development',
        quote:"The instructors at FuturoLearn are true mentors. Their expertise and guidance have enriched my learning journey, and the platform's user-friendly interface makes education accessible to all."
    },{
        id:9,
        image:'data:image/jpeg;base64,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',
        name:'Bright david',
        title:'Fontend development',
        quote:"FuturoLearn Academy is the epitome of modern education. The focus on future skills, hands-on projects, and adaptable learning has ignited my passion for continuous growth."
    },{
        id:10,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz5ReLMTRYy9fPirXtyDVkUDCnDiNPpc52xM94eAwyI_mJtjhmNgCUnGzdrMhZsgtYb94&usqp=CAU',
        name:'Farihat afolabi',
        title:'Graphic Design',
        quote:"FuturoLearn Academy goes beyond education – it's a journey of empowerment. The blend of technology, expertise, and community support has ignited my curiosity and fueled my ambition to shape a brighter future."
    }
  ];
  
  export default ReviewData;
