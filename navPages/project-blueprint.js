/**
 * Project Blueprint — interactive reasoning layer for portfolio projects
 */
(function () {
    const PROJECTS = {
        amazon: {
            org: 'Amazon',
            title: 'Self Help Hub',
            subtitle: 'Improving internal transfers',
            type: 'Mobile Design',
            caseStudyUrl: '../subjects/uxdesignProjects/amazon.html',
            map: [
                { label: 'RESEARCH', children: ['Users', 'Audit', 'Data'] },
                { label: 'STRATEGY', children: ['IA', 'Flows'] },
                { label: 'DESIGN', children: ['Hub', 'Help', 'System'] },
                { label: 'VALIDATE' },
                { label: 'IMPACT' }
            ],
            overview: {
                problem:
                    'Employees needed better access to help during internal transfers — support was disconnected from the moments when they actually needed it.',
                role: 'UX Design Intern',
                impact: [
                    '38% ↑ task efficiency',
                    '25% ↓ support tickets',
                    '63 → 70% CSAT'
                ],
                recruiter: [
                    { label: 'Problem', text: 'Employees struggled to find relevant self-service assistance during transfers.' },
                    { label: 'Research', text: 'Identified high-friction moments in the transfer workflow.' },
                    { label: 'Strategy', text: 'Move assistance closer to the employee\'s existing workflow.' },
                    { label: 'Design', text: 'Search-first discovery plus contextual help entry points.' },
                    { label: 'Validation', text: 'Usability tests, critique, and iteration with stakeholders.' },
                    { label: 'Impact', text: '38% efficiency gain · 25% fewer tickets · CSAT 63 → 70%' }
                ]
            },
            process: [
                {
                    num: '01',
                    title: 'UNDERSTAND',
                    nodes: [
                        {
                            id: 'am-stakeholder',
                            label: 'Stakeholder Interviews',
                            you: true,
                            detail: {
                                title: 'Stakeholder Interviews',
                                body: 'Aligned with HR and internal mobility teams on where transfer workflows broke down and what “self help” meant in practice.',
                                decision: 'Focus on moments of need inside the transfer flow, not a standalone help center.'
                            }
                        },
                        {
                            id: 'am-audit',
                            label: 'Existing Experience Audit',
                            you: true,
                            detail: {
                                title: 'Experience Audit',
                                body: 'Mapped the current help hub against real transfer tasks. Help content existed but was rarely discovered at the right time.',
                                decision: 'Treat discovery as a product problem, not a content problem.'
                            }
                        },
                        {
                            id: 'am-user-research',
                            label: 'User Research',
                            you: true,
                            detail: {
                                title: 'User Research',
                                question: 'Where do employees struggle when navigating an internal transfer?',
                                method: 'Stakeholder interviews + user research',
                                body: 'Employees often didn\'t know where to find relevant help during critical moments in the transfer process.',
                                decision: 'Move help closer to the transfer workflow.'
                            }
                        }
                    ]
                },
                {
                    num: '02',
                    title: 'FRAME',
                    nodes: [
                        {
                            id: 'am-pain',
                            label: 'Pain Points',
                            you: true,
                            detail: {
                                title: 'Pain Points',
                                body: 'Fragmented help paths, unclear ownership of tasks, and anxiety during waiting periods between transfer steps.'
                            }
                        },
                        {
                            id: 'am-scenarios',
                            label: 'Scenarios',
                            you: true,
                            detail: {
                                title: 'Scenarios',
                                body: 'Storyboarded “day of transfer decision,” “first week in new role,” and “escalation when blocked” to anchor design reviews.'
                            }
                        },
                        {
                            id: 'am-opportunity',
                            label: 'Opportunity Areas',
                            you: true,
                            detail: {
                                title: 'Opportunity Areas',
                                body: 'Contextual assistance, searchable knowledge, and progressive disclosure for complex policy content.'
                            }
                        }
                    ]
                },
                {
                    num: '03',
                    title: 'EXPLORE',
                    nodes: [
                        {
                            id: 'am-brainstorm',
                            label: 'Brainstorming',
                            you: true,
                            detail: {
                                title: 'Brainstorming',
                                body: 'Explored hub-first vs. workflow-embedded patterns with the team before committing to mobile IA.'
                            }
                        },
                        {
                            id: 'am-ia',
                            label: 'Information Architecture',
                            you: true,
                            detail: {
                                title: 'Information Architecture',
                                body: 'Structured content around transfer stages rather than departmental ownership.'
                            }
                        },
                        {
                            id: 'am-concepts',
                            label: 'Concept Exploration',
                            you: true,
                            detail: {
                                title: 'Concept Exploration',
                                body: 'Low-fidelity flows comparing browse-heavy vs. search-first discovery models.'
                            }
                        }
                    ]
                },
                {
                    num: '04',
                    title: 'DESIGN',
                    nodes: [
                        {
                            id: 'am-flows',
                            label: 'User Flows',
                            you: true,
                            detail: {
                                title: 'User Flows',
                                body: 'End-to-end flows linking transfer status, recommended articles, and escalation paths.'
                            }
                        },
                        {
                            id: 'am-mobile',
                            label: 'Mobile UI',
                            you: true,
                            detail: {
                                title: 'Mobile UI',
                                body: 'Mobile-first patterns for employees checking transfer status on the go.'
                            }
                        },
                        {
                            id: 'am-system',
                            label: 'Design System',
                            you: false,
                            detail: {
                                title: 'Design System',
                                body: 'Extended internal Amazon mobile components for help modules and search surfaces.',
                                decision: 'Reuse established patterns to speed engineering review.'
                            }
                        }
                    ]
                },
                {
                    num: '05',
                    title: 'VALIDATE',
                    nodes: [
                        {
                            id: 'am-critique',
                            label: 'Critique',
                            you: true,
                            detail: {
                                title: 'Design Critique',
                                body: 'Cross-functional critique with design and PM partners on clarity of contextual help.'
                            }
                        },
                        {
                            id: 'am-usability',
                            label: 'Usability Testing',
                            you: true,
                            detail: {
                                title: 'Usability Testing',
                                body: 'Tested whether employees could resolve transfer questions without leaving the workflow.',
                                decision: 'Prioritize search + contextual “Need more help?” entry points.'
                            }
                        },
                        {
                            id: 'am-iteration',
                            label: 'Iteration',
                            you: true,
                            detail: {
                                title: 'Iteration',
                                body: 'Refined copy, chip labels, and empty states based on task success metrics.'
                            }
                        }
                    ]
                },
                {
                    num: '06',
                    title: 'DELIVER',
                    nodes: [
                        {
                            id: 'am-final',
                            label: 'Final Design',
                            you: true,
                            detail: {
                                title: 'Final Design',
                                body: 'High-fidelity mobile designs for self-help hub integrated into transfer experiences.'
                            }
                        },
                        {
                            id: 'am-leadership',
                            label: 'Leadership Presentation',
                            you: true,
                            detail: {
                                title: 'Leadership Presentation',
                                body: 'Presented reasoning chain from research findings to design decisions for leadership sign-off.'
                            }
                        },
                        {
                            id: 'am-impl',
                            label: 'Implementation',
                            you: false,
                            detail: {
                                title: 'Implementation',
                                body: 'Partnered with engineering on handoff specs and accessibility requirements.'
                            }
                        }
                    ]
                }
            ],
            decisions: [
                {
                    id: 'am-d1',
                    question: 'How should employees find help?',
                    options: [
                        { label: 'Browse FAQs', selected: false },
                        { label: 'Search First', selected: true },
                        { label: 'Contextual Help', selected: true }
                    ],
                    selectedSummary: 'Search First + Contextual Help',
                    why: 'Research indicated employees needed answers at the moment of need — not a separate browsing session.',
                    evidenceId: 'am-user-research',
                    traceId: 'am-trace-search'
                },
                {
                    id: 'am-d2',
                    question: 'Where should help live?',
                    options: [
                        { label: 'Standalone Hub', selected: false },
                        { label: 'Inside Workflow', selected: true },
                        { label: 'Email Digests', selected: false }
                    ],
                    selectedSummary: 'Inside Workflow',
                    why: 'Audit showed hub traffic spiked only after employees were already stuck — embedding help reduced that lag.',
                    evidenceId: 'am-audit',
                    traceId: 'am-trace-contextual'
                }
            ],
            traces: [
                {
                    id: 'am-trace-search',
                    label: 'Search Component',
                    chain: [
                        { label: 'USER EVIDENCE', text: 'Employees struggle to locate relevant help during transfers.' },
                        { label: 'INSIGHT', text: 'Help is separated from the moment of need.' },
                        { label: 'PRODUCT PRINCIPLE', text: 'Bring assistance into the employee\'s existing workflow.' },
                        { label: 'DESIGN DECISION', text: 'Search-first discovery with prominent query entry.' },
                        { label: 'IMPLEMENTATION', text: 'Persistent search module on transfer screens.' },
                        { label: 'OUTCOME', text: 'Faster access to relevant self-service information.' }
                    ]
                },
                {
                    id: 'am-trace-contextual',
                    label: 'Contextual Help Module',
                    chain: [
                        { label: 'USER EVIDENCE', text: 'Employees abandoned tasks when help required leaving the flow.' },
                        { label: 'INSIGHT', text: 'Context loss drives support tickets.' },
                        { label: 'PRODUCT PRINCIPLE', text: 'Assistance should match the current transfer step.' },
                        { label: 'DESIGN DECISION', text: 'Contextual “Need more help?” entry points.' },
                        { label: 'IMPLEMENTATION', text: 'Context-aware help module tied to workflow state.' },
                        { label: 'OUTCOME', text: 'Reduced friction and improved discovery at critical moments.' }
                    ]
                }
            ]
        },
        stpaul: {
            org: 'City of Saint Paul',
            title: 'HR Portal Redesign',
            subtitle: 'Navigation & information architecture',
            type: 'Product Design',
            caseStudyUrl: '../subjects/uxdesignProjects/saintpaul.html',
            map: [
                { label: 'RESEARCH', children: ['15 Participants'] },
                { label: 'CARD SORTING' },
                { label: 'FINDINGS', children: ['Patterns'] },
                { label: 'INFORMATION ARCHITECTURE' },
                { label: 'REDESIGN' },
                { label: 'RESULT' }
            ],
            overview: {
                problem:
                    'The HR section had too many subpages with no coherent navigation — employees and residents couldn\'t find resources efficiently.',
                role: 'UX Designer & Researcher',
                impact: [
                    'Open card sort with 15 participants',
                    'New IA & site map delivered',
                    'Live on stpaul.gov HR portal'
                ],
                recruiter: [
                    { label: 'Problem', text: 'HR content was scattered across dozens of subpages with confusing navigation.' },
                    { label: 'Research', text: 'Open card sorting with 15 Saint Paul residents to map mental models.' },
                    { label: 'Strategy', text: 'Organize content around how users group HR topics, not org charts.' },
                    { label: 'Design', text: 'Information architecture and site map → prototype walkthrough.' },
                    { label: 'Validation', text: 'Built on prior usability tests; affinity diagramming validated groupings.' },
                    { label: 'Impact', text: 'Implemented navigation on Talent & Equity Resources portal.' }
                ]
            },
            process: [
                {
                    num: '01',
                    title: 'UNDERSTAND',
                    nodes: [
                        {
                            id: 'sp-landscape',
                            label: 'Research Landscape Review',
                            you: true,
                            detail: {
                                title: 'Analyzing the Landscape',
                                body: 'Reviewed prior usability tests and user reviews of existing HR pages before designing new research.'
                            }
                        },
                        {
                            id: 'sp-stakeholder',
                            label: 'Team Alignment',
                            you: true,
                            detail: {
                                title: 'Team Discussions',
                                body: 'Aligned with HR team on navigation as the core problem — not visual polish alone.'
                            }
                        }
                    ]
                },
                {
                    num: '02',
                    title: 'RESEARCH',
                    nodes: [
                        {
                            id: 'sp-method',
                            label: 'Open vs Closed Card Sort',
                            you: true,
                            detail: {
                                title: 'Method Decision',
                                body: 'Chose open card sorting to observe how participants naturally grouped HR topics and named categories.',
                                decision: 'Open card sort to capture cognitive models, not validate a preset structure.'
                            }
                        },
                        {
                            id: 'sp-cardsort',
                            label: 'Card Sorting (15 participants)',
                            you: true,
                            detail: {
                                title: 'Open Card Sorting',
                                body: '15 participants, majority living in Saint Paul. Observed grouping behavior and category labels for targeted audience insight.',
                                decision: 'Patterns informed primary navigation groupings.'
                            }
                        }
                    ]
                },
                {
                    num: '03',
                    title: 'SYNTHESIZE',
                    nodes: [
                        {
                            id: 'sp-affinity',
                            label: 'Affinity Diagramming',
                            you: true,
                            detail: {
                                title: 'Affinity Diagramming',
                                body: 'Clustered card sort results in FigJam to surface recurring themes across participant groups.'
                            }
                        },
                        {
                            id: 'sp-patterns',
                            label: 'Pattern Identification',
                            you: true,
                            detail: {
                                title: 'Patterns',
                                body: 'Identified stable clusters around benefits, careers, policies, and employee resources.'
                            }
                        }
                    ]
                },
                {
                    num: '04',
                    title: 'STRUCTURE',
                    nodes: [
                        {
                            id: 'sp-ia',
                            label: 'Information Architecture',
                            you: true,
                            detail: {
                                title: 'Information Architecture',
                                body: 'Translated affinity clusters into a hierarchical IA reflecting user mental models.'
                            }
                        },
                        {
                            id: 'sp-sitemap',
                            label: 'Site Map',
                            you: true,
                            detail: {
                                title: 'Site Map',
                                body: 'Mapped subpages into compact navigation paths for internal and external users.'
                            }
                        }
                    ]
                },
                {
                    num: '05',
                    title: 'DESIGN',
                    nodes: [
                        {
                            id: 'sp-prototype',
                            label: 'Interactive Prototype',
                            you: true,
                            detail: {
                                title: 'Prototype Walkthrough',
                                body: 'Interactive prototype demonstrating new navigation flows for stakeholder review.'
                            }
                        }
                    ]
                },
                {
                    num: '06',
                    title: 'DELIVER',
                    nodes: [
                        {
                            id: 'sp-live',
                            label: 'Live Implementation',
                            you: false,
                            detail: {
                                title: 'Talent & Equity Resources',
                                body: 'Navigation structure implemented on the City of Saint Paul HR portal.'
                            }
                        }
                    ]
                }
            ],
            decisions: [
                {
                    id: 'sp-d1',
                    question: 'Open or closed card sort?',
                    options: [
                        { label: 'Open Card Sort', selected: true },
                        { label: 'Closed Card Sort', selected: false }
                    ],
                    selectedSummary: 'Open Card Sort',
                    why: 'Team needed to discover how users mentally organize HR content — not validate existing categories.',
                    evidenceId: 'sp-landscape',
                    traceId: 'sp-trace-open'
                },
                {
                    id: 'sp-d2',
                    question: 'How to structure navigation?',
                    options: [
                        { label: 'Department-based', selected: false },
                        { label: 'User mental model', selected: true },
                        { label: 'Flat list', selected: false }
                    ],
                    selectedSummary: 'User mental model',
                    why: 'Card sort clusters consistently reflected task-based groupings, not org structure.',
                    evidenceId: 'sp-cardsort',
                    traceId: 'sp-trace-ia'
                }
            ],
            traces: [
                {
                    id: 'sp-trace-open',
                    label: 'Open Card Sort Method',
                    chain: [
                        { label: 'PROBLEM', text: 'Dozens of HR subpages with no intuitive navigation.' },
                        { label: 'CONSTRAINT', text: 'Prior tests showed confusion but not a clear grouping strategy.' },
                        { label: 'DECISION', text: 'Run open card sorting to observe natural categories.' },
                        { label: 'METHOD', text: '15 participants labeling and grouping HR topics.' },
                        { label: 'OUTCOME', text: 'Raw mental model data for IA design.' }
                    ]
                },
                {
                    id: 'sp-trace-ia',
                    label: 'HR Navigation Structure',
                    chain: [
                        { label: 'USER EVIDENCE', text: 'Participants grouped benefits, careers, and policies consistently.' },
                        { label: 'INSIGHT', text: 'Users think in tasks, not departmental ownership.' },
                        { label: 'DECISION', text: 'Task-based top-level navigation.' },
                        { label: 'IMPLEMENTATION', text: 'IA + site map restructuring subpages.' },
                        { label: 'OUTCOME', text: 'Clearer paths on live HR portal.' }
                    ]
                }
            ]
        },
        tutord: {
            org: 'TutorD',
            title: 'TutorD Platform',
            subtitle: 'Admin tooling for K-12 STEM tutoring',
            type: 'Product Design',
            caseStudyUrl: '../subjects/uxdesignProjects/tutord.html',
            map: [
                { label: 'STAKEHOLDER INTERVIEWS' },
                { label: 'ROSTERING', children: ['Orgs', 'Users'] },
                { label: 'REPORTING', children: ['Billing', 'Engagement'] },
                { label: 'SCHEDULING' },
                { label: 'PROTOTYPE' }
            ],
            overview: {
                problem:
                    'TutorD\'s admin experience needed to support rostering, reporting, and scheduling for diverse K-12 organizations — built on limited existing tooling.',
                role: 'UX/UI Designer & Researcher',
                impact: [
                    'Admin dashboard & onboarding flows',
                    'Reporting & rostering focus areas',
                    'Remote usability testing'
                ],
                recruiter: [
                    { label: 'Problem', text: 'Admins needed to manage orgs, teachers, students, and reports in one cohesive tool.' },
                    { label: 'Research', text: 'Stakeholder interviews aligned team on rostering and reporting priorities.' },
                    { label: 'Strategy', text: 'Build on existing dashboard; prioritize admin workflows over student-facing features.' },
                    { label: 'Design', text: 'IA for rostering, reporting pages, and onboarding from user stories.' },
                    { label: 'Validation', text: 'Remote usability tests on key admin flows.' },
                    { label: 'Impact', text: 'Prototype suite for billing, engagement, and org management.' }
                ]
            },
            process: [
                {
                    num: '01',
                    title: 'ALIGN',
                    nodes: [
                        {
                            id: 'td-stakeholder',
                            label: 'Stakeholder Interviews',
                            you: true,
                            detail: {
                                title: 'Stakeholder / Client Interview',
                                body: 'Discussed TutorD\'s vision, micro-learning model, and admin pain points with the founding team.',
                                decision: 'Focus on rostering, reporting, and org management as key deliverables.'
                            }
                        },
                        {
                            id: 'td-focus',
                            label: 'Key Focus Areas',
                            you: true,
                            detail: {
                                title: 'Focus Areas',
                                body: 'Rostering (admins, teachers, students, orgs), reporting (billing, engagement, grades), scholarship links.'
                            }
                        }
                    ]
                },
                {
                    num: '02',
                    title: 'UNDERSTAND',
                    nodes: [
                        {
                            id: 'td-resources',
                            label: 'Pre-Existing Resources',
                            you: true,
                            detail: {
                                title: 'Pre-Existing Resources',
                                body: 'Audited basic admin dashboard, user stories, and teacher onboarding from the client.'
                            }
                        },
                        {
                            id: 'td-storytelling',
                            label: 'Directed Storytelling',
                            you: true,
                            detail: {
                                title: 'Directed Storytelling',
                                body: 'Gathered narrative accounts of admin workflows to supplement stakeholder interviews.'
                            }
                        }
                    ]
                },
                {
                    num: '03',
                    title: 'STRUCTURE',
                    nodes: [
                        {
                            id: 'td-ia',
                            label: 'Information Architecture',
                            you: true,
                            detail: {
                                title: 'Information Architecture',
                                body: 'Mapped admin tasks across rostering, reporting, and settings hierarchies.'
                            }
                        },
                        {
                            id: 'td-dashboard',
                            label: 'Admin Dashboard',
                            you: true,
                            detail: {
                                title: 'Basic Dashboard',
                                body: 'Evolved client\'s starter dashboard into a hub for org-level actions.'
                            }
                        }
                    ]
                },
                {
                    num: '04',
                    title: 'DESIGN',
                    nodes: [
                        {
                            id: 'td-onboarding',
                            label: 'Onboarding Flows',
                            you: true,
                            detail: {
                                title: 'Onboarding',
                                body: 'Teacher onboarding flows built from client user stories and team wireframes.'
                            }
                        },
                        {
                            id: 'td-rostering',
                            label: 'Rostering UI',
                            you: true,
                            detail: {
                                title: 'Rostering',
                                body: 'Add/remove admins, teachers, students, and organizations with clear permission states.'
                            }
                        },
                        {
                            id: 'td-reporting',
                            label: 'Reporting Pages',
                            you: true,
                            detail: {
                                title: 'Reporting',
                                body: 'Billing reports, engagement levels, grades/scores — designed for admin presentation needs.'
                            }
                        },
                        {
                            id: 'td-wireframes',
                            label: 'Low/Mid Wireframes',
                            you: true,
                            detail: {
                                title: 'Wireframes',
                                body: 'Iterative wireframes for each key focus area before high-fidelity work.'
                            }
                        }
                    ]
                },
                {
                    num: '05',
                    title: 'VALIDATE',
                    nodes: [
                        {
                            id: 'td-usability',
                            label: 'Remote Usability Testing',
                            you: true,
                            detail: {
                                title: 'Remote Usability Testing',
                                body: 'Tested admin flows remotely with scripts targeting rostering and reporting tasks.'
                            }
                        },
                        {
                            id: 'td-iteration',
                            label: 'Iteration',
                            you: true,
                            detail: {
                                title: 'Iteration',
                                body: 'Refined flows based on task completion and clarity of reporting exports.'
                            }
                        }
                    ]
                },
                {
                    num: '06',
                    title: 'DELIVER',
                    nodes: [
                        {
                            id: 'td-prototype',
                            label: 'Interactive Prototype',
                            you: true,
                            detail: {
                                title: 'Interactive Prototype',
                                body: 'High-fidelity Figma prototype covering admin onboarding, rostering, and reporting.'
                            }
                        },
                        {
                            id: 'td-handoff',
                            label: 'Client Handoff',
                            you: false,
                            detail: {
                                title: 'Handoff',
                                body: 'Team handoff package for TutorD engineering and product roadmap.'
                            }
                        }
                    ]
                }
            ],
            decisions: [
                {
                    id: 'td-d1',
                    question: 'What should admins see first?',
                    options: [
                        { label: 'Student Feed', selected: false },
                        { label: 'Org Dashboard', selected: true },
                        { label: 'Settings', selected: false }
                    ],
                    selectedSummary: 'Org Dashboard',
                    why: 'Stakeholders emphasized org-level rostering and reporting as daily admin tasks.',
                    evidenceId: 'td-stakeholder',
                    traceId: 'td-trace-dashboard'
                },
                {
                    id: 'td-d2',
                    question: 'How to prioritize reporting?',
                    options: [
                        { label: 'Billing only', selected: false },
                        { label: 'Engagement + Billing', selected: true },
                        { label: 'Export-only', selected: false }
                    ],
                    selectedSummary: 'Engagement + Billing',
                    why: 'Client needed to show scholarship providers both usage and financial data.',
                    evidenceId: 'td-focus',
                    traceId: 'td-trace-reporting'
                }
            ],
            traces: [
                {
                    id: 'td-trace-dashboard',
                    label: 'Admin Dashboard Hub',
                    chain: [
                        { label: 'STAKEHOLDER INPUT', text: 'Admins manage multiple orgs, teachers, and students daily.' },
                        { label: 'INSIGHT', text: 'Dashboard must surface org context before deep tasks.' },
                        { label: 'DECISION', text: 'Org-first dashboard with quick actions.' },
                        { label: 'IMPLEMENTATION', text: 'Evolved client starter dashboard into admin hub.' },
                        { label: 'OUTCOME', text: 'Clear entry point for rostering and reporting flows.' }
                    ]
                },
                {
                    id: 'td-trace-reporting',
                    label: 'Reporting Module',
                    chain: [
                        { label: 'CLIENT NEED', text: 'Share engagement and billing data with scholarship providers.' },
                        { label: 'INSIGHT', text: 'Reports serve both internal review and external sharing.' },
                        { label: 'DECISION', text: 'Combined engagement + billing in one reporting area.' },
                        { label: 'IMPLEMENTATION', text: 'Reporting pages with export and presentation views.' },
                        { label: 'OUTCOME', text: 'Admins can generate shareable evidence of program impact.' }
                    ]
                }
            ]
        },
        doge: {
            org: '3DogE',
            title: '3DogE App',
            subtitle: 'Holistic pet wellness (Eat · Exercise · Environment)',
            type: 'Mobile Design',
            caseStudyUrl: '../subjects/uxdesignProjects/3doge.html',
            map: [
                { label: 'DOMAIN RESEARCH' },
                { label: 'COMPETITIVE AUDIT' },
                { label: 'STAKEHOLDER INTERVIEWS' },
                { label: 'SYNTHESIS', children: ['Affinity', 'Bullseye'] },
                { label: 'IA & WIREFRAMES' },
                { label: 'AI WELLNESS' }
            ],
            overview: {
                problem:
                    'Dog owners lack a single tool to monitor holistic wellness — especially early health signals owners often miss.',
                role: 'UX Designer & Researcher',
                impact: [
                    'End-to-end research → prototype',
                    '3 E\'s framework in product IA',
                    'AI wellness feature exploration'
                ],
                recruiter: [
                    { label: 'Problem', text: 'Pet parents struggle to track holistic wellness across eat, exercise, and environment.' },
                    { label: 'Research', text: 'Domain research, competitive audit, and stakeholder interviews.' },
                    { label: 'Strategy', text: 'Structure product around 3DogE\'s Eat · Exercise · Environment framework.' },
                    { label: 'Design', text: 'IA, wireframes, and AI-assisted wellness features.' },
                    { label: 'Validation', text: 'Remote usability testing on core flows.' },
                    { label: 'Impact', text: 'Cohesive mobile prototype for holistic dog wellness.' }
                ]
            },
            process: [
                {
                    num: '01',
                    title: 'LEARN',
                    nodes: [
                        {
                            id: 'dg-domain',
                            label: 'Domain Research',
                            you: true,
                            detail: {
                                title: 'Domain Research',
                                body: 'Built foundational dog-care knowledge through YouTube, articles, and day-in-the-life content before primary research.'
                            }
                        },
                        {
                            id: 'dg-competitive',
                            label: 'Competitive Audit',
                            you: true,
                            detail: {
                                title: 'Competitive Audit',
                                body: 'Analyzed pet apps on functionality overlap. Few direct AI poop-detection competitors — studied adjacent wellness apps.',
                                decision: 'Borrow proven patterns; avoid feature bloat from weak competitors.'
                            }
                        }
                    ]
                },
                {
                    num: '02',
                    title: 'RESEARCH',
                    nodes: [
                        {
                            id: 'dg-interviews',
                            label: 'Stakeholder Interviews',
                            you: true,
                            detail: {
                                title: 'Stakeholder / Client Interviews',
                                body: 'Scripted interviews on health confusion moments, technology use, and desired app features with experienced dog owners.',
                                decision: 'Prioritize proactive health monitoring over passive logging.'
                            }
                        }
                    ]
                },
                {
                    num: '03',
                    title: 'SYNTHESIZE',
                    nodes: [
                        {
                            id: 'dg-affinity',
                            label: 'Affinity Diagramming',
                            you: true,
                            detail: {
                                title: 'Affinity Diagramming',
                                body: 'Clustered interview and storytelling data into themes across wellness dimensions.'
                            }
                        },
                        {
                            id: 'dg-bullseye',
                            label: 'Bullseye Diagramming',
                            you: true,
                            detail: {
                                title: 'Bullseye Diagramming',
                                body: 'Prioritized features by impact vs. effort within Eat, Exercise, Environment pillars.'
                            }
                        }
                    ]
                },
                {
                    num: '04',
                    title: 'STRUCTURE',
                    nodes: [
                        {
                            id: 'dg-ia',
                            label: 'Information Architecture',
                            you: true,
                            detail: {
                                title: 'Information Architecture',
                                body: 'Organized app around 3 E\'s with clear paths for logging, insights, and AI-assisted checks.'
                            }
                        },
                        {
                            id: 'dg-system',
                            label: 'Design System',
                            you: true,
                            detail: {
                                title: 'Design System',
                                body: 'Component library for wellness cards, trackers, and onboarding.'
                            }
                        }
                    ]
                },
                {
                    num: '05',
                    title: 'DESIGN',
                    nodes: [
                        {
                            id: 'dg-wireframes',
                            label: 'Wireframes',
                            you: true,
                            detail: {
                                title: 'Low/Mid Wireframes',
                                body: 'Iterative wireframes balancing data input burden with actionable insights.'
                            }
                        },
                        {
                            id: 'dg-ai',
                            label: 'AI Wellness Features',
                            you: true,
                            detail: {
                                title: 'AI Features',
                                body: 'Explored AI-assisted health signals (e.g. waste analysis) as differentiator within Environment pillar.'
                            }
                        },
                        {
                            id: 'dg-prototype',
                            label: 'Interactive Prototype',
                            you: true,
                            detail: {
                                title: 'Interactive Prototype',
                                body: 'Clickable prototype for core wellness logging and insight flows.'
                            }
                        }
                    ]
                },
                {
                    num: '06',
                    title: 'VALIDATE',
                    nodes: [
                        {
                            id: 'dg-usability',
                            label: 'Remote Usability Testing',
                            you: true,
                            detail: {
                                title: 'Remote Usability Testing',
                                body: 'Tested whether owners could complete wellness tasks and understand AI-generated insights.'
                            }
                        }
                    ]
                }
            ],
            decisions: [
                {
                    id: 'dg-d1',
                    question: 'How to organize the product?',
                    options: [
                        { label: 'Feature list', selected: false },
                        { label: '3 E\'s Framework', selected: true },
                        { label: 'Chronological log', selected: false }
                    ],
                    selectedSummary: '3 E\'s Framework',
                    why: 'Client mission and interview themes aligned around Eat, Exercise, Environment — not arbitrary feature buckets.',
                    evidenceId: 'dg-interviews',
                    traceId: 'dg-trace-3e'
                },
                {
                    id: 'dg-d2',
                    question: 'What makes 3DogE different?',
                    options: [
                        { label: 'Social network', selected: false },
                        { label: 'AI health signals', selected: true },
                        { label: 'Vet marketplace', selected: false }
                    ],
                    selectedSummary: 'AI health signals',
                    why: 'Competitive audit showed few apps combining holistic tracking with proactive AI-assisted monitoring.',
                    evidenceId: 'dg-competitive',
                    traceId: 'dg-trace-ai'
                }
            ],
            traces: [
                {
                    id: 'dg-trace-3e',
                    label: '3 E\'s Navigation',
                    chain: [
                        { label: 'CLIENT VISION', text: 'Holistic wellness across Eat, Exercise, Environment.' },
                        { label: 'USER EVIDENCE', text: 'Owners think in daily routines, not medical categories.' },
                        { label: 'DECISION', text: 'Top-level IA mirrors 3 E\'s pillars.' },
                        { label: 'IMPLEMENTATION', text: 'Section-based navigation and wellness cards.' },
                        { label: 'OUTCOME', text: 'Coherent mental model for pet parents.' }
                    ]
                },
                {
                    id: 'dg-trace-ai',
                    label: 'AI Wellness Module',
                    chain: [
                        { label: 'MARKET GAP', text: 'Few apps offer AI-assisted health signal detection.' },
                        { label: 'USER EVIDENCE', text: 'Owners unsure when something is “wrong enough” to act.' },
                        { label: 'DECISION', text: 'AI features as early warning within Environment pillar.' },
                        { label: 'IMPLEMENTATION', text: 'AI wellness exploration in prototype.' },
                        { label: 'OUTCOME', text: 'Differentiated value beyond generic pet trackers.' }
                    ]
                }
            ]
        }
    };

    const panel = document.getElementById('blueprintPanel');
    if (!panel) return;

    const emptyEl = document.getElementById('blueprintEmpty');
    const activeEl = document.getElementById('blueprintActive');
    const contentEl = document.getElementById('blueprintContent');
    const detailEl = document.getElementById('blueprintDetail');
    const orgEl = document.getElementById('blueprintOrg');
    const titleEl = document.getElementById('blueprintTitle');
    const subtitleEl = document.getElementById('blueprintSubtitle');
    const typeEl = document.getElementById('blueprintType');
    const recruiterToggle = document.getElementById('recruiterMode');
    const contributionToggle = document.getElementById('contributionMode');
    const traceBtn = document.getElementById('traceModeBtn');
    const tabButtons = panel.querySelectorAll('.blueprint-tab');
    const cards = document.querySelectorAll('.portfolio-card[data-project]');

    let currentProjectId = null;
    let currentTab = 'overview';
    let traceMode = false;
    let hoverPreviewId = null;
    let hoverTimeout = null;

    function escapeHtml(str) {
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    }

    function renderMapTree(project, spread) {
        const map = project.map || [];
        if (!map.length) return '';

        const rows = map.map((node, i) => {
            const children =
                node.children && node.children.length
                    ? `<div class="blueprint-map-children">${node.children
                          .map((c) => `<span class="blueprint-map-leaf">${escapeHtml(c)}</span>`)
                          .join('')}</div>`
                    : '';
            const connector = i < map.length - 1 ? '<div class="blueprint-map-line" aria-hidden="true"></div>' : '';
            return `
                <div class="blueprint-map-node">
                    <span class="blueprint-map-dot" aria-hidden="true"></span>
                    <span class="blueprint-map-label">${escapeHtml(node.label)}</span>
                    ${children}
                </div>
                ${connector}
            `;
        }).join('');

        const treeClass = spread ? 'blueprint-map-tree blueprint-map-tree--spread' : 'blueprint-map-tree';
        return `<div class="${treeClass}">${rows}</div>`;
    }

    function renderMap(project, options) {
        const opts = options || {};
        const spread = opts.spread || false;
        const showHeader = opts.showHeader !== false;
        const map = project.map || [];
        if (!map.length) return '';

        const header = showHeader
            ? `<p class="blueprint-map-title">${escapeHtml(project.org)}</p>
               <p class="blueprint-map-sub">${escapeHtml(project.title)}</p>`
            : '';

        const wideClass = spread ? ' blueprint-map--wide' : '';
        return `<div class="blueprint-map${wideClass}">${header}${renderMapTree(project, spread)}</div>`;
    }

    function showHoverPreview(projectId) {
        if (currentProjectId) return;
        const project = PROJECTS[projectId];
        if (!project || !emptyEl) return;

        hoverPreviewId = projectId;
        setPreviewingCard(projectId);

        emptyEl.classList.add('has-preview');

        const typeTag = project.type
            ? `<span class="blueprint-preview-type">${escapeHtml(project.type)}</span>`
            : '';

        emptyEl.innerHTML = `
            <div class="blueprint-hover-preview">
                <header class="blueprint-preview-header">
                    <p class="blueprint-preview-org">${escapeHtml(project.org)}</p>
                    <p class="blueprint-preview-name">${escapeHtml(project.title)}</p>
                    ${typeTag}
                </header>
                <div class="blueprint-preview-body">
                    ${renderMapTree(project, true)}
                </div>
                <footer class="blueprint-preview-footer">
                    <p class="blueprint-hover-hint">Click or drag this card to explore <strong>Overview · Process · Decisions</strong></p>
                </footer>
            </div>
        `;
    }

    function setPreviewingCard(projectId) {
        cards.forEach((card) => {
            card.classList.toggle('is-previewing', !currentProjectId && card.dataset.project === projectId);
        });
    }

    function clearPreviewingCard() {
        cards.forEach((card) => card.classList.remove('is-previewing'));
    }

    function resetEmptyState() {
        if (currentProjectId) return;
        hoverPreviewId = null;
        clearPreviewingCard();
        if (!emptyEl) return;
        emptyEl.classList.remove('has-preview');
        emptyEl.innerHTML = `
            <p><strong>Project Blueprint</strong></p>
            <p>Drag a project card here — or hover to preview its architecture.<br>Explore how each product moved from ambiguity → evidence → outcome.</p>
        `;
    }

    function setSelectedCard(projectId) {
        cards.forEach((card) => {
            card.classList.toggle('is-selected', card.dataset.project === projectId);
        });
    }

    function showDetail(node) {
        if (!detailEl || !node) return;
        detailEl.hidden = false;

        let html = `<h4>${escapeHtml(node.detail.title || node.label)}</h4>`;
        if (node.detail.question) {
            html += `<p><strong>Question:</strong> ${escapeHtml(node.detail.question)}</p>`;
        }
        if (node.detail.method) {
            html += `<p><strong>Method:</strong> ${escapeHtml(node.detail.method)}</p>`;
        }
        if (node.detail.body) {
            html += `<p>${escapeHtml(node.detail.body)}</p>`;
        }
        if (node.detail.decision) {
            html += `<p class="blueprint-detail-decision">Decision → ${escapeHtml(node.detail.decision)}</p>`;
        }
        detailEl.innerHTML = html;
    }

    function hideDetail() {
        if (detailEl) {
            detailEl.hidden = true;
            detailEl.innerHTML = '';
        }
    }

    function renderChain(chain, litAll) {
        return chain
            .map((step, i) => {
                const lit = litAll ? ' is-lit' : '';
                const delay = litAll ? ` style="animation-delay:${i * 0.08}s"` : '';
                return `
                    <div class="blueprint-chain-step${lit}"${delay}>
                        <p class="blueprint-chain-label">${escapeHtml(step.label)}</p>
                        <p class="blueprint-chain-text">${escapeHtml(step.text)}</p>
                    </div>
                `;
            })
            .join('');
    }

    function findNode(project, nodeId) {
        for (const step of project.process) {
            for (const node of step.nodes) {
                if (node.id === nodeId) return node;
            }
        }
        return null;
    }

    function renderOverview(project) {
        const o = project.overview;
        const isRecruiter = recruiterToggle && recruiterToggle.checked;

        if (isRecruiter) {
            const steps = o.recruiter
                .map(
                    (s) => `
                <div class="blueprint-recruiter-step">
                    <h4>${escapeHtml(s.label)}</h4>
                    <p>${escapeHtml(s.text)}</p>
                </div>
            `
                )
                .join('');

            return `
                <div class="blueprint-overview-recruiter">
                    <p class="blueprint-recruiter-meta">~ 45 sec read</p>
                    ${steps}
                    <a href="${escapeHtml(project.caseStudyUrl)}" class="blueprint-case-study-link">View Full Case Study →</a>
                </div>
            `;
        }

        const impact = o.impact.map((m) => `<li>${escapeHtml(m)}</li>`).join('');

        return `
            <div class="blueprint-overview-grid">
                <div class="blueprint-overview-block">
                    <h4>The Problem</h4>
                    <p>${escapeHtml(o.problem)}</p>
                </div>
                <div class="blueprint-overview-block">
                    <h4>My Role</h4>
                    <p>${escapeHtml(o.role)}</p>
                </div>
                <div class="blueprint-overview-block">
                    <h4>Impact</h4>
                    <ul class="blueprint-impact-list">${impact}</ul>
                </div>
                <button type="button" class="blueprint-explore-link" data-switch-tab="process">Explore how I got there →</button>
            </div>
        `;
    }

    function renderProcess(project) {
        const showYou = contributionToggle && contributionToggle.checked;
        const isRecruiter = recruiterToggle && recruiterToggle.checked;

        const steps = project.process
            .map((step) => {
                const nodes = step.nodes
                    .map((node) => {
                        const teamOnly = !node.you;
                        const classes = [
                            'blueprint-node',
                            showYou && node.you ? 'is-you' : '',
                            isRecruiter && teamOnly ? 'is-team-only' : ''
                        ]
                            .filter(Boolean)
                            .join(' ');

                        return `<button type="button" class="${classes}" data-node-id="${escapeHtml(node.id)}">${escapeHtml(node.label)}</button>`;
                    })
                    .join('');

                return `
                    <div class="blueprint-step">
                        <span class="blueprint-step-num">${escapeHtml(step.num)}</span>
                        <div class="blueprint-step-body">
                            <h3 class="blueprint-step-title">${escapeHtml(step.title)}</h3>
                            <div class="blueprint-nodes">${nodes}</div>
                        </div>
                    </div>
                `;
            })
            .join('');

        return `<div class="blueprint-process${isRecruiter ? ' blueprint-recruiter' : ''}">${steps}</div>`;
    }

    function renderDecisions(project) {
        const cards = project.decisions
            .map((d, i) => {
                const options = d.options
                    .map((opt) => {
                        const sel = opt.selected ? ' is-selected' : '';
                        return `<span class="blueprint-option${sel}">${escapeHtml(opt.label)}</span>`;
                    })
                    .join('');

                const traceLink = d.traceId
                    ? `<button type="button" class="blueprint-trace-target" data-trace-id="${escapeHtml(d.traceId)}">Trace: ${escapeHtml(
                          project.traces.find((t) => t.id === d.traceId)?.label || 'this decision'
                      )}</button>`
                    : '';

                return `
                    <article class="blueprint-decision-card">
                        <p class="blueprint-decision-label">DECISION ${String(i + 1).padStart(2, '0')}</p>
                        <h3 class="blueprint-decision-question">${escapeHtml(d.question)}</h3>
                        <div class="blueprint-options">${options}</div>
                        <p class="blueprint-decision-selected"><strong>Selected:</strong> ${escapeHtml(d.selectedSummary)}</p>
                        <p class="blueprint-decision-why"><strong>Why?</strong> ${escapeHtml(d.why)}</p>
                        <button type="button" class="blueprint-evidence-btn" data-evidence-id="${escapeHtml(d.evidenceId)}">View Evidence →</button>
                        ${traceLink}
                    </article>
                `;
            })
            .join('');

        let tracePanel = '';
        if (traceMode) {
            const traceList = project.traces
                .map(
                    (t) =>
                        `<button type="button" class="blueprint-node" data-trace-id="${escapeHtml(t.id)}">${escapeHtml(t.label)}</button>`
                )
                .join('');
            tracePanel = `
                <div class="blueprint-trace-panel">
                    <p class="blueprint-trace-prompt">Select a final design element to trace its reasoning:</p>
                    <div class="blueprint-nodes">${traceList}</div>
                </div>
            `;
        }

        return `<div class="blueprint-decisions">${tracePanel}${cards}</div>`;
    }

    function renderContent() {
        const project = PROJECTS[currentProjectId];
        if (!project || !contentEl) return;

        hideDetail();

        if (currentTab === 'overview') {
            contentEl.innerHTML = renderOverview(project);
        } else if (currentTab === 'process') {
            contentEl.innerHTML = renderMap(project, { spread: true, showHeader: false });
            contentEl.innerHTML += renderProcess(project);
        } else {
            contentEl.innerHTML = renderDecisions(project);
        }

        bindContentEvents(project);
    }

    function showTrace(project, traceId) {
        const trace = project.traces.find((t) => t.id === traceId);
        if (!trace || !detailEl) return;

        currentTab = 'decisions';
        tabButtons.forEach((btn) => btn.classList.toggle('is-active', btn.dataset.tab === 'decisions'));
        renderContent();

        detailEl.hidden = false;
        detailEl.innerHTML = `
            <h4>Trace: ${escapeHtml(trace.label)}</h4>
            <div class="blueprint-chain">${renderChain(trace.chain, true)}</div>
        `;
    }

    function bindContentEvents(project) {
        contentEl.querySelectorAll('[data-switch-tab]').forEach((btn) => {
            btn.addEventListener('click', () => {
                switchTab(btn.dataset.switchTab);
            });
        });

        contentEl.querySelectorAll('[data-node-id]').forEach((btn) => {
            btn.addEventListener('click', () => {
                const node = findNode(project, btn.dataset.nodeId);
                contentEl.querySelectorAll('[data-node-id]').forEach((b) => b.classList.remove('is-active'));
                btn.classList.add('is-active');
                showDetail(node);
            });
        });

        contentEl.querySelectorAll('[data-evidence-id]').forEach((btn) => {
            btn.addEventListener('click', () => {
                const node = findNode(project, btn.dataset.evidenceId);
                switchTab('process');
                if (node) {
                    setTimeout(() => {
                        const nodeBtn = contentEl.querySelector(`[data-node-id="${node.id}"]`);
                        if (nodeBtn) {
                            nodeBtn.classList.add('is-active');
                            showDetail(node);
                            nodeBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }
                    }, 50);
                }
            });
        });

        contentEl.querySelectorAll('[data-trace-id]').forEach((btn) => {
            btn.addEventListener('click', () => {
                showTrace(project, btn.dataset.traceId);
            });
        });
    }

    function switchTab(tab) {
        currentTab = tab;
        tabButtons.forEach((btn) => btn.classList.toggle('is-active', btn.dataset.tab === tab));
        renderContent();
    }

    function selectProject(projectId) {
        const project = PROJECTS[projectId];
        if (!project) return;

        currentProjectId = projectId;
        currentTab = 'overview';
        traceMode = false;
        if (traceBtn) traceBtn.classList.remove('is-active');

        setSelectedCard(projectId);
        clearPreviewingCard();

        if (orgEl) orgEl.textContent = project.org;
        if (titleEl) titleEl.textContent = project.title;
        if (subtitleEl) subtitleEl.textContent = project.subtitle;
        if (typeEl) {
            if (project.type) {
                typeEl.textContent = project.type;
                typeEl.hidden = false;
            } else {
                typeEl.textContent = '';
                typeEl.hidden = true;
            }
        }

        emptyEl.hidden = true;
        activeEl.hidden = false;

        tabButtons.forEach((btn) => btn.classList.toggle('is-active', btn.dataset.tab === 'overview'));

        panel.classList.add('has-project');
        renderContent();
    }

    tabButtons.forEach((btn) => {
        btn.addEventListener('click', () => switchTab(btn.dataset.tab));
    });

    if (recruiterToggle) {
        recruiterToggle.addEventListener('change', () => {
            if (currentProjectId) renderContent();
        });
    }

    if (contributionToggle) {
        contributionToggle.addEventListener('change', () => {
            if (currentProjectId && currentTab === 'process') renderContent();
        });
    }

    if (traceBtn) {
        traceBtn.addEventListener('click', () => {
            traceMode = !traceMode;
            traceBtn.classList.toggle('is-active', traceMode);
            if (currentProjectId) {
                switchTab('decisions');
            }
        });
    }

    cards.forEach((card) => {
        const projectId = card.dataset.project;

        card.addEventListener('dragstart', (e) => {
            card.classList.add('is-dragging');
            e.dataTransfer.setData('text/project-id', projectId);
            e.dataTransfer.effectAllowed = 'move';
        });

        card.addEventListener('dragend', () => {
            card.classList.remove('is-dragging');
            panel.classList.remove('is-drag-over');
        });

        card.addEventListener('mouseenter', () => {
            clearTimeout(hoverTimeout);
            hoverTimeout = setTimeout(() => showHoverPreview(projectId), 120);
        });

        card.addEventListener('mouseleave', () => {
            clearTimeout(hoverTimeout);
            hoverTimeout = setTimeout(resetEmptyState, 180);
        });

        card.addEventListener('click', (e) => {
            if (e.target.closest('a')) return;
            e.preventDefault();
            selectProject(projectId);
        });
    });

    panel.addEventListener('dragover', (e) => {
        e.preventDefault();
        panel.classList.add('is-drag-over');
        e.dataTransfer.dropEffect = 'move';
    });

    panel.addEventListener('dragleave', (e) => {
        if (!panel.contains(e.relatedTarget)) {
            panel.classList.remove('is-drag-over');
        }
    });

    panel.addEventListener('drop', (e) => {
        e.preventDefault();
        panel.classList.remove('is-drag-over');
        const projectId = e.dataTransfer.getData('text/project-id');
        if (projectId && PROJECTS[projectId]) {
            selectProject(projectId);
        }
    });

    resetEmptyState();
})();
