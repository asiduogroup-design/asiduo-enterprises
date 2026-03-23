import React from "react";
import { HiOutlineCalendarDays, HiOutlineClock, HiOutlineMapPin } from "react-icons/hi2";

const News = () => {
  return (
    <main className="page news-page">
      <section className="page-hero news-hero">
        <p className="eyebrow">News</p>
        <h1>Latest News & Events</h1>
        <p>
          Stay updated with our latest calibration projects, events, and
          industry insights.
        </p>
      </section>

      <section className="section news-intro">
        <div className="news-intro-icon" aria-hidden="true">
          News
        </div>
        <h2>Stay Updated with Asiduo</h2>
        <p>
          Follow the latest achievements, collaborations, and training
          programs.
        </p>
      </section>

      <section className="section news-feature">
        <div className="news-image">Event photo</div>
        <div className="news-card">
          <span className="news-tag">Celebration</span>
          <h3>Women&apos;s Day Celebration</h3>
          <p>
            Our team celebrated Women&apos;s Day with gratitude and recognition
            for the amazing professionals who power our labs and field service
            operations.
          </p>
          <div className="news-meta">
            <span>
              <HiOutlineCalendarDays /> Mar 8, 2026
            </span>
            <span>
              <HiOutlineClock /> 3:30 PM
            </span>
            <span>
              <HiOutlineMapPin /> Asiduo Enterprises
            </span>
          </div>
        </div>
      </section>

      <section className="section news-cta">
        <div>
          <h2>Want to stay updated?</h2>
          <p>
            Subscribe to our newsletter to receive updates directly in your
            inbox.
          </p>
        </div>
        <button className="btn btn-primary">Subscribe Now</button>
      </section>
    </main>
  );
};

export default News;
