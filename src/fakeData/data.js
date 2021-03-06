const data = [
  {
    id: 1,
    name: "National Professor Brig. (Rtd) Abdul Malik",
    Qualifications:
      "MBBS (Dhaka), MRCP (UK), FCCP (USA), FCPS (BD), FRCP (Glasgow), FRCP (Edin), FACC (USA)",
    Job: "President",
    contact: 234534,
    image: "https://www.nhf.org.bd/images/doctor_images/2000.jpg",
    visit_Charge: 1500,
  },
  {
    id: 2,
    name: "Prof. Dr. M.A. Rouf",
    Qualifications: "M.B.B.S, D.M.B.T, D-Bact",
    Job: "Professor of Microbiology",
    contact: 232334,
    image: "https://www.nhf.org.bd/images/doctor_images/2005.jpg",
    visit_Charge: 1200,
  },
  {
    id: 3,
    name: "Prof. A.T.M. Khalilur Rahman",
    Qualifications: "MBBS, DA, DIP (Cardiac Anaesthesia).",
    Job: "Professor & Department Head of Cardiac Anesthesiology",
    contact: 23453434,
    image: "https://www.nhf.org.bd/images/doctor_images/2006.jpg",
    visit_Charge: 1100,
  },
  {
    id: 4,
    name: "Prof. Dr. Farooque Ahmed",
    Qualifications: "MBBS, MS (CTS)",
    Job: "Professor & Chief Cardiac Surgeon",
    contact: 23453664,
    image: "https://www.nhf.org.bd/images/doctor_images/2007.jpg",
    visit_Charge: 1300,
  },
  {
    id: 5,
    name: "Prof. Fazila-Tun-Nesa Malik",
    Qualifications:
      "M.B.B.S: Dhaka Medical College, September 1984,7th Position in third Professional M.B.B.S. & 6th Position in Final M.B.B.S.",
    Job: "Professor & Chief Consultant Cardiology",
    contact: 2342534,
    image: "https://www.nhf.org.bd/images/doctor_images/2008.jpg",
    visit_Charge: 1450,
  },
  {
    id: 6,
    name: "Prof. Abu Yousuf Fazle Elahi Chowdhury",
    Qualifications: "MBBS (Dhaka), MRCP (UK)",
    Job: "Professor & Senior Consultant Cardiac Anesthesiologist & Incharge Cardiac Intensive Care",
    contact: 2345534,
    image: "https://www.nhf.org.bd/images/doctor_images/2009.jpg",
    visit_Charge: 1300,
  },
  {
    id: 7,
    name: "Prof. Dr. Nazir Ahmed",
    Qualifications: "MBBS, MD (Cardiology), FACC",
    Job: "Professor of Cardiology",
    contact: 245534,
    image: "https://www.nhf.org.bd/images/doctor_images/2010.jpg",
    visit_Charge: 1100,
  },
  {
    id: 8,
    name: "Prof. Dr. Mohammad Badiuzzaman",
    Qualifications:
      "MBBS, FCPS (Medicine), MD (Cardiology), FACC, WHO Fellow-Interventional Cardiology (Singapore)",
    Job: "Professor of Cardiology",
    contact: 23415534,
    image: "https://www.nhf.org.bd/images/doctor_images/2011.jpg",
    visit_Charge: 1200,
  },
  {
    id: 9,
    name: "Prof. Dr. Mohammad Sharifuzzaman",
    Qualifications: "MBBS, MS (CTS)",
    Job: "Professor of Cardiac Surgery",
    contact: 23345534,
    image: "https://www.nhf.org.bd/images/doctor_images/2012.jpg",
    visit_Charge: 1400,
  },
  {
    id: 10,
    name: "Prof. Dr. Tuhin Haque",
    Qualifications:
      "MBBS, PhD (Japan) Post-Doctoral Fellow, Noninvasive Cardiac Imaging (Japan)",
    Job: "Professor of Echocardiography",
    contact: 245534,
    image: "https://www.nhf.org.bd/images/doctor_images/2013.jpg",
    visit_Charge: 1100,
  },
  {
    id: 11,
    name: "Prof. Dr. Sohel Reza Choudhury",
    Qualifications: "MBBS MMedSci(Clin Epid) PhD",
    Job: "Professor & Head Department of Epidemiology & Research",
    contact: 3345534,
    image: "https://www.nhf.org.bd/images/doctor_images/2014.jpg",
    visit_Charge: 1000,
  },
  {
    id: 12,
    name: "Prof. Dr. Moonmoon Rahman",
    Qualifications: "MBBS, MS (CTS),FCPS",
    Job: "Professor of Blood Transfusion",
    contact: 2345534,
    image: "https://www.nhf.org.bd/images/doctor_images/2015.jpg",
    visit_Charge: 1100,
  },
  {
    id: 13,
    name: "Prof. Dr. M. Quamrul Islam Talukder",
    Qualifications:
      "MBBS (DMU), FCPS (Surgery) MD (USA), FCVS (USA), Advance Fellowship in Cardiovascular Surgery (Mayoclinic, USA)",
    Job: "Professor & Senior Consultant Cardiac Surgeon",
    contact: 23451534,
    image: "https://www.nhf.org.bd/images/doctor_images/2016.jpg",
    visit_Charge: 1000,
  },
  {
    id: 14,
    name: "Prof. Dr. Abul Kalm Shamsuddin",
    Qualifications: "MBBS, MS (Cardiovascular and Thoracic Surgery)",
    Job: "Professor & Senior Consultant of Pediatric Cardiac Surgeon",
    contact: 23458534,
    image: "https://www.nhf.org.bd/images/doctor_images/2017.jpg",
    visit_Charge: 1200,
  },
  {
    id: 15,
    name: "Prof. Dr. Mir Nesaruddin Ahmed",
    Qualifications: "MBBS, DTCD (DU), MD (Cardiology),FCCP, FACC",
    Job: "Professor & Senior Consultant Cardiologist",
    contact: 2358534,
    image: "https://www.nhf.org.bd/images/doctor_images/2018.jpg",
    visit_Charge: 1000,
  },
  {
    id: 16,
    name: "Prof. Dr. Ashok Kumar Dutta",
    Qualifications:
      "MBBS, FCPS (Medicine), MD (Cardiology), Associate Fellow-American College of Cardiology",
    Job: "Professor & Senior Consultant Cardiologist",
    contact: 2585340,
    image: "https://www.nhf.org.bd/images/doctor_images/2019.jpg",
    visit_Charge: 1200,
  },
  {
    id: 17,
    name: "Prof. Dr. Mohammad Kabiruzzaman",
    Qualifications:
      "MBBS, MD (Cardiology), Associate Fellow-American College of Cardiology",
    Job: "Professor & Senior Consultant Cardiologist",
    contact: 2348534,
    image: "https://www.nhf.org.bd/images/doctor_images/2020.jpg",
    visit_Charge: 1000,
  },
  {
    id: 18,
    name: "Prof. Dr. Dhiman Banik",
    Qualifications:
      "MBBS, D-Card, MD (Card.), Associate Fellow-American College of Cardiology",
    Job: "Professor & Senior Consultant Cardiologist",
    contact: 23458574,
    image: "https://www.nhf.org.bd/images/doctor_images/2021.jpg",
    visit_Charge: 1100,
  },
  {
    id: 19,
    name: "Dr. Haroon Rasheed",
    Qualifications: "MBBS, MS (CV & TS)",
    Job: "Associate Professor & Senior Consultant of Cardiac Surgery",
    contact: 2348534,
    image: "https://www.nhf.org.bd/images/doctor_images/2022.jpg",
    visit_Charge: 1300,
  },
  {
    id: 20,
    name: "Dr. Iffat Ara Begum",
    Qualifications: "MBBS,FCPS (Radiology & Imaging)",
    Job: "Assistant Professor & Consultant Radiology & Imaging",
    contact: 2358534,
    image: "https://www.nhf.org.bd/images/doctor_images/2046.jpg",
    visit_Charge: 1400,
  }
];


