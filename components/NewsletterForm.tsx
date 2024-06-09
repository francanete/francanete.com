import React, { useState } from "react";
import subscribeToNewsletter from "../utils/subscribeToNewsletter";
import styles from "./NewsletterForm.module.scss";
import { Heading } from "./Heading";
import { Button } from "./Button/Button";

export const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState({ type: "", content: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage({ type: "", content: "" });
    const result = await subscribeToNewsletter(email);
    if (result.status === "success") {
      setMessage({ type: "success", content: "Thank you for subscribing!" });
      setEmail("");
    } else {
      setMessage({
        type: "error",
        content: `Failed to subscribe: ${result.message}`,
      });
    }
  };

  return (
    <div className={styles["NewsletterForm"]}>
      <Heading level={3} className={styles["NewsletterForm__header"]}>
        Subscribe to my private email list
      </Heading>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          className={styles["NewsletterForm__input"]}
          required
        />
        <button type="submit" className={styles["NewsletterForm__button"]}>
          Subscribe
        </button>
        <Button title="Subscribe" />
      </form>
      {message.content && (
        <div
          className={`${styles["NewsletterForm__message"]} ${
            styles[`NewsletterForm__message--${message.type}`]
          }`}
        >
          {message.content}
        </div>
      )}
    </div>
  );
};
