export interface NoticeItem {
  id: string;
  title: string;
  date: string;
  category: "Admissions" | "Examinations" | "Scholarships" | "Academic" | "General";
  applicable?: string;
  verifiedTag?: string;
  description?: string;
  pdfUrl?: string;
  isUrgent?: boolean;
}

export interface StreamItem {
  id: string;
  name: string;
  description: string;
  seats: number;
  compulsorySubjects: string[];
  electiveSubjects: string[];
  eligibilityMarks: string;
}

export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
}

export interface HeadmasterRecord {
  period: string;
  name: string;
  designation: string;
}

export interface FacultyMember {
  id: string;
  name: string;
  designation: string;
  department:
    | "Leadership"
    | "Science & Mathematics"
    | "Humanities & Social Sciences"
    | "Languages & Literature"
    | "ICT & Computer Science"
    | "Physical Education"
    | "Non-Teaching & Support";
  qualification: string;
  experience: string;
  isLeadership?: boolean;
}

export interface CommitteeMember {
  id: string;
  name: string;
  designation: string;
  roleType:
    | "Executive"
    | "Teachers' Representative"
    | "Guardian Representative"
    | "Non-Teaching Representative"
    | "Government / External Nominee";
  tenure: string;
}

export interface FacilityItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "Campus" | "Academics" | "Sports" | "Cultural";
  caption: string;
  image: string;
}

export const schoolData = {
  institution: {
    fullName: "Dum Dum Krishna Kumar Hindu Academy (H.S.)",
    shortName: "DDKKHA",
    bengaliName: "দমদম কৃষ্ণকুমার হিন্দু একাডেমি (উঃ মাঃ)",
    establishedYear: "1933",
    tagline: "Govt. Sponsored Higher Secondary School (Boys)",
    wbbseIndex: "B1-039",
    wbchseCode: "103084",
    udiseCode: "19114400907",
    address: "P-28/1, Motijheel Avenue, P.O. Motijheel, P.S. Dum Dum, Kolkata – 700074, West Bengal",
    phone: "033-25602704",
    email: "ddkkha33@gmail.com",
    headmaster: "Sri Prabir Kumar Mondal",
    studentStrength: "1,600+",
    staffStrength: "50+",
  },

  stats: [
    { number: "1933", label: "Foundation Year" },
    { number: "V–XII", label: "Classes Offered" },
    { number: "3 Streams", label: "Science, Commerce & Arts" },
    { number: "10,000+", label: "Distinguished Alumni" },
  ],

  quickAccess: [
    {
      title: "Admissions",
      description: "Class V & Class XI criteria, forms and guidelines",
      href: "/admission",
      icon: "UserPlus",
    },
    {
      title: "Latest Notices",
      description: "Official departmental circulars and orders",
      href: "/#notices",
      icon: "FileText",
    },
    {
      title: "Exam Routines",
      description: "Summative schedules and Madhyamik dates",
      href: "/admission#dates",
      icon: "Calendar",
    },
    {
      title: "Academic Results",
      description: "Madhyamik & HS performance at a glance",
      href: "/about#results",
      icon: "Award",
    },
    {
      title: "Teacher Login",
      description: "Authorized faculty portal, marks entry & registers",
      href: "#teacher-login",
      icon: "Lock",
    },
    {
      title: "Contact & Map",
      description: "Campus location, office hours and phone numbers",
      href: "/contact-us",
      icon: "MapPin",
    },
  ],

  notices: [
    {
      id: "n-1",
      title: "Admission Notice for Class V & Selection Lottery Guidelines",
      date: "December 2023 / 2024 Session",
      category: "Admissions",
      applicable: "Class V (Boys)",
      verifiedTag: "Verified Record",
      description:
        "Official schedule, eligibility norms, and document submission protocols for Class V entry under the transparent Government Lottery system.",
      pdfUrl: "/images/school/Admission-notice-for-v-2024_page-0001-725x1024.jpg",
      isUrgent: true,
    },
    {
      id: "n-2",
      title: "Class XI Admission Norms, Subject Combinations & Merit Schedule",
      date: "May 2024",
      category: "Admissions",
      applicable: "Class XI (Science / Arts / Commerce)",
      verifiedTag: "Verified Norms",
      description:
        "Cut-off percentages for internal KKHA students and external school candidates, along with WBCHSE approved subject requirements.",
      pdfUrl: "/images/school/ddkkha-admission.png",
      isUrgent: true,
    },
    {
      id: "n-3",
      title: "Submission of Forms for Shikhashree & Pre/Post Matric Scholarships",
      date: "Official Circular",
      category: "Scholarships",
      applicable: "Classes V–XII",
      verifiedTag: "Govt. Scheme",
      description:
        "Government educational assistance for eligible students; guidelines on bank passbook linkage, Aadhaar validation, and category submission.",
      pdfUrl: "/images/school/SHIKHASREE-FORM.jpg",
      isUrgent: false,
    },
    {
      id: "n-4",
      title: "3rd Summative Evaluation Routine & Guidelines (Class V & VI)",
      date: "Academic Routine",
      category: "Examinations",
      applicable: "Class V & VI",
      verifiedTag: "Archived Routine",
      description:
        "Comprehensive summative evaluation timetable covering Bengali First Language, English Second Language, Mathematics, and Environmental Science.",
      pdfUrl: "/images/school/3rd-summetive-v-vi.png",
      isUrgent: false,
    },
    {
      id: "n-5",
      title: "3rd Summative Evaluation Routine & Guidelines (Class VIII & IX)",
      date: "Academic Routine",
      category: "Examinations",
      applicable: "Class VIII & IX",
      verifiedTag: "Archived Routine",
      description:
        "Official timetable covering Physical Science, Life Science, History, Geography, Mathematics and Languages for Senior Secondary batches.",
      pdfUrl: "/images/school/3rd-summetive-viii-ix.png",
      isUrgent: false,
    },
    {
      id: "n-6",
      title: "Instruction for CC & Special Candidates of Higher Secondary Examination",
      date: "Council Notification",
      category: "Academic",
      applicable: "Class XII (HS Candidates)",
      verifiedTag: "Official Notice",
      description:
        "Verification protocols for WBCHSE candidates, enrolment validation, admit distribution, and examination center code norms.",
      pdfUrl: "/images/school/to-cc-and-special-787x1024.jpg",
      isUrgent: false,
    },
  ] as NoticeItem[],

  admissionStreams: [
    {
      id: "science",
      name: "Science Stream (Pure & Bio-Science)",
      description:
        "Comprehensive science curriculum geared towards JEE, NEET, and foundational scientific inquiry with advanced laboratory facilities.",
      seats: 120,
      compulsorySubjects: ["Bengali / Hindi (First Language)", "English (Second Language)"],
      electiveSubjects: [
        "Physics",
        "Chemistry",
        "Mathematics",
        "Biological Sciences",
        "Computer Science",
      ],
      eligibilityMarks: "Minimum 75% in Science & Mathematics aggregate in Madhyamik Examination",
    },
    {
      id: "commerce",
      name: "Commerce Stream",
      description:
        "Rigorous financial, business, and accounting education preparing students for CA, CS, economics, and corporate leadership.",
      seats: 100,
      compulsorySubjects: ["Bengali / Hindi (First Language)", "English (Second Language)"],
      electiveSubjects: [
        "Accountancy",
        "Business Studies",
        "Economics",
        "Costing & Taxation",
        "Commercial Law and Preliminaries of Auditing",
      ],
      eligibilityMarks: "Minimum 60% aggregate in Madhyamik Examination",
    },
    {
      id: "humanities",
      name: "Humanities / Arts Stream",
      description:
        "Dynamic social science education emphasizing critical thinking, constitutional literacy, regional history, and modern languages.",
      seats: 140,
      compulsorySubjects: ["Bengali / Hindi (First Language)", "English (Second Language)"],
      electiveSubjects: [
        "History",
        "Geography",
        "Political Science",
        "Philosophy",
        "Education",
        "Sanskrit",
      ],
      eligibilityMarks: "Minimum 50% aggregate in Madhyamik Examination",
    },
  ] as StreamItem[],

  historyTimeline: [
    {
      year: "1933",
      title: "Foundation of the Academy",
      description:
        "On January 3, 1933, Dum Dum Krishna Kumar Hindu Academy was established by devoted educationalists and freedom-era patrons to impart holistic education to the youth of Dum Dum.",
    },
    {
      year: "1940s",
      title: "WBBSE Formal Recognition",
      description:
        "Gained formal recognition under the West Bengal Board of Secondary Education and shifted to the spacious Motijheel campus with permanent classroom blocks.",
    },
    {
      year: "1970s",
      title: "Upgradation to Higher Secondary",
      description:
        "Under the leadership of Headmaster Rabindra Nath Chakraborty, the school was upgraded into a Higher Secondary institution introducing Science, Commerce, and Humanities streams.",
    },
    {
      year: "2000s",
      title: "Technological & Infrastructure Modernization",
      description:
        "Introduced dedicated modern physics, chemistry, biology, and computer science laboratories alongside digital classroom facilities.",
    },
    {
      year: "Present",
      title: "Over 9 Decades of Academic Excellence",
      description:
        "Today, DDKKHA proudly educates over 1,600 boys, consistently producing stellar district and state ranks in Madhyamik and Uchha Madhyamik examinations.",
    },
  ] as TimelineMilestone[],

  founders: [
    { name: "Karuna Kishore Kargupta", role: "Founding Patron & Educationist" },
    { name: "Dr. Surendra Mohan Gangopadhyay", role: "D.Sc., P.R.S. – Scholar & Patron" },
    { name: "Dr. Binod Bihari Dutta", role: "M.A., Ph.D., P.R.S., B.L. – Educational Leader" },
    { name: "Bijoy Kumar Sen", role: "B.A. – Founding Committee Member" },
    { name: "Dr. Niranjan Chattopadhyay", role: "M.B. – Social Worker & Co-Founder" },
  ],

  headmastersLineage: [
    { period: "1933 – 1935", name: "Late Manmatha Sengupta", designation: "First Headmaster" },
    { period: "1936 – 1942", name: "Late Manoranjan Dasgupta", designation: "Headmaster" },
    { period: "1946 – 1977", name: "Late Rabindra Nath Chakraborty", designation: "Long-standing Headmaster" },
    { period: "1977 – 1992", name: "Sri Mahendralal Bandyopadhyay", designation: "Headmaster" },
    { period: "1993 – 2006", name: "Sri Diptiman Dutta", designation: "Headmaster" },
    { period: "2006 – 2007", name: "Sri Dibyendu Sekhar Jana", designation: "Teacher-in-Charge" },
    { period: "2007 – 2014", name: "Sri Nityananda Pal", designation: "Headmaster" },
    { period: "2014 – 2016", name: "Sri Amal Krishna Bagchi", designation: "Teacher-in-Charge" },
    { period: "2016 – 2018", name: "Sri Prabir Kumar Banerjee", designation: "Teacher-in-Charge" },
    { period: "2018 – Present", name: "Sri Prabir Kumar Mondal", designation: "Headmaster & Secretary" },
  ] as HeadmasterRecord[],

  facultyMembers: [
    {
      id: "f-1",
      name: "Sri Prabir Kumar Mondal",
      designation: "Headmaster & Academic Administrator",
      department: "Leadership",
      qualification: "M.Sc., B.Ed.",
      experience: "25+ Years in Secondary & Higher Secondary Education",
      isLeadership: true,
    },
    {
      id: "f-2",
      name: "Sri Pijush Kanti Biswas",
      designation: "Assistant Teacher & Teachers' Representative",
      department: "Science & Mathematics",
      qualification: "M.Sc. in Mathematics, B.Ed.",
      experience: "18 Years",
    },
    {
      id: "f-3",
      name: "Sri Sudip Nandi",
      designation: "Assistant Teacher & Teachers' Representative",
      department: "Science & Mathematics",
      qualification: "M.Sc. in Physics, B.Ed.",
      experience: "16 Years",
    },
    {
      id: "f-4",
      name: "Sri Shyamal Jana",
      designation: "Assistant Teacher & Teachers' Representative",
      department: "Humanities & Social Sciences",
      qualification: "M.A. in History, B.Ed.",
      experience: "15 Years",
    },
    {
      id: "f-5",
      name: "Sri Amit Hassan Mondal",
      designation: "ICT & Vocational Teacher",
      department: "ICT & Computer Science",
      qualification: "M.A., D.I.C.T.",
      experience: "12 Years",
    },
    {
      id: "f-6",
      name: "Sri Sudipta Kumar Choudhury",
      designation: "Para Teacher (Science)",
      department: "Science & Mathematics",
      qualification: "B.Sc. (Hons)",
      experience: "14 Years",
    },
    {
      id: "f-7",
      name: "Smt. Anindita Majumder",
      designation: "Para Teacher (Languages)",
      department: "Languages & Literature",
      qualification: "M.A., B.Ed.",
      experience: "12 Years",
    },
    {
      id: "f-8",
      name: "Sri Subhankar Chakraborty",
      designation: "Assistant Teacher",
      department: "Languages & Literature",
      qualification: "M.A. in Bengali, B.Ed.",
      experience: "10 Years",
    },
    {
      id: "f-9",
      name: "Smt. Jhumur Chanda",
      designation: "Assistant Teacher",
      department: "Humanities & Social Sciences",
      qualification: "M.A. in Geography, B.Ed.",
      experience: "9 Years",
    },
    {
      id: "f-10",
      name: "Sri Pradip Sinha",
      designation: "Non-Teaching Representative & Head Clerk",
      department: "Non-Teaching & Support",
      qualification: "B.Com",
      experience: "20 Years",
    },
    {
      id: "f-11",
      name: "Sri Kalachand Murmu",
      designation: "Laboratory Attendant",
      department: "Non-Teaching & Support",
      qualification: "H.S. Passed",
      experience: "15 Years",
    },
    {
      id: "f-12",
      name: "Sri Dilip Goswami",
      designation: "Support Staff",
      department: "Non-Teaching & Support",
      qualification: "Secondary Passed",
      experience: "18 Years",
    },
    {
      id: "f-13",
      name: "Sri Tushar Kanti Mondal",
      designation: "Office Assistant",
      department: "Non-Teaching & Support",
      qualification: "Graduate",
      experience: "11 Years",
    },
  ] as FacultyMember[],

  managingCommittee: [
    {
      id: "mc-1",
      name: "Sri Prabir Kumar Mondal",
      designation: "Secretary & Headmaster (Ex-Officio)",
      roleType: "Executive",
      tenure: "Current",
    },
    {
      id: "mc-2",
      name: "Sri Pijush Kanti Biswas",
      designation: "Teachers' Representative Member",
      roleType: "Teachers' Representative",
      tenure: "Elected Term",
    },
    {
      id: "mc-3",
      name: "Sri Sudip Nandi",
      designation: "Teachers' Representative Member",
      roleType: "Teachers' Representative",
      tenure: "Elected Term",
    },
    {
      id: "mc-4",
      name: "Sri Shyamal Jana",
      designation: "Teachers' Representative Member",
      roleType: "Teachers' Representative",
      tenure: "Elected Term",
    },
    {
      id: "mc-5",
      name: "Sri Pradip Sinha",
      designation: "Non-Teaching Staff Representative",
      roleType: "Non-Teaching Representative",
      tenure: "Elected Term",
    },
    {
      id: "mc-6",
      name: "Smt. Aparajita Sengupta",
      designation: "Guardian Representative Member",
      roleType: "Guardian Representative",
      tenure: "Elected Term",
    },
    {
      id: "mc-7",
      name: "Smt. Pinki Maitra",
      designation: "Guardian Representative Member",
      roleType: "Guardian Representative",
      tenure: "Elected Term",
    },
    {
      id: "mc-8",
      name: "Sub-Inspector of Schools (Dum Dum Circle)",
      designation: "Government Nominated Member",
      roleType: "Government / External Nominee",
      tenure: "Ex-Officio",
    },
    {
      id: "mc-9",
      name: "Medical Officer (Dum Dum Municipality)",
      designation: "Health & Hygiene Advisory Member",
      roleType: "Government / External Nominee",
      tenure: "Ex-Officio",
    },
  ] as CommitteeMember[],

  facilities: [
    {
      id: "fac-1",
      title: "Academic Classrooms",
      description:
        "Well-ventilated classrooms with proper seating capacity, blackboard systems, and disciplined learning environments.",
      image: "/images/school/IMG_8483-1024x575.jpg",
    },
    {
      id: "fac-2",
      title: "Science Laboratories",
      description:
        "Equipped Physics, Chemistry, and Biology laboratories for WBCHSE practical examinations and scientific demonstrations.",
      image: "/images/school/IMG_7728-1024x575.jpg",
    },
    {
      id: "fac-3",
      title: "Institutional Library",
      description:
        "Comprehensive collection of reference textbooks, competitive exam guides (JEE, NEET), Bengali and English literature.",
      image: "/images/school/IMG_8496-1024x575.jpg",
    },
    {
      id: "fac-4",
      title: "Physical Education & Sports",
      description:
        "Extensive athletics grounds for football, cricket, drills, and annual inter-school sports championships.",
      image: "/images/school/sports.jpg",
    },
  ] as FacilityItem[],

  gallery: [
    {
      id: "g-1",
      title: "Main Academic Building",
      category: "Campus",
      caption: "The historic Motijheel facade of Dum Dum Krishna Kumar Hindu Academy.",
      image: "/images/school/ddkkha.jpg",
    },
    {
      id: "g-2",
      title: "Science Laboratories",
      category: "Academics",
      caption: "Equipped Physics and Chemistry practical facilities.",
      image: "/images/school/IMG_7728-1024x575.jpg",
    },
    {
      id: "g-3",
      title: "Annual Sports Meet",
      category: "Sports",
      caption: "Student athletics and track events held at Motijheel grounds.",
      image: "/images/school/sports.jpg",
    },
    {
      id: "g-4",
      title: "Academic Classrooms",
      category: "Academics",
      caption: "Spacious, well-ventilated secondary classrooms.",
      image: "/images/school/IMG_8483-1024x575.jpg",
    },
    {
      id: "g-5",
      title: "Central Reference Library",
      category: "Campus",
      caption: "Over 8,000 academic titles and quiet study alcoves.",
      image: "/images/school/IMG_8496-1024x575.jpg",
    },
    {
      id: "g-6",
      title: "Administrative Block",
      category: "Campus",
      caption: "Central office and Headmaster's secretarial wing.",
      image: "/images/school/adminstration.jpg",
    },
  ] as GalleryItem[],
};
