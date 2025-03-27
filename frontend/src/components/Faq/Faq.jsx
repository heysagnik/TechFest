import { useState } from "react";
import classes from "./Faq.module.css";

const questions = [
  {
    question: "What is Tech Fest 2025?",
    answer:
      "Tech Fest 2025 is one of the largest technical festivals organized by VIT Bhopal, showcasing innovation, technology, and creativity.",
  },
  {
    question: "What are the dates and timings of the event?",
    answer:
      "The event will take place on March 30-31, 2025, starting at 9 AM each day and concluding at 10 PM.",
  },
  {
    question: "How can I participate in the event?",
    answer:
      "Explore the various events on the Tech Fest website and register for the ones you are interested in.",
  },
  {
    question: "Is there any entry fee for Tech Fest 2025?",
    answer:
      "No, there is no entry fee to attend Tech Fest 2025. However, some events may require a registration fee to participate.",
  },
];

const Faq = () => {
  const [clicked, setClicked] = useState(null);

  const toggle = (i) => {
    if (clicked === i) {
      return setClicked(null);
    }

    setClicked(i);
  };

  return (
    <section className={classes.faqSection}>
      <div className={classes.heading}>FAQ</div>
      <div className={classes.faq}>
        {questions.map((ques, i) => {
          return (
            <div key={i} className={classes.single} onClick={() => toggle(i)}>
              <div className={classes.question}>{ques.question}</div>
              <div
                className={`${
                  clicked === i ? classes.answer : classes.noAnswer
                }`}
              >
                {ques.answer}
              </div>
              <span className={classes.btn}>+</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Faq;
