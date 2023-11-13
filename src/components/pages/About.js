import React from 'react';
import '../../styles/style.css';

export default function About() {
  return (
    <div className="profile-container">
      <div className="image-container">
        <img src="/sherri.jpg" alt="Sherri's Profile" />
      </div>
      <div className="text-container">
        <h4>About Me</h4>
        <p>
          After a decade devoted to teaching, my passion for fostering inclusivity led me to embark on a journey towards a doctorate in education policy. Inspired by my advocacy for transgender and non-binary students, I collaborated with my previous school district to craft and implement guidelines for their support within K-12 public education.
          My tenure at UT Austin has afforded me rich opportunities in qualitative research, culminating in leading a comprehensive study on Diversity, Equity, and Inclusion (DEI) hiring practices in higher education. My research focus delves into policy protections for transgender and non-binary individuals within P-20 education systems.
          Guided by a commitment to amplifying the lived experiences of LGBTQIA+ individuals, my career aspirations revolve around influencing policy in both research and development.
        </p>
      </div>
    </div>
  );
}