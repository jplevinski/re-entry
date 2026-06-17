import { Resource, RoadmapStage, GlossaryTerm } from '../types';

export const resourcesData: Resource[] = [
  // HOUSING RESOURCE CATEGORY
  {
    id: 'h1',
    name: 'Detroit Rescue Mission Ministries (DRMM)',
    category: 'housing',
    county: 'Wayne (Detroit)',
    address: '150 Stimson Street, Detroit, MI 48201',
    phone: '(313) 993-6703',
    website: 'https://drmm.org',
    description: 'A safe place to sleep tonight. They give you a warm bed, hot meals, and clean clothes. They also have a program to help you stop using drugs or alcohol.',
    helpfulTips: 'You can walk in or call them. Ask for "Emergency Shelter." They do not judge you and are very friendly.'
  },
  {
    id: 'h2',
    name: 'COTS (Coalition on Temporary Shelter)',
    category: 'housing',
    county: 'Wayne (Detroit)',
    address: '26 Broadway Street, Detroit, MI 48226',
    phone: '(313) 831-3777',
    website: 'https://cotsdetroit.org',
    description: 'A safe shelter for mothers, fathers, and children. They keep families together. They also help you make a long-term plan to rent a private home helper.',
    helpfulTips: 'If you have children under 18 and have nowhere to sleep, call them. They specialize in helping young children feel safe.'
  },
  {
    id: 'h3',
    name: 'HOPE Adult Shelter',
    category: 'housing',
    county: 'Oakland (Pontiac)',
    address: '249 Baldwin Avenue, Pontiac, MI 48342',
    phone: '(248) 499-7988',
    website: 'https://www.hopepontiac.org',
    description: 'A warm overnight shelter in Pontiac. They give you a clean bed, hot showers, and meals. They also have a small doctor clinic inside to check your health.',
    helpfulTips: 'Call their phone in the afternoon to see if a bed is open. They open at night but you need to check in early.'
  },
  {
    id: 'h4',
    name: 'MCREST Shelter Team',
    category: 'housing',
    county: 'Macomb (Warren)',
    address: '215 South Gratiot Avenue, Mt Clemens, MI 48043',
    phone: '(586) 430-1281',
    website: 'https://www.mcrest.org',
    description: 'A Macomb County program that helper people find standard beds, hot dinner, and breakfast. They help individuals and parents with children find stable housing.',
    helpfulTips: 'Call them directly to find out which local church has open rooms. They have a bus that picks people up to keep them warm.'
  },

  // FOOD & CLOTHES CATEGORY
  {
    id: 'f1',
    name: 'Capuchin Soup Kitchen',
    category: 'food',
    county: 'Wayne (Detroit)',
    address: '1820 Mt. Elliott Street, Detroit, MI 48207',
    phone: '(313) 579-2100',
    website: 'https://www.cskdetroit.org',
    description: 'They serve big, free warm meals every single day. They also have a "Clothes Closet" where you can pick out clean outfits for work interviews or winter coats.',
    helpfulTips: 'No paperwork or ID is needed to get a free meal. Just turn up during meal hours.'
  },
  {
    id: 'f2',
    name: 'Lighthouse Food Pantry',
    category: 'food',
    county: 'Oakland (Pontiac)',
    address: '46156 Woodward Avenue, Pontiac, MI 48342',
    phone: '(248) 920-6100',
    website: 'https://lighthousemi.org',
    description: 'A friendly community warehouse that hands out large boxes of fresh fruits, vegetables, bread, and canned goods for Oakland County families.',
    helpfulTips: 'If you do not have a car, call them. They can sometimes drop off a box of food directly at your place.'
  },
  {
    id: 'f3',
    name: 'Macomb Community Action Food Depot',
    category: 'food',
    county: 'Macomb (Warren)',
    address: '21885 Dunham Road, Clinton Township, MI 48036',
    phone: '(586) 469-6999',
    website: 'https://ca.macombgov.org',
    description: 'Provides emergency food tins, dry rice, milk, and basic meals. They also help with warm coats and bus tickets to get to work.',
    helpfulTips: 'Tell them you recently got back home from jail or prison. They can help speed up your application for emergency food.'
  },

  // JOBS & WORK TRAINING CATEGORY
  {
    id: 'j1',
    name: 'Detroit Employment Solutions (DESC) / Michigan Works!',
    category: 'jobs',
    county: 'Wayne (Detroit)',
    address: '9301 Michigan Avenue, Detroit, MI 48210',
    phone: '(313) 962-9675',
    website: 'https://www.descmiworks.com',
    description: 'The city job center. They have computers you can use for free. They teach classes on how to write a simple resume, type on a computer, and apply for great jobs.',
    helpfulTips: 'They have a special "Returning Citizens" unit! These coaches know which local bosses are glad to hire people with a record.'
  },
  {
    id: 'j2',
    name: 'Oakland County Michigan Works! Pontiac',
    category: 'jobs',
    county: 'Oakland (Pontiac)',
    address: '1850 Perry Street, Pontiac, MI 48340',
    phone: '(248) 276-1777',
    website: 'https://www.oaklandcountymiworks.com',
    description: 'A job search office in Pontiac. They help you find local hiring events. They also give out "training grants" to pay for school for truck driving, welding, or cooking.',
    helpfulTips: 'Go to their computer lab. You do not need to pay anything. Ask for information on "WIOA training funds" for a free trade license.'
  },
  {
    id: 'j3',
    name: 'Macomb County Michigan Works! Warren',
    category: 'jobs',
    county: 'Macomb (Warren)',
    address: '27800 Van Dyke Avenue, Warren, MI 48093',
    phone: '(586) 574-2170',
    website: 'https://www.macomb-stclairworks.org',
    description: 'A large job help hub in Warren. They teach resume tips and how to answer hard questions from employers about past jail time.',
    helpfulTips: 'Take their free practice job-interview class. It teaches you the exact words to say about your past to sound solid and ready.'
  },
  {
    id: 'j4',
    name: 'Reentry United (Michigan Women\'s Justice Coalition)',
    category: 'jobs',
    county: 'All SE Michigan',
    address: '21919 Vreeland Road, Flat Rock, MI 48134',
    phone: '(313) 530-5801',
    website: 'https://www.mwwc.org/reentry-united',
    description: 'A supportive group run by warm women. They give returning citizens "Dignity Bags" filled with body wash, toothbrush, socks, and bus tickets. They help you make life plans.',
    helpfulTips: 'This group is very welcoming! They have support circles where you can talk to other people who came back home.'
  },

  // HEALTH & DRUG HELP CATEGORY
  {
    id: 'he1',
    name: 'CHASS Center (Community Health)',
    category: 'health',
    county: 'Wayne (Detroit)',
    address: '5635 West Fort Street, Detroit, MI 48209',
    phone: '(313) 849-3920',
    website: 'https://chasscenter.org',
    description: 'A community clinic that offers cheap or free doctor visits, teeth cleanings, and simple mental medicines. They help you even if you do not have health insurance.',
    helpfulTips: 'They speak both English and Spanish. Ask for "Sliding Scale Fees" so you only pay what you can afford, which is often $0.'
  },
  {
    id: 'he2',
    name: 'Detroit Wayne Integrated Health Network (DWIHN)',
    category: 'health',
    county: 'Wayne (Detroit)',
    address: '707 West Milwaukee Street, Detroit, MI 48202',
    phone: '(800) 241-4949',
    website: 'https://www.dwihn.org',
    description: 'A 24-hour phone hotline to get help with mental health, stress, or addiction. They can connect you to physical doctors, therapy, and rehabilitation clinics.',
    helpfulTips: 'You can call their 1-800 phone number at ANY hour of the night. If you feel very stressed or sad, they will listen and help.'
  },

  // IDS & LEGAL AID CATEGORY
  {
    id: 'l1',
    name: 'Lakeshore Legal Aid',
    category: 'legal',
    county: 'All SE Michigan',
    address: '2727 Second Avenue, Detroit, MI 48201',
    phone: '(888) 783-8190',
    website: 'https://lakeshorelegalaid.org',
    description: 'Free lawyers who help people with civil legal problems. They can stop landlords from kicking you out, help get stable child rights, and help clear old records.',
    helpfulTips: 'They are completely free. Call their hotline in the morning to speak to an intake helper.'
  },
  {
    id: 'l2',
    name: 'Nation Outside (Detroit Chapter)',
    category: 'legal',
    county: 'All SE Michigan',
    address: 'Detroit Local Peer Circles',
    phone: '(517) 258-2993',
    website: 'https://www.nationoutside.org',
    description: 'An awesome group run entirely by returning citizens who went through jail or prison. They help you clear your criminal records (Expungement) for free.',
    helpfulTips: 'Great for finding friends who understand your past. They can help you register to vote! Yes, in Michigan, you CAN vote once you are back home.'
  },
  {
    id: 'l3',
    name: 'Michigan Department of Health & Human Services (MDHHS)',
    category: 'legal',
    county: 'All SE Michigan',
    address: '3040 West Grand Boulevard, Detroit, MI 48202',
    phone: '(855) 275-6424',
    website: 'https://newmibridges.michigan.gov',
    description: 'The main state office where you apply for support. Here, you get your "Bridge Card" (money for groceries each month) and Medicaid (free doctor card).',
    helpfulTips: 'This is called "MiBridges". Create a login on their website immediately using a smartphone. It takes about 20 minutes to apply.'
  }
];

export const roadmapStages: RoadmapStage[] = [
  {
    id: 'r1',
    title: 'Stage 1: Day 1 - Stay Safe & Warm',
    timeframe: 'Your First 24 Hours',
    statusIcon: 'Home',
    shortGoal: 'Your main goal is getting a safe bed, a hot meal, and a working phone.',
    items: [
      {
        id: 'r1-1',
        task: 'Find a safe place to sleep',
        easyExplanation: 'If you have no family home, view our "Housing" list or call Detroit Wayne Integrated Health at (313) 993-6703 to find a temporary warm bed.',
        category: 'housing'
      },
      {
        id: 'r1-2',
        task: 'Get a hot, free meal',
        easyExplanation: 'Head to the Capuchin Soup Kitchen at 1820 Mt. Elliott St. to eat a hot meal for free. No cards or papers are needed to eat food.',
        category: 'food'
      },
      {
        id: 'r1-3',
        task: 'Check in with your Parole / Probation Officer',
        easyExplanation: 'If the judge ordered it, call or go to your state parole officer immediately. Do not skip this! It keeps you free and safe.',
        category: 'general'
      },
      {
        id: 'r1-4',
        task: 'Get a cheap or free smartphone',
        easyExplanation: 'Ask local soup kitchens about "Lifeline Phones". They are free government smartphones with minutes so bosses and parole officers can call you.',
        category: 'general'
      }
    ]
  },
  {
    id: 'r2',
    title: 'Stage 2: Week 1 - Get Your Papers & Food Cards',
    timeframe: 'Your First 7 Days',
    statusIcon: 'FileText',
    shortGoal: 'Your main goal is applying for money for groceries, free healthcare, and an official state ID card.',
    items: [
      {
        id: 'r2-1',
        task: 'Apply for the Bridge Card (SNAP food money)',
        easyExplanation: 'Go online to the "MiBridges" website or visit the MDHHS building on Grand Blvd. You will receive money on a debit card each month to buy food at groceries.',
        category: 'food'
      },
      {
        id: 'r2-2',
        task: 'Apply for Medicaid (Free Health Card)',
        easyExplanation: 'Ask MDHHS for Medicaid at the same time you apply for food stamps. This pays for your physical checkups, primary teeth cleanings, and eye lenses.',
        category: 'health'
      },
      {
        id: 'r2-3',
        task: 'Get a Birth Certificate and Social Security Card',
        easyExplanation: 'You need these two paper sheets before you can get a final Michigan State ID or a job. Legal Aid can help you get these papers for free.',
        category: 'legal'
      },
      {
        id: 'r2-4',
        task: 'Get your Michigan State ID Card',
        easyExplanation: 'Take your paper sheets to the Secretary of State (SOS) office. A State ID is a small plastic card that shows who you are so you can rent apartments or open banks.',
        category: 'legal'
      }
    ]
  },
  {
    id: 'r3',
    title: 'Stage 3: Week 4 - Find Work & Clear Old Records',
    timeframe: 'Your First Month',
    statusIcon: 'Briefcase',
    shortGoal: 'Your main goal is organizing job tools, finding a friendly boss, and joining a support group.',
    items: [
      {
        id: 'r3-1',
        task: 'Visit a Michigan Works! Office',
        easyExplanation: 'Go to Detroit Employment Solutions or Pontiac Michigan Works. Ask for a free coach. They have direct lists of employers who hire returning citizens.',
        category: 'jobs'
      },
      {
        id: 'r3-2',
        task: 'Make a simple skill-focused resume',
        easyExplanation: 'Use our super tool on this website to write a clean resume! Write down any skills you learned inside (like painting, welding, or kitchens).',
        category: 'jobs'
      },
      {
        id: 'r3-3',
        task: 'Speak to Lakeshore Legal Aid about "Expungement"',
        easyExplanation: 'In Michigan, "Clean Slate" laws can automatically erase or hide old charges. Call (888) 783-8190 to ask a lawyer to help hide old charges for free.',
        category: 'legal'
      },
      {
        id: 'r3-4',
        task: 'Register to vote!',
        easyExplanation: 'Yes! In Michigan, your right to vote is restored the minute you walk out of prison or jail. Reach out to Nation Outside to register for local elections.',
        category: 'general'
      }
    ]
  }
];

export const glossaryTerms: GlossaryTerm[] = [
  {
    word: 'Returning Citizen',
    easyMeaning: 'The polite, correct name for someone who is coming back home to their city after spending time in a jail or prison.',
    sentenceExample: 'Detroit has many groups run by returning citizens helper friends who came home.'
  },
  {
    word: 'Bridge Card / SNAP',
    easyMeaning: 'A plastic state debit card that receives monthly cash to buy grocery food for free. SNAP stands for food stamps.',
    sentenceExample: 'I used my state Bridge Card to buy fresh milk, eggs, and bread at Meijer.'
  },
  {
    word: 'Medicaid',
    easyMeaning: 'Free health insurance from the government. It pays for your doctors, hospitals, teeth cleanings, and simple physical medicines.',
    sentenceExample: 'When I got sick, my Medicaid card paid for my entire checkup at the neighborhood clinic.'
  },
  {
    word: 'MiBridges',
    easyMeaning: 'The official Michigan state website where you sign up for monthly food stamps, Medicaid, and emergency rent cash help.',
    sentenceExample: 'I created a MiBridges online account on my smartphone to apply for help.'
  },
  {
    word: 'Expungement / Clean Slate',
    easyMeaning: 'Hiding or erasing old charges from your record. It makes it look like you were never arrested so it is easy to find normal jobs.',
    sentenceExample: 'Under Michigan Clean Slate laws, my old charge was expunged, allowing me to rent a private apartment.'
  },
  {
    word: 'Secretary of State (SOS)',
    easyMeaning: 'The state office where you apply for small plastic IDs or car driving licenses.',
    sentenceExample: 'I went to the Secretary of State block down Woodward Avenue to pick up my shiny new State ID.'
  },
  {
    word: 'Birth Certificate',
    easyMeaning: 'An official paper from your birth hospital. All bosses and state programs need to see this paper to buy you a final State ID.',
    sentenceExample: 'I ordered my certified Birth Certificate so I could update my Michigan driver license.'
  },
  {
    word: 'Sliding Scale Fees',
    easyMeaning: 'A system where clinics charge you based on how much cash you make. If you do not have a paid job, they charge you $0.',
    sentenceExample: 'CHASS clinic has sliding scale fees, which meant my dental checkup was completely free.'
  }
];
