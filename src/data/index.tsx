type navlinks = {
    name: string,
    url: string
}

export const navbarLinks: navlinks[] = [
    {
        name: 'Overview',
        url: '#hero'
    },
    {
        name: 'features',
        url: '#features'
    },
    {
        name: 'Roadmap',
        url: '#roadmap'
    },
    {
        name: 'FAQ',
        url: '#faq'
    },
]

type milestone = {
    title: string;
    description: string;
    date: `Q${number} ${number}`;
    state: "done" | "pending"
}
export const roadmapMilestones: milestone[] = [
    {
        title: "Concept Development",
        description: "Initial design and concept creation.",
        date: "Q1 2024",
        state: "done"
    },
    {
        title: "Prototype Completion",
        description: "Built and tested the first prototype.",
        date: "Q2 2024",
        state: "done"
    },
    {
        title: "Public Unveiling",
        description: "Official reveal at major expos.",
        date: "Q3 2024",
        state: "pending"
    },
    {
        title: "First Deliveries",
        description: "Initial customer deliveries.",
        date: "Q1 2025",
        state: "pending"
    }
]

type faqType = {
    question: string;
    answer: string;
}
export const faq: faqType[] = [
    {
        question: "What is Photon Rider?",
        answer: "Photon Rider is a revolutionary electric vehicle designed to combine advanced technology, sustainability, and high performance.",
    },
    {
        question: "When will Photon Rider be available?",
        answer: "Photon Rider will begin customer deliveries in Q3 2025. Pre-orders are open now",
    },
    {
        question: "How can I pre-order a Photon Rider?",
        answer: "You can pre-order your Photon Rider through our website by clicking on the 'Buy Now' button and following the instructions.",
    },
    {
        question: "Is Photon Rider safe?",
        answer: "Yes, Photon Rider is equipped with state-of-the-art safety features, including advanced driver assistance systems and robust structural design.",
    },
    {
        question: "Who do I contact for support?",
        answer: "For support, you can contact our customer service team via email at support@photonrider.com or call us at +212 (06) 123-4567.",
    }
]

type footerLink = {
    name: string;
    url: string;
}
export const productLinks: footerLink[] = [
    {
        name: 'Features',
        url: '#'
    },
    {
        name: 'News',
        url: '#'
    },
    {
        name: 'FAQ',
        url: '#'
    },
]

export const companyLinks: footerLink[] = [
    {
        name: 'Locations',
        url :'#'
    },
    {
        name: 'Privacy',
        url :'#'
    },
    {
        name: 'Terms of Service',
        url :'#'
    }
]

export const otherLinks: footerLink[] = [
    {
        name: 'Support',
        url: '#'
    },
    {
        name: 'Guides',
        url: '#'
    },
    {
        name: 'Contact',
        url: '#'
    },
]