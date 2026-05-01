export const dimensions = [
  {
    id: 1,
    slug: 'codes-of-conduct',
    name: 'Codes of conduct in practice',
    context:
      'The standard requires providers to adopt or develop a code of conduct and ensure it is embedded across the organisation. "Embedded" is doing significant work - a code that exists as a document signed at induction does not meet this requirement.',
    statements: [
      {
        id: '1a',
        label: 'Statement 1a',
        text: 'Resident-facing staff can describe expected behaviours in their own words, without referring to a document',
      },
      {
        id: '1b',
        label: 'Statement 1b',
        text: 'The behaviours in your code would be recognisable to someone observing how your teams work day to day',
      },
      {
        id: '1c',
        label: 'Statement 1c',
        text: 'Managers feel confident using the code when addressing conduct concerns, not just performance ones',
      },
    ],
    exploreLink: {
      text: 'Explore: Defining professional behaviours',
      href: '/challenges#challenge-2',
    },
  },
  {
    id: 2,
    slug: 'embedded-behaviours',
    name: 'Embedded behaviours',
    context:
      "The standard asks providers to ensure behaviours are embedded, not just stated. There's a difference between having values on the wall and having systems that actively reinforce, recognise, and hold people to those values in practice.",
    statements: [
      {
        id: '2a',
        label: 'Statement 2a',
        text: 'Good conduct is recognised and celebrated as visibly as good operational performance',
      },
      {
        id: '2b',
        label: 'Statement 2b',
        text: 'The culture a colleague experiences is consistent regardless of which team, location, or manager they work under',
      },
      {
        id: '2c',
        label: 'Statement 2c',
        text: 'The gap between stated values and day-to-day behaviour is something leadership actively monitors, not assumes',
      },
    ],
    exploreLink: {
      text: 'Explore: Evidencing culture change',
      href: '/challenges#challenge-1',
    },
  },
  {
    id: 3,
    slug: 'resident-voice',
    name: 'Resident voice',
    context:
      'The standard requires that residents have "meaningful opportunities to influence and scrutinise" your competence policy and code of conduct. Influence is a higher bar than consultation - it means shaping what gets built, not responding to something already designed.',
    statements: [
      {
        id: '3a',
        label: 'Statement 3a',
        text: 'Residents have shaped your code of conduct and competence expectations, not been consulted after the fact',
      },
      {
        id: '3b',
        label: 'Statement 3b',
        text: 'Resident input into conduct and service standards is ongoing, not a one-off engagement exercise',
      },
      {
        id: '3c',
        label: 'Statement 3c',
        text: 'Residents could describe how their input has changed something specific about how services are delivered',
      },
    ],
    exploreLink: {
      text: 'Explore: Giving residents genuine influence',
      href: '/challenges#challenge-3',
    },
  },
  {
    id: 4,
    slug: 'leadership-signal',
    name: 'Leadership signal',
    context:
      'What leadership pays attention to, spends time on, and talks about communicates what matters more than any policy statement. The standard expects culture and conduct to be visibly led - not delegated to HR or treated as a compliance exercise.',
    statements: [
      {
        id: '4a',
        label: 'Statement 4a',
        text: 'Senior leaders visibly prioritise culture and behaviour - in their time, attention, and language',
      },
      {
        id: '4b',
        label: 'Statement 4b',
        text: 'When trade-offs arise between operational targets and conduct standards, the response is consistent',
      },
      {
        id: '4c',
        label: 'Statement 4c',
        text: 'Staff at all levels could describe what leadership expects of them behaviourally, not just operationally',
      },
    ],
    exploreLink: {
      text: 'Explore: Five culture questions for leadership teams',
      href: '/questions',
    },
  },
  {
    id: 5,
    slug: 'learning-and-development',
    name: 'Learning and development',
    context:
      'The standard requires a written workforce development policy that connects learning to outcomes - not just skills acquisition. The gap between "we delivered the training" and "here\'s what changed because of it" is where most providers will need to do new thinking.',
    statements: [
      {
        id: '5a',
        label: 'Statement 5a',
        text: 'Development programmes evidence behaviour change and culture outcomes, not just attendance and completion',
      },
      {
        id: '5b',
        label: 'Statement 5b',
        text: 'Managers receive specific support for culture leadership, not just operational management skills',
      },
      {
        id: '5c',
        label: 'Statement 5c',
        text: 'You could show evidence that a specific development programme changed how people behave, not just what they know',
      },
    ],
    exploreLink: {
      text: 'Explore: Connecting L&D to culture outcomes',
      href: '/challenges#challenge-1',
    },
  },
  {
    id: 6,
    slug: 'evidence-and-accountability',
    name: 'Evidence and accountability',
    context:
      'The Regulator will take an outcomes-focused, assurance-led approach. That means the evidence trail matters - not as a compliance exercise, but as the way you demonstrate that culture work is genuine, embedded, and making a difference to residents.',
    statements: [
      {
        id: '6a',
        label: 'Statement 6a',
        text: 'You could walk a regulator through a clear evidence trail showing how culture expectations are embedded and monitored',
      },
      {
        id: '6b',
        label: 'Statement 6b',
        text: 'Behavioural underperformance is addressed with the same urgency as operational underperformance',
      },
      {
        id: '6c',
        label: 'Statement 6c',
        text: 'Resident satisfaction and complaint data are used as evidence of whether your culture work is making a difference',
      },
    ],
    exploreLink: {
      text: 'Explore: What the Regulator will look for',
      href: '/standard#regulated',
    },
  },
]

export const trafficLightOptions = [
  {
    value: 'embedded',
    label: 'This is embedded',
    description: 'We could evidence this to the Regulator today',
    colour: '#4CAF50',
  },
  {
    value: 'working',
    label: "We're working on this",
    description:
      "There's activity but it's not yet consistent or evidenced",
    colour: '#FF9800',
  },
  {
    value: 'attention',
    label: 'This needs attention',
    description:
      "We haven't started meaningfully, or there's a significant gap",
    colour: '#EF5350',
  },
]
