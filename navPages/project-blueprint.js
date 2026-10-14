/**
 * Project Blueprint — User Experience Assembly diagrams
 * Interactive Tools — commented out from projects.html
 */
(function () {
    var PHASES = [
        { id: 'research', label: 'Research' },
        { id: 'synthesis', label: 'Synthesis' },
        { id: 'design', label: 'Design' },
        { id: 'rationale', label: 'Design Rationale' },
        { id: 'product', label: 'Final Product' },
        { id: 'learning', label: 'Learning & Experiences' }
    ];

    var KIND_LABEL = {
        method: 'Method',
        principle: 'Principle',
        outcome: 'Outcome',
        learning: 'Learning'
    };

    var PROJECTS = {
        amazon: {
            org: 'Amazon',
            title: 'Enterprise Help Experience',
            subtitle: 'User Experience Assembly — Transfer Self Help',
            type: 'Mobile Design',
            caseStudyUrl: '../subjects/uxdesignProjects/amazon.html',
            start: {
                id: 'am-start',
                label: 'Help destination for a successful transfer',
                why: 'The assignment was to create a new help destination so associates could find answers and complete a transfer — not to decorate a standalone FAQ.',
                feeds: [{ to: 'am-journey', via: 'opens' }]
            },
                    nodes: [
                        {
                    id: 'am-journey',
                    phase: 'research',
                    kind: 'method',
                    label: 'Journey Map Analysis',
                    why: 'Walking Pre-Application, Application, and Post-Application against actions, content, tools, pain points, and questions located where uncertainty actually appeared in the transfer.',
                    feeds: [{ to: 'am-survey', via: 'surfaces' }, { to: 'am-criticality', via: 'locates' }]
                },
                {
                    id: 'am-survey',
                    phase: 'research',
                    kind: 'method',
                    label: 'Inquiry & Survey Data',
                    why: 'Existing employee inquiry data showed what associates were already reporting — especially unanswered questions at offer, training, and pay.',
                    feeds: [{ to: 'am-criticality', via: 'weights' }]
                },
                {
                    id: 'am-criticality',
                    phase: 'research',
                    kind: 'method',
                    label: 'Criticality Ranking',
                    why: 'With a senior researcher and designer, questions were ranked by friction severity and survey patterns so help would not treat every topic as equal.',
                    feeds: [{ to: 'am-cluster', via: 'feeds' }]
                },
                {
                    id: 'am-cluster',
                    phase: 'synthesis',
                    kind: 'principle',
                    label: 'Help is missing at the moment of decision',
                    why: 'Associates needed answers while transferring, not in a separate browsing session. Uncertainty clustered around accepting an offer, repeating training, and pay change.',
                    feeds: [{ to: 'am-hmw', via: 'frames' }]
                },
                {
                    id: 'am-hmw',
                    phase: 'synthesis',
                    kind: 'principle',
                    label: 'How might we keep associates informed through the application?',
                    why: 'The synthesis question turned ranked friction into a design brief: resolve unanswered questions without pulling people out of the transfer.',
                    feeds: [{ to: 'am-walk', via: 'directs' }]
                },
                {
                    id: 'am-walk',
                    phase: 'design',
                    kind: 'method',
                    label: 'Walk the existing transfer flow',
                    why: 'Support had to live where associates already were. Mapping the current flow showed insertion points instead of inventing a new destination first.',
                    feeds: [{ to: 'am-ia', via: 'structures' }]
                        },
                        {
                            id: 'am-ia',
                    phase: 'design',
                    kind: 'method',
                    label: 'Need-based information architecture',
                    why: 'The Apply surface used a process heading, relevance tags, and Q&A ordered by associate need so people could tell if content applied before opening it.',
                    feeds: [{ to: 'am-disclosure', via: 'implements' }]
                },
                {
                    id: 'am-disclosure',
                    phase: 'design',
                    kind: 'principle',
                    label: 'Progressive disclosure',
                    why: 'Simple answers first; wiki pages for questions that needed more depth. Deeper content is linked only from relevant pages so associates meet it when they need context.',
                    feeds: [{ to: 'am-in-flow', via: 'justifies' }]
                },
                {
                    id: 'am-in-flow',
                    phase: 'rationale',
                    kind: 'principle',
                    label: 'Help lives inside the transfer workflow',
                    why: 'A standalone hub would repeat the original problem: help separated from the moment of need. Embedding Self Help on Apply keeps assistance in the job.',
                    feeds: [{ to: 'am-product', via: 'becomes' }]
                },
                {
                    id: 'am-crit-place',
                    phase: 'rationale',
                    kind: 'principle',
                    label: 'Criticality decides placement',
                    why: 'High-severity topics (offer, training, compensation) get first placement. Low-criticality topics stay reachable without crowding the Apply surface.',
                    feeds: [{ to: 'am-product', via: 'orders' }]
                },
                {
                    id: 'am-product',
                    phase: 'product',
                    kind: 'outcome',
                    label: 'Transfer Self Help on Apply',
                    why: 'The final assembly is a help destination inside the application: tagged topics, progressive answers, and wiki pages for complex questions.',
                    feeds: [
                        { to: 'am-learn-pm', via: 'taught' },
                        { to: 'am-learn-systems', via: 'taught' },
                        { to: 'am-learn-ds', via: 'taught' }
                    ]
                },
                {
                    id: 'am-learn-pm',
                    phase: 'learning',
                    kind: 'learning',
                    label: 'Advocate with research, align with PMs',
                    why: 'Prioritizing research-driven findings only worked when those findings were translated into why the design helped associates and the business.',
                    feeds: []
                },
                {
                    id: 'am-learn-systems',
                    phase: 'learning',
                    kind: 'learning',
                    label: 'Design across evolving, linked experiences',
                    why: 'Help Center and Transfer were moving at the same time. Consistency had to hold while each surface still served a distinct job.',
                    feeds: []
                },
                {
                    id: 'am-learn-ds',
                    phase: 'learning',
                    kind: 'learning',
                    label: 'Extend an established design system',
                    why: 'Working inside Amazon’s system meant making intentional additions that stayed familiar, consistent, and scalable — not inventing a parallel language.',
                    feeds: []
                }
            ]
        },
        stpaul: {
            org: 'City of Saint Paul',
            title: 'Talent & Equity Resources Navigation',
            subtitle: 'User Experience Assembly — Information Architecture',
            type: 'UX Research',
            caseStudyUrl: '../subjects/uxdesignProjects/saintpaul.html',
            start: {
                id: 'sp-start',
                label: 'Restructure a large set of HR resources',
                why: 'The brief was to rebuild the information architecture of Talent & Equity Resources so residents and employees could find city services without hunting a maze of subpages.',
                feeds: [{ to: 'sp-voc', via: 'opens' }]
            },
                    nodes: [
                        {
                    id: 'sp-voc',
                    phase: 'research',
                    kind: 'method',
                    label: 'Voice of Customer & usability review',
                    why: 'Existing help requests and usability tests showed confusion, but they were discovery data — they did not reveal how people mentally grouped HR content.',
                    feeds: [{ to: 'sp-criteria', via: 'limits' }]
                },
                {
                    id: 'sp-criteria',
                    phase: 'research',
                    kind: 'principle',
                    label: 'Users-in-the-loop, labels, hierarchy',
                    why: 'Any structuring method had to stay grounded in how people expect to navigate, which resources belong together, and how those patterns become categories.',
                    feeds: [{ to: 'sp-reject', via: 'tests' }]
                },
                {
                    id: 'sp-reject',
                    phase: 'research',
                    kind: 'method',
                    label: 'Reject taxonomy & sitemap-first',
                    why: 'Taxonomy development and sitemap creation relied on the same discovery data and would encode the org’s structure, not the user’s mental model.',
                    feeds: [{ to: 'sp-sort', via: 'selects' }]
                },
                {
                    id: 'sp-sort',
                    phase: 'research',
                    kind: 'method',
                    label: 'Open Card Sorting',
                    why: 'Participants grouped real subpage titles into categories they named themselves. That made users the backbone of labels and hierarchy instead of validating a preset tree.',
                    feeds: [{ to: 'sp-gap', via: 'feeds' }]
                },
                {
                    id: 'sp-gap',
                    phase: 'synthesis',
                    kind: 'principle',
                    label: 'Gap between what people say and what they do',
                    why: 'Strong associations between page titles created ambiguity about purpose. People clustered words that sounded alike even when the pages did different jobs.',
                    feeds: [{ to: 'sp-patterns', via: 'produces' }]
                        },
                        {
                            id: 'sp-patterns',
                    phase: 'synthesis',
                    kind: 'method',
                    label: 'Grouping patterns',
                    why: 'Reviews was the strongest universal grouping. Benefits held. Recruitment was only semi-reliable. Abandoned cards (Applicant Data Practices, insurance requirements) failed because titles were opaque.',
                    feeds: [{ to: 'sp-labels', via: 'exposes' }]
                },
                {
                    id: 'sp-labels',
                    phase: 'synthesis',
                    kind: 'principle',
                    label: 'Titles are not the same as contents',
                    why: '“Working in Saint Paul” was not “working in the City of Saint Paul.” Misaligned names caused people to skip or dump cards they could not place.',
                    feeds: [{ to: 'sp-bottomup', via: 'directs' }]
                },
                {
                    id: 'sp-bottomup',
                    phase: 'design',
                    kind: 'method',
                    label: 'Bottom-up information architecture',
                    why: 'Lower-level content was resolved first using participant patterns, then rolled up into major categories — so confusing leaves did not poison the trunk.',
                    feeds: [{ to: 'sp-rename', via: 'requires' }]
                },
                {
                    id: 'sp-rename',
                    phase: 'design',
                    kind: 'method',
                    label: 'Rename to match the job',
                    why: 'Pages were retitled to what they actually contained — e.g. “City of Saint Paul Insurance Requirements” to “Certificates of Insurance & Plan Description.”',
                    feeds: [{ to: 'sp-openwhy', via: 'justifies' }]
                },
                {
                    id: 'sp-openwhy',
                    phase: 'rationale',
                    kind: 'principle',
                    label: 'Open sort captures mental models',
                    why: 'A closed sort or org-chart taxonomy would have validated the current site. Open sorting was the method that could still surprise the structure.',
                    feeds: [{ to: 'sp-product', via: 'becomes' }]
                },
                {
                    id: 'sp-tasknav',
                    phase: 'rationale',
                    kind: 'principle',
                    label: 'Navigate by task, not department',
                    why: 'Stable clusters followed jobs (reviews, benefits, recruitment), not departmental ownership. Top-level navigation had to follow that.',
                    feeds: [{ to: 'sp-product', via: 'shapes' }]
                },
                {
                    id: 'sp-product',
                    phase: 'product',
                    kind: 'outcome',
                    label: 'Talent & Equity Resources IA',
                    why: 'The delivered architecture and site map reorganized HR subpages into a compact navigation used on the city’s Talent & Equity Resources portal.',
                    feeds: [
                        { to: 'sp-learn-model', via: 'taught' },
                        { to: 'sp-learn-titles', via: 'taught' },
                        { to: 'sp-learn-leaves', via: 'taught' }
                    ]
                },
                {
                    id: 'sp-learn-model',
                    phase: 'learning',
                    kind: 'learning',
                    label: 'Mental models beat org charts',
                    why: 'If the IA had followed city departments, the same confusion the VoC already showed would have been rebuilt in a cleaner skin.',
                    feeds: []
                },
                {
                    id: 'sp-learn-titles',
                    phase: 'learning',
                    kind: 'learning',
                    label: 'Opaque titles cause abandonment',
                    why: 'People did not struggle with grouping in the abstract. They abandoned cards whose names gave them no job to hang onto.',
                    feeds: []
                },
                {
                    id: 'sp-learn-leaves',
                    phase: 'learning',
                    kind: 'learning',
                    label: 'Fix the leaves before naming the trunk',
                    why: 'Bottom-up IA made lower-level confusion visible. Starting with top categories would have hidden the pages people actually could not place.',
                    feeds: []
                }
            ]
        },
        tutord: {
            org: 'TutorD',
            title: 'Tutor Scheduling Flow',
            subtitle: 'User Experience Assembly — Admin Experience',
            type: 'Web Design',
            caseStudyUrl: '../subjects/uxdesignProjects/tutord.html',
            start: {
                id: 'td-start',
                label: 'Admins roster, read classrooms, and act on reports in place',
                why: 'The job was an admin experience that could carry rostering, classroom reading, and reporting without sending someone hunting across pages.',
                feeds: [{ to: 'td-stake', via: 'opens' }]
            },
                    nodes: [
                        {
                    id: 'td-stake',
                    phase: 'research',
                    kind: 'method',
                    label: 'Stakeholder interview',
                    why: 'The interview aligned on what the admin already had versus where the experience still needed structure — not a feature wishlist.',
                    feeds: [{ to: 'td-artifact', via: 'frames' }]
                },
                {
                    id: 'td-artifact',
                    phase: 'research',
                    kind: 'method',
                    label: 'Inherited-dashboard audit',
                    why: 'The starter file could hold people. It could not tell an admin, at a glance, whether a classroom was moving.',
                    feeds: [{ to: 'td-comp', via: 'motivates' }]
                },
                {
                    id: 'td-comp',
                    phase: 'research',
                    kind: 'method',
                    label: 'Competitive audit (Schoology, Kahoot, Quizlet)',
                    why: 'Admin competitors were closed, so overlapping jobs were studied instead: sign into activity, make performance the point of reports, show progress as scan-then-open.',
                    feeds: [{ to: 'td-usability', via: 'informs' }]
                },
                {
                    id: 'td-usability',
                    phase: 'research',
                    kind: 'method',
                    label: 'Iterative usability (4 sessions)',
                    why: 'After each session the prototype changed and was tested again. A locked mid-fidelity would have left the same empty-row pain in place.',
                    feeds: [{ to: 'td-buckets', via: 'feeds' }]
                },
                {
                    id: 'td-buckets',
                    phase: 'synthesis',
                    kind: 'method',
                    label: 'Usability / functionality / changes',
                    why: 'Each session was sorted into three buckets, and action items were written from the third so “they didn’t like it” could not die as a note.',
                    feeds: [{ to: 'td-findings', via: 'produces' }]
                },
                {
                    id: 'td-findings',
                    phase: 'synthesis',
                    kind: 'principle',
                    label: 'Progress, comparison, and year in the classroom',
                    why: 'Participants wanted student progression in the classroom, quarter-to-year comparison, and the current school year without a separate hunt.',
                    feeds: [{ to: 'td-hmw', via: 'frames' }]
                },
                {
                    id: 'td-hmw',
                    phase: 'synthesis',
                    kind: 'principle',
                    label: 'How can admins see this without leaving the classroom view?',
                    why: 'The brief became density in place: progress, statistics, and year had to be readable from the classroom surface.',
                    feeds: [{ to: 'td-ia', via: 'directs' }]
                },
                {
                    id: 'td-ia',
                    phase: 'design',
                    kind: 'method',
                    label: 'IA rewritten from tests',
                    why: 'The first map was the team’s mental model of an admin product. Usability and the audit kept rewriting it so pages followed jobs, not drawings already made.',
                    feeds: [{ to: 'td-disclosure', via: 'implements' }]
                },
                {
                    id: 'td-disclosure',
                    phase: 'design',
                    kind: 'principle',
                    label: 'Progressive disclosure in the row',
                    why: 'Classroom progress in the row, percentile on hover, full year on entry. Whitespace stopped being something an admin had to click through.',
                    feeds: [{ to: 'td-classroom', via: 'justifies' }]
                },
                {
                    id: 'td-classroom',
                    phase: 'rationale',
                    kind: 'principle',
                    label: 'The classroom list is where work starts',
                    why: 'Schoology’s lesson: do not dump people on a blank hub. Kahoot’s: reports should answer performance. Quizlet’s: scan, then open.',
                    feeds: [{ to: 'td-product', via: 'becomes' }]
                },
                {
                    id: 'td-moving',
                    phase: 'rationale',
                    kind: 'principle',
                    label: 'A moving prototype is the method',
                    why: 'Waiting to “finish” mid-fidelity would have frozen an empty classroom row. Changing after each session is what put progress, hover, and year in one view.',
                    feeds: [{ to: 'td-product', via: 'enables' }]
                },
                {
                    id: 'td-product',
                    phase: 'product',
                    kind: 'outcome',
                    label: 'Admin classrooms you can read',
                    why: 'The delivered prototype carries rostering, a dense classroom list, and reporting without forcing a page hunt for the current year or a student’s progress.',
                    feeds: [
                        { to: 'td-learn-map', via: 'taught' },
                        { to: 'td-learn-nav', via: 'taught' },
                        { to: 'td-learn-test', via: 'taught' }
                    ]
                },
                {
                    id: 'td-learn-map',
                    phase: 'learning',
                    kind: 'learning',
                    label: 'A design system is also a map',
                    why: 'Aligning styles was how the team agreed where a page lived and how an admin got there, so new screens did not invent a second navigation.',
                    feeds: []
                },
                {
                    id: 'td-learn-nav',
                    phase: 'learning',
                    kind: 'learning',
                    label: 'Navigation has to be allowed to change',
                    why: 'Every new page rewrote the nav. Treating that as failure would have frozen a structure the product had already outgrown.',
                    feeds: []
                },
                {
                    id: 'td-learn-test',
                    phase: 'learning',
                    kind: 'learning',
                    label: 'Testing a moving prototype densified the row',
                    why: 'If the mid-fidelity had been locked, the classroom row would still have been empty. Iteration after each session is what filled it.',
                    feeds: []
                }
            ]
        },
        doge: {
            org: '3DogE',
            title: 'Pet Wellness Companion',
            subtitle: 'User Experience Assembly — Eat · Exercise · Environment',
            type: 'Mobile Design',
            caseStudyUrl: '../subjects/uxdesignProjects/3doge.html',
            start: {
                id: 'dg-start',
                label: 'Make the 3 E’s usable, not a slogan beside a scanner',
                why: 'The product had to help owners stay ahead of a dog’s health. Eat, Exercise, and Environment had to be jobs in the app — not labels next to an AI scan.',
                feeds: [{ to: 'dg-domain', via: 'opens' }]
            },
                    nodes: [
                        {
                            id: 'dg-domain',
                    phase: 'research',
                    kind: 'method',
                    label: 'Domain research first',
                    why: 'Without a lived model of pet parenting, interviews would have been guesswork. Days-in-the-life, forums, and basic care built a mental model before any screen was drawn.',
                    feeds: [{ to: 'dg-comp', via: 'grounds' }]
                },
                {
                    id: 'dg-comp',
                    phase: 'research',
                    kind: 'method',
                    label: 'Adjacent competitive audit',
                    why: 'Almost no apps combined an AI stool scanner with the 3 E’s. Adjacent wellness products showed what to borrow and what 3DogE should refuse to copy.',
                    feeds: [{ to: 'dg-interview', via: 'informs' }]
                },
                {
                    id: 'dg-interview',
                    phase: 'research',
                    kind: 'method',
                    label: 'Interviews & directed storytelling',
                    why: 'Scripts pulled first-week confusion, health scares, and how much logging owners would actually do — not how much data the app wished it had.',
                    feeds: [{ to: 'dg-affinity', via: 'feeds' }]
                },
                {
                    id: 'dg-usability',
                    phase: 'research',
                    kind: 'method',
                    label: 'Usability on scanner, log, home',
                    why: 'People did not ask for more information. They asked for visibility and a simpler home. Those notes ranked high and rebuilt the last mile.',
                    feeds: [{ to: 'dg-restraint', via: 'feeds' }]
                },
                        {
                            id: 'dg-affinity',
                    phase: 'synthesis',
                    kind: 'method',
                    label: 'Affinity & bullseye, held until the end',
                    why: 'Clustering waited until storytelling and client interviews could sit in one model. Each note was tested: Eat, Exercise, Environment — or noise.',
                    feeds: [{ to: 'dg-quote', via: 'produces' }]
                },
                {
                    id: 'dg-quote',
                    phase: 'synthesis',
                    kind: 'principle',
                    label: 'A scanner that only confirms is a checklist',
                    why: '“Is this just a checklist for what I see in the dog?” If the AI only verified what the owner already noticed, the product had no new information.',
                    feeds: [{ to: 'dg-hmw', via: 'frames' }]
                },
                {
                    id: 'dg-hmw',
                    phase: 'synthesis',
                    kind: 'principle',
                    label: 'Keep the 3 E’s visible without burying owners',
                    why: 'The synthesis brief was restraint: the three jobs had to stay on screen without turning every view into an encyclopedia.',
                    feeds: [{ to: 'dg-iakey', via: 'directs' }]
                },
                {
                    id: 'dg-iakey',
                    phase: 'design',
                    kind: 'method',
                    label: 'IA key before the map',
                    why: 'Page, fill-in, checklist, selection — every flow had a job. Paths that did not earn one of the 3 E’s were not kept.',
                    feeds: [{ to: 'dg-log', via: 'requires' }]
                },
                {
                    id: 'dg-log',
                    phase: 'design',
                    kind: 'method',
                    label: 'Daily log as the 3 E’s data',
                    why: 'The scanner is a snapshot. It cannot answer how much the dog ate, moved, or what the environment was like. The log is what made the 3 E’s usable data.',
                    feeds: [{ to: 'dg-scanner', via: 'justifies' }]
                },
                {
                    id: 'dg-restraint',
                    phase: 'design',
                    kind: 'principle',
                    label: 'Fewer words, more visibility',
                    why: 'Usability pushed the home toward simpler language and colors that held together — not additional explanation.',
                    feeds: [{ to: 'dg-scanner', via: 'finishes' }]
                },
                {
                    id: 'dg-scanner',
                    phase: 'rationale',
                    kind: 'principle',
                    label: 'The scanner is the hook, not the product',
                    why: 'AI health signal was the differentiator in the market gap. Without the log, it could not tell owners anything they did not already know.',
                    feeds: [{ to: 'dg-product', via: 'becomes' }]
                },
                {
                    id: 'dg-domain-as-design',
                    phase: 'rationale',
                    kind: 'principle',
                    label: 'Domain research is design, not a preface',
                    why: 'Skipping the learning period would have produced a guessed mockup. The mental model had to exist before screens.',
                    feeds: [{ to: 'dg-product', via: 'grounds' }]
                },
                {
                    id: 'dg-product',
                    phase: 'product',
                    kind: 'outcome',
                    label: 'Daily log + scanner on the 3 E’s',
                    why: 'The prototype walks login to log to scan with Eat, Exercise, and Environment as questions an owner will actually answer.',
                    feeds: [
                        { to: 'dg-learn-domain', via: 'taught' },
                        { to: 'dg-learn-scan', via: 'taught' },
                        { to: 'dg-learn-restraint', via: 'taught' }
                    ]
                },
                {
                    id: 'dg-learn-domain',
                    phase: 'learning',
                    kind: 'learning',
                    label: 'Learn the domain before drawing',
                    why: 'Without household experience of dogs, the work taught me to build a mental model first and treat that research as design.',
                    feeds: []
                },
                {
                    id: 'dg-learn-scan',
                    phase: 'learning',
                    kind: 'learning',
                    label: 'A scanner is not a wellness product',
                    why: 'The AI read was the hook. The daily log is what let Eat, Exercise, and Environment become something the app could use.',
                    feeds: []
                },
                {
                    id: 'dg-learn-restraint',
                    phase: 'learning',
                    kind: 'learning',
                    label: 'Usability asked for restraint, not more copy',
                    why: 'Participants wanted a simpler home and colors they could see. The last mile shifted from explaining everything to making the three jobs obvious.',
                    feeds: []
                }
            ]
        }
    };

    var panel = document.getElementById('blueprintPanel');
    if (!panel) return;

    var emptyEl = document.getElementById('blueprintEmpty');
    var activeEl = document.getElementById('blueprintActive');
    var contentEl = document.getElementById('blueprintContent');
    var detailEl = document.getElementById('blueprintDetail');
    var orgEl = document.getElementById('blueprintOrg');
    var titleEl = document.getElementById('blueprintTitle');
    var subtitleEl = document.getElementById('blueprintSubtitle');
    var typeEl = document.getElementById('blueprintType');
    var tabButtons = document.querySelectorAll('.blueprint-tab');
    var cards = document.querySelectorAll('.docs-toolbar .docs-chip[data-project], #menu-insert .docs-chip[data-project]');
    var zoomLabel = document.getElementById('zoomLabel');
    var zoomInBtn = document.getElementById('zoomInBtn');
    var zoomOutBtn = document.getElementById('zoomOutBtn');
    var ZOOM_STEPS = [0.5, 0.75, 1, 1.25, 1.5, 2];

    var currentProjectId = null;
    var currentPhase = 'research';
    var activeNodeId = null;
    var hoverTimeout = null;
    var zoom = 1;

    function escapeHtml(str) {
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    }

    function nodeById(project, id) {
        if (project.start && project.start.id === id) return project.start;
        for (var i = 0; i < project.nodes.length; i++) {
            if (project.nodes[i].id === id) return project.nodes[i];
        }
        return null;
    }

    function outgoing(node) {
        return node.feeds || [];
    }

    function incoming(project, id) {
        var links = [];
        var pool = [project.start].concat(project.nodes);
        for (var i = 0; i < pool.length; i++) {
            var feeds = outgoing(pool[i]);
            for (var j = 0; j < feeds.length; j++) {
                if (feeds[j].to === id) {
                    links.push({ from: pool[i], via: feeds[j].via });
                }
            }
        }
        return links;
    }

    function relatedIds(project, id) {
        var set = {};
        set[id] = true;
        outgoing(nodeById(project, id) || { feeds: [] }).forEach(function (link) {
            set[link.to] = true;
        });
        incoming(project, id).forEach(function (link) {
            set[link.from.id] = true;
        });
        return set;
    }

    function feedLine(project, node) {
        var feeds = outgoing(node);
        if (!feeds.length) return '<p class="ux-node__feeds">Leaf — end of this path</p>';
        var bits = feeds.map(function (link) {
            var target = nodeById(project, link.to);
            var name = target ? target.label : link.to;
            return '<span class="ux-node__feed"><em>' + escapeHtml(link.via) + '</em> → ' + escapeHtml(name) + '</span>';
        });
        return '<p class="ux-node__feeds">' + bits.join('') + '</p>';
    }

    function renderNode(project, node, isStart) {
        var kind = KIND_LABEL[node.kind] || (isStart ? 'Start' : 'Node');
        var classes = 'ux-node' + (isStart ? ' ux-node--start' : '') + (node.kind ? ' ux-node--' + node.kind : '');
        return (
            '<article class="' +
            classes +
            '" data-id="' +
            escapeHtml(node.id) +
            '"' +
            (node.phase ? ' data-phase="' + escapeHtml(node.phase) + '"' : '') +
            '>' +
            '<p class="ux-node__kind">' +
            escapeHtml(kind) +
            '</p>' +
            '<h4 class="ux-node__label">' +
            escapeHtml(node.label) +
            '</h4>' +
            '<p class="ux-node__why">' +
            escapeHtml(node.why) +
            '</p>' +
            feedLine(project, node) +
            '</article>'
        );
    }

    function phaseById(id) {
        for (var i = 0; i < PHASES.length; i++) {
            if (PHASES[i].id === id) return PHASES[i];
        }
        return PHASES[0];
    }

    function renderStep(project, phaseId) {
        var phase = phaseById(phaseId);
        var nodes = project.nodes.filter(function (node) {
            return node.phase === phase.id;
        });
        var start =
            phase.id === 'research'
                ? '<div class="ux-step__start">' + renderNode(project, project.start, true) + '</div>'
                : '';
        var cards = nodes
            .map(function (node) {
                return renderNode(project, node, false);
            })
            .join('');
        var empty = !start && !cards
            ? '<p class="ux-step__empty">No content in this step yet.</p>'
            : '';

        return (
            '<div class="ux-step" data-phase="' +
            escapeHtml(phase.id) +
            '">' +
            '<header class="ux-step__head">' +
            '<p class="ux-step__kicker">Step interface</p>' +
            '<h3 class="ux-step__title">' +
            escapeHtml(phase.label) +
            '</h3>' +
            '<p class="ux-step__lede">Content for this step. Assemble this interface with intention.</p>' +
            '</header>' +
            '<div class="ux-step__board">' +
            start +
            cards +
            empty +
            '</div>' +
            '</div>'
        );
    }

    function renderPreview(projectId) {
        var media = {
            amazon:
                '<div class="az-anim" data-amazon-anim aria-label="Amazon logo animation"></div>',
            stpaul:
                '<div class="ux-gif-wireframe ux-gif-wireframe--stpaul ux-gif-wireframe--has-media" aria-label="Talent and Equity Resources">' +
                '<div class="ia-tree" aria-hidden="true">' +
                '<div class="ia-tree__node ia-tree__node--root">Talent and Equity Resources</div>' +
                '<span class="ia-tree__line ia-tree__line--v ia-tree__line--trunk-1"></span>' +
                '<div class="ia-tree__tier ia-tree__tier--2">' +
                '<span class="ia-tree__line ia-tree__line--h ia-tree__line--bar-2"></span>' +
                '<div class="ia-tree__cols ia-tree__cols--2">' +
                '<div class="ia-tree__branch"><span class="ia-tree__line ia-tree__line--v ia-tree__line--drop-2"></span><div class="ia-tree__node ia-tree__node--l2"></div><span class="ia-tree__line ia-tree__line--v ia-tree__line--trunk-3"></span><div class="ia-tree__tier ia-tree__tier--3"><span class="ia-tree__line ia-tree__line--h ia-tree__line--bar-3"></span><div class="ia-tree__cols ia-tree__cols--3"><div class="ia-tree__branch"><span class="ia-tree__line ia-tree__line--v ia-tree__line--drop-3"></span><div class="ia-tree__node ia-tree__node--l3"></div></div><div class="ia-tree__branch"><span class="ia-tree__line ia-tree__line--v ia-tree__line--drop-3"></span><div class="ia-tree__node ia-tree__node--l3"></div></div></div></div></div>' +
                '<div class="ia-tree__branch"><span class="ia-tree__line ia-tree__line--v ia-tree__line--drop-2"></span><div class="ia-tree__node ia-tree__node--l2"></div><span class="ia-tree__line ia-tree__line--v ia-tree__line--trunk-3"></span><div class="ia-tree__tier ia-tree__tier--3"><span class="ia-tree__line ia-tree__line--h ia-tree__line--bar-3"></span><div class="ia-tree__cols ia-tree__cols--3"><div class="ia-tree__branch"><span class="ia-tree__line ia-tree__line--v ia-tree__line--drop-3"></span><div class="ia-tree__node ia-tree__node--l3"></div></div><div class="ia-tree__branch"><span class="ia-tree__line ia-tree__line--v ia-tree__line--drop-3"></span><div class="ia-tree__node ia-tree__node--l3"></div></div></div></div></div>' +
                '<div class="ia-tree__branch"><span class="ia-tree__line ia-tree__line--v ia-tree__line--drop-2"></span><div class="ia-tree__node ia-tree__node--l2"></div><span class="ia-tree__line ia-tree__line--v ia-tree__line--trunk-3"></span><div class="ia-tree__tier ia-tree__tier--3"><span class="ia-tree__line ia-tree__line--h ia-tree__line--bar-3"></span><div class="ia-tree__cols ia-tree__cols--3"><div class="ia-tree__branch"><span class="ia-tree__line ia-tree__line--v ia-tree__line--drop-3"></span><div class="ia-tree__node ia-tree__node--l3"></div></div><div class="ia-tree__branch"><span class="ia-tree__line ia-tree__line--v ia-tree__line--drop-3"></span><div class="ia-tree__node ia-tree__node--l3"></div></div></div></div></div>' +
                '<div class="ia-tree__branch"><span class="ia-tree__line ia-tree__line--v ia-tree__line--drop-2"></span><div class="ia-tree__node ia-tree__node--l2"></div><span class="ia-tree__line ia-tree__line--v ia-tree__line--trunk-3"></span><div class="ia-tree__tier ia-tree__tier--3"><span class="ia-tree__line ia-tree__line--h ia-tree__line--bar-3"></span><div class="ia-tree__cols ia-tree__cols--3"><div class="ia-tree__branch"><span class="ia-tree__line ia-tree__line--v ia-tree__line--drop-3"></span><div class="ia-tree__node ia-tree__node--l3"></div></div><div class="ia-tree__branch"><span class="ia-tree__line ia-tree__line--v ia-tree__line--drop-3"></span><div class="ia-tree__node ia-tree__node--l3"></div></div></div></div></div>' +
                '</div></div></div></div>',
            tutord:
                '<div class="blueprint-banner" style="background:#5b3d8c" aria-label="TutorD banner"></div>',
            doge:
                '<div class="blueprint-banner" style="background:#0b1c33" aria-label="3DogE banner"></div>'
        };

        return (
            '<div class="blueprint-gif blueprint-gif--' +
            projectId +
            ' ux-gif-card ux-gif-card--hover-gif">' +
            (media[projectId] || '') +
            '</div>'
        );
    }

    function highlightNode(id) {
        if (!contentEl) return;
        var project = PROJECTS[currentProjectId];
        var related = project && id ? relatedIds(project, id) : {};
        activeNodeId = id;
        contentEl.querySelectorAll('.ux-node').forEach(function (el) {
            var nid = el.getAttribute('data-id');
            el.classList.toggle('is-active', nid === id);
            el.classList.toggle('is-linked', !!(id && related[nid] && nid !== id));
        });
        if (!detailEl) return;
        if (!id || !project) {
            detailEl.hidden = true;
            detailEl.innerHTML = '';
            return;
        }
        var node = nodeById(project, id);
        if (!node) return;
        var ins = incoming(project, id)
            .map(function (link) {
                return escapeHtml(link.from.label) + ' <em>' + escapeHtml(link.via) + '</em>';
            })
            .join('<br>');
        var outs = outgoing(node)
            .map(function (link) {
                var target = nodeById(project, link.to);
                return '<em>' + escapeHtml(link.via) + '</em> → ' + escapeHtml(target ? target.label : link.to);
            })
            .join('<br>');
        detailEl.hidden = false;
        detailEl.innerHTML =
            '<h4>' +
            escapeHtml(node.label) +
            '</h4>' +
            '<p>' +
            escapeHtml(node.why) +
            '</p>' +
            (ins ? '<p class="blueprint-detail-decision">Fed by<br>' + ins + '</p>' : '') +
            (outs ? '<p class="blueprint-detail-decision">Feeds<br>' + outs + '</p>' : '<p class="blueprint-detail-decision">Leaf of the assembly</p>');
    }

    function bindAssembly() {
        if (!contentEl) return;
        contentEl.querySelectorAll('.ux-node').forEach(function (el) {
            el.addEventListener('click', function () {
                var id = el.getAttribute('data-id');
                highlightNode(activeNodeId === id ? null : id);
            });
        });
    }

    function renderContent() {
        var project = PROJECTS[currentProjectId];
        if (!project || !contentEl) return;
        contentEl.innerHTML = renderStep(project, currentPhase);
        bindAssembly();
        if (activeNodeId) highlightNode(activeNodeId);
        applyZoom();
    }

    function setPhase(phase) {
        currentPhase = phaseById(phase).id;
        tabButtons.forEach(function (btn) {
            btn.classList.toggle('is-active', (btn.dataset.tab || 'research') === currentPhase);
        });
        if (currentProjectId) renderContent();
    }

    function showHoverPreview(projectId) {
        if (currentProjectId) return;
        var project = PROJECTS[projectId];
        if (!project || !emptyEl) return;
        emptyEl.classList.add('has-preview');
        emptyEl.innerHTML = renderPreview(projectId);
        if (window.initAmazonHoverAnim) window.initAmazonHoverAnim(emptyEl);
        if (window.initIaTrees) window.initIaTrees(emptyEl);
        emptyEl.querySelectorAll('video').forEach(function (video) {
            var play = video.play();
            if (play && play.catch) play.catch(function () {});
        });
        cards.forEach(function (card) {
            card.classList.toggle('is-previewing', card.dataset.project === projectId);
        });
    }

    function resetEmptyState() {
        if (currentProjectId) return;
        cards.forEach(function (card) {
            card.classList.remove('is-previewing');
        });
        if (!emptyEl) return;
        emptyEl.classList.remove('has-preview');
        emptyEl.innerHTML =
            '<p><strong>User Experience Assembly</strong></p>' +
            '<p>Drag a project from the toolbar into this box — or click a name to load its diagram.<br>Each node is a method or principle. Connections show how research becomes product.</p>';
    }

    function selectProject(projectId) {
        var project = PROJECTS[projectId];
        if (!project) return;
        currentProjectId = projectId;
        currentPhase = 'research';
        activeNodeId = null;
        document.querySelectorAll('.docs-chip[data-project]').forEach(function (card) {
            card.classList.toggle('is-selected', card.dataset.project === projectId);
        });
        cards.forEach(function (card) {
            card.classList.remove('is-previewing');
        });
        if (orgEl) orgEl.textContent = project.org;
        if (titleEl) titleEl.textContent = project.title;
        if (subtitleEl) subtitleEl.textContent = project.subtitle;
        if (typeEl) {
            typeEl.textContent = project.type || '';
            typeEl.hidden = !project.type;
        }
        emptyEl.hidden = true;
        activeEl.hidden = false;
        panel.classList.add('has-project');
        setPhase('research');
    }

    function applyZoom() {
        if (contentEl) {
            contentEl.style.transform = 'scale(' + zoom + ')';
            contentEl.style.width = zoom === 1 ? '' : 100 / zoom + '%';
        }
        if (zoomLabel) zoomLabel.textContent = Math.round(zoom * 100) + '%';
    }

    function setZoom(next) {
        var closest = ZOOM_STEPS[0];
        var diff = Math.abs(ZOOM_STEPS[0] - next);
        for (var i = 1; i < ZOOM_STEPS.length; i++) {
            var d = Math.abs(ZOOM_STEPS[i] - next);
            if (d < diff) {
                closest = ZOOM_STEPS[i];
                diff = d;
            }
        }
        zoom = closest;
        applyZoom();
    }

    function stepZoom(dir) {
        var index = ZOOM_STEPS.indexOf(zoom);
        if (index < 0) index = ZOOM_STEPS.indexOf(1);
        index = Math.max(0, Math.min(ZOOM_STEPS.length - 1, index + dir));
        zoom = ZOOM_STEPS[index];
        applyZoom();
    }

    function closeMenus() {
        document.querySelectorAll('.docs-menu__drop').forEach(function (drop) {
            drop.hidden = true;
        });
        document.querySelectorAll('.docs-menu__btn').forEach(function (btn) {
            btn.setAttribute('aria-expanded', 'false');
        });
    }

    function openCaseStudy() {
        if (!currentProjectId || !PROJECTS[currentProjectId]) return;
        window.location.href = PROJECTS[currentProjectId].caseStudyUrl;
    }

    tabButtons.forEach(function (btn) {
        btn.addEventListener('click', function () {
            setPhase(btn.dataset.tab || 'research');
        });
    });

    cards.forEach(function (card) {
        var projectId = card.dataset.project;
        card.addEventListener('dragstart', function (e) {
            card.classList.add('is-dragging');
            e.dataTransfer.setData('text/project-id', projectId);
            e.dataTransfer.setData('text/plain', projectId);
            e.dataTransfer.effectAllowed = 'copy';
        });
        card.addEventListener('dragend', function () {
            card.classList.remove('is-dragging');
            panel.classList.remove('is-drag-over');
        });
        card.addEventListener('click', function (e) {
            e.preventDefault();
            selectProject(projectId);
            closeMenus();
        });
    });

    panel.addEventListener('dragover', function (e) {
        e.preventDefault();
        panel.classList.add('is-drag-over');
        e.dataTransfer.dropEffect = 'copy';
    });
    panel.addEventListener('dragleave', function (e) {
        if (!panel.contains(e.relatedTarget)) panel.classList.remove('is-drag-over');
    });
    panel.addEventListener('drop', function (e) {
        e.preventDefault();
        panel.classList.remove('is-drag-over');
        var projectId = e.dataTransfer.getData('text/project-id') || e.dataTransfer.getData('text/plain');
        if (projectId && PROJECTS[projectId]) selectProject(projectId);
    });

    if (zoomInBtn) zoomInBtn.addEventListener('click', function () { stepZoom(1); });
    if (zoomOutBtn) zoomOutBtn.addEventListener('click', function () { stepZoom(-1); });
    if (zoomLabel) zoomLabel.addEventListener('click', function () { setZoom(1); });

    document.querySelectorAll('.docs-menu__btn').forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            var drop = btn.parentElement.querySelector('.docs-menu__drop');
            var willOpen = drop && drop.hidden;
            closeMenus();
            if (drop && willOpen) {
                drop.hidden = false;
                btn.setAttribute('aria-expanded', 'true');
            }
        });
    });
    document.addEventListener('click', closeMenus);
    document.querySelectorAll('.docs-menu__drop').forEach(function (drop) {
        drop.addEventListener('click', function (e) {
            e.stopPropagation();
        });
    });
    document.querySelectorAll('[data-action]').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var action = btn.dataset.action;
            if (action === 'open-case') openCaseStudy();
            if (action === 'open-project' && btn.dataset.project) selectProject(btn.dataset.project);
            if (action === 'tab') setPhase(btn.dataset.tab || 'research');
            if (action === 'zoom-in') stepZoom(1);
            if (action === 'zoom-out') stepZoom(-1);
            if (action === 'zoom-fit') setZoom(1);
            closeMenus();
        });
    });

    applyZoom();
    resetEmptyState();
})();
